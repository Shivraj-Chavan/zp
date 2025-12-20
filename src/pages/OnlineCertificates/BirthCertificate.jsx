import { useState } from "react";
import { useTranslation } from "react-i18next";



export default function BirthCertificate() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});

  const validateLettersOnly = (value) => {
    if (!value) return "This field is required";
    if (!/^[A-Za-z\s]+$/.test(value))
      return "Only alphabets allowed";
    return "";
  };
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";
  
   
    if (
      name.includes("child_english") ||
      name.includes("mother_name") ||
      name.includes("father_name")
    ) {
      error = validateName(value);
    }
  
    
    if (name.includes("child_marathi")) {
      if (!value) error = "This field is required";
      else if (value.length < 2 || value.length > 30)
        error = "Must be 2 to 30 characters";
    }
  
    
    if (name.includes("mobile")) {
      error = validateMobile(value);
    }
  
    
    if (
      name.includes("place") ||
      name.includes("occupation")
    ) {
      error = validateLettersOnly(value);
    }
  
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  
  
  

  const handleFileChange = (e) => {
    const { name, files: selected } = e.target;
    if (!selected[0]) return;

    setLoading((p) => ({ ...p, [name]: true }));

    
    setTimeout(() => {
      setFiles((p) => ({ ...p, [name]: selected[0].name }));
      setLoading((p) => ({ ...p, [name]: false }));
    }, 800);
  };

  const validateName = (value) => {
    if (!value) return "This field is required";
    if (!/^[A-Za-z\s]+$/.test(value))
      return "Only alphabets allowed";
    if (value.length < 2 || value.length > 30)
      return "Must be 2 to 30 characters";
    return "";
  };
  
  const validateMobile = (value) => {
    if (!value) return "Mobile number is required";
    if (!/^\d+$/.test(value))
      return "Only numbers allowed";
    if (value.length !== 10)
      return "Mobile number must be 10 digits";
    return "";
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let newErrors = {};
  
    Object.keys(formData).forEach((key) => {
      const value = formData[key] || "";
  
      // Mobile validation
      if (key.includes("mobile")) {
        newErrors[key] = validateMobile(value);
      }
  
      // Place of birth & occupation (letters only)
      else if (
        key.includes("place") ||
        key.includes("occupation")
      ) {
        newErrors[key] = validateLettersOnly(value);
      }
  
      // English name fields
      else if (
        key.includes("child_english") ||
        key.includes("mother_name") ||
        key.includes("father_name")
      ) {
        newErrors[key] = validateName(value);
      }
  
      // Marathi name (length only, no regex)
      else if (key.includes("child_marathi")) {
        if (!value) newErrors[key] = "This field is required";
        else if (value.length < 2 || value.length > 30)
          newErrors[key] = "Must be 2 to 30 characters";
      }
    });
  
    // Required files check
    if (!files.motherAadhaar || !files.fatherAadhaar || !files.signature) {
      alert("Please upload all required documents");
      return;
    }
  
    setErrors(newErrors);
  
    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;
  
    console.log({ formData, files });
    alert(t("birth.submit"));
  };
  
  

  return (
    <div className="bg-[#f0fdf4] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">
            {t("birth.title")}
          </h1>
          <p className="text-gray-600 mt-2">
            {t("birth.subtitle")}
          </p>
        </div>

     
        <div className="bg-white p-6 rounded-xl shadow mb-6 border-l-4 border-green-600">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            {t("birth.documents_title")}
          </h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            {t("birth.documents", { returnObjects: true }).map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            {t("birth.download_title")}
          </h3>
          <a href="/जन्म अर्ज.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
            {t("birth.download_btn")}
            </a>



        </div>

{/*       
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-6">
            {t("birth.form_title")}
          </h3>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {Object.entries(t("birth.fields", { returnObjects: true })).map(
    ([key, label]) => (
      <div key={key}>

     
        {key === "birth_date" ? (
          <input
            type="date"
            name={key}
            value={formData[key] || ""}
            max={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className={`border p-3 rounded-md w-full
              ${errors[key]
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"}`}
          />
        ) : (
          <input
            type={key === "mobile" ? "tel" : "text"}
            name={key}
            placeholder={label}
            value={formData[key] || ""}
            onChange={handleChange}
            maxLength={
              key === "mobile" ? 10 :
              key.includes("occupation") ? 40 :
              30
            }
            className={`border p-3 rounded-md w-full
              ${errors[key]
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"}`}
          />
        )}

        {errors[key] && (
          <p className="text-red-600 text-sm mt-1">
            {errors[key]}
          </p>
        )}
      </div>
    )
  )}
</div>


          
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-green-700 mb-6">
              {t("birth.upload_title")}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <UploadBox
                label={t("birth.uploads.child_aadhaar")}
                name="childAadhaar"
                required={false}
                files={files}
                loading={loading}
                onChange={handleFileChange}
              />

              <UploadBox
                label={t("birth.uploads.mother_aadhaar")}
                name="motherAadhaar"
                required
                files={files}
                loading={loading}
                onChange={handleFileChange}
              />

              <UploadBox
                label={t("birth.uploads.father_aadhaar")}
                name="fatherAadhaar"
                required
                files={files}
                loading={loading}
                onChange={handleFileChange}
              />

              <UploadBox
                label={t("birth.uploads.signature")}
                name="signature"
                required
                accept=".jpg,.png"
                files={files}
                loading={loading}
                onChange={handleFileChange}
              />

            </div>
          </div>

          <button
            type="submit"
            className="mt-10 bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition"
          >
            {t("birth.submit")}
          </button>
        </form> */}
      </div>
    </div>
  );
}



function UploadBox({ label, name, required, accept, files, loading, onChange }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <label className="block font-medium text-gray-800 mb-2">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      <input
        type="file"
        name={name}
        accept={accept || ".pdf,.jpg,.png"}
        onChange={onChange}
        required={required}
        className="
          w-full text-sm text-gray-400
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:bg-gray-200 file:text-gray-600
          hover:file:bg-gray-300
        "
      />

      <div className="mt-2 text-sm">
        {loading[name] && (
          <span className="text-blue-600 animate-pulse">
            Uploading...
          </span>
        )}

        {!loading[name] && files[name] && (
          <span className="text-green-700 font-medium">
            ✔ {files[name]}
          </span>
        )}

        {!loading[name] && !files[name] && (
          <span className="text-gray-400">
            No file selected
          </span>
        )}
      </div>
    </div>
  );
}
