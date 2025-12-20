import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {

      contact: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        description: "We'd love to hear from you. Please fill out the form or reach us through the contact information below.",
        address: "Address",
        address_details: "  At post Yashwantnagar Tal. Malshiras Dist. Solapur,",
        address_pincode: "Pincode : 413118",
        phone: "Phone",
        phone_detail: "+91 9090552002",
        email: "Email",
        office_hours: "Office Hours",
        office_timedetails: "Monday – Saturday (9:00 AM – 5:00 PM)",
        office_lunchtime: "Lunch Break: 01:30 – 02:30",
        office_holiday: "Second and fourth Saturday will remain closed.",
        errors: {
          name_required: "Enter Your Name",
          name_invalid: "Please Enter Alphabets Only",
          phone_required: "Enter Phone Number",
          phone_invalid: "Please Enter 10 Digits Number",
          phone_only_number: "Please Enter Number Only",
          message_required: "Please Enter Your Message",

          name_max: "Full name cannot exceed 50 characters"


        },


        

                   
                   
        name: "Full Name",
        phone_label: "Phone Number",
        message: "Message",
        name_placeholder: "Enter your full name",
        phone_placeholder: "Enter 10-digit phone number",
        message_placeholder: "Write your message here...",
        send: "Send Message"
      },
 
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

      birth: {
        title: "Birth Certificate",
        subtitle: "Official Birth Registration Application – Gram Panchayat",
  
        documents_title: "Required Documents",
        documents: [
          "Child Aadhaar Card (if available)",
          "Mother Aadhaar Card",
          "Father Aadhaar Card",
          "Parents Signature"
        ],
  
        download_title: "Download Application Form",
        download_btn: "Download Birth Registration Form",
  
        form_title: "Online Birth Certificate Application",
  
        fields: {
          child_marathi: "Child Name (Marathi)",
          child_english: "Child Name (English)",
          birth_date: "Date of Birth",
          birth_place: "Place of Birth / Hospital Name",
          mother_name: "Mother's Name (as per Aadhaar Card)",
          father_name: "Father's Name (as per Aadhaar Card)",
          mother_edu: "Mother's Education",
          father_edu: "Father's Education",
          mother_occ: "Mother's Occupation",
          father_occ: "Father's Occupation",
          mobile: "Mobile Number",
          relation: "Relation with Child",
          address: "Permanent Address"
        },
  
        upload_title: "Upload Documents",
        uploads: {
          child_aadhaar: "Child Aadhaar Card (if available)",
          mother_aadhaar: "Mother Aadhaar Card",
          father_aadhaar: "Father Aadhaar Card",
          signature: "Parents Signature"
        },
  
        submit: "Submit Application"
      },

      marriage: {
        title: "Marriage Certificate Application",
        subtitle: "Apply online for Marriage Registration",
        submit: "Submit Application",
      
        documents_title: "Required Documents",
        documents: [
          "Marriage Registration Form (Form D)",
          "School Leaving / Birth / 10th or 12th Certificate of Bride & Groom",
          "Aadhaar Card & 2 Passport Size Photos (Bride & Groom)",
          "Ration Card (if resident of Yashwantnagar)",
          "Affidavit on ₹100 Stamp Paper",
          "Marriage Invitation Card (if available)",
          "Three witnesses above 18 years with Aadhaar & photos"
        ],
      
        download_title: "Download Application Form",
        download_btn: "Download Marriage Registration Form",
      
        fields: {
          groom_name: "Groom Full Name",
          bride_name: "Bride Full Name",
          marriage_date: "Date of Marriage",
          marriage_place: "Place of Marriage",
          mobile: "Mobile Number"
        }
      },
      


      
      slide1Title: "Yashvantnagar Gram Panchayat, Akluj",
      slide1Description: "Description of Yashvantnagar Gram Panchayat",
      slide2Title: "Gram Panchayat for You, in Your Service",
      slide2Description: "Description of Gram Panchayat Service",
      slide3Title: "Digital Gram Panchayat, Transparent Governance",
      slide3Description: "Description of Digital Governance",

      officials: [
        { name: "Mrs. Varsha Vishal Sartape", role: "Sarpanch" },
        { name: "Mr. Satyashil Mohite-Patil", role: "Deputy Sarpanch" },
        { name: "Mr. Ashok Chintu Shinde", role: "Member" },
        { name: "Mrs. Bharti Subhash Kumbhar", role: "Member" },
        { name: "Mrs. Hirabai Tanaji Godse", role: "Member" },
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
        description: `Yashwantnagar is a village located in Malshiras taluka of Solapur district. This village is 119 km away from the district headquarter Solapur.Akluj is  the major city near Yashwantnagar. The village has religious tourist attractions like the Shiv Parvati Temple and Maruti Temple as well as entertainment attractions like multimedia leisure shows. Also, famous places like Anandi Ganesh Temple, Sayajiraje Water Park, Shiv Srushti Fort and Aklai Temple are within walking distance.`,
        more: "Read More"
      },

      about_approach: {
        title: "Our Approach",
        description: "The vision of Yashwantnagar Gram Panchayat is focused on creating an ideal village developed with active participation of citizens, equipped with all basic amenities, environmentally friendly and economically viable.",
        vision_title: "Visions:-",
        vision_description1: "Socio-Economic Development - To make Yashwantnagar a self-sufficient and prosperous village, where every citizen will have an opportunity to live with dignity.",
        vision_description2: "Environment and Sanitation - To develop Yashwantnagar as a clean, beautiful and environment friendly ideal village.",
        vision_description3: "Governance and Participation – transparent, people-centric and dynamic in Yashwantnagar"

      },


      about_scope: {
        title: "Our Mission",
        point1: "Sustainable and All-round Development – ​​To achieve economic and social development of the village through effective implementation of all government schemes.",
        point2: "100% Literacy and Health – Making the village 100% literate and healthy. Increasing the efficiency of primary health centers and schools.",
        point3: "Clean and Beautiful Village - Creating a beautiful village that is waste free and environmentally conscious, including a pollution free village.",
      },

      read_more: "More Info",
      latest_updates: "Latest Updates",
      important_links: "Important Links",
      major_schemes: "Major Schemes",
    },
  },
  mr: {
    translation: {
    
      contact: {
        title: "संपर्क करा",
        subtitle: "आमच्याशी संपर्क साधा",
        description: "कृपया फॉर्म भरा किंवा खाली दिलेल्या संपर्क माहितीद्वारे आमच्याशी संपर्क साधा.",
        address: "पत्ता",
        address_details: "मुक्काम पोस्ट यशवंतनगर,  ता. माळशिरस जि. सोलापूर,",
        address_pincode: "पिन कोड-४१३११८ ",
        phone: "संपर्क क्रमांक",
        phone_detail: "+९१ ९०९०५५२००२",
        email: "ईमेल",
        office_hours: "कार्यालयीन वेळ",
        office_timedetails: "सोमवार - शनिवार (सकाळी ९:०० ते संध्याकाळी ५:००)",
        office_lunchtime: "जेवणाची वेळ: ०१:३० ते ०२:३०",
        office_holiday: "दुसरा आणि चौथा शनिवार सुट्टी राहील.",

          errors: {
            name_required: "आपले नाव टाका",
            name_invalid: "कृपया फक्त अक्षरे टाका",
            phone_required: "आपला मोबाईल नंबर टाका",
            phone_invalid: "कृपया १० अंकी मोबाईल नंबर टाका",
            phone_only_number: "कृपया फक्त अंक टाका",
            message_required: "कृपया आपला संदेश टाका",

            name_max: "नाव 50 अक्षरांपेक्षा जास्त असू शकत नाही"

          },
      
        



        name: "पूर्ण नाव",
        phone_label: "मोबाईल क्रमांक",
        message: "संदेश",
        name_placeholder: "आपले पूर्ण नाव लिहा",
        phone_placeholder: "१० अंकी मोबाईल क्रमांक टाका",
        message_placeholder: "आपला संदेश येथे लिहा...",
        send: "संदेश पाठवा"
      },
      

     

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

      birth: {
        title: "जन्म प्रमाणपत्र",
        subtitle: "अधिकृत जन्म नोंदणी अर्ज – ग्रामपंचायत",
  
        documents_title: "आवश्यक कागदपत्रे",
        documents: [
          "बाळाचे आधारकार्ड (असल्यास)",
          "आईचे आधारकार्ड",
          "वडिलांचे आधारकार्ड",
          "पालकांची सही"
        ],
  
        download_title: "अर्ज डाउनलोड करा",
        download_btn: "जन्म नोंदणी अर्ज डाउनलोड करा",
  
        form_title: "ऑनलाईन जन्म प्रमाणपत्र अर्ज",
  
        fields: {
          child_marathi: "बाळाचे नाव (मराठी)",
          child_english: "बाळाचे नाव (इंग्रजी)",
          birth_date: "जन्म तारीख",
          birth_place: "जन्म ठिकाण / हॉस्पिटल नाव",
          mother_name: "आईचे नाव (आधारकार्ड नुसार)",
          father_name: "वडिलांचे नाव (आधारकार्ड नुसार)",
          mother_edu: "आईचे शिक्षण",
          father_edu: "वडिलांचे शिक्षण",
          mother_occ: "आईचा व्यवसाय",
          father_occ: "वडिलांचा व्यवसाय",
          mobile: "मोबाईल नंबर",
          relation: "बाळाशी नाते",
          address: "कायमचा पत्ता"
        },
  
        upload_title: "कागदपत्र अपलोड करा",
        uploads: {
          child_aadhaar: "बाळाचे आधारकार्ड (असल्यास)",
          mother_aadhaar: "आईचे आधारकार्ड",
          father_aadhaar: "वडिलांचे आधारकार्ड",
          signature: "पालकांची सही"
        },
  
        submit: "अर्ज सबमिट करा"
      },

      marriage: {
        title: "विवाह नोंदणी प्रमाणपत्र अर्ज",
        subtitle: "ऑनलाईन विवाह नोंदणी अर्ज",
        submit: "अर्ज सबमिट करा",
      
        documents_title: "कागदपत्रे",
        documents: [
          "विवाह नोंदणी अर्ज (Form D)",
          "मुलगा व मुलीचा जन्म / शाळा सोडल्याचा / 10वी-12वी प्रमाणपत्र",
          "मुलगा व मुलीचे आधार कार्ड व 2 फोटो",
          "यशवंतनगर रहिवासी असल्यास रेशन कार्ड",
          "₹100 स्टॅम्पवरील प्रतिज्ञापत्र",
          "लग्नपत्रिका (उपलब्ध असल्यास)",
          "३ साक्षीदार – आधार व फोटो"
        ],
      
        download_title: "अर्ज डाउनलोड करा",
        download_btn: "विवाह नोंदणी अर्ज डाउनलोड",
      
        fields: {
          groom_name: "वराचे पूर्ण नाव",
          bride_name: "वधूचे पूर्ण नाव",
          marriage_date: "लग्नाची तारीख",
          marriage_place: "लग्नाचे ठिकाण",
          mobile: "मोबाईल नंबर"
        }
      },
      


  
  
      slide1Title: "यशवंतनगर ग्रामपंचायत, यशवंतनगर",
      slide1Description: "यशवंतनगर ग्राम पंचायताची माहिती",
      slide2Title: "ग्रामपंचायत आपल्यासाठी, आपल्या सेवेत",
      slide2Description: "ग्राम पंचायत सेवा माहिती",
      slide3Title: "डिजिटल ग्रामपंचायत, पारदर्शक प्रशासन",
      slide3Description: "डिजिटल प्रशासनाची माहिती",

      officials: [
        { name: "श्रीमती. वर्षा विशाल सरतापे", role: "सरपंच" },
        { name: "श्री. सत्यशील मोहिते-पाटील", role: "उपसरपंच" },
        { name: "श्री. अशोक चिंतु शिंदे", role: "सदस्य" },
        { name: "श्रीमती. भारती सुभाष कुंभार", role: "सदस्य" },
        { name: "श्रीमती. हिराबाई तानाजी गोडसे", role: "सदस्य" },
        { name: "श्री. वसंत उत्तम माने", role: "सदस्य" },
        { name: "श्रीमती. उज्वला संजय एकतपुर", role: "सदस्य" },
        { name: "श्रीमती. मीरा राजकुमार अलगुड", role: "सदस्य" },
        { name: "श्री. श्रीकांत रोहीदास भोसले", role: "सदस्य" },
        { name: "श्रीमती. आशा बाळासो पाटोळे", role: "सदस्य" },
        { name: "श्री. बाळू गणपत बनकर" , role: "सदस्य" },
        { name: "श्रीमती. सविता सुनील कदम" , role: "सदस्य" },
        { name: "श्री. भारत नारायण एकतपूर", role: "सदस्य" },
        { name: "श्री. नथाजी विलासराव माने देशमुख", role: "सदस्य" },
        { name: "श्रीमती. लक्ष्मी रामचंद्र डावरे", role: "सदस्य" },
        { name: "श्री. राजेंद्र शाहूसाठे", role: "सदस्य" },
        { name: "श्री. सचिन जलिंदर डांगे", role: "सदस्य" },
        { name: "श्रीमती. जास्मिन अझीम मुल्लाणी", role:"सदस्य" },
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
        description: `यशवंतनगर हे सोलापूर जिल्ह्यातील माळशिरस तालुक्यात वसलेले एक गाव आहे. हे गाव सोलापूर जिल्हा मुख्यालयापासून ११९ किमी अंतरावर आहे. अकलूज हे यशवंतनगर जवळील प्रमुख शहर आहे. गावात शिव पार्वती मंदिर आणि मारुती मंदिर सारखी धार्मिक पर्यटन स्थळे तसेच मल्टीमीडिया फुरसतीचे कार्यक्रम सारखी मनोरंजन स्थळे आहेत. तसेच, आनंदी गणेश मंदिर, सयाजीराजे वॉटर पार्क, शिवसृष्टी किल्ला आणि अकलई मंदिर सारखी प्रसिद्ध ठिकाणे चालण्याच्या अंतरावर आहेत.`,
        more: "अधिक माहिती"
      },

      about_approach: {
        title: " आमचा दृष्टिकोन",
        description: "यशवंतनगर ग्रामपंचायतीचा दृष्टीकोन हा नागरिकांच्या सक्रिय सहभागाने विकसित झालेले, सर्व मूलभूत सुविधांनी युक्त, पर्यावरणपूरक आणि आर्थिकदृष्ट्या सक्षम असे आदर्श गाव निर्माण करण्यावर केंद्रित आहे. ",
        vision_title: "  दृष्टीकोन :",
        vision_description1: "सामाजिक आणि आर्थिक विकास (Socio-Economic Development) - यशवंतनगरला स्वयंपूर्ण आणि समृद्ध गाव बनवणे, जिथे प्रत्येक नागरिकाला सन्मानाने जगण्याची संधी मिळेल.",
        vision_description2: "पर्यावरण आणि स्वच्छता (Environment and Sanitation) - यशवंतनगरला स्वच्छ, सुंदर आणि पर्यावरणाची काळजी घेणारे आदर्श गाव म्हणून विकसित करणे.",
        vision_description3: "प्रशासन आणि लोकसहभाग (Governance and Participation) - यशवंतनगरमध्ये पारदर्शक, लोक-केंद्रित आणि गतिमान स्थानिक प्रशासन स्थापित करणे.",

      },


      about_scope: {
        title: "आमचे ध्येय",
        point1: "शाश्वत आणि सर्वांगीण विकास -  सर्व सरकारी योजनांची प्रभावी अंमलबजावणी करून गावाचा आर्थिक आणि सामाजिक विकास साधणे.",
        point2: "१००% साक्षरता आणि आरोग्य -  गाव १००% साक्षर आणि निरोगी बनवणे. प्राथमिक आरोग्य केंद्रे आणि शाळांची कार्यक्षमता वाढवणे.",
        point3: "स्वच्छ आणि सुंदर गाव - 'हागणदारीमुक्त गाव' यासह कचरामुक्त आणि पर्यावरणाची काळजी घेणारे सुंदर गाव निर्माण करणे."
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
  lng: localStorage.getItem("i18nextLng") || "en",



  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

