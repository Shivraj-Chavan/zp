import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  return (
    <>
    <section className="py-8 bg-gray-100 ">
  <div className="container mx-auto px-4">
    <h3 className="text-2xl font-bold text-center text-gray-800 mb-6"></h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {[
        { url: "https://www.india.gov.in/", img: "https://ext.same-assets.com/4149277301/889172070.png", alt: "India.gov.in" },
        { url: "https://www.pmindia.gov.in/", img: "https://ext.same-assets.com/4149277301/1715944874.png", alt: "PM India" },
        { url: "https://rural.nic.in/", img: "https://ext.same-assets.com/4149277301/2509924707.png", alt: "Ministry of Rural Development" },
        { url: "https://panchayatonline.gov.in/viewPESHome.do", img: "https://ext.same-assets.com/4149277301/4099496590.png", alt: "PES" },
        { url: "https://www.panchayatportals.gov.in/", img: "https://ext.same-assets.com/4149277301/1613473529.png", alt: "Panchayat Portals" },
        { url: "https://www.digitalindia.gov.in/", img: "https://ext.same-assets.com/4149277301/2446513825.png", alt: "Digital India" },
      ].map((partner, index) => (
        <div key={index} className="text-center">
          <a href={partner.url} target="_blank" rel="noopener noreferrer">
            <img
              src={partner.img}
              alt={partner.alt}
              className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
            />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    <div className="relative">
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Address Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-500 rounded-full p-3">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Yashvantnagar</h3>
                  <p className="text-sm text-gray-400">Grampanchayat</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                यशवंतनगर ग्रामपंचायत
              </p>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                  At post Yashwantnagar Tal. Malshiras Dist. Solapur <br />
                    Pincode : 413118

                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 9090552002</span>

                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>yashgp555@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
                <li><a href="/online-certificates" className="hover:text-green-500 transition">Online Certificates</a></li>
                <li><a href="/water-supply" className="hover:text-green-500 transition">Water Supply</a></li>
                <li><a href="/property-tax" className="hover:text-green-500 transition">Property Tax</a></li>
                <li><a href="/construction" className="hover:text-green-500 transition">Construction</a></li>
                <li><a href="/tax-payment" className="hover:text-green-500 transition">Tax Payment</a></li>
                <li><a href="/about-gram-panchayat" className="hover:text-green-500 transition">About Gram Panchayat</a></li>
                <li><a href="/officials" className="hover:text-green-500 transition">Officials</a></li>
              </ul>
            </div>

            {/* Social Links Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <p className="text-gray-400 text-sm mb-4">
                Follow us on social media for updates and announcements
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100076654179697-full transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/yashwantnagar_grampanchayat_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Office Hours</h4>
                <p className="text-gray-400 text-sm">Monday - Friday<br />9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1998217654635!2d73.85674331490093!3d18.520430287410866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f6e0e0e0f%3A0x6e1e0f0e0e0e0e0e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yashvantnagar Location"
              ></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.37085164477!2d75.0106624!3d17.8707933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4751c3a613109%3A0xe1c214618dc5630!2sGram%20Panchayat!5e1!3m2!1sen!2sin!4v1768390927710!5m2!1sen!2sin" 
              width="600" height="450"  style={{ border: 0 }}
              allowfullscreen="" loading="lazy" 
               referrerpolicy="no-referrer-when-downgrade" title="Yashvantnagar Location"></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Yashvantnagar Grampanchayat. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Developed by</span>
                <a href="https://www.vortexwebtechnologies.com/" className="text-green-500 hover:text-green-400 font-semibold transition">
                  Vortex Web Technologies Pvt. Ltd.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
 
    </>
  )
}
