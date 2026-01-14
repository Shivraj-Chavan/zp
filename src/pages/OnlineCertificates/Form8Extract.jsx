// Form8Certificate.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileText, Upload, Download, CheckCircle, AlertCircle } from "lucide-react";

export default function Form8Certificate() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) setUploadedDocs({ ...uploadedDocs, [docType]: file.name });
  };

  const handleDownload = () => alert(t("form8_certificate.downloadSuccess") || "Form downloaded!");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.applicantName || !formData.personName || !formData.purposeType || !formData.purpose || !uploadedDocs.aadhaarCard) {
      alert(t("form8_certificate.error"));
      return;
    }
    alert(t("form8_certificate.success"));
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
          <h1 className="text-4xl font-bold text-green-800 mb-2">{t("form8_certificate.title")}</h1>
          <p className="text-lg text-gray-600">{t("form8_certificate.subtitle")}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-green-600">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-green-700" />
            <h2 className="text-2xl font-bold text-green-800">{t("form8_certificate.requiredDocs")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {t("form8_certificate.docs", { returnObjects: true }).map((doc, i) => (
              <div key={i} className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {!selectedOption && !showOnlineForm && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-800 text-center mb-8">{t("form8_certificate.applicationMethods")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <Download className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{t("form8_certificate.option1Title")}</h3>
                  <p className="text-gray-600 mb-6">{t("form8_certificate.option1Desc")}</p>
                </div>
                <button  onClick={() => {
                    setSelectedOption("download");
                    window.open("/नमुना ८ उतारा मागणी अर्ज.pdf", "_blank");
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />{t("form8_certificate.downloadBtn")}
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <Upload className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{t("form8_certificate.option2Title")}</h3>
                  <p className="text-gray-600 mb-6">{t("form8_certificate.option2Desc")}</p>
                </div>
                <button onClick={() => { setSelectedOption("online"); setShowOnlineForm(true); }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />{t("form8_certificate.proceedBtn")}
                </button>
              </div>
            </div>
          </div>
        )}

        {showOnlineForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <button onClick={() => { setShowOnlineForm(false); setSelectedOption(null); }}
              className="mb-6 text-green-700 hover:text-green-800 font-medium flex items-center gap-2">
              ← {t("form8_certificate.backBtn")}
            </button>

            <div className="space-y-8">
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("form8_certificate.date")}</h3>
                <input type="date" name="date" value={formData.date || ""} onChange={handleChange} max={new Date().toISOString().split("T")[0]} required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("form8_certificate.to")}</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">{t("form8_certificate.sarpanch")}</p>
                  <p className="text-gray-700">{t("form8_certificate.gpName")}</p>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("form8_certificate.applicant")}</h3>
                <div className="space-y-4">
                  {[
                    { name: "applicantName", label: t("form8_certificate.name"), type: "text" },
                    { name: "aadhaarNumber", label: t("form8_certificate.aadhaarNo"), type: "text", maxLength: 12 },
                    { name: "address", label: t("form8_certificate.residentialAddress"), type: "textarea" },
                    { name: "mobileNumber", label: t("form8_certificate.mobileNo"), type: "tel", maxLength: 10 }
                  ].map(({ name, label, type, maxLength }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label} *</label>
                      {type === "textarea" ? (
                        <textarea name={name} value={formData[name] || ""} onChange={handleChange} placeholder={label} rows="3" required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                        />
                      ) : (
                        <input type={type} name={name} value={formData[name] || ""} maxLength={maxLength} onChange={handleChange} placeholder={label} required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("form8_certificate.bodyText")}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "village", label: t("form8_certificate.village") },
                    { name: "taluka", label: t("form8_certificate.taluka") },
                    { name: "district", label: t("form8_certificate.district") }
                  ].map(({ name, label }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label} *</label>
                      <input type="text" name={name} value={formData[name] || ""} onChange={handleChange} placeholder={label} required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("form8_certificate.form8Details")}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("form8_certificate.personName")} *</label>
                    <input type="text" name="personName" value={formData.personName || ""} onChange={handleChange} placeholder={t("form8_certificate.personName")} required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("form8_certificate.purposeType")} *</label>
                    <select name="purposeType" value={formData.purposeType || ""} onChange={handleChange} required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none">
                      <option value="">{t("form8_certificate.purposeType")}</option>
                      <option value="educational">{t("form8_certificate.educational")}</option>
                      <option value="government">{t("form8_certificate.government")}</option>
                      <option value="election">{t("form8_certificate.election")}</option>
                      <option value="other">{t("form8_certificate.other")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("form8_certificate.purposeDetails")} *</label>
                    <textarea name="purpose" value={formData.purpose || ""} onChange={handleChange} placeholder={t("form8_certificate.purposeDetails")} rows="3" required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">{t("form8_certificate.uploadDocs")}</h3>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">{t("form8_certificate.uploadAadhaar")} <span className="text-red-500">*</span></label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload(e, "aadhaarCard")} required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                  />
                  {uploadedDocs.aadhaarCard && <p className="text-sm text-green-600">✓ {uploadedDocs.aadhaarCard}</p>}
                </div>
              </div>

              <div className="text-center pt-6">
                <button onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                  {t("form8_certificate.submitBtn")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}