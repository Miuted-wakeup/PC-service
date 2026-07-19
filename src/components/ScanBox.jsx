import React from 'react';
import './ScanBox.css';

/**
 * ScanBox - Componente de recurso que implementa una tarjeta con efecto de "Línea Láser Escáner"
 * que recorre verticalmente la imagen o el recuadro de arriba a abajo.
 * 
 * Uso: Puedes renderizar este componente pasándole el título, subtítulo, y acción.
 */
const ScanBox = ({ 
  title = "// PRECISION ENGINEERING //", 
  subtitle = "MINIMALIST AESTHETICS //", 
  buttonText = "START OVERHAUL",
  onButtonClick = () => console.log("ScanBox Action triggered!"),
  backgroundImage = "https://images.pexels.com/videos/30133196/pexels-photo-30133196.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
  videoSrc = "https://videos.pexels.com/video-files/12921717_640_360_30fps.mp4" 
}) => {
  return (
    <div className="scan-box-wrapper">
      {/* Contenedor de tarjeta frosted */}
      <div className="scan-box-card">
        {/* Línea láser escáner que baja continuamente */}
        <div className="laser-scanline"></div>

        {/* Video o imagen de fondo (con opacidad y escala de grises) */}
        {videoSrc ? (
          <video 
            autoplay 
            loop 
            muted 
            playsinline 
            preload="metadata" 
            src={videoSrc} 
            poster={backgroundImage}
            className="scan-box-bg-media"
          />
        ) : (
          <img 
            src={backgroundImage} 
            alt="Scan Box Background" 
            className="scan-box-bg-media"
          />
        )}

        {/* Capa de degradado en la parte inferior */}
        <div className="scan-box-gradient"></div>

        {/* Contenido en el centro */}
        <div className="scan-box-content">
          <p className="scan-box-tagline">
            {title}
            {subtitle && <><br />{subtitle}</>}
          </p>
          <button 
            className="scan-box-btn" 
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanBox;
