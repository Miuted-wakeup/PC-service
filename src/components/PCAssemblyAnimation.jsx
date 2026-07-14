import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import './PCAssemblyAnimation.css';
import useIsMobile from '../hooks/useIsMobile';

const PCAssemblyAnimation = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // --- CONFIGURACIÓN DE LA ANIMACIÓN ---
  const TOTAL_FRAMES = 213; // Total de imágenes extraídas del video (después del nuevo filtrado/recorte del usuario)
  // Activado para leer desde public/frames/
  const useRealImages = true; 

  // Pre-carga de imágenes optimizada (Elimina lag)
  const imagesRef = useRef([]);
  
  useEffect(() => {
    if (!useRealImages || isMobile) return;

    // Inicializar el arreglo de imágenes si está vacío
    if (imagesRef.current.length === 0) {
      imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
    }

    // 1. Carga prioritaria: Los primeros 30 fotogramas se cargan inmediatamente
    for (let i = 0; i < 30; i++) {
      if (imagesRef.current[i]) continue;
      const img = new Image();
      const frameNumber = (i + 1).toString().padStart(4, '0');
      img.src = `/frames/${frameNumber}.webp`;
      img.onload = () => { imagesRef.current[i] = img; };
    }

    // 2. Carga en segundo plano: El resto se pide 1 segundo después para no asfixiar la red y RAM al inicio
    const timeoutId = setTimeout(() => {
      for (let i = 30; i < TOTAL_FRAMES; i++) {
        if (imagesRef.current[i]) continue;
        const img = new Image();
        const frameNumber = (i + 1).toString().padStart(4, '0');
        img.src = `/frames/${frameNumber}.webp`;
        img.onload = () => { imagesRef.current[i] = img; };
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [useRealImages, TOTAL_FRAMES, isMobile]);

  // --- TRACKING DEL SCROLL ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Suavizamos drásticamente el valor del scroll para que la rueda del ratón no salte frames
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // --- RENDERIZADO EN EL CANVAS ---
  const renderFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    if (useRealImages) {
      // Lógica Anti-Lag: Buscar la imagen solicitada. Si no existe, buscar hacia atrás la última cargada.
      let imgToDraw = imagesRef.current[frameIndex];
      
      if (!imgToDraw || !imgToDraw.complete) {
        for (let i = frameIndex - 1; i >= 0; i--) {
          if (imagesRef.current[i] && imagesRef.current[i].complete) {
            imgToDraw = imagesRef.current[i];
            break;
          }
        }
      }

      // Dibujar la imagen encontrada (real o fallback)
      if (imgToDraw && imgToDraw.complete) {
        // Hacemos que ocupe el 85% de la altura disponible para que se vea grande pero sin cortarse
        const scale = (height * 0.85) / imgToDraw.height;
        const targetWidth = imgToDraw.width * scale;
        const targetHeight = imgToDraw.height * scale;
        
        // Centrar verticalmente
        const posY = (height - targetHeight) / 2;
        
        // Posicionar en la mitad derecha de la pantalla (aprox 70% del ancho total)
        const isMobileScreen = width < 768;
        const posX = isMobileScreen ? (width - targetWidth) / 2 : (width * 0.7) - (targetWidth / 2);

        ctx.drawImage(imgToDraw, 0, 0, imgToDraw.width, imgToDraw.height, posX, posY, targetWidth, targetHeight);
      }
    } else {
      // DIBUJO DE PLACEHOLDER (Para pruebas)
      // Dibujamos un rectángulo que simula una pieza bajando/armándose
      ctx.fillStyle = '#0a0e17';
      ctx.fillRect(0, 0, width, height);

      // Progreso (0 a 1)
      const progress = frameIndex / (TOTAL_FRAMES - 1);

      // Caja base (Gabinete)
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 4;
      ctx.strokeRect(width/2 - 150, height/2 - 200, 300, 400);
      
      // Simulación de piezas entrando (Mobo, GPU) según el progreso del frame
      ctx.fillStyle = 'rgba(139, 92, 246, 0.4)'; // Morado (Mobo)
      if (progress > 0.2) {
        const moboY = Math.max(height/2 - 150, (height/2 - 150) - (100 * (1 - progress * 2)));
        ctx.fillRect(width/2 - 120, moboY, 240, 250);
      }

      ctx.fillStyle = 'rgba(251, 191, 36, 0.4)'; // Amarillo (GPU)
      if (progress > 0.5) {
        const gpuX = Math.max(width/2 - 120, (width/2 - 120) + (100 * (1 - progress * 1.5)));
        ctx.fillRect(gpuX, height/2 + 20, 260, 60);
      }

      // Texto central
      ctx.fillStyle = '#fff';
      ctx.font = '24px Inter, sans-serif';
      ctx.textAlign = 'center';
      if (!useRealImages) {
        ctx.fillText(`Simulación de Render - Fotograma: ${frameIndex + 1}/${TOTAL_FRAMES}`, width / 2, height - 50);
        ctx.font = '16px Inter, sans-serif';
        ctx.fillStyle = 'var(--text-secondary)';
        ctx.fillText('Cambia useRealImages a true cuando tengas tus fotos', width / 2, height - 25);
      }
    }
  };

  // Se dispara cada vez que el scroll de framer-motion cambia (usamos la versión suavizada)
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // Retrasamos el inicio de los fotogramas para dar tiempo a que el canvas aparezca (0 a 0.15)
    let progressForFrames = 0;
    if (latest > 0.15) {
      progressForFrames = (latest - 0.15) / 0.85; // Mapear el resto (0.15 - 1.0) al 100% de los frames
    }

    // Calculamos qué frame corresponde (0 a 212)
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progressForFrames * TOTAL_FRAMES)
    );
    // Llamar a requestAnimationFrame para máximo rendimiento (smooth)
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Render inicial
  useEffect(() => {
    // Asegurar que el canvas tenga resolución alta
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(0);
    }

    // Actualizar tamaño en resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Volver a dibujar el frame actual
        const currentProgress = smoothProgress.get();
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(currentProgress * TOTAL_FRAMES));
        renderFrame(frameIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [useRealImages]); // Se eliminó 'images' de las dependencias ya que usamos ref

  // --- ANIMACIONES DEL CANVAS (Aparición) ---
  const canvasOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const canvasY = useTransform(smoothProgress, [0, 0.15], [80, 0]);

  // --- ANIMACIONES DE FIGURAS GEOMÉTRICAS ---
  const triangleTlY = useTransform(smoothProgress, [0, 1], [-50, 300]);
  const triangleTlRotate = useTransform(smoothProgress, [0, 1], [0, 180]);
  const triangleTlOpacity = useTransform(smoothProgress, [0, 0.1], [0, 0.8]);

  const triangleBrY = useTransform(smoothProgress, [0, 1], [150, -200]);
  const triangleBrRotate = useTransform(smoothProgress, [0, 1], [45, -120]);
  const triangleBrOpacity = useTransform(smoothProgress, [0, 0.15], [0, 0.6]);

  // --- ANIMACIONES DE TEXTO (Sincronizadas con la nueva línea de tiempo) ---
  // Usamos smoothProgress para que el texto aparezca/desaparezca fluidamente con el scroll
  // Se ajustaron los rangos para que empiecen después del 0.15
  const textOpacity1 = useTransform(smoothProgress, [0.15, 0.35, 0.40], [1, 1, 0]);
  const textY1 = useTransform(smoothProgress, [0.15, 0.35, 0.40], [0, 0, -30]);

  const textOpacity2 = useTransform(smoothProgress, [0.40, 0.45, 0.65, 0.70], [0, 1, 1, 0]);
  const textY2 = useTransform(smoothProgress, [0.40, 0.45, 0.65, 0.70], [30, 0, 0, -30]);

  const textOpacity3 = useTransform(smoothProgress, [0.70, 0.75, 1], [0, 1, 1]);
  const textY3 = useTransform(smoothProgress, [0.70, 0.75, 1], [30, 0, 0]);

  if (isMobile) {
    return (
      <section className="mobile-assembly-section container" id="ensamble">
        <div className="mobile-assembly-header text-center">
          <span className="section-tagline">El Proceso</span>
          <h2 className="section-title">Armado con <span className="text-gradient">Precisión</span></h2>
        </div>
        
        <motion.div 
          className="mobile-assembly-image-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img src="/frames/0213.webp" alt="PC Ensamblado" className="mobile-assembly-image" />
        </motion.div>

        <div className="mobile-assembly-steps">
          <motion.div className="mobile-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3>1. Base y Preparación</h3>
            <p>Seleccionamos el chasis perfecto y preparamos la gestión de cables base para un flujo de aire óptimo.</p>
          </motion.div>
          
          <motion.div className="mobile-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3>2. Corazón del Sistema</h3>
            <p>Instalamos la placa base, procesador y aseguramos los componentes críticos con pasta térmica de grado entusiasta.</p>
          </motion.div>
          
          <motion.div className="mobile-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3>3. Potencia y Detalles</h3>
            <p>Añadimos la GPU, memoria RAM y sellamos el ensamble listo para las pruebas de estrés.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="canvas-scroll-section" ref={sectionRef} id="ensamble">
      <div className="canvas-sticky-container">
        
        {/* Triángulos Flotantes (Geometría con relieve) */}
        <motion.div 
          className="floating-shape shape-tl"
          style={{ y: triangleTlY, rotate: triangleTlRotate, opacity: triangleTlOpacity }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="yellowRelief1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <path d="M50 10 L90 90 L10 90 Z" fill="url(#yellowRelief1)" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
            <path d="M50 10 L90 90 L50 75 Z" fill="rgba(0,0,0,0.15)" /> {/* Sombra interna falsa para más 3D */}
          </svg>
        </motion.div>

        <motion.div 
          className="floating-shape shape-br"
          style={{ y: triangleBrY, rotate: triangleBrRotate, opacity: triangleBrOpacity }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="yellowRelief2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="60%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
            </defs>
            <path d="M50 10 L90 90 L10 90 Z" fill="url(#yellowRelief2)" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 90 L90 90 L50 70 Z" fill="rgba(255,255,255,0.2)" /> {/* Reflejo interno falso para más 3D */}
          </svg>
        </motion.div>

        {/* Texto Luminoso Gigante de Fondo (Estética Lisuantech) */}
        <div className="background-glow-text" aria-hidden="true">
          PCTECH
        </div>

        {/* El Canvas que dibuja los fotogramas (animado para aparecer suavemente) */}
        <motion.canvas 
          ref={canvasRef} 
          className="pc-canvas"
          style={{ opacity: canvasOpacity, y: canvasY }}
        ></motion.canvas>

        {/* Textos sobrepuestos */}
        <div className="container canvas-text-overlay">
          <div className="canvas-text-content">
            <span className="section-tagline">El Proceso</span>
            <h2 className="section-title">Armado con <span className="text-gradient">Precisión</span></h2>
            
            <div className="canvas-steps">
              <motion.div className="canvas-step-card" style={{ opacity: textOpacity1, y: textY1 }}>
                <div className="step-card-image">
                  <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=600&auto=format&fit=crop" alt="Base y Preparación" />
                </div>
                <div className="step-card-content">
                  <h3>1. Base y Preparación</h3>
                  <p>Seleccionamos el chasis perfecto y preparamos la gestión de cables base para un flujo de aire óptimo.</p>
                </div>
              </motion.div>
              
              <motion.div className="canvas-step-card" style={{ opacity: textOpacity2, y: textY2 }}>
                <div className="step-card-image">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" alt="Corazón del Sistema" />
                </div>
                <div className="step-card-content">
                  <h3>2. Corazón del Sistema</h3>
                  <p>Instalamos la placa base, procesador y aseguramos los componentes críticos con pasta térmica de grado entusiasta.</p>
                </div>
              </motion.div>
              
              <motion.div className="canvas-step-card" style={{ opacity: textOpacity3, y: textY3 }}>
                <div className="step-card-image">
                  <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=600&auto=format&fit=crop" alt="Potencia y Detalles" />
                </div>
                <div className="step-card-content">
                  <h3>3. Potencia y Detalles</h3>
                  <p>Añadimos la GPU, memoria RAM y sellamos el ensamble listo para las pruebas de estrés.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PCAssemblyAnimation;
