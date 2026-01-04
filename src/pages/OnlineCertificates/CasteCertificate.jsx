import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Upload, Download, CheckCircle, AlertCircle } from "lucide-react";

function CasteCertificate() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [selectedOption, setSelectedOption] = useState(null);
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Mobile → allow digits only
    if (name === "mobileNumber" && !/^\d*$/.test(value)) return;
    
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    
    if (!allowedTypes.includes(file.type)) {
      const error = currentLang === "mr" 
        ? "कृपया फक्त PDF, JPG किंवा PNG फाइल अपलोड करा" 
        : "Please upload PDF, JPG, or PNG file only";
      setErrors({ ...errors, [docType]: error });
      return;
    }
    
    if (file.size > 2 * 1024 * 1024) {
      const error = currentLang === "mr" 
        ? "फाईल आकार २MB पेक्षा कमी असावा" 
        : "File size must be less than 2MB";
      setErrors({ ...errors, [docType]: error });
      return;
    }
    
    setUploadedDocs({ ...uploadedDocs, [docType]: file.name });
    
    if (errors[docType]) {
      setErrors({ ...errors, [docType]: "" });
    }
  };

  const validateField = (name, value) => {
    let error = "";
    
    // Accept any language characters (Marathi, English, etc.)
    const nameRegex = /^[^\d\W_]+(\s+[^\d\W_]+)*$/u;
    
    if (name === "applicantName" || name === "casteName") {
      if (!value) {
        error = currentLang === "mr" ? "हे क्षेत्र आवश्यक आहे" : "This field is required";
      }
      else if (!nameRegex.test(value)) {
        error = currentLang === "mr" ? "फक्त अक्षरे वापरा (अंक किंवा चिन्हे चालणार नाहीत)" : "Only letters allowed (no numbers or symbols)";
      }
      else if (value.length < 20 || value.length > 40) {
        error = currentLang === "mr" ? "नाव 20 ते 40 अक्षरांमध्ये असणे आवश्यक आहे" : "Name must be between 20 and 40 characters";
      }
    }
    
    if (name === "purpose") {
      if (!value) {
        error = currentLang === "mr" ? "हे क्षेत्र आवश्यक आहे" : "This field is required";
      }
      else if (value.length < 10) {
        error = currentLang === "mr" ? "कारण किमान 10 अक्षरांचे असावे" : "Purpose must be at least 10 characters";
      }
    }
    
    if (name === "mobileNumber") {
      if (!value) {
        error = currentLang === "mr" ? "मोबाईल क्रमांक भरणे आवश्यक आहे" : "Mobile number is required";
      }
      else if (!/^\d{10}$/.test(value)) {
        error = currentLang === "mr" ? "मोबाईल क्रमांक 10 अंकी असावा" : "Mobile number must be exactly 10 digits";
      }
    }
    
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Applicant name
    if (!formData.applicantName) {
      newErrors.applicantName = currentLang === "mr" ? "नाव आवश्यक आहे" : "Name is required";
    }
    else if (!/^[^\d\W_]+(\s+[^\d\W_]+)*$/u.test(formData.applicantName)) {
      newErrors.applicantName = currentLang === "mr" ? "फक्त अक्षरे वापरा (अंक किंवा चिन्हे चालणार नाहीत)" : "Only letters allowed (no numbers or symbols)";
    }
    else if (formData.applicantName.length < 20 || formData.applicantName.length > 40) {
      newErrors.applicantName = currentLang === "mr" ? "नाव 20 ते 40 अक्षरांमध्ये असणे आवश्यक आहे" : "Name must be between 20 and 40 characters";
    }
    
    // Mobile
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = currentLang === "mr" ? "मोबाईल क्रमांक आवश्यक आहे" : "Mobile number is required";
    }
    else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = currentLang === "mr" ? "मोबाईल क्रमांक 10 अंकी असावा" : "Mobile number must be exactly 10 digits";
    }
    
    // Address
    if (!formData.address) {
      newErrors.address = currentLang === "mr" ? "हे क्षेत्र आवश्यक आहे" : "This field is required";
    }
    
    // Caste Name
    if (!formData.casteName) {
      newErrors.casteName = currentLang === "mr" ? "हे क्षेत्र आवश्यक आहे" : "This field is required";
    }
    else if (!/^[^\d\W_]+(\s+[^\d\W_]+)*$/u.test(formData.casteName)) {
      newErrors.casteName = currentLang === "mr" ? "फक्त अक्षरे वापरा (अंक किंवा चिन्हे चालणार नाहीत)" : "Only letters allowed (no numbers or symbols)";
    }
    
    // Purpose
    if (!formData.purpose) {
      newErrors.purpose = currentLang === "mr" ? "हे क्षेत्र आवश्यक आहे" : "This field is required";
    }
    else if (formData.purpose.length < 10) {
      newErrors.purpose = currentLang === "mr" ? "कारण किमान 10 अक्षरांचे असावे" : "Purpose must be at least 10 characters";
    }
    
    // Files
    if (!uploadedDocs.schoolCertificate) {
      newErrors.schoolCertificate = currentLang === "mr" ? "हे कागदपत्र अपलोड करणे आवश्यक आहे" : "This document is required";
    }
    
    if (!uploadedDocs.aadhaarCard) {
      newErrors.aadhaarCard = currentLang === "mr" ? "हे कागदपत्र अपलोड करणे आवश्यक आहे" : "This document is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(t("caste.success"));
      setShowOnlineForm(false);
      setSelectedOption(null);
      setFormData({});
      setUploadedDocs({});
      setErrors({});
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 via-white to-teal-50 min-h-screen px-3 sm:px-4 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block p-3 md:p-4 bg-teal-100 rounded-full mb-3 md:mb-4">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-700" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-teal-800 mb-2">
            {t("caste.title")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
            {t("caste.subtitle")}
          </p>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 border-l-4 border-teal-600">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-teal-700 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-800">
              {t("caste.documents_title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {t("caste.documents", { returnObjects: true }).map((doc, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-3 bg-teal-50 p-3 md:p-4 rounded-lg">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm md:text-base text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Options */}
        {!selectedOption && !showOnlineForm && (
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-800 text-center mb-4 sm:mb-6 md:mb-8 px-4">
              {t("menu.online_certificates.title")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-cyan-500">
                <div className="text-center mb-4 sm:mb-5 md:mb-6">
                  <div className="inline-block p-3 md:p-4 bg-cyan-100 rounded-full mb-3 md:mb-4">
                    <Download className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cyan-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {t("caste.download_title")}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 px-2">
                    {t("caste.download_desc")}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedOption("download");
                    window.open("/public/जातीचा दाखला अर्ज व कागदपत्रे.pdf", "_blank");
                  }}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  {t("caste.download_btn")}
                </button>
              </div>

              <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-teal-500">
                <div className="text-center mb-4 sm:mb-5 md:mb-6">
                  <div className="inline-block p-3 md:p-4 bg-teal-100 rounded-full mb-3 md:mb-4">
                    <Upload className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-teal-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {t("caste.online_title")}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 px-2">
                    {t("caste.online_desc")}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedOption("online");
                    setShowOnlineForm(true);
                  }}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Upload className="w-4 h-4 md:w-5 md:h-5" />
                  {t("caste.proceed_btn")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Online Form */}
        {showOnlineForm && (
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
            <button
              onClick={() => {
                setShowOnlineForm(false);
                setSelectedOption(null);
                setFormData({});
                setUploadedDocs({});
                setErrors({});
              }}
              className="mb-4 sm:mb-5 md:mb-6 text-teal-700 hover:text-teal-800 font-medium flex items-center gap-2 text-sm sm:text-base"
            >
              ← {t("caste.back_btn")}
            </button>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
              
              {/* Applicant Details */}
              <div className="border-l-4 border-teal-600 pl-3 sm:pl-4 md:pl-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-teal-800 mb-4 sm:mb-5 md:mb-6">
                  {t("caste.sections.applicant_details")}
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("caste.fields.applicant_name")} *
                    </label>
                    <input
                      type="text"
                      name="applicantName"
                      value={formData.applicantName || ""}
                      onChange={handleChange}
                      onBlur={(e) => validateField("applicantName", e.target.value)}
                      placeholder={t("caste.fields.applicant_name")}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.applicantName ? "border-red-500 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.applicantName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.applicantName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("caste.fields.applicant_address")} *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address || ""}
                      onChange={handleChange}
                      placeholder={t("caste.fields.applicant_address")}
                      rows="3"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base resize-none ${
                        errors.address ? "border-red-500 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("caste.fields.applicant_mobile")} *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber || ""}
                      onChange={handleChange}
                      onBlur={(e) => validateField("mobileNumber", e.target.value)}
                      placeholder={t("caste.fields.applicant_mobile")}
                      maxLength="10"
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base ${
                        errors.mobileNumber ? "border-red-500 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.mobileNumber}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Caste Details */}
              <div className="border-l-4 border-teal-600 pl-3 sm:pl-4 md:pl-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-teal-800 mb-4 sm:mb-5 md:mb-6">
                  {t("caste.sections.caste_details")}
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("caste.fields.caste_name")} *
                    </label>
                    <input
                      type="text"
                      name="casteName"
                      value={formData.casteName || ""}
                      onChange={handleChange}
                      onBlur={(e) => validateField("casteName", e.target.value)}
                      placeholder={t("caste.fields.caste_name")}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.casteName ? "border-red-500 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.casteName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.casteName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("caste.fields.purpose")} *
                    </label>
                    <textarea
                      name="purpose"
                      value={formData.purpose || ""}
                      onChange={handleChange}
                      onBlur={(e) => validateField("purpose", e.target.value)}
                      rows="3"
                      placeholder={t("caste.fields.purpose")}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none ${
                        errors.purpose ? "border-red-500 bg-red-50" : "border-gray-200"
                      }`}
                    />
                    {errors.purpose && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.purpose}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="border-l-4 border-teal-600 pl-3 sm:pl-4 md:pl-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-teal-800 mb-4 sm:mb-5 md:mb-6">
                  {t("caste.sections.documents")}
                </h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5">
                  <p className="text-xs sm:text-sm text-blue-800">
                    <strong>{t("file_upload.instructions")}:</strong> {t("file_upload.formats")}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      {t("caste.uploads.school_certificate")} *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, "schoolCertificate")}
                        className="hidden"
                        id="schoolCertificate"
                      />
                      <label
                        htmlFor="schoolCertificate"
                        className={`block w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg cursor-pointer transition-colors text-xs sm:text-sm md:text-base ${
                          errors.schoolCertificate
                            ? "border-red-500 bg-red-50"
                            : uploadedDocs.schoolCertificate
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 bg-white hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 truncate pr-2">
                            {uploadedDocs.schoolCertificate || t("file_upload.choose")}
                          </span>
                          <Upload className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                        </div>
                      </label>
                    </div>
                    {uploadedDocs.schoolCertificate && (
                      <p className="text-xs sm:text-sm text-green-600 truncate">✓ {uploadedDocs.schoolCertificate}</p>
                    )}
                    {errors.schoolCertificate && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.schoolCertificate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      {t("caste.uploads.aadhaar")} *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload(e, "aadhaarCard")}
                        className="hidden"
                        id="aadhaarCard"
                      />
                      <label
                        htmlFor="aadhaarCard"
                        className={`block w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 rounded-lg cursor-pointer transition-colors text-xs sm:text-sm md:text-base ${
                          errors.aadhaarCard
                            ? "border-red-500 bg-red-50"
                            : uploadedDocs.aadhaarCard
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 bg-white hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 truncate pr-2">
                            {uploadedDocs.aadhaarCard || t("file_upload.choose")}
                          </span>
                          <Upload className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                        </div>
                      </label>
                    </div>
                    {uploadedDocs.aadhaarCard && (
                      <p className="text-xs sm:text-sm text-green-600 truncate">✓ {uploadedDocs.aadhaarCard}</p>
                    )}
                    {errors.aadhaarCard && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.aadhaarCard}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4 sm:pt-5 md:pt-6">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  {t("caste.submit")}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CasteCertificate;