import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  
  const MAX_NAME_LENGTH = 50;


  

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
  
    // ✅ NAME VALIDATION
    if (name === "name") {
      if (value.length > MAX_NAME_LENGTH) return;
  
      if (!/^[\p{L}\s]*$/u.test(value)) {
        newErrors.name = t("contact.errors.name_invalid");
      } else {
        delete newErrors.name;
      }
    }
  
    // ✅ PHONE VALIDATION (allow typing, show error)
    if (name === "phone") {
      if (value.length > 10) return;
  
      if (!/^\d*$/.test(value)) {
        newErrors.phone = t("contact.errors.phone_invalid");
      } else if (value && value.length !== 10) {
        newErrors.phone = t("contact.errors.phone_invalid");
      } else {
        delete newErrors.phone;
      }
    }
  
    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };
  

  
  
  


  
  
  

  const validate = () => {
    let newErrors = {};
  
    if (formData.name.length > 50) {
      newErrors.name = t("contact.errors.name_max");
    }
    
   
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[\p{L}\s]+$/u.test(formData.name)) {
      newErrors.name = t("contact.errors.name_invalid");
    }
    
  
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }
  
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
  
    setErrors(newErrors);
  
   
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    let submitErrors = {};
  
    // ❌ NAME: numbers not allowed
    if (!formData.name.trim()) {
      submitErrors.name = t("contact.errors.name_required");
    } else if (!/^[\p{L}\s]+$/u.test(formData.name)) {
      submitErrors.name = t("contact.errors.name_invalid");
    }
  
    // ❌ PHONE: must be exactly 10 digits
    if (!/^\d{10}$/.test(formData.phone)) {
      submitErrors.phone = t("contact.errors.phone_invalid");
    }
  
    // ❌ MESSAGE required
    if (!formData.message.trim()) {
      submitErrors.message = t("contact.errors.message_required");
    }
  
    // ❌ STOP SUBMISSION
    if (Object.keys(submitErrors).length > 0) {
      setErrors(submitErrors);
      return;
    }
  
    // ✅ SUCCESS
    alert(t("contact.success"));
    setFormData({ name: "", phone: "", message: "" });
    setErrors({});
  };
  
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-12 pb-3 px-3 sm:px-4">

      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {t("contact.title")}
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mx-1 sm:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            
            <div className="bg-green-600 p-6 sm:p-8 md:p-12 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
                {t("contact.subtitle")}
              </h2>

              <p className="text-green-100 mb-6 text-sm sm:text-base leading-relaxed">
                {t("contact.description")}
              </p>

              <div className="space-y-6">
               
              <div className="flex items-start space-x-4">
  <a
    href="https://www.google.com/maps/search/?api=1&query=Yashvantnagar+Gram+Panchayat+Malshiras+Solapur"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 rounded-full p-3 mt-1 hover:bg-green-400 transition" >
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </a>

  <div>
    <h3 className="font-semibold text-lg mb-1">{t("contact.address")}</h3>
    <p className="text-green-100">{t("contact.address_details")}</p>
    <p className="text-green-100">{t("contact.address_pincode")}</p>
  </div>
</div>


               
<div className="flex items-start space-x-4">
  <a href="tel:+919090552002"
    className="bg-green-500 rounded-full p-3 mt-1 hover:bg-green-400 transition">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  </a>

  <div>
    <h3 className="font-semibold text-lg mb-1">{t("contact.phone")}</h3>
    <p className="text-green-100">+91 9090552002</p>
  </div>
</div>


               
<div className="flex items-start space-x-4">
  <a href="mailto:yashgp555@gmail.com" className="bg-green-500 rounded-full p-3 mt-1 hover:bg-green-400 transition">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </a>

  <div>
    <h3 className="font-semibold text-lg mb-1">{t("contact.email")}</h3>
    <p className="text-green-100 break-all">yashgp555@gmail.com</p>
  </div>
</div>


                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-3 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {t("contact.office_hours")}
                    </h3>
                    <p className="text-green-100">
                      {t('contact.office_timedetails')}
                    </p>
                    <p className="text-green-100">
                      {t('contact.office_lunchtime')}
                    </p>
                    <p className="text-green-100">
                      {t('contact.office_holiday')}
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>

         
            <div className="p-6 sm:p-8 md:p-12 mt-2 md:mt-0">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.name")} *
                  </label>
                  <input type="text" name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  maxLength={50} 
                  placeholder={t("contact.name_placeholder")} 
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  />
                  




{errors.name && (
  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
)}

                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.phone")} *
                  </label>
                  <input type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder={t("contact.phone_placeholder")} maxLength={10}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  />
                  



{errors.phone && (
  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
)}

                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.message")} *
                  </label>
                  <textarea name="message" rows="6" value={formData.message} onChange={handleChange} 
                  placeholder={t("contact.message_placeholder")}
                  className={`w-full px-4 py-3 border rounded-lg resize-none ${

                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  />
                 

{errors.message && (
  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
)}

                </div>

                <button
  type="button"
  onClick={handleSubmit}
  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg py-3 transition"
>
  {t("contact.send")}
</button>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
