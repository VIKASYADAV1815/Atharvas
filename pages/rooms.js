'use client';

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, Wifi, Car, Coffee, Bath, Bed, Mountain, Heart } from 'lucide-react';
import ImageCarousel from '../components/ui/ImageCarousel';
import BookingModal from '../components/ui/BookingModal';

const Rooms = () => {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, title: '', type: 'room' });

  const rooms = [
    {
      id: 1,
      title: 'Conifer Grande',
      category: 'luxury',
      description: 'Immerse yourself in nature with our beautifully designed Glass Cottage, a perfect blend of luxury and serenity. Surrounded by lush greenery, fresh mountain air, and the soothing presence of natural water, this retreat offers a truly refreshing escape from everyday life. Experience the pure essence of living close to nature—where every moment feels rejuvenating and alive.',
      features: ['Stay for 2 adults & 2 children', 'King size bed', 'Private balcony', 'Surrounded by greenery', 'Fresh air & natural water ambiance', 'Peaceful, nature-rich environment'],
      amenities: [
        { icon: Users, text: '2 Adults & 2 Children' },
        { icon: Bed, text: 'King size bed' },
        { icon: Mountain, text: 'Nature & Greenery view' },
        { icon: Bath, text: 'Premium bathroom' },
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Coffee, text: 'Coffee maker' }
      ],
      images: [
        '/images/gallery/31.jpeg',
        '/images/gallery/5.jpeg',
        '/images/gallery/2.jpeg',
        '/images/gallery/11.jpeg',
        '/images/gallery/16.jpeg',
        '/images/gallery/22.jpeg',
        '/images/gallery/25.jpeg',
        '/images/gallery/26.jpeg',
        '/images/gallery/28.jpeg'
      ],
      price: '2999',
      priceNote: 'per night'
    },
    {
      id: 2,
      title: 'Royal Premium',
      category: 'premium',
      description: 'Indulge in elevated comfort with our Royal Premium suites, featuring spacious layouts, luxurious amenities, and panoramic views. These suites combine modern elegance with personalized service, creating an unforgettable experience for discerning travelers seeking sophistication and style.',
      features: ['Panoramic Views', 'Separate Living Area', 'Premium Bathroom', 'Private Terrace', 'Butler Service', 'Champagne Welcome'],
      amenities: [
        { icon: Users, text: 'Up to 3 guests' },
        { icon: Bed, text: 'King bed + sofa' },  
        { icon: Bath, text: 'Premium bathroom' },
        { icon: Mountain, text: 'Panoramic view' },
        { icon: Wifi, text: 'Free WiFi' }, 
        { icon: Heart, text: 'Butler service' }
      ],
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop'
      ],
      price: '4999',
      priceNote: 'per night'
    },
    {
      id: 3,
      title: 'Platinum Signature Suite',
      category: 'platinum',
      description: 'Experience the pinnacle of luxury in our Platinum Signature Suites, featuring expansive living spaces, world-class amenities, and unparalleled views. These exclusive suites offer the ultimate in comfort and privacy, with personalized concierge service and bespoke touches throughout your stay.',
      features: ['360° Mountain Views', 'Master Bedroom + Living Room', 'Spa Bathroom', 'Private Deck', 'Personal Concierge', '24/7 Room Service'],
      amenities: [
        { icon: Users, text: 'Up to 4 guests' },
        { icon: Bed, text: 'Master bedroom' },
        { icon: Bath, text: 'Spa bathroom' },
        { icon: Mountain, text: '360° views' },
        { icon: Car, text: 'Valet parking' },
        { icon: Heart, text: 'Concierge service' }
      ],
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=800&h=600&fit=crop'
      ],
      price: '5999',
      priceNote: 'per night'
    },
    {
      id: 4,
      title: 'Tracheophyte Oasis',
      category: 'platinum',
      description: 'Experience the perfect harmony of modern comfort and wild, untamed beauty. Our 2-BHK Forest Villa is designed for families or small groups who crave the luxury of space without sacrificing the intimacy of nature. Located at the edge of the resort where the deep woods begin, this villa is your private gateway to the wilderness.',
      features: ['Fully-Equipped Kitchenette', 'Sustainable Luxury', 'Nature’s Soundtrack', 'Private Kitchen'],
      amenities: [
        { icon: Users, text: 'Family / Small Group' },
        { icon: Bed, text: 'Two Master Bedrooms' },
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Mountain, text: 'Private balcony' },
        { icon: Bath, text: 'Premium bathroom' },
        { icon: Coffee, text: 'Kitchenette' }
      ],
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=800&h=600&fit=crop'
      ],
      price: '4999',
      priceNote: 'per night'
    },
    {
      id: 5,
      title: 'Casa Magnoliophyta',
      category: 'premium',
      description: 'A beautiful sanctuary blending nature with modern amenities. Perfect for couples or solo travelers looking to unwind in a serene environment.',
      features: ['Cozy Ambiance', 'Natural Light', 'Private Deck', 'Garden Views'],
      amenities: [
        { icon: Users, text: 'Up to 2 guests' },
        { icon: Bed, text: 'King bed' },
        { icon: Bath, text: 'Premium bathroom' },
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Coffee, text: 'Coffee maker' },
        { icon: Mountain, text: 'Nature view' }
      ],
      images: [
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop'
      ],
      price: '2999',
      priceNote: 'per night'
    },
    {
      id: 6,
      title: 'Bryophyta Trails',
      category: 'premium',
      description: 'Discover a world where the only soundtrack is the rustle of leaves and the gentle ripple of water. Tucked away from the relentless pulse of the city, our Private Pool Villa offers a masterclass in secluded luxury.',
      features: ['Total Seclusion', 'The Private Oasis', 'Nature-Centric Design', 'Views of protected forest land'],
      amenities: [
        { icon: Users, text: '2 Adults & 1 Child' },
        { icon: Bed, text: 'King size bed' },  
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Coffee, text: 'Coffee maker' },
        { icon: Bath, text: 'Premium bathroom' },
        { icon: Mountain, text: 'Forest views' }
      ],
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop'
      ],
      price: '3999',
      priceNote: 'per night'
    }
  ];

  return (
    <>
      <Head>
        <title>Luxury Rooms & Suites - The Atharva’s</title>
        <meta name="description" content="Discover our collection of luxury rooms and suites at The Atharva’s, from Elite Retreats to Platinum Signature Suites, and experience unparalleled comfort and mountain views." />
        <meta name="keywords" content="luxury rooms, suites, mountain view, premium accommodation, Elite Retreat, Royal Premium, Platinum Signature" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-sage-500 to-cream-100">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Luxury Accommodations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our thoughtfully designed rooms and suites, each offering 
              a unique blend of comfort, elegance, and breathtaking mountain views.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="space-y-20">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Room Images */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageCarousel images={room.images} alt={room.title} />
                </div>

                {/* Room Details */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      room.category === 'luxury' ? 'bg-green-100 text-green-700 border border-green-400' :
                      room.category === 'premium' ? 'bg-primary-100 text-primary-700 border border-primary-400' :
                      'bg-cream-200 text-cream-800 border border-cream-400'
                    }`}>
                      {room.category.charAt(0).toUpperCase() + room.category.slice(1)} Category
                    </span>
                  </div>

                  <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
                    {room.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <amenity.icon className="text-primary-600" size={20} />
                        <span className="text-gray-700">{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cream-100 text-cream-800 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Booking */}
                  <div className="flex items-center justify-end">
                    {/*
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-1">
                        <span className='text-green-700'>₹</span>{room.price}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {room.priceNote}
                      </div>
                    </div>
                    */}
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBookingModal({ 
                        isOpen: true, 
                        title: room.title, 
                        type: 'room' 
                      })}
                      className="btn-primary"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-sage-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Included with Every Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services and amenities to make your stay exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Daily Housekeeping', description: 'Twice daily service with turndown' },
              { title: 'Concierge Service', description: '24/7 assistance for all your needs' },
              { title: 'Complimentary WiFi', description: 'High-speed internet throughout' },
              { title: 'Wellness Access', description: 'Fitness center and pool access' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, title: '', type: 'room' })}
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </>
  );
};

export default Rooms;
