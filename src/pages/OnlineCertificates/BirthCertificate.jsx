import { useState, useRef } from "react";

import { useTranslation } from "react-i18next";
import { FileText, Upload, Download, CheckCircle, AlertCircle, Info } from "lucide-react";


export default function BirthCertificate() {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);
const [showPreview, setShowPreview] = useState(false);
const fileInputs = useRef({});



  const validateMarathiName = (name) => {
    if (!name) return t("birth_certificate.errors.required");
    if (!/^[\u0900-\u097F\s]+$/.test(name)) {
      return i18n.language === 'en' ? "Only Marathi (देवनागरी) characters allowed" : "फक्त मराठी (देवनागरी) अक्षरे वापरा";
    }
    if (name.length < 2 || name.length > 50) return i18n.language === 'en' ? "Name must be between 2 and 50 characters" : "नाव २ ते ५० अक्षरांपर्यंत असावे";
    return "";
  };

  const validateEnglishName = (name) => {
    if (!name) return t("birth_certificate.errors.required");
    if (!/^[A-Za-z\s]+$/.test(name)) return i18n.language === 'en' ? "Only English letters allowed" : "फक्त इंग्रजी अक्षरे वापरा";
    if (name.length < 2 || name.length > 50) return i18n.language === 'en' ? "Name must be between 2 and 50 characters" : "नाव २ ते ५० अक्षरांपर्यंत असावे";
    return "";
  };

  const validateMobile = (mobile) => {
    if (!mobile) return i18n.language === 'en' ? "Mobile number is required" : "मोबाइल नंबर आवश्यक आहे";
    if (!/^\d{10}$/.test(mobile)) return i18n.language === 'en' ? "Mobile number must be exactly 10 digits" : "मोबाइल नंबर १० अंकी असावा";
    return "";
  };

  const validateAadhaar = (aadhaar) => {
    if (!aadhaar) return t("birth_certificate.errors.required");
    if (!/^\d{12}$/.test(aadhaar)) return i18n.language === 'en' ? "Aadhaar must be exactly 12 digits" : "आधार १२ अंकी असावा";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
    let error = "";
    
    // Child names and Parent Marathi names - Only Marathi
    if (name === "childNameMarathi" || name === "motherNameMarathi" || name === "fatherNameMarathi") {
      error = validateMarathiName(value);
    } 
    // Child English name and Parent Aadhaar names - Only English
    else if (name === "childNameEnglish" || name === "motherName" || name === "fatherName") {
      error = validateEnglishName(value);
    } 
    else if (name === "mobile") {
      error = validateMobile(value);
    } 
    else if (name.includes("aadhaar")) {
      error = validateAadhaar(value);
    } 
    else if (name === "address" || name === "birthPlace" || name === "relation") {
      error = value ? "" : t("birth_certificate.errors.required");
    }
    
    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert(i18n.language === 'en' ? "File size must be less than 2MB" : "फाईल साइझ २ एमबी पेक्षा कमी असावी");
        e.target.value = "";
        return;
      }
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert(i18n.language === 'en' ? "Only PDF, JPG, and PNG files are allowed" : "फक्त PDF, JPG आणि PNG फाइल्स स्वीकारल्या जातात");
        e.target.value = "";
        return;
      }
      setUploadedDocs({
        ...uploadedDocs,
        [docType]: {
          name: file.name,
          url: URL.createObjectURL(file),
          file
        }
      });
      
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const allFields = {
      childNameMarathi: validateMarathiName,
      childNameEnglish: validateEnglishName,
      motherNameMarathi: validateMarathiName,
      fatherNameMarathi: validateMarathiName,
      motherName: validateEnglishName,  
      fatherName: validateEnglishName,  // Aadhaar name - English only
      aadhaarMother: validateAadhaar,
      aadhaarFather: validateAadhaar,
      mobile: validateMobile,
    };
    Object.keys(allFields).forEach(field => {
      const error = allFields[field](formData[field]);
      if (error) newErrors[field] = error;
    });
    if (!formData.birthDate) newErrors.birthDate = t("birth_certificate.errors.required");
    if (!formData.address) newErrors.address = t("birth_certificate.errors.required");
    if (!formData.motherEducation) newErrors.motherEducation = t("birth_certificate.errors.required");
    if (!formData.fatherEducation) newErrors.fatherEducation = t("birth_certificate.errors.required");
    if (!formData.motherOccupation) newErrors.motherOccupation = t("birth_certificate.errors.required");
    if (!formData.fatherOccupation) newErrors.fatherOccupation = t("birth_certificate.errors.required");
    if (!formData.birthPlace) newErrors.birthPlace = t("birth_certificate.errors.required");
    if (!formData.relation) newErrors.relation = t("birth_certificate.errors.required");
    if (formData.motherOccupation === "other" && !formData.motherOccupationOther) {
      newErrors.motherOccupationOther = t("birth_certificate.errors.required");
    }
    
    if (formData.fatherOccupation === "other" && !formData.fatherOccupationOther) {
      newErrors.fatherOccupationOther = t("birth_certificate.errors.required");
    }
    
    setErrors(newErrors);
    const allTouched = {};
    Object.keys(allFields).forEach(field => allTouched[field] = true);
    allTouched.birthDate = allTouched.address = allTouched.motherEducation = allTouched.fatherEducation = allTouched.motherOccupation = allTouched.fatherOccupation = allTouched.birthPlace = allTouched.relation = true;
    setTouched(allTouched);
    return Object.keys(newErrors).length === 0;
  };

  const confirmSubmit = () => {
    if (!uploadedDocs.motherAadhaar || !uploadedDocs.fatherAadhaar || !uploadedDocs.parentsSignature) {
      alert(t("birth_certificate.errors.upload_required"));
      setShowConfirm(false);
      return;
    }
  
    if (!validateForm()) {
      alert(t("birth_certificate.errors.fill_required_fields"));

      setShowConfirm(false);
      return;
    }
    
  
    // SUCCESS
    setShowConfirm(false);
    setShowOnlineForm(false);
    setShowSuccess(true);
  
    // reset form
    setFormData({});
    setUploadedDocs({});
    setErrors({});
    setTouched({});
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
  

    if (!uploadedDocs.motherAadhaar || !uploadedDocs.fatherAadhaar || !uploadedDocs.parentsSignature) {
      alert(t("birth_certificate.errors.upload_required"));
      return;
    }
  
    const isValid = validateForm();
  
    if (!isValid) {

      return;
    }
  
   
    setShowConfirm(true);
  };
  
  


  const educationOptions = [
    { value: "", label: i18n.language === 'en' ? "Select Education" : "शिक्षण निवडा" },
    { value: "illiterate", label: t("education_options.illiterate") },
    { value: "primary", label: t("education_options.primary") },
    { value: "middle_school", label: t("education_options.middle_school") },
    { value: "tenth_pass", label: t("education_options.tenth_pass") },
    { value: "twelfth_pass", label: t("education_options.twelfth_pass") },
    { value: "graduate", label: t("education_options.graduate") },
    { value: "post_graduate", label: t("education_options.post_graduate") },
    { value: "other", label: t("education_options.other") }
  ];

  const occupationOptions = [
    { value: "", label: i18n.language === 'en' ? "Select Occupation" : "व्यवसाय निवडा" },
    { value: "housewife", label: t("occupation_options.housewife") },
    { value: "farmer", label: t("occupation_options.farmer") },
    { value: "labourer", label: t("occupation_options.labourer") },
    { value: "self_employed", label: t("occupation_options.self_employed") },
    { value: "private_service", label: t("occupation_options.private_service") },
    { value: "government_service", label: t("occupation_options.government_service") },
    { value: "business", label: t("occupation_options.business") },
    { value: "unemployed", label: t("occupation_options.unemployed") },
    { value: "retired", label: t("occupation_options.retired") },
    { value: "other", label: t("occupation_options.other") }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block p-3 md:p-4 bg-green-100 rounded-full mb-4">
            <FileText className="w-8 h-8 md:w-12 md:h-12 text-green-700" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-green-800 mb-2">{t("birth_certificate.title")}</h1>
          <p className="text-base md:text-lg text-gray-600">{t("birth_certificate.subtitle")}</p>
        </div>

        {!showSuccess && (
  <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 mb-6 md:mb-8 border-l-4 border-green-600">

          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-green-700" />
            <h2 className="text-xl md:text-2xl font-bold text-green-800">{t("birth_certificate.requiredDocs")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {t("birth_certificate.docs", { returnObjects: true }).map((doc, i) => (
              <div key={i} className="flex items-center gap-3 bg-green-50 p-3 md:p-4 rounded-lg">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
)}
        {!selectedOption && !showOnlineForm && (
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-green-800 text-center mb-6 md:mb-8">{t("birth_certificate.applicationMethods")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 md:p-4 bg-blue-100 rounded-full mb-4">
                    <Download className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{t("birth_certificate.option1Title")}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6">{t("birth_certificate.option1Desc")}</p>
                </div>
                <button onClick={() => { setSelectedOption("download"); window.open("/public/जन्म अर्ज.pdf", "_blank"); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  {t("birth_certificate.downloadBtn")}
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 md:p-4 bg-green-100 rounded-full mb-4">
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{t("birth_certificate.option2Title")}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6">{t("birth_certificate.option2Desc")}</p>
                </div>
                <button onClick={() => { setSelectedOption("online"); setShowOnlineForm(true); }} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                  <Upload className="w-4 h-4 md:w-5 md:h-5" />
                  {t("birth_certificate.proceedBtn")}
                </button>
              </div>
            </div>
          </div>
        )}

{showSuccess && (
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-2xl mx-auto">
    <div className="flex justify-center mb-4">
      <CheckCircle className="w-16 h-16 text-green-600" />
    </div>

    <h2 className="text-2xl font-bold text-green-800 mb-4">
      Application Submitted Successfully
    </h2>

    <p className="text-gray-700 text-base leading-relaxed mb-6">
      Your Birth Certificate application has been submitted successfully.
      <br />
      You will receive the <strong>soft copy within 15–20 days</strong>.
      <br />
      You may also collect the <strong>hard copy from the Gram Panchayat office</strong>.
    </p>

    <button
      onClick={() => setShowSuccess(false)}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Back to Birth Certificate
    </button>
  </div>
)}


        {showOnlineForm && (
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
            <button onClick={() => { setShowOnlineForm(false); setSelectedOption(null); setFormData({}); setUploadedDocs({}); setErrors({}); setTouched({}); }} className="mb-6 text-green-700 hover:text-green-800 font-medium flex items-center gap-2 text-sm md:text-base">
              ← {t("birth_certificate.backBtn")}
            </button>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">1</div>
                  {t("birth_certificate.childDetails")}
                </h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-4 rounded-r-lg">
  <p className="text-sm text-yellow-800 leading-relaxed">
    {i18n.language === "en"
      ? "Please enter the child's full and correct name. This name is permanent and cannot be changed in the future."
      : "कृपया बाळाचे पूर्ण आणि अचूक नाव भरा. हे नाव कायमस्वरूपी असते व भविष्यात बदलता येत नाही."}
  </p>
</div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.childNameMar")} <span className="text-red-500">*</span></label>
                    <input type="text" name="childNameMarathi" value={formData.childNameMarathi || ""} 
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder={
                      i18n.language === "en"
                        ? "Enter Full Name (Marathi)"
                        : "बाळाचे पूर्ण नाव लिहा (मराठी)"
                    }
                    
                     className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.childNameMarathi && errors.childNameMarathi ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.childNameMarathi && errors.childNameMarathi && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.childNameMarathi}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.childNameEng")} <span className="text-red-500">*</span></label>
                    <input type="text" name="childNameEnglish" value={formData.childNameEnglish || ""}
                     onChange={handleChange} onBlur={handleBlur}
                     placeholder={
                      i18n.language === "en"
                        ? "Enter Full Name (English)"
                        : "बाळाचे पूर्ण नाव लिहा (इंग्रजी)"
                    }
                    
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.childNameEnglish && errors.childNameEnglish ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.childNameEnglish && errors.childNameEnglish && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.childNameEnglish}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.birthDate")} <span className="text-red-500">*</span></label>
                    <input type="date" name="birthDate" value={formData.birthDate || ""} max={new Date().toISOString().split("T")[0]} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.birthDate && errors.birthDate ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.birthDate && errors.birthDate && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.birthDate}</p>}
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">2</div>
                  {t("birth_certificate.parentsDetails")}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{i18n.language === 'en' ? "Mother Name (Marathi)" : "आईचे नाव (मराठी)"} <span className="text-red-500">*</span></label>
                      <input type="text" name="motherNameMarathi" value={formData.motherNameMarathi || ""}
                       onChange={handleChange} onBlur={handleBlur}
                       placeholder={
                        i18n.language === "en"
                          ? "Enter Full Name (Marathi)"
                          : "आईचे पूर्ण नाव लिहा (मराठी)"
                      }
                      
                         className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.motherNameMarathi && errors.motherNameMarathi ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                      {touched.motherNameMarathi && errors.motherNameMarathi && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.motherNameMarathi}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{i18n.language === 'en' ? "Father Name (Marathi)" : "वडिलांचे नाव (मराठी)"} <span className="text-red-500">*</span></label>
                      <input type="text" name="fatherNameMarathi" value={formData.fatherNameMarathi || ""} 
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder={
                        i18n.language === "en"
                          ? "Enter Full Name (Marathi)"
                          : "वडिलांचे पूर्ण नाव लिहा (मराठी)"
                      }
                      
                      className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.fatherNameMarathi && errors.fatherNameMarathi ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                      {touched.fatherNameMarathi && errors.fatherNameMarathi && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.fatherNameMarathi}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.motherName")} <span className="text-red-500">*</span></label>
                      <input type="text" name="motherName" value={formData.motherName || ""} 
                      onChange={handleChange} onBlur={handleBlur} 
                      placeholder={
                        i18n.language === "en"
                          ? "Enter Full Name as per AadhaarCard"
                          : "आधारकार्ड प्रमाणे आईचे पूर्ण नाव लिहा"
                      }
                                            className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.motherName && errors.motherName ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                      {touched.motherName && errors.motherName && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.motherName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.fatherName")} <span className="text-red-500">*</span></label>
                      <input type="text" name="fatherName" value={formData.fatherName || ""}
                       onChange={handleChange} onBlur={handleBlur} 
                       placeholder={
                        i18n.language === "en"
                          ? "Enter Full Name as per AadhaarCard"
                          : "आधारकार्ड प्रमाणे वडिलांचे पूर्ण नाव लिहा"
                      }
                      
                       className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.fatherName && errors.fatherName ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                      {touched.fatherName && errors.fatherName && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.fatherName}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.motherAadhaar")} <span className="text-red-500">*</span></label>
                      <input type="text" name="aadhaarMother" value={formData.aadhaarMother || ""} maxLength="12"
                       onChange={handleChange} onBlur={handleBlur}
                       placeholder={
                        i18n.language === "en"
                          ? "Enter Mother's AadhaarCard Number"
                          : "आईचा आधारकार्ड क्रमांक लिहा"
                      }
                        className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.aadhaarMother && errors.aadhaarMother ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                      {touched.aadhaarMother && errors.aadhaarMother && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.aadhaarMother}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.fatherAadhaar")} <span className="text-red-500">*</span></label>
                      <input type="text" name="aadhaarFather" value={formData.aadhaarFather || ""} maxLength="12" 
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder={
                        i18n.language === "en"
                          ? "Enter Father's AadhaarCard Number"
                          : "वडिलांचा आधारकार्ड क्रमांक लिहा"
                      }
                       className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.aadhaarFather && errors.aadhaarFather ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                      {touched.aadhaarFather && errors.aadhaarFather && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.aadhaarFather}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">3</div>
                  {t("birth_certificate.addressContact")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.address")} <span className="text-red-500">*</span></label>
                    <textarea name="address" value={formData.address || ""} onChange={handleChange} onBlur={handleBlur} rows="3" placeholder={t("birth_certificate.fields.address")} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.address && errors.address ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.address && errors.address && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.mobile")} <span className="text-red-500">*</span></label>
                    <input type="tel" name="mobile" value={formData.mobile || ""} maxLength="10" onChange={handleChange} onBlur={handleBlur} placeholder={t("birth_certificate.fields.mobile")} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.mobile && errors.mobile ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.mobile && errors.mobile && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.mobile}</p>}
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">4</div>
                  {t("birth_certificate.educationOccupation")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.motherEdu")} <span className="text-red-500">*</span></label>
                    <select name="motherEducation" value={formData.motherEducation || ""} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.motherEducation && errors.motherEducation ? "border-red-500" : "border-gray-200 focus:border-green-500"}`}>
                      {educationOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    {touched.motherEducation && errors.motherEducation && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.motherEducation}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.fatherEdu")} <span className="text-red-500">*</span></label>
                    <select name="fatherEducation" value={formData.fatherEducation || ""} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.fatherEducation && errors.fatherEducation ? "border-red-500" : "border-gray-200 focus:border-green-500"}`}>
                      {educationOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    {touched.fatherEducation && errors.fatherEducation && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.fatherEducation}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.motherOcc")} <span className="text-red-500">*</span></label>
                    <select name="motherOccupation" value={formData.motherOccupation || ""} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.motherOccupation && errors.motherOccupation ? "border-red-500" : "border-gray-200 focus:border-green-500"}`}>
                      {occupationOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    {formData.motherOccupation === "other" && (
  <div className="mt-2">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {i18n.language === "en"
        ? "Please specify occupation"
        : "कृपया व्यवसाय लिहा"}
      <span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      name="motherOccupationOther"
      value={formData.motherOccupationOther || ""}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={
        i18n.language === "en"
          ? "Enter occupation"
          : "व्यवसाय लिहा"
      }
      className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm ${
        touched.motherOccupationOther && errors.motherOccupationOther
          ? "border-red-500"
          : "border-gray-200 focus:border-green-500"
      }`}
    />

    {touched.motherOccupationOther && errors.motherOccupationOther && (
      <p className="text-red-500 text-xs mt-1">
        {errors.motherOccupationOther}
      </p>
    )}
  </div>
)}
                    {touched.motherOccupation && errors.motherOccupation && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.motherOccupation}</p>}
                  </div>
                  

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.fatherOcc")} <span className="text-red-500">*</span></label>
                    <select name="fatherOccupation" value={formData.fatherOccupation || ""} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.fatherOccupation && errors.fatherOccupation ? "border-red-500" : "border-gray-200 focus:border-green-500"}`}>
                      {occupationOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                    {formData.fatherOccupation === "other" && (
  <div className="mt-2">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {i18n.language === "en"
        ? "Please specify occupation"
        : "कृपया व्यवसाय लिहा"}
      <span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      name="fatherOccupationOther"
      value={formData.fatherOccupationOther || ""}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={
        i18n.language === "en"
          ? "Enter occupation"
          : "व्यवसाय लिहा"
      }
      className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm ${
        touched.fatherOccupationOther && errors.fatherOccupationOther
          ? "border-red-500"
          : "border-gray-200 focus:border-green-500"
      }`}
    />

    {touched.fatherOccupationOther && errors.fatherOccupationOther && (
      <p className="text-red-500 text-xs mt-1">
        {errors.fatherOccupationOther}
      </p>
    )}
  </div>
)}

                    {touched.fatherOccupation && errors.fatherOccupation && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.fatherOccupation}</p>}
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">5</div>
                  {t("birth_certificate.birthPlaceDetails")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.birthPlace")} <span className="text-red-500">*</span></label>
                    <input type="text" name="birthPlace" value={formData.birthPlace || ""} onChange={handleChange} onBlur={handleBlur} placeholder={t("birth_certificate.fields.birthPlace")} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.birthPlace && errors.birthPlace ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.birthPlace && errors.birthPlace && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.birthPlace}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("birth_certificate.fields.relation")} <span className="text-red-500">*</span></label>
                    <input type="text" name="relation" value={formData.relation || ""} onChange={handleChange} onBlur={handleBlur} placeholder={t("birth_certificate.fields.relation")} className={`w-full px-3 md:px-4 py-2 md:py-3 border-2 rounded-lg focus:outline-none text-sm md:text-base ${touched.relation && errors.relation ? "border-red-500" : "border-gray-200 focus:border-green-500"}`} />
                    {touched.relation && errors.relation && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.relation}</p>}
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">6</div>
                  {t("birth_certificate.uploadDocuments")}
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-2">{i18n.language === 'en' ? "Document Upload Guidelines:" : "कागदपत्रे अपलोड मार्गदर्शक तत्त्वे:"}</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>{i18n.language === 'en' ? "Accepted formats: PDF, JPG, PNG" : "स्वीकृत स्वरूप: PDF, JPG, PNG"}</li>
                        <li>{i18n.language === 'en' ? "Maximum file size: 2 MB per file" : "कमाल फाइल साइझ: २ एमबी प्रति फाईल"}</li>
                        <li>{i18n.language === 'en' ? "Documents must be clear and readable" : "कागदपत्रे स्पष्ट आणि वाचनीय असावीत"}</li>
                        <li>{i18n.language === 'en' ? "Upload both front and back of Aadhaar cards" : "आधार कार्डाच्या समोर आणि मागील बाजू अपलोड करा"}</li>
                        <li>{i18n.language === 'en' ? "Colored scans preferred" : "रंगीत स्कॅन प्राधान्य दिले जाते"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "childAadhaar", label: t("birth_certificate.uploads.childAadhaar"), required: false },
                    { name: "motherAadhaar", label: t("birth_certificate.uploads.motherAadhaar"), required: true },
                    { name: "fatherAadhaar", label: t("birth_certificate.uploads.fatherAadhaar"), required: true },
                    { name: "parentsSignature", label: t("birth_certificate.uploads.signature"), required: true }
                  ].map(({ name, label, required }) => (
                    <div key={name} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
                      {!uploadedDocs[name] && (
  <>
    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      ref={(el) => (fileInputs.current[name] = el)}
      onChange={(e) => handleFileUpload(e, name)}
      className="hidden"
    />

    <button
      type="button"
      onClick={() => fileInputs.current[name]?.click()}
      className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-green-500 hover:text-green-700"
    >
      {i18n.language === "en" ? "Choose File" : "फाईल निवडा"}
    </button>
  </>
)}

                      {uploadedDocs[name] && (
  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2 mt-2">
    <div className="flex items-center gap-2 text-sm text-green-700">
      <CheckCircle className="w-4 h-4" />
      <span className="truncate max-w-[160px]">
        {uploadedDocs[name].name}
      </span>
    </div>

    <div className="flex gap-2">
     
      <button
        type="button"
        onClick={() => window.open(uploadedDocs[name].url, "_blank")}
        className="text-blue-600 text-xs font-semibold hover:underline"
      >
        View
      </button>

     
      <button
        type="button"
        onClick={() => {
          const copy = { ...uploadedDocs };
          delete copy[name];
          setUploadedDocs(copy);
        }}
        className="text-red-600 text-xs font-semibold hover:underline"
      >
        Remove
      </button>
    </div>
  </div>
)}

                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-4 md:pt-6">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors shadow-lg hover:shadow-xl w-full md:w-auto">
                  {t("birth_certificate.submitBtn")}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

     
 {showConfirm && (
  <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">

      <h3 className="text-xl font-bold text-green-800 mb-3">
        {t("confirmation.title")}
      </h3>

      <p className="text-gray-700 mb-6 text-sm leading-relaxed">
        {t("confirmation.message")}
      </p>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowPreview(true)}
          className="text-green-700 font-semibold hover:underline"
        >
          {t("confirmation.previewBtn")}
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setShowConfirm(false)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            {t("confirmation.cancel")}
          </button>
          <button
            onClick={confirmSubmit}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            {t("confirmation.confirm")}
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{showPreview && (
  <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-auto">
    <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6">

      <h3 className="text-2xl font-bold text-green-800 mb-6">
        {t("confirmation.previewTitle")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

        <PreviewItem label={t("birth_certificate.fields.childNameMar")} value={formData.childNameMarathi} />
        <PreviewItem label={t("birth_certificate.fields.childNameEng")} value={formData.childNameEnglish} />
        <PreviewItem label={t("birth_certificate.fields.birthDate")} value={formData.birthDate} />
        <PreviewItem label={t("birth_certificate.fields.motherName")} value={formData.motherName} />
        <PreviewItem label={t("birth_certificate.fields.fatherName")} value={formData.fatherName} />
        <PreviewItem label={t("birth_certificate.fields.mobile")} value={formData.mobile} />
        <PreviewItem label={t("birth_certificate.fields.address")} value={formData.address} />
        <PreviewItem label={t("birth_certificate.fields.birthPlace")} value={formData.birthPlace} />
        <PreviewItem label={t("birth_certificate.fields.relation")} value={formData.relation} />

        <PreviewItem label="Mother Name (Marathi)" value={formData.motherNameMarathi} />
<PreviewItem label="Father Name (Marathi)" value={formData.fatherNameMarathi} />

<PreviewItem label={t("birth_certificate.fields.motherAadhaar")} value={formData.aadhaarMother} />
<PreviewItem label={t("birth_certificate.fields.fatherAadhaar")} value={formData.aadhaarFather} />

<PreviewItem label={t("birth_certificate.fields.motherEdu")} value={formData.motherEducation} />
<PreviewItem label={t("birth_certificate.fields.fatherEdu")} value={formData.fatherEducation} />

<PreviewItem
  label={t("birth_certificate.fields.motherOcc")}
  value={
    formData.motherOccupation === "other"
      ? formData.motherOccupationOther
      : formData.motherOccupation
  }
/>

<PreviewItem
  label={t("birth_certificate.fields.fatherOcc")}
  value={
    formData.fatherOccupation === "other"
      ? formData.fatherOccupationOther
      : formData.fatherOccupation
  }
/>

<PreviewItem
  label={i18n.language === "en" ? "Uploaded Documents" : "अपलोड केलेली कागदपत्रे"}
  value={
    Object.keys(uploadedDocs).length
      ? Object.values(uploadedDocs)
          .map(doc => doc.name)
          .join(", ")
      : "-"
  }
/>



      </div>

      <div className="flex justify-end gap-3 mt-6">
      <button
  onClick={() => {
    setShowPreview(false);
    setShowConfirm(true);
  }}
  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
>
  {t("confirmation.cancel")}
</button>

      </div>
    </div>
  </div>
)}




    </div>
  );
}

function PreviewItem({ label, value }) {
  return (
    <div className="border rounded-lg p-3 bg-gray-50">
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className="font-semibold text-gray-800">
        {value || "-"}
      </p>
    </div>
  );
}
