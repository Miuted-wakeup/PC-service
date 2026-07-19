import React, { useRef, useEffect, useState } from 'react';
import './PCAssemblyAnimation.css';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

const TOTAL_FRAMES = 213;

const PCAssemblyAnimation = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [useRealImages, setUseRealImages] = useState(true);

  // --- PRE-CARGA DE IMÁGENES CON LAZY LOADING Y FALLBACK ---
  useEffect(() => {
    if (isMobile) return;

    imagesRef.current = new Array(TOTAL_FRAMES);

    const criticalPreloadCount = 30;
    for (let i = 1; i <= criticalPreloadCount; i++) {
      preloadFrame(i);
    }

    const lazyTimeout = setTimeout(() => {
      for (let i = criticalPreloadCount + 1; i <= TOTAL_FRAMES; i++) {
        preloadFrame(i);
      }
    }, 1000);

    function preloadFrame(index) {
      const img = new Image();
      const frameNumber = index.toString().padStart(4, '0');
      img.src = `/frames/${frameNumber}.webp`;
      
      img.onload = () => {
        imagesRef.current[index - 1] = img;
      };
      img.onerror = () => {
        if (index === 1) {
          setUseRealImages(false);
        }
      };
    }

    return () => clearTimeout(lazyTimeout);
  }, [isMobile]);

  // --- TRACKING DEL SCROLL ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

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

    ctx.clearRect(0, 0, width, height);

    if (useRealImages) {
      let imgToDraw = imagesRef.current[frameIndex];
      
      if (!imgToDraw || !imgToDraw.complete) {
        for (let i = frameIndex - 1; i >= 0; i--) {
          if (imagesRef.current[i] && imagesRef.current[i].complete) {
            imgToDraw = imagesRef.current[i];
            break;
          }
        }
      }

      if (imgToDraw && imgToDraw.complete) {
        const scale = (height * 0.85) / imgToDraw.height;
        const targetWidth = imgToDraw.width * scale;
        const targetHeight = imgToDraw.height * scale;
        
        const posY = (height - targetHeight) / 2;
        const isMobileScreen = width < 768;
        const posX = isMobileScreen ? (width - targetWidth) / 2 : (width * 0.7) - (targetWidth / 2);

        ctx.drawImage(imgToDraw, 0, 0, imgToDraw.width, imgToDraw.height, posX, posY, targetWidth, targetHeight);
      }
    } else {
      ctx.fillStyle = '#0a0e17';
      ctx.fillRect(0, 0, width, height);

      const progress = frameIndex / (TOTAL_FRAMES - 1);

      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 4;
      ctx.strokeRect(width/2 - 150, height/2 - 200, 300, 400);
      
      ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
      if (progress > 0.2) {
        const moboY = Math.max(height/2 - 150, (height/2 - 150) - (100 * (1 - progress * 2)));
        ctx.fillRect(width/2 - 120, moboY, 240, 250);
      }

      ctx.fillStyle = 'rgba(251, 191, 36, 0.4)';
      if (progress > 0.5) {
        const gpuX = Math.max(width/2 - 120, (width/2 - 120) + (100 * (1 - progress * 1.5)));
        ctx.fillRect(gpuX, height/2 + 20, 260, 60);
      }
    }
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    let progressForFrames = 0;
    if (latest > 0.15) {
      progressForFrames = (latest - 0.15) / 0.85;
    }

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progressForFrames * TOTAL_FRAMES)
    );
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(0);
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const currentProgress = smoothProgress.get();
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(currentProgress * TOTAL_FRAMES));
        renderFrame(frameIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [useRealImages]);

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

  // --- ANIMACIONES DE LAS TARJETAS (Reel Horizontal con Opacidad Dinámica) ---
  // A medida que avanza el scroll, las tarjetas se desplazan horizontalmente de derecha a izquierda
  const trackX = useTransform(smoothProgress, [0.15, 0.45, 0.75], ["0px", "-470px", "-940px"]);

  const opacityCard1 = useTransform(smoothProgress, [0.15, 0.45, 0.50], [1, 1, 0.3]);
  const opacityCard2 = useTransform(smoothProgress, [0.15, 0.40, 0.45, 0.75, 0.80], [0.3, 0.3, 1, 1, 0.3]);
  const opacityCard3 = useTransform(smoothProgress, [0.45, 0.70, 0.75, 1.0], [0.3, 0.3, 1, 1]);

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
        
        {/* Triángulos Flotantes */}
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
            <path d="M50 10 L90 90 L50 75 Z" fill="rgba(0,0,0,0.15)" />
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
            <path d="M10 90 L90 90 L50 70 Z" fill="rgba(255,255,255,0.2)" />
          </svg>
        </motion.div>

        {/* Texto Luminoso Gigante de Fondo */}
        <div className="background-glow-text" aria-hidden="true">
          PCTECH
        </div>

        {/* Canvas de Ensamble */}
        <motion.canvas 
          ref={canvasRef} 
          className="pc-canvas"
          style={{ opacity: canvasOpacity, y: canvasY }}
        ></motion.canvas>

        {/* Bloque de Textos Deslizante Horizontal con Desvanecimiento a los lados */}
        <div className="container canvas-text-overlay">
          <div className="canvas-text-wrapper">
            <span className="section-tagline">El Proceso</span>
            <h2 className="section-title">Armado con <span className="text-gradient">Precisión</span></h2>
            
            <div className="canvas-steps-mask">
              <motion.div className="canvas-steps-track" style={{ x: trackX }}>
                
                {/* Tarjeta 1 */}
                <motion.div className="canvas-step-card" style={{ opacity: opacityCard1 }}>
                  <div className="step-card-image">
                    <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=600&auto=format&fit=crop" alt="Base y Preparación" />
                  </div>
                  <div className="step-card-content">
                    <h3>1. Base y Preparación</h3>
                    <p>Seleccionamos el chasis perfecto y preparamos la gestión de cables base para un flujo de aire óptimo.</p>
                  </div>
                </motion.div>
                
                {/* Tarjeta 2 */}
                <motion.div className="canvas-step-card" style={{ opacity: opacityCard2 }}>
                  <div className="step-card-image">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" alt="Corazón del Sistema" />
                  </div>
                  <div className="step-card-content">
                    <h3>2. Corazón del Sistema</h3>
                    <p>Instalamos la placa base, procesador y aseguramos los componentes críticos con pasta térmica de grado entusiasta.</p>
                  </div>
                </motion.div>
                
                {/* Tarjeta 3 */}
                <motion.div className="canvas-step-card" style={{ opacity: opacityCard3 }}>
                  <div className="step-card-image">
                    <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=600&auto=format&fit=crop" alt="Potencia y Detalles" />
                  </div>
                  <div className="step-card-content">
                    <h3>3. Potencia y Detalles</h3>
                    <p>Añadimos la GPU, memoria RAM y sellamos el ensamble listo para las pruebas de estrés.</p>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PCAssemblyAnimation;
