import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      menu: {
        home: "Home",
        online_certificates: {
          title: "Online Certificates",
          submenu: {
            caste_certificate: "Caste Certificate",
            birth_certificate: "Birth Certificate",
            bpl_certificate: "BPL Certificate",
            marriage_certificate: "Marriage Certificate",
          },
        },
        water_supply: "Water Supply",
        property_tax: "Property Tax",
        construction: "Construction",
        tax_payment: "Tax Payment",
        about_gram_panchayat: "About Gram Panchayat",
        officials: "Officials",
        gram_vibhag: "Gram Vibhag",
        contact: "Contact",
        support: "Support",
        get_started: "Get Started",
      },
      slide1Title: "Akluj Gram Panchayat, Akluj",
      slide1Description: "Description of Akluj Gram Panchayat",
      slide2Title: "Gram Panchayat for You, in Your Service",
      slide2Description: "Description of Gram Panchayat Service",
      slide3Title: "Digital Gram Panchayat, Transparent Governance",
      slide3Description: "Description of Digital Governance",

      officials: [
        { name: "Mrs. Varsha Vishal Sartape", role: "Sarpanch" },
        { name: "Mr. Satyashil Mohite-Patil", role: "Deputy Sarpanch" },
        { name: "Mr. Ashok Chintu Shinde", role: "Member" },
        { name: "Mrs. Bharti Subhash Kumbhar", role: "Member" },
        { name: "Mr. Hirabai Tanaji Godse", role: "Member" },
        { name: "Mr. Vasant Uttam Mane", role: "Member" },
        { name: "Mrs. Ujjwala Sanjay Ekatpur", role: "Member" },
        { name: "Mrs. Meera Rajkumar Alagud", role: "Member" },
        { name: "Mr. Shrikant Rohidas Bhosale", role: "Member" },
        { name: "Mrs. Asha Balaso Patole", role: "Member" },
        { name: "Mr. Balu Ganpat Bankar", role: "Member" },
        { name: "Mrs. Savita Sunil Kadam", role: "Member" },
        { name: "Mr. Bharat Narayan Ekatpur", role: "Member" },
        { name: "Mr. Nathaji Vilasrao Mane Deshmukh", role: "Member" },
        { name: "Mrs. Laxmi Ramchandra Davare", role: "Member" },
        { name: "Mr. Rajendra Shahusathe", role: "Member" },
        { name: "Mr. Sachin Jalindar Dange", role: "Member" },
        { name: "Mrs. Jasmin Azeem Mulani", role: "Member" }
      ],

      updates: [
        "Update regarding information on the ZPFMS portal.",
        "Maharashtra ZP & Panchayat Act, 1961 till December 1, 2006",
        "Maharashtra ZP & Panchayat Act, 1961",
        "Instructions for uploading budget details to the LPRS system."
      ],

      links: [
        { text: "MahaeGram" },
        { text: "Panchayat Raj Sevaarth Portal" },
        { text: "Zilla Parishad Administration" },
        { text: "Rural Road Mapping" },
        { text: "WOMS MMGSY" },
        { text: "AuditOnline" }
      ],

      schemes: [
        {
          title: "Pradhan Mantri Awas Yojana",
          description: "Housing aid for the rural poor through ZPFMS updates."
        },
        {
          title: "Pilgrimage Development Program",
          description: "To enhance religious sites across Maharashtra."
        },
        {
          title: "Yashwantrao Panchayat Raj Abhiyan",
          description: "Strengthening the Panchayat Raj system."
        }
      ],

      gallery_title: "Photo Gallery",

      about_section: {
        title: "About the Department",
        description: `Akluj is well connected by road to major cities. A turn near Indapur on the Pune-Solapur highway leads to Akluj, located about 160 km from Pune. On the banks of the Nira River stands the Akluj Fort, a historic structure. The fort has fountains, greenery, and flower gardens at several places. Under the guidance of historian Babasaheb Purandare, sculptors Dinkarrao Thopte and Avinash Thopte have created a magnificent Shivsrushti inside the fort. The Mohite-Patil family played a special role in restoring the fort and creating the Shivsrushti. The restoration preserved the original structure while maintaining harmony with the new construction.`,
        more: "Read More"
      },

      read_more: "More Info",
      latest_updates: "Latest Updates",
      important_links: "Important Links",
      major_schemes: "Major Schemes",
    },
  },
  mr: {
    translation: {
      menu: {
        home: "मुख्यपृष्ठ",
        online_certificates: {
          title: "ऑनलाइन प्रमाणपत्रे",
          submenu: {
            caste_certificate: "जात प्रमाणपत्र",
            birth_certificate: "जन्म प्रमाणपत्र",
            bpl_certificate: "बीपीएल प्रमाणपत्र",
            marriage_certificate: "लग्न प्रमाणपत्र",
          },
        },
        water_supply: "पाणीपुरवठा",
        property_tax: "मालमत्ता कर",
        construction: "बांधकाम",
        tax_payment: "कर भरणा",
        about_gram_panchayat: "ग्रामपंचायत विषयी",
        officials: "अधिकारी",
        gram_vibhag: "ग्राम विभाग",
        contact: "संपर्क",
        support: "सहाय्य",
        get_started: "सुरू करा",
      },
      slide1Title: "अकलूज ग्राम पंचायत,अकलूज",
      slide1Description: "अकलूज ग्राम पंचायताची माहिती",
      slide2Title: "ग्रामपंचायत आपल्यासाठी, आपल्या सेवेत",
      slide2Description: "ग्राम पंचायत सेवा माहिती",
      slide3Title: "डिजिटल ग्रामपंचायत, पारदर्शक प्रशासन",
      slide3Description: "डिजिटल प्रशासनाची माहिती",

      officials: [
        { name: "श्रीमती वर्षा विशाल सर्तपे", role: "सरपंच" },
        { name: "श्री. सत्यशील मोहिते-पाटील", role: "उपसरपंच" },
        { name: "श्री. अशोक चिंतु शिंदे", role: "सदस्य" },
        { name: "श्रीमती भारती सुभाष कुंभार", role: "सदस्य" },
        { name: "श्री. हिराबाई तानाजी गोडसे", role: "सदस्य" },
        { name: "श्री. वसंत उत्तम माने", role: "सदस्य" },
        { name: "श्रीमती उज्ज्वला संजय एकतपूर", role: "सदस्य" },
        { name: "श्रीमती मीरा राजकुमार अलगुड", role: "सदस्य" },
        { name: "श्री. श्रीकांत रोहीदास भोसले", role: "सदस्य" },
        { name: "श्रीमती आशा बालासो पाटोळे", role: "सदस्य" },
        { name: "श्री. बाळू गणपत बांगर", role: "सदस्य" },
        { name: "श्रीमती सविता सुनील कदम", role: "सदस्य" },
        { name: "श्री. भारत नारायण एकतपूर", role: "सदस्य" },
        { name: "श्री. नथाजी विलासराव माने देशमुख", role: "सदस्य" },
        { name: "श्रीमती लक्ष्मी रामचंद्र डवरे", role: "सदस्य" },
        { name: "श्री. राजेंद्र शाहूसाठे", role: "सदस्य" },
        { name: "श्री. सचिन जलिंदर डांगे", role: "सदस्य" },
        { name: "श्रीमती जास्मिन अझीम मुलाणी", role: "सदस्य" }
      ],

      updates: [
        "जिल्हा परिषद फंड मॉनेटरिंग सिस्टीम, ZPFMS या संकेतस्थळावरील माहिती अद्ययावत करणेबाबत",
        "महाराष्ट्र जिल्हा परिषद व पंचायत समिती अधिनियम, 1961 1 डिसेंबर,2006 पर्यंत",
        "महाराष्ट्र जिल्हा परिषद व पंचायत समिती अधिनियम 1961",
        "लेखाशिर्ष २५१५-१२३८-व लेखाशिर्ष २५१५-१०१ मधील तरतुदी LPRS प्रणालीवर अपलोड करण्याबाबत."
      ],

      links: [
        { text: "महाईग्राम" },
        { text: "पंचायत राज सेवार्थ पोर्टल" },
        { text: "जिल्हा परिषद प्रशासन" },
        { text: "ग्रामीण मार्ग निर्धारण" },
        { text: "WOMS MMGSY" },
        { text: "AuditOnline" }
      ],

      schemes: [
        {
          title: "प्रधानमंत्री आवास योजना",
          description: "ग्रामीण भागातील गरीबांसाठी घरकुल योजनेची माहिती."
        },
        {
          title: "तीर्थक्षेत्र विकास कार्यक्रम",
          description: "राज्यातील धार्मिक स्थळांच्या विकासासाठी."
        },
        {
          title: "यशवंतराव पंचायत राज अभियान",
          description: "पंचायत राज प्रणाली मजबूत करण्यासाठी उपक्रम."
        }
      ],

      gallery_title: "फोटो गॅलरी",

      about_section: {
        title: "विभागाबद्दल",
        description: `अकलूज हे सोलापूर जिल्ह्यातील माळशिरस तालुक्यातील महत्त्वाचे शहर रस्त्याने सर्व शहरांशी जोडलेले आहे. पुणे-सोलापूर मार्गावर इंदापूर येथून अकलूजला जाणारा फाटा असुन पुणे -अकलूज अंतर १६० कि.मी आहे. या शहरात नीरा नदीच्या काठावर अकलुज(Akluj Fort) भूईकोट किल्ला उभा आहे. किल्ल्यात ठिकठिकाणी कारंजी, हिरवळ व फुलझाडे लावण्यात आलेली असुन शिवशाहीर बाबासाहेब पुरंदरे यांच्या मार्गदर्शनाखाली शिल्पकार श्री दिनकरराव थोपटे व अविनाश थोपटे यांनी किल्ल्यात एक भव्य शिवसृष्टी उभारली आहे. किल्ल्याचा जिर्णोध्दार व शिवसृष्टी उभारण्यासाठी मोहीते पाटील घराण्याने विशेष प्रयत्न केलेले आहेत. किल्ल्याचा जिर्णोध्दार करताना मूळ बांधकामास धक्का न लावता नवीन बांधकामाचा समतोल साधला गेला आहे.`,
        more: "अधिक माहिती"
      },

      read_more: "अधिक माहिती",
      latest_updates: "ताज्या घडामोडी",
      important_links: "महत्वाच्या लिंक्स",
      major_schemes: "प्रमुख योजना",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
