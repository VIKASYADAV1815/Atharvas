"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Award, Users, Leaf, Heart, Mountain, Star } from "lucide-react";
import img1 from "../public/images/home/5.jpg";
import Image from "next/image";
import aboutImage from "@/public/images/home/newslider3.jpeg";
import bg from "@/public/images/about/stats-bg.jpg";



const About = () => {
  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "The Atharva’s was established with a vision to create the ultimate luxury mountain retreat.",
    },
    {
      year: "2012",
      title: "Spa Excellence",
      description:
        "Opened our world-class spa facility, introducing authentic Ayurvedic and wellness treatments.",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description:
        "Launched our comprehensive eco-friendly program, becoming carbon neutral and protecting local wildlife.",
    },
    {
      year: "2018",
      title: "Award Recognition",
      description:
        'Received the "Best Luxury Mountain Resort" award for outstanding service and guest experience.',
    },
    {
      year: "2021",
      title: "Wellness Expansion",
      description:
        "Added meditation gardens, crystal healing rooms, and expanded holistic wellness offerings.",
    },
    {
      year: "2024",
      title: "Excellence Continues",
      description:
        "Continuing our commitment to providing unparalleled luxury experiences and guest satisfaction.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Personalized Service",
      description:
        "Every guest receives individualized attention and care, creating memorable experiences tailored to their unique preferences and needs.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to environmental stewardship, implementing eco-friendly practices that preserve the natural beauty of our mountain sanctuary.",
    },
    {
      icon: Mountain,
      title: "Natural Harmony",
      description:
        "Our design and services reflect the serene mountain environment, creating spaces that complement and celebrate the surrounding landscape.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our resort, from accommodations and dining to spa treatments and guest services.",
    },
  ];

  const team = [
    {
      name: "Atharva",
      role: "Founder",
      image: img1,
      bio: "The founder of The Atharva’s, a real estate visionary with a successful track record of hundreds of properties and extensive land banks, leveraged his global travels and personal experience as a luxury resort guest to create Atharva. He meticulously incorporated every detail of customer comfort and demand.Nestled beside Raja National Park, a protected sanctuary for tigers, elephants, and diverse birdlife, Atharva offers a unique blend of natural serenity and village charm, with its design deeply rooted in the surrounding landscape and local culture.",
    },
  ];

  const stats = [
    { number: "10+", label: "Luxury Suites & Rooms" },
    { number: "15+", label: "Spa Treatments" },
    { number: "100%", label: "Guest Satisfaction" },
    { number: "4+", label: "Years of Excellence" },
  ];

  return (
    <>
      <Head>
        <title>About Us - The Atharva’s</title>
        <meta
          name="description"
          content="Discover the story behind The Atharva’s and learn about our commitment to luxury, sustainability, and creating unforgettable mountain retreat experiences for our guests."
        />
        <meta
          name="keywords"
          content="luxury resort story, mountain retreat, sustainability, wellness philosophy, hospitality excellence"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?w=1920&h=1080&fit=crop"
            alt="The Atharva’s Mountain Vista"
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
        </div>

        <div className="relative z-10 text-center text-white container-width section-padding">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            A journey of passion, excellence, and commitment to creating
            extraordinary experiences in nature's most beautiful setting.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                At The Atharva’s, we are dedicated to providing
                transformative luxury experiences that nurture the mind, body,
                and spirit. Nestled in the pristine mountain wilderness, our
                resort serves as a sanctuary where guests can escape the
                pressures of modern life and reconnect with themselves and
                nature.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We believe that true luxury lies not just in premium amenities,
                but in the thoughtful details, personalized service, and genuine
                care that make each guest feel valued and cherished. Our
                commitment extends beyond hospitality to environmental
                stewardship, ensuring that future generations can also
                experience the natural beauty that inspired our resort’s
                creation.
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <Award className="text-primary-600 mx-auto mb-2" size={32} />
                  <p className="text-sm text-gray-600">Award Winning</p>
                </div>
                <div className="text-center">
                  <Users className="text-primary-600 mx-auto mb-2" size={32} />
                  <p className="text-sm text-gray-600">Expert Team</p>
                </div>
                <div className="text-center">
                  <Leaf className="text-green-600 mx-auto mb-2" size={32} />
                  <p className="text-sm text-gray-600">Eco-Friendly</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutImage.src}
                alt="Resort Meditation Garden"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute md:-bottom-6 -bottom-9 left-20 md:-right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    4+
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 md:py-20 bg-sage-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className=" text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who ensure every aspect of your
              stay is exceptional
            </p>
          </motion.div>

          <div className="">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white md:flex items-center rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative md:w-[100rem]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 w-[6/12] text-start">
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-20 bg-sage-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and shape every guest
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  <value.icon size={48} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Beauty Section */}
      <section className="py-8 md:py-24 bg-gradient-to-br from-[#fff9f3] via-[#fdf7ef] to-[#fff] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the Beauty of The Atharva’s
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At{" "}
              <span className="text-[#bfa052] font-semibold">
                The Atharva’s
              </span>
              , every corner is designed to immerse you in a world of
              tranquility and elegance. From crystal-blue{" "}
              <span className="font-medium">swimming pools</span> to majestic
              <span className="font-medium"> horse-riding trails</span> and
              nature-blended
              <span className="font-medium"> luxury rooms</span>, Atharva brings
              the art of refined living to life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Whether you seek peace by the poolside, adventure through serene
              trails, or moments of indulgence in your private suite — every
              experience here celebrates the harmony between{" "}
              <span className="text-[#bfa052] font-medium">
                nature and luxury
              </span>
              .
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#bfa052] hover:bg-[#a88e45] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
            >
              Explore the Resort
            </motion.button>
          </motion.div>

          {/* Right Side - Image Composition */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* For large screens - layered layout */}
            <div className="hidden sm:block relative">
              {/* Main Large Image */}
              <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] h-[420px] rounded-3xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/images/about/pool.jpg"
                  alt="Resort Swimming Pool"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small decorative images */}
              <div className="absolute -top-10 -left-14 w-[160px] sm:w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-xl z-20">
                <img
                  src="/images/about/horse2.jpg"
                  alt="Garden View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-12 -right-14 w-[180px] sm:w-[220px] h-[220px] rounded-2xl overflow-hidden shadow-xl z-20">
                <img
                  src="/images/about/horse.jpg"
                  alt="Horse Riding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-14 -left-10 w-[160px] sm:w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-xl z-20">
                <img
                  src="/images/about/room.jpg"
                  alt="Luxury Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-14 w-[160px] sm:w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-xl z-20">
                <img
                  src="/images/about/pool2.jpg"
                  alt="Spa and Wellness"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* For mobile - stacked clean layout */}
            <div className="flex flex-col items-center gap-4 sm:hidden">
              <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/images/about/pool.jpg"
                  alt="Resort Swimming Pool"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/about/horse2.jpg"
                    alt="Garden View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/about/horse.jpg"
                    alt="Horse Riding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/about/room.jpg"
                    alt="Luxury Room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/about/pool2.jpg"
                    alt="Spa and Wellness"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-[#bfa052]/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-[#bfa052]/10 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Timeline */}
      {/* <section className="py-8 md:py-20 bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that have shaped The Atharva’s into the luxury destination it is today
            </p>
          </motion.div>

          <div className="relative">
      
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                    <div className="bg-primary-100 text-primary-700 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block" />
                    <div className="bg-cream-50 p-6 rounded-xl">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 bg-primary-600 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

     {/* Stats Section */}
<section
  className="relative py-32 h-[540px] text-white bg-cover bg-top"
  style={{
    backgroundImage: `url(${bg.src})`,
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/80"></div>

  {/* Content */}
  <div className="relative z-10 container-width section-padding">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="font-playfair text-4xl font-bold mb-4">
        By the Numbers
      </h2>
      <p className="text-xl opacity-90 max-w-2xl mx-auto">
        Our achievements reflect our commitment to excellence and guest
        satisfaction
      </p>
    </motion.div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold mb-2">
            {stat.number}
          </div>
          <div className="text-primary-200 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default About;
