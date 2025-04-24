import React from 'react'

export default function Footer() {
  return (
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

  )
}
