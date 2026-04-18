"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "../../public/images/logo.png";
import BookingModal from "../ui/BookingModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingModal, setBookingModal] = useState({ isOpen: false, title: "", type: "" });
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Spa", href: "/spa" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];
  const isActive = (href) => router.pathname === href;
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 py-2 md:py-1 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#e0bb72] backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-width section-padding">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-primary-600 "
            >
              <Image src={logo} className="w-14 h-14 md:w-20 md:h-20" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`font-medium transition-colors duration-200 relative text-sm lg:text-base ${
                    isActive(item.href)
                      ? `${
                          scrolled ? "text-[#0a1e03]" : "text-logoSecondry-50"
                        }`
                      : scrolled
                      ? "text-gray-100 hover:text-logoSecondry-50"
                      : "text-white hover:text-primary-200"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        scrolled ? "bg-[#0a1e03]" : "bg-logoSecondry-50"
                      }`}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setBookingModal({ isOpen: true, title: "Your Stay", type: "room" })}
                className={`${
                  scrolled ? "bg-[#0a1e03]" : "btn-primary"
                }  text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded-lg`}
              >
                Book Now
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-100" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-lg shadow-xl mt-4 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setBookingModal({ isOpen: true, title: "Your Stay", type: "room" });
                    }}
                    className={`${
                      scrolled ? "btn-primary" : "bg-green-900 text-white"
                    } w-full text-center block py-3 rounded-lg font-medium`}
                  >
                    Book Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, title: "", type: "" })}
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </motion.header>
  );
};

export default Header;
