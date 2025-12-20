import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MarriageCertificate() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});



  const validateLettersOnly = (value) => {
    if (!value) return "This field is required";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only alphabets allowed";
    return "";
  };

  const validateName = (value) => {
    if (!value) return "This field is required";
    if (!/^[A-Za-z\s]+$/.test(value)) return "Only alphabets allowed";
    if (value.length < 2 || value.length > 40)
      return "Must be 2 to 40 characters";
    return "";
  };

  const validateMobile = (value) => {
    if (!value) return "Mobile number is required";
    if (!/^\d+$/.test(value)) return "Only numbers allowed";
    if (value.length !== 10) return "Mobile number must be 10 digits";
    return "";
  };

  const validateDate = (value) => {
    if (!value) return "This field is required";
    return "";
  };

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name.includes("name")) error = validateName(value);
    if (name.includes("mobile")) error = validateMobile(value);
    if (name.includes("date")) error = validateDate(value);
    if (name.includes("place")) error = validateLettersOnly(value);

    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: error }));
  };



  const handleFileChange = (e) => {
    const { name, files: selected } = e.target;
    if (!selected[0]) return;

    const file = selected[0];

    
    if (file.size > 2 * 1024 * 1024) {
      alert("Photo size must be less than 2MB");
      return;
    }

    setLoading((p) => ({ ...p, [name]: true }));

    setTimeout(() => {
      setFiles((p) => ({ ...p, [name]: file.name }));
      setLoading((p) => ({ ...p, [name]: false }));
    }, 800);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (key.includes("name")) newErrors[key] = validateName(value);
      if (key.includes("mobile")) newErrors[key] = validateMobile(value);
      if (key.includes("date")) newErrors[key] = validateDate(value);
      if (key.includes("place")) newErrors[key] = validateLettersOnly(value);
    });

    if (
      !files.groomPhoto ||
      !files.bridePhoto ||
      !files.groomAadhaar ||
      !files.brideAadhaar
    ) {
      alert("Please upload all required documents");
      return;
    }

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    console.log({ formData, files });
    alert(t("marriage.submit"));
  };

  

  return (
    <div className="bg-[#f0fdf4] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">
            {t("marriage.title")}
          </h1>
          <p className="text-gray-600 mt-2">{t("marriage.subtitle")}</p>
        </div>

      
        <div className="bg-white p-6 rounded-xl shadow mb-6 border-l-4 border-green-600">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            {t("marriage.documents_title")}
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            {t("marriage.documents", { returnObjects: true }).map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

    
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            {t("marriage.download_title")}
          </h3>
          <a
            href="/विवाह नोंदणी अर्ज.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
          >
            {t("marriage.download_btn")}
          </a>
        </div>

   
        {/* <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(t("marriage.fields", { returnObjects: true })).map(
              ([key, label]) => (
                <div key={key}>
                  <input
                    type={key.includes("date") ? "date" : "text"}
                    name={key}
                    placeholder={label}
                    value={formData[key] || ""}
                    onChange={handleChange}
                    className={`border p-3 rounded-md w-full ${
                      errors[key] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors[key] && (
                    <p className="text-red-600 text-sm">{errors[key]}</p>
                  )}
                </div>
              )
            )}
          </div>

         
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <UploadBox label="Groom Photo" name="groomPhoto" onChange={handleFileChange} />
            <UploadBox label="Bride Photo" name="bridePhoto" onChange={handleFileChange} />
            <UploadBox label="Groom Aadhaar" name="groomAadhaar" onChange={handleFileChange} />
            <UploadBox label="Bride Aadhaar" name="brideAadhaar" onChange={handleFileChange} />
          </div>

          <button className="mt-10 bg-green-600 text-white px-8 py-3 rounded-md">
            {t("marriage.submit")}
          </button>
        </form> */}
      </div>
    </div>
  );
}


function UploadBox({ label, name, onChange }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <label className="block font-medium mb-2">{label}</label>
      <input type="file" name={name} accept=".jpg,.png,.pdf" onChange={onChange} />
    </div>
  );
}
