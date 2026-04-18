"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

import img1 from "@/public/images/gallery/1.jpeg";
import img2 from "@/public/images/gallery/2.jpeg";
import img3 from "@/public/images/gallery/3.jpeg";
import img4 from "@/public/images/gallery/4.jpeg";
import img5 from "@/public/images/gallery/5.jpeg";
import img6 from "@/public/images/gallery/6.jpeg";
import img7 from "@/public/images/gallery/7.jpeg";
import img8 from "@/public/images/gallery/8.jpeg";
import img9 from "@/public/images/gallery/9.jpeg";
import img10 from "@/public/images/gallery/10.jpeg";
import img11 from "@/public/images/gallery/11.jpeg";
import img12 from "@/public/images/gallery/12.jpeg";
import img13 from "@/public/images/gallery/13.jpeg";
import img14 from "@/public/images/gallery/14.jpeg";
import img15 from "@/public/images/gallery/15.jpeg";
import img16 from "@/public/images/gallery/16.jpeg";
import img17 from "@/public/images/gallery/17.jpeg";
import img18 from "@/public/images/gallery/18.jpeg";
import img19 from "@/public/images/gallery/19.jpeg";
import img20 from "@/public/images/gallery/20.jpeg";
import img21 from "@/public/images/gallery/21.jpeg";
import img22 from "@/public/images/gallery/22.jpeg";
import img23 from "@/public/images/gallery/23.jpeg";
import img24 from "@/public/images/gallery/24.jpeg";
import img25 from "@/public/images/gallery/25.jpeg";
import img26 from "@/public/images/gallery/26.jpeg";
import img27 from "@/public/images/gallery/27.jpeg";
import img28 from "@/public/images/gallery/28.jpeg";
import img29 from "@/public/images/gallery/29.jpeg";
import img39 from "@/public/images/gallery/39.jpg";
import img40 from "@/public/images/gallery/40.jpg";
import img41 from "@/public/images/gallery/41.jpg";
import img42 from "@/public/images/gallery/42.jpg";
import img43 from "@/public/images/gallery/43.jpg";
import img44 from "@/public/images/gallery/44.jpg";
import img45 from "@/public/images/gallery/45.jpg";
import img46 from "@/public/images/gallery/46.jpg";
import img47 from "@/public/images/gallery/47.jpg";
import bg from "@/public/images/gallery/gallery-bg.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29,
  img39, img40, img41, img42, img43, img44, img45, img46, img47
];

const row1 = images.slice(0, 13);
const row2 = images.slice(13, 26);
const row3 = images.slice(26);

const VideoGallery = dynamic(
  () => import("@/components/ui/VideoGallery"),
  {
    ssr: false,
  }
);

const MarqueeRow = ({ items, direction = "left", speed = 40, openLightbox }) => {
  return (
    <div className="flex w-full overflow-hidden py-4">
      <motion.div
        className="flex space-x-4 px-2 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...items, ...items].map((img, index) => (
          <motion.div
            key={index}
            className="relative w-[200px] sm:w-[280px] md:w-[320px] h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group shrink-0"
            whileHover={{ scale: 1.03, zIndex: 10 }}
            onClick={() => {
              // find actual index in main images array to open lightbox
              const actualIndex = images.findIndex((i) => i === img);
              if (actualIndex !== -1) openLightbox(actualIndex);
            }}
          >
            <Image
              src={img}
              alt={`Gallery image`}
              fill
              sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, 320px"
              placeholder="blur"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium bg-white/20 px-6 py-3 rounded-full backdrop-blur-md shadow-xl border border-white/30">
                View Full Size
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="bg-[#fcfaf8] min-h-screen pb-20">
      {/* ================= Hero Section ================= */}
      <section className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={bg}
            alt="Gallery Background"
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#fcfaf8]" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium mb-6 uppercase tracking-widest"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4"
          >
            A Visual Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Immerse yourself in the beauty, luxury, and tranquility of The Atharva's Retreat
          </motion.p>
        </div>
      </section>

      {/* ================= Photo Gallery ================= */}
      <section className="py-20 overflow-hidden">
        <div className="text-center mb-12 px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">Captivating Moments</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Experience the essence of our resort through these curated memories</p>
        </div>

        <div className="flex flex-col space-y-2">
          <MarqueeRow items={row1} direction="left" speed={45} openLightbox={openLightbox} />
          <MarqueeRow items={row2} direction="right" speed={55} openLightbox={openLightbox} />
          <MarqueeRow items={row3} direction="left" speed={50} openLightbox={openLightbox} />
        </div>
      </section>

      {/* ================= Video Gallery ================= */}
      <VideoGallery />

      {/* ================= Lightbox ================= */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
            >
              <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
                <Image
                  src={images[lightboxIndex]}
                  alt="Full size gallery view"
                  fill
                  sizes="100vw"
                  className="object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white/80 font-medium">
                {lightboxIndex + 1} / {images.length}
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
