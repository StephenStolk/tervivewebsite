import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection = () => {
  const images = [
    {
      url: 'https://source.unsplash.com/featured/?plants',
      alt: 'Plants',
    },
    {
      url: 'https://source.unsplash.com/featured/?greenery',
      alt: 'Greenery',
    },
    {
      url: 'https://source.unsplash.com/featured/?health',
      alt: 'Health',
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-green-500 to-green-400 text-white py-20 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          showArrows={false} 
          className="h-full"
        >
          {images.map((image, index) => (
            <div key={index} className="h-full w-full">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="object-cover h-full w-full opacity-70"
                onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/1200x800?text=Image+Not+Found"; }} 
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Tervive
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto"
        >
          "Empowering Sustainable Living for a Healthier Tomorrow"
        </motion.p>
      </div>

      <svg className="absolute bottom-0 left-0 right-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4CAF50" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,197.3C480,213,600,267,720,266.7C840,267,960,213,1080,202.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </section>
  );
}

export default HeroSection;
