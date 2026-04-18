"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Add enough videos so swiper can loop symmetrically
const originalVideos = [
  { src: "/videos/video1.mp4" },
  { src: "/videos/video2.mp4" },
  { src: "/videos/video3.mp4" },
];
const videos = [...originalVideos, ...originalVideos];

const VideoGallery = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePlay = () => {
    if (swiperInstance && swiperInstance.autoplay) swiperInstance.autoplay.stop();
  };

  const handlePause = () => {
    if (swiperInstance && swiperInstance.autoplay) swiperInstance.autoplay.start();
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">Living Experiences</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Watch the magic unfold in motion</p>
      </div>

      {/* Add a wrapper with masking for fade effect on left/right */}
      <div 
        className="max-w-[1400px] mx-auto relative"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 1%, black 99%, transparent)", maskImage: "linear-gradient(to right, transparent, black 1%, black 99%, transparent)" }}
      >
        <Swiper
          onSwiper={setSwiperInstance}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          loopedSlides={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.video-prev',
            nextEl: '.video-next',
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="w-full pb-16 pt-8 px-4"
        >
          {videos.map((video, index) => (
            <SwiperSlide 
              key={index} 
              className="max-w-[300px] sm:max-w-[380px] lg:max-w-[450px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[3/4] relative bg-black rounded-3xl overflow-hidden border-4 border-white">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onEnded={handlePause}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Arrows below the gallery */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button className="video-prev w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all z-10">
          <ArrowLeft size={24} />
        </button>
        <button className="video-next w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all z-10">
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default VideoGallery;