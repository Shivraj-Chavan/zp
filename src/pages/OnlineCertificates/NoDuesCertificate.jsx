import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Upload, Download, CheckCircle, AlertCircle } from "lucide-react";

export default function NoDuesCertificate() {
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState(null);
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // allow empty string while typing (so user can delete)
  const onlyCharacters = (value) => /^[A-Za-z\u0900-\u097F\s]+$/.test(value);
  const onlyDigits = (value) => /^\d*$/.test(value); // <-- changed to allow empty string

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    // Fields that must contain ONLY characters
    const charOnlyFields = [
      "applicantName",
      "address",
      "village",
      "taluka",
      "district",
      "propertyOwner",
    ];

    if (charOnlyFields.includes(name)) {
      if (value && !onlyCharacters(value)) {
        error = t("nodues_certificate.charOnlyError") || "Only characters are allowed";
      }
    }

    // Aadhaar validation — allow typing, but block non-digits and >12; require exactly 12 only when fully entered
    if (name === "aadhaarNumber") {
      if (value && !/^\d*$/.test(value)) {
        // contains non-digit characters
        error = t("nodues_certificate.aadhaarError") || "Aadhaar must contain only digits";
      } else if (value.length > 12) {
        error = t("nodues_certificate.aadhaarError") || "Aadhaar number must be exactly 12 digits";
      } else if (value.length === 12 && !/^\d{12}$/.test(value)) {
        error = t("nodues_certificate.aadhaarError") || "Aadhaar number must be exactly 12 digits";
      } else {
        // no error while typing partial digits (<12)
        error = "";
      }
    }

    // Mobile number validation (only digits, exactly 10)
    if (name === "mobileNumber") {
      if (value && !/^\d*$/.test(value)) {
        error = t("nodues_certificate.mobileError") || "Mobile number must contain only digits";
      } else if (value.length > 10) {
        error = t("nodues_certificate.mobileError") || "Mobile number must be exactly 10 digits";
      } else if (value.length === 10 && !/^\d{10}$/.test(value)) {
        error = t("nodues_certificate.mobileError") || "Mobile number must be exactly 10 digits";
      } else {
        error = "";
      }
    }

    // Property / Malmattha number validation (only digits)
    if (name === "propertyNumber") {
      if (value && !/^\d*$/.test(value)) {
        error = t("nodues_certificate.numberOnlyError") || "Only numbers are allowed";
      } else {
        error = "";
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) setUploadedDocs({ ...uploadedDocs, [docType]: file.name });
  };

  const handleDownload = () => alert(t("nodues_certificate.downloadSuccess") || "Form downloaded!");

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors) {
      alert(t("nodues_certificate.fixErrors") || "Please fix validation errors");
      return;
    }

    const hasAtLeastOneReceipt =
      uploadedDocs.propertyTax ||
      uploadedDocs.lightTax ||
      uploadedDocs.healthTax ||
      uploadedDocs.waterTax;

    if (
      !formData.applicantName ||
      !formData.propertyOwner ||
      !formData.propertyNumber ||
      !hasAtLeastOneReceipt
    ) {
      alert(t("nodues_certificate.error"));
      return;
    }

    // final strict checks before submit
    if (!/^\d{12}$/.test(formData.aadhaarNumber || "")) {
      alert(t("nodues_certificate.aadhaarError") || "Aadhaar number must be exactly 12 digits");
      return;
    }
    if (!/^\d{10}$/.test(formData.mobileNumber || "")) {
      alert(t("nodues_certificate.mobileError") || "Mobile number must be exactly 10 digits");
      return;
    }
    if (!/^\d+$/.test(formData.propertyNumber || "")) {
      alert(t("nodues_certificate.numberOnlyError") || "Property number must contain only digits");
      return;
    }

    alert(t("nodues_certificate.success"));
    setShowOnlineForm(false);
    setSelectedOption(null);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
            <FileText className="w-12 h-12 text-green-700" />
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-2">{t("nodues_certificate.title")}</h1>
          <p className="text-lg text-gray-600">{t("nodues_certificate.subtitle")}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-green-600">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">{t("nodues_certificate.requiredDocs")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t("nodues_certificate.docs", { returnObjects: true }).map((doc, i) => (
              <div key={i} className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {!selectedOption && !showOnlineForm && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-800 text-center mb-8">{t("nodues_certificate.applicationMethods")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <Download className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{t("nodues_certificate.option1Title")}</h3>
                  <p className="text-gray-600 mb-6">{t("nodues_certificate.option1Desc")}</p>
                </div>
                <button onClick={() => {
                    setSelectedOption("download");
                    window.open("/public/येणे बाकी नसल्याचा दाखल अर्ज व कागदपत्रे.pdf", "_blank");
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />{t("nodues_certificate.downloadBtn")}
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <Upload className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{t("nodues_certificate.option2Title")}</h3>
                  <p className="text-gray-600 mb-6">{t("nodues_certificate.option2Desc")}</p>
                </div>
                <button onClick={() => { setSelectedOption("online"); setShowOnlineForm(true); }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />{t("nodues_certificate.proceedBtn")}
                </button>
              </div>
            </div>
          </div>
        )}

        {showOnlineForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <button onClick={() => { setShowOnlineForm(false); setSelectedOption(null); }}
              className="mb-6 text-green-700 hover:text-green-800 font-medium flex items-center gap-2">
              ← {t("nodues_certificate.backBtn")}
            </button>

            <div className="space-y-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("nodues_certificate.date")}</h3>
                <input type="date" name="date" value={formData.date || ""} onChange={handleChange} max={new Date().toISOString().split("T")[0]} required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("nodues_certificate.to")}</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">{t("nodues_certificate.sarpanch")}</p>
                  <p className="text-gray-700">{t("nodues_certificate.gpName")}</p>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("nodues_certificate.applicant")}</h3>
                <div className="space-y-4">
                  {[
                    { name: "applicantName", label: t("nodues_certificate.name"), type: "text" },
                    { name: "aadhaarNumber", label: t("nodues_certificate.aadhaarNo"), type: "text", maxLength: 12 },
                    { name: "address", label: t("nodues_certificate.residentialAddress"), type: "textarea" },
                    { name: "mobileNumber", label: t("nodues_certificate.mobileNo"), type: "tel", maxLength: 10 }
                  ].map(({ name, label, type, maxLength }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label} *</label>
                      {type === "textarea" ? (
                        <textarea name={name} value={formData[name] || ""} onChange={handleChange} placeholder={label} rows="3" required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                        />
                      ) : (
                        <input
                        type={type}
                        name={name}
                        maxLength={maxLength}
                        value={formData[name] || ""}
                        onChange={handleChange}
                        placeholder={label}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg"
                      />
                      
                      )}
                      {errors[name] && (
                        <p className="text-red-600 text-sm mt-1">{errors[name]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("nodues_certificate.bodyText")}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "village", label: t("nodues_certificate.village") },
                    { name: "taluka", label: t("nodues_certificate.taluka") },
                    { name: "district", label: t("nodues_certificate.district") }
                  ].map(({ name, label }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label} *</label>
                      <input type="text" name={name} value={formData[name] || ""} onChange={handleChange} placeholder={label} required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                      {errors[name] && (
                        <p className="text-red-600 text-sm mt-1">{errors[name]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("nodues_certificate.propertyDetails")}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("nodues_certificate.propertyOwner")} *</label>
                    <input type="text" name="propertyOwner" value={formData.propertyOwner || ""} onChange={handleChange} placeholder={t("nodues_certificate.propertyOwner")} required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                    {errors.propertyOwner && (
                      <p className="text-red-600 text-sm mt-1">{errors.propertyOwner}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("nodues_certificate.propertyNumber")} *</label>
                    <input
  type="text"
  name="propertyNumber"
  value={formData.propertyNumber || ""}
  onChange={handleChange}
  placeholder={t("nodues_certificate.propertyNumber")}
  required
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg"
/>

{errors.propertyNumber && (
  <p className="text-red-600 text-sm mt-1">{errors.propertyNumber}</p>
)}

                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("nodues_certificate.uploadDocs")}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t("nodues_certificate.error").includes("at least one") ? "Upload copies of tax receipts (at least one required)" : "कर भरलेल्या पावत्यांच्या झेरॉक्स अपलोड करा (किमान एक आवश्यक)"}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "propertyTax", label: t("nodues_certificate.uploadProperty") },
                    { name: "lightTax", label: t("nodues_certificate.uploadLight") },
                    { name: "healthTax", label: t("nodues_certificate.uploadHealth") },
                    { name: "waterTax", label: t("nodues_certificate.uploadWater") }
                  ].map(({ name, label }) => (
                    <div key={name} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">{label}</label>
                      <input
  type="file"
  id={name}
  accept=".pdf,.jpg,.jpeg,.png"
  onChange={(e) => handleFileUpload(e, name)}
  className="hidden"
/>

<label
  htmlFor={name}
  className="inline-block cursor-pointer bg-white border-2 border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:border-green-500"
>
  {i18n.language === "mr" ? "फाइल निवडा" : "Choose File"}
</label>

{uploadedDocs[name] ? (
  <p className="text-green-600 text-sm mt-1">
    ✓ {uploadedDocs[name]}
  </p>
) : (
  <p className="text-gray-500 text-sm mt-1">
    {i18n.language === "mr"
      ? "कोणतीही फाइल निवडलेली नाही"
      : "No file selected"}
  </p>
)}

                  
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-6">
                <button onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                  {t("nodues_certificate.submitBtn")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
