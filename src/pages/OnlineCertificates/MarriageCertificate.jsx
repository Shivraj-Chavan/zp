import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Upload, Download, CheckCircle, AlertCircle } from "lucide-react";

function MarriageCertificate() 
  {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors({ ...errors, [docType]: t("file_upload.size_error") });
        return;
      }
      setUploadedDocs({ ...uploadedDocs, [docType]: file.name });
      if (errors[docType]) setErrors({ ...errors, [docType]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Groom validation
    if (!formData.groom_name) {
      newErrors.groom_name = t("marriage.errors.required");
    } else if (!/^[a-zA-Z\u0900-\u097F\s]+$/.test(formData.groom_name)) {
      newErrors.groom_name = t("marriage.errors.only_letters");
    }

    if (formData.groom_mobile && !/^\d{10}$/.test(formData.groom_mobile)) {
      newErrors.groom_mobile = t("marriage.errors.mobile_length");
    }

    // Bride validation
    if (!formData.bride_name) {
      newErrors.bride_name = t("marriage.errors.required");
    } else if (!/^[a-zA-Z\u0900-\u097F\s]+$/.test(formData.bride_name)) {
      newErrors.bride_name = t("marriage.errors.only_letters");
    }

    if (formData.bride_mobile && !/^\d{10}$/.test(formData.bride_mobile)) {
      newErrors.bride_mobile = t("marriage.errors.mobile_length");
    }

    if (!formData.marriage_date) {
      newErrors.marriage_date = t("marriage.errors.required");
    }

    if (!formData.marriage_place) {
      newErrors.marriage_place = t("marriage.errors.required");
    }

    // Document validation
    if (!uploadedDocs.groom_photo) {
      newErrors.groom_photo = t("marriage.errors.upload_required");
    }

    if (!uploadedDocs.bride_photo) {
      newErrors.bride_photo = t("marriage.errors.upload_required");
    }

    if (!uploadedDocs.aadhaar) {
      newErrors.aadhaar = t("marriage.errors.upload_required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(t("marriage.success"));
      setShowOnlineForm(false);
      setSelectedOption(null);
      setFormData({});
      setUploadedDocs({});
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block p-3 md:p-4 bg-green-100 rounded-full mb-3 md:mb-4">
            <FileText className="w-10 h-10 md:w-12 md:h-12 text-green-700" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-green-800 mb-2">
            {t("marriage.title")}
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            {t("marriage.subtitle")}
          </p>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 mb-6 md:mb-8 border-l-4 border-green-600">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
            <h2 className="text-xl md:text-2xl font-bold text-green-800">
              {t("marriage.requiredDocs")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {t("marriage.docs", { returnObjects: true }).map((doc, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-3 bg-green-50 p-3 md:p-4 rounded-lg">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Options */}
        {!selectedOption && !showOnlineForm && (
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-green-800 text-center mb-6 md:mb-8">
              {t("marriage.choose")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-block p-3 md:p-4 bg-blue-100 rounded-full mb-3 md:mb-4">
                    <Download className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {t("marriage.download_title")}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    {t("marriage.download_desc")}
                  </p>
                </div>
                <a
                  href="/विवाह नोंदणी अर्ज.pdf"
                  download
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors text-center text-sm md:text-base"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    {t("marriage.download_btn")}
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-4 md:mb-6">
                  <div className="inline-block p-3 md:p-4 bg-green-100 rounded-full mb-3 md:mb-4">
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {t("marriage.online_title")}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    {t("marriage.online_desc")}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedOption("online");
                    setShowOnlineForm(true);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Upload className="w-4 h-4 md:w-5 md:h-5" />
                  {t("marriage.proceed")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Online Form */}
        {showOnlineForm && (
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8">
            <button
              onClick={() => {
                setShowOnlineForm(false);
                setSelectedOption(null);
                setFormData({});
                setUploadedDocs({});
                setErrors({});
              }}
              className="mb-4 md:mb-6 text-green-700 hover:text-green-800 font-medium flex items-center gap-2 text-sm md:text-base"
            >
              ← {t("marriage.back")}
            </button>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              
              {/* Marriage Details */}
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6">
                  {t("marriage.sections.marriage")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.date")} *
                    </label>
                    <input
                      type="date"
                      name="marriage_date"
                      value={formData.marriage_date || ""}
                      onChange={handleChange}
                      max={new Date().toISOString().split("T")[0]}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${
                        errors.marriage_date ? "border-red-500" : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.marriage_date && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.marriage_date}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.place")} *
                    </label>
                    <input
                      type="text"
                      name="marriage_place"
                      value={formData.marriage_place || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.place")}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${
                        errors.marriage_place ? "border-red-500" : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.marriage_place && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.marriage_place}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Groom Details */}
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6">
                  {t("marriage.sections.groom")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.groom_name")} *
                    </label>
                    <input
                      type="text"
                      name="groom_name"
                      value={formData.groom_name || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.groom_name")}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${
                        errors.groom_name ? "border-red-500" : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.groom_name && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.groom_name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.mobile")}
                    </label>
                    <input
                      type="tel"
                      name="groom_mobile"
                      value={formData.groom_mobile || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.mobile")}
                      maxLength="10"
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${
                        errors.groom_mobile ? "border-red-500" : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.groom_mobile && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.groom_mobile}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.address")}
                    </label>
                    <input
                      type="text"
                      name="groom_address"
                      value={formData.groom_address || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.address")}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Bride Details */}
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6">
                  {t("marriage.sections.bride")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.bride_name")} *
                    </label>
                    <input
                      type="text"
                      name="bride_name"
                      value={formData.bride_name || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.bride_name")}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${
                        errors.bride_name ? "border-red-500" : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.bride_name && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.bride_name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.mobile")}
                    </label>
                    <input
                      type="tel"
                      name="bride_mobile"
                      value={formData.bride_mobile || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.mobile")}
                      maxLength="10"
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${
                        errors.bride_mobile ? "border-red-500" : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.bride_mobile && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.bride_mobile}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("marriage.fields.address")}
                    </label>
                    <input
                      type="text"
                      name="bride_address"
                      value={formData.bride_address || ""}
                      onChange={handleChange}
                      placeholder={t("marriage.fields.address")}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Witness Details */}
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6">
                  {t("marriage.sections.witness")}
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <input
                      key={n}
                      type="text"
                      name={`witness_${n}`}
                      value={formData[`witness_${n}`] || ""}
                      onChange={handleChange}
                      placeholder={`${t("marriage.fields.witness")} ${n}`}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm md:text-base"
                    />
                  ))}
                </div>
              </div>

              {/* Priest Details */}
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6">
                  {t("marriage.sections.priest")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="priest_name"
                    value={formData.priest_name || ""}
                    onChange={handleChange}
                    placeholder={t("marriage.fields.priest_name")}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="priest_religion"
                    value={formData.priest_religion || ""}
                    onChange={handleChange}
                    placeholder={t("marriage.fields.religion")}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6">
                  {t("marriage.sections.documents")}
                </h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 mb-4">
                  <p className="text-xs md:text-sm text-blue-800">
                    <strong>{t("file_upload.instructions")}:</strong> {t("file_upload.formats")}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "groom_photo", label: t("marriage.uploads.groom") },
                    { name: "bride_photo", label: t("marriage.uploads.bride") },
                    { name: "aadhaar", label: t("marriage.uploads.aadhaar") }
                  ].map(({ name, label }) => (
                    <div key={name} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        {label} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload(e, name)}
                          className="hidden"
                          id={name}
                        />
                        <label
                          htmlFor={name}
                          className={`block w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg cursor-pointer transition-colors text-sm md:text-base ${
                            errors[name]
                              ? "border-red-500 bg-red-50"
                              : uploadedDocs[name]
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 bg-white hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 truncate">
                              {uploadedDocs[name] || t("file_upload.choose")}
                            </span>
                            <Upload className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0 ml-2" />
                          </div>
                        </label>
                      </div>
                      {uploadedDocs[name] && (
                        <p className="text-xs md:text-sm text-green-600">✓ {uploadedDocs[name]}</p>
                      )}
                      {errors[name] && (
                        <p className="text-red-500 text-xs md:text-sm">{errors[name]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4 md:pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  {t("marriage.submit")}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarriageCertificate;