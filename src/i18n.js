import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
    
      tax_payment: {
        title: "Tax Payment",
        subtitle: "View Your Tax Details",
      
        consumerLabel: "Enter Consumer Number",
        consumerPlaceholder: "Enter your consumer number",
        searchButton: "Search",
      
        filterLabel: "Filter by Tax Type",
        allTaxes: "All Taxes",
      
        billDetails: "Bill Details",
        billNo: "Bill No",
        propertyNo: "Property No",
        ownerName: "Owner Name",
      
        taxType: "Tax Type",
      
        gharpattiTax: "Gharpatti Tax",
        waterCharge: "Water Charge",
        divakarTax: "Divakar Tax",
        arogyakarTax: "Arogyakar Tax",
      
        pending: "Pending",
        penalty: "Penalty",
        current: "Current",
        total: "Total",
      
        noData: "No records found for this consumer number",
        loading: "Loading...",
        error: "Error loading data. Please try again.",
        enterConsumerNo: "Please enter consumer number",
      
        showingResults: "Showing",
        of: "of",
        results: "results",
      
        previous: "Previous",
        next: "Next"
      },
      
     
      gramPanchayat: "Gram Panchayat",
      yashwantnagarGrampanchayat: "Yashwantnagar Grampanchayat",
      yashwantnagarMarathi: "यशवंतनगर ग्रामपंचायत",
      dashboard: "Dashboard",
      billRecord: "Bill Record",
      logout: "Logout",
        
      welcomeBack: "Welcome back, Admin!",
      happeningToday: "Here's what's happening in Yashwantnagar today",
      week: "Week",
      month: "Month",
      quarter: "Quarter",
      year: "Year",
      
      totalPopulation: "Total Population",
      totalHouseholds: "Total Households",
      pendingApplications: "Pending Applications",
      budgetUtilization: "Budget Utilization",
      

      govSchemesProgress: "Government Schemes Progress",
      viewAll: "View All",
      beneficiaries: "beneficiaries",
      budget: "Budget",
      complete: "Complete",
      
      mgnrega: "MGNREGA",
      pmAwasYojana: "PM Awas Yojana",
      yashwantraoPanchayat: "Yashwantrao Panchayat Raj Abhiyan",
      swachhBharat: "Swachh Bharat Mission",
      ayushmanBharat: "Ayushman Bharat",
   
      alerts: "Alerts",
      high: "High",
      
    
      applicationStatus: "Application Status",
      birthCertificate: "Birth Certificate",
      deathCertificate: "Death Certificate",
      propertyTax: "Property Tax",
      casteCertificate: "Caste Certificate",
      waterConnection: "Water Connection",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
      
     
      recentActivities: "Recent Activities",
      viewTimeline: "View Timeline",
      
 
      deptPendingTasks: "Department Wise Pending Tasks",
      waterSupply: "Water Supply",
      construction: "Construction",
      certificates: "Certificates",
      
   
      quickActions: "Quick Actions",
      approvePending: "Approve Pending",
      generateReport: "Generate Report",
      manageCitizens: "Manage Citizens",
      wardDetails: "Ward Details",
      
    
      searchByOwner: "Search by Owner Name, Property No, or Bill No...",
      filter: "Filter",
      export: "Export",
      view: "View",
      edit: "Edit",
      delete: "Delete",
      uploadExcel: "Upload Excel",
      addNew: "Add New",

      billNo: "Bill No",
      propertyNo: "Property No",
      ownerName: "Owner Name",
      gharpattiTax: "Gharpatti Tax",
      waterCharge: "Water Charge",
      divakarTax: "Divakar Tax",
      arogyakarTax: "Arogyakar Tax",
      penalty: "Penalty",
      current: "Current",
      total: "Total",
      noRecordsFound: "No records found",
      loadingRecords: "Loading records...",
      

      addNewBillRecord: "Add New Bill Record",
      editBillRecord: "Edit Bill Record",
      viewBillRecord: "View Bill Record",
      gharpattiPending: "Gharpatti - Pending",
      gharpattiPenalty: "Gharpatti - Penalty",
      gharpattiCurrent: "Gharpatti - Current",
      waterPending: "Water - Pending",
      waterCurrent: "Water - Current",
      divakarPending: "Divakar - Pending",
      divakarCurrent: "Divakar - Current",
      arogyakarPending: "Arogyakar - Pending",
      arogyakarCurrent: "Arogyakar - Current",
      saveRecord: "Save Record",
      saving: "Saving...",
      cancel: "Cancel",
      close: "Close",
      

      confirmDeletion: "Confirm Deletion",
      deleteConfirmMessage: "Are you sure you want to delete this bill record? This action cannot be undone.",
      

      uploadExcelFile: "Upload Excel File",
      upload: "Upload",
      
  
      adminLogin: "Admin Login",
      loginUsingGoogle: "Login using Google Account",
      loginWithGoogle: "Login with Google",

      title: "Tax Payment",
      subtitle: "View Your Tax Details",
      consumerLabel: "Enter Consumer Number",
      consumerPlaceholder: "Enter your consumer number",
      searchButton: "Search",
      billDetails: "Bill Details",
      billNo: "Bill No",
      propertyNo: "Property No",
      ownerName: "Owner Name",
      gharpattiTax: "Gharpatti Tax",
      waterCharge: "Water Charge",
      divakarTax: "Divakar Tax",
      arogyakarTax: "Arogyakar Tax",
      pending: "Pending",
      penalty: "Penalty",
      current: "Current",
      total: "Total",
      noData: "No records found for this consumer number",
      loading: "Loading...",
      error: "Error loading data. Please try again.",
      
      contact: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        description: "We'd love to hear from you. Please fill out the form or reach us through the contact information below.",
        address: "Address",
        address_details: "At post Yashwantnagar Tal. Malshiras Dist. Solapur,",
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
            form8extract: "Form 8 Extract",
            no_dues_certificate: "No Dues Certificate",
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

      file_upload: {
        choose: "Choose File",
        no_file: "No file selected",
        selected: "Selected file",
        instructions: "Upload Instructions",
        formats: "Accepted formats: PDF, JPG, PNG | Maximum size: 2 MB per file | Clear scan/photo required",
        size_error: "File size must be less than 2MB",
        format_error: "Please upload PDF, JPG, or PNG file only"
      },


      confirmation: {
        title: "Confirm Submission",
        message:
          "Are you sure you want to submit the Birth Certificate application? Please verify all details carefully before final submission.",
        previewBtn: "Preview Application",
        cancel: "Cancel",
        confirm: "Confirm & Submit",
        previewTitle: "Application Preview",
      },
      
      // Caste Certificate Enhanced
      caste: {
        title: "Caste Certificate",
        subtitle: "Online Caste Certificate Application",
        submit: "Submit Application",
        success: "✓ Caste Certificate Application Submitted Successfully!",
        
        documents_title: "Required Documents",
        documents: [
          "School Leaving Certificate / Birth Certificate",
          "Aadhaar Card",
          "Ration Card (if available)",
          "Self-declaration Form"
        ],
        
        download_title: "Download & Submit",
        download_btn: "Download Caste Certificate Application",
        download_desc: "Download the form, fill it manually and submit at Gram Panchayat",
        download_success: "Caste Certificate form downloaded successfully",
        online_title: "Online Application",
        online_desc: "Fill the form online, upload documents and submit digitally",
        proceed_btn: "Proceed with Online Form",
        back_btn: "Back to Options",



        
        sections: {
          applicant_details: "Applicant Details",
          caste_details: "Caste Details",
          documents: "Upload Documents"
        },


        errors: {
          required: "This field is required",
          name_required: "Name is required",
          name_invalid: "Only letters allowed (no numbers or symbols)",
          name_length: "Name must be between 20 and 40 characters",
          mobile_required: "Mobile number is required",
          mobile_invalid: "Mobile number must be 10 digits",
          upload_required: "This document is required",
          purpose_length: "Purpose must be at least 10 characters"
        },

          file_upload: {
            instructions: "Upload instructions",
            formats: "Allowed formats: PDF, JPG, PNG (Max size 2MB)",
            choose: "Choose File",
            size_error: "File size must be less than 2MB"
          },
        
          menu: {
            online_certificates: {
              title: "Online Certificates"
            }
          },
        
          caste: {
            download_title: "Download & Submit",
            download_desc: "Download the form, fill it manually and submit at Gram Panchayat",
            online_title: "Online Application",
            online_desc: "Fill the form online, upload documents and submit digitally",
            proceed_btn: "Proceed with Online Form",
            download_success: "Form downloaded successfully",
            back_btn: "Back to Options"
          },
        
        
        
        fields: {
          applicant_name: "Applicant's Full Name",
          applicant_address: "Full Address",
          applicant_mobile: "Mobile Number (10 digits)",
          caste_name: "Caste Name",
          purpose: "Purpose of Certificate"
        },
        
        uploads: {
          school_certificate: "School Leaving Certificate / Birth Certificate",
          aadhaar: "Aadhaar Card"
        },
        
        errors: {
          errors: {
            required: "This field is required",
          
            name_required: "Applicant name is required",
            name_invalid: "Name must contain only letters (no numbers or symbols)",
            name_length: "Name must be between 20 and 40 characters",
          
            mobile_required: "Mobile number is required",
            mobile_invalid: "Mobile number must be exactly 10 digits (numbers only)",
          
            upload_required: "Please upload this document"
          }
          
        }
     } ,

      // Marriage Certificate Enhanced
      marriage: {
        title: "Marriage Certificate",
        subtitle: "Apply online or download application form",
        choose: "Choose Application Method",
        
        download_title: "Download & Submit",
        download_desc: "Download the form, fill it manually and submit at Gram Panchayat",
        download_btn: "Download Application Form",
        
        online_title: "Online Application",
        online_desc: "Fill the form online, upload documents and submit digitally",
        proceed: "Proceed with Online Form",
        back: "Back to Options",
        
        submit: "Submit Application",
        success: "✓ Marriage Application Submitted Successfully!",
        
        requiredDocs: "Required Documents",
        docs: [
          "Marriage Registration Form (Form D)",
          "Bride & Groom Aadhaar Card",
          "Bride & Groom Passport Size Photos",
          "Three Witness Aadhaar Cards",
          "Priest Details & Signature"
        ],
        
        sections: {
          marriage: "Marriage Details",
          groom: "Groom Details",
          bride: "Bride Details",
          witness: "Witness Details (3 Required)",
          priest: "Priest Details",
          documents: "Upload Documents"
        },
        
        fields: {
          date: "Date of Marriage",
          place: "Place of Marriage",
          groom_name: "Groom Full Name",
          bride_name: "Bride Full Name",
          mobile: "Mobile Number (10 digits)",
          address: "Full Address",
          witness: "Witness Name",
          priest_name: "Priest Name",
          religion: "Religion"
        },
        
        uploads: {
          groom: "Groom Photo (Passport Size)",
          bride: "Bride Photo (Passport Size)",
          aadhaar: "Aadhaar Cards (Bride & Groom)"
        },
        
        errors: {
          required: "This field is required",
          only_letters: "Only letters (English/Marathi) are allowed",
          no_numbers: "Numbers are not allowed in name",
          no_symbols: "Symbols are not allowed in name",
          name_length: "Name must be between 2 and 40 characters",
          mobile_length: "Mobile number must be exactly 10 digits",
          mobile_invalid: "Please enter a valid 10-digit mobile number",
          only_numbers: "Only numbers are allowed",
          upload_required: "Please upload this document",
          file_size: "File size must be less than 2MB",
          date_required: "Date is required",
          place_required: "Place is required"
        }
      },

      // Birth Certificate - Parent Name Fields (addressing Bug_RR_001)
     birth_certificate: {
      title: "Birth Certificate",
      subtitle: "Apply online or download birth certificate application form",
      applicationMethods: "Choose Application Methods",
      option1Title: "Download & Submit",
      option1Desc: "Download the form, fill it manually and submit at Gra,m Panchyat",
      option2Title: "Online Application",
      option2Desc: "Fill the form online, upload documents and submit digitally",
      downloadBtn: "Download Application Form",
      proceedBtn: "Proceed with Online Form",
      childDetails:"Child Details",
      parentsDetails:"Parents Details",
      addressContact: "Address & Contact",
      educationOccupation: "Education & Occupation",
      birthPlaceDetails: "Birth Place Details",
      uploadDocuments: "Upload Documents",
      backBtn: "Back to Certificate Options",
      submitBtn: "Submit the Application ",

      uploads: {
        childAadhaar: "Child's Aadhaar Card",
        motherAadhaar: "Mother's Aadhaar Card",
        fatherAadhaar: "Father's Aadhaar Card",
        signature: "Parent's Signature",

      },


      fields: {
        childNameMar: "Child Name (मराठी - Marathi Only)",
        childNameEng: "Child Name (English Only)",
        birthDate: "Birth Date",
        motherName: "Mother Name (as per Aadhaar - English)",
        fatherName: "Father Name (as per Aadhaar - English)",
        motherAadhaar: "Mother Aadhaar Number (12 digits)",
        fatherAadhaar: "Father Aadhaar Number (12 digits)",
        address: "Permanent Address",
        mobile: "Mobile Number (10 digits)",
        motherEdu: "Mother Education",
        fatherEdu: "Father Education",
        motherOcc: "Mother Occupation",
        fatherOcc: "Father Occupation",
        birthPlace: "Birth Place / Hospital Name",
        relation: "Relation with Child"
      },

      errors: {
        required: "This field is required",
  
        only_marathi: "Please enter the full name in Marathi (Devanagari characters only)",
        only_english: "Please enter the full name in English letters only",
        only_letters: "Only letters are allowed (English or Marathi)",
        no_numbers: "Numbers are not allowed in the name",
        no_symbols: "Special symbols are not allowed in the name",
        name_length: "Name must be between 2 and 50 characters",
        mobile_required: "Mobile number is required",
        mobile_numbers: "Only numbers are allowed in mobile number",
        mobile_length: "Mobile number must be exactly 10 digits",
        aadhaar_length: "Aadhaar number must be exactly 12 digits",
        upload_required: "Please upload all required documents",
        fill_required_fields: "Please fill all required fields",
        submission_failed: "Please correct the highlighted errors and try again"
      },
      

     
      requiredDocs: "Required Documents",
      docs: [
        "Child's Aadhaar Card (if available)",
        "Mother's Aadhaar Card",
        "Father's Aadhaar Card"
      ]
    


     },
     education_options: {
      illiterate: "Illiterate",
      primary: "Primary",
      middle_school: "Middle School",
      tenth_pass: "10th Pass (SSC)",
      twelfth_pass: "12th Pass (HSC)",
      graduate: "Graduate",
      post_graduate: "Post Graduate",
      other: "Other"
    },

    occupation_options: {
      housewife: "Housewife",
      farmer: "Farmer",
      labourer: "Labourer",
      self_employed: "Self-Employed",
      private_service: "Private Service",
      government_service: "Government Service",
      business: "Business",
      student: "Student",
      unemployed: "Unemployed",
      retired: "Retired",
      other: "Other"
    },

    
      
      bpl_certificate: {
        title: "BPL Certificate",
        subtitle: "Below Poverty Line Certificate Application – Gram Panchayat",
        requiredDocs: "Required Documents",
        docs: [
          "Ration Card (Orange/Yellow/White)",
          "Aadhaar Card"
        ],
        applicationMethods: "Choose Application Method",
        option1Title: "Download & Submit",
        option1Desc: "Download the form, fill it manually, and submit at Gram Panchayat office",
        option2Title: "Online Application",
        option2Desc: "Fill the form online, upload required documents, and submit digitally",
        downloadBtn: "Download Application Form",
        proceedBtn: "Proceed with Online Form",
        backBtn: "Back to Options",
        submitBtn: "Submit Application",
        date: "Date",
        to: "To",
        sarpanch: "Hon. Sarpanch",
        gpOfficer: "Gram Panchayat Officer",
        gpName: "Gram Panchayat Yashvantnagar",
        applicant: "Applicant",
        name: "Name (Mr./Mrs.)",
        aadhaarNo: "Aadhaar Card Number",
        residentialAddress: "Residential Address",
        mobileNo: "Mobile Number",
        subject: "Subject",
        subjectText: "Regarding obtaining Below Poverty Line Certificate",
        bodyText: "In reference to the above subject, I request that I am a resident of Village",
        village: "Village",
        taluka: "Taluka",
        district: "District",
        rationCardText: "Mr./Mrs.",
        hasRationCard: "has a ration card",
        rationCardColor: "Ration Card Color",
        orange: "Orange (Keshari)",
        yellow: "Yellow (Pivala)",
        white: "White (Pandhra)",
        cardNumber: "Card Number",
        uploadDocs: "Upload Required Documents",
        uploadRation: "Upload Ration Card",
        uploadAadhaar: "Upload Aadhaar Card",
        success: "✓ BPL Certificate Application Submitted Successfully!",
        error: "⚠ Please fill all required fields"
      },
      
      nodues_certificate: {
        title: "No Dues Certificate",
        subtitle: "No Pending Dues Certificate Application – Gram Panchayat",
        requiredDocs: "Required Documents",
        docs: [
          "Property Tax Receipt (Gharpatti)",
          "Light Tax Receipt (Divakar)",
          "Health Tax Receipt (Arogyakar)",
          "Water Tax Receipt (Panipatti)"
        ],
        applicationMethods: "Choose Application Method",
        option1Title: "Download & Submit",
        option1Desc: "Download the form, fill it manually, and submit at Gram Panchayat office",
        option2Title: "Online Application",
        option2Desc: "Fill the form online, upload required documents, and submit digitally",
        downloadBtn: "Download Application Form",
        proceedBtn: "Proceed with Online Form",
        backBtn: "Back to Options",
        submitBtn: "Submit Application",
        date: "Date",
        to: "To",
        sarpanch: "Hon. Sarpanch",
        gpName: "Gram Panchayat Yashvantnagar",
        applicant: "Applicant",
        name: "Name (Mr./Mrs.)",
        aadhaarNo: "Aadhaar Card Number",
        residentialAddress: "Residential Address",
        mobileNo: "Mobile Number",
        bodyText: "In reference to the above subject, I request that I am a resident of Village",
        village: "Village",
        taluka: "Taluka",
        district: "District",
        propertyDetails: "Property Details",
        propertyOwner: "Property Owner Name (Mr./Mrs.)",
        propertyNumber: "Property/Malmattha Number",
        uploadDocs: "Upload Tax Receipts",
        uploadProperty: "Upload Property Tax Receipt",
        uploadLight: "Upload Light Tax Receipt",
        uploadHealth: "Upload Health Tax Receipt",
        uploadWater: "Upload Water Tax Receipt",
        charOnlyError: "Only characters are allowed (numbers and symbols not allowed)",
        aadhaarError: "Aadhaar number must be exactly 12 digits",
        fixErrors: "Please correct the highlighted fields",
        mobileError: "Mobile number must be exactly 10 digits",
        numberOnlyError: "Only numbers are allowed",
        success: "✓ No Dues Certificate Application Submitted Successfully!",
        error: "⚠ Please fill all required fields and upload at least one tax receipt"
      },
      
      form8_certificate: {
        title: "Form 8 Extract Certificate",
        subtitle: "Form 8 Extract (Property Record) Application – Gram Panchayat",
        requiredDocs: "Required Documents",
        docs: [
          "Aadhaar Card"
        ],
        applicationMethods: "Choose Application Method",
        option1Title: "Download & Submit",
        option1Desc: "Download the form, fill it manually, and submit at Gram Panchayat office",
        option2Title: "Online Application",
        option2Desc: "Fill the form online, upload required documents, and submit digitally",
        downloadBtn: "Download Application Form",
        proceedBtn: "Proceed with Online Form",
        backBtn: "Back to Options",
        submitBtn: "Submit Application",
        date: "Date",
        to: "To",
        sarpanch: "Hon. Sarpanch",
        gpName: "Gram Panchayat Yashvantnagar",
        applicant: "Applicant",
        name: "Name (Mr./Mrs.)",
        aadhaarNo: "Aadhaar Card Number",
        residentialAddress: "Residential Address",
        mobileNo: "Mobile Number",
        bodyText: "In reference to the above subject, I request that I am a resident of Village",
        village: "Village",
        taluka: "Taluka",
        district: "District",
        form8Details: "Form 8 Extract Details",
        personName: "Person Name (Mr./Mrs.) for whom Form 8 is required",
        purposeType: "Purpose Type",
        educational: "Educational",
        government: "Government",
        election: "Election",
        other: "Other",
        purposeDetails: "Purpose Details (Specify)",
        uploadDocs: "Upload Required Documents",
        uploadAadhaar: "Upload Aadhaar Card",
        success: "✓ Form 8 Extract Application Submitted Successfully!",
        error: "⚠ Please fill all required fields"
      },
     

      file_upload: {
        choose: "Choose File",
      
        selected: "Selected file"
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
        description: `Yashwantnagar is a village located in Malshiras taluka of Solapur district. This village is 119 km away from the district headquarter Solapur.Akluj is  the major city near Yashwantnagar. The village has religious tourist attractions like the Shiv Parvati Temple and Maruti Temple as well as entertainment attractions like multimedia leisure shows. Also, famous places like Anandi Ganesh Temple, Sayajiraje Water Park, Shiv Srushti Fort and Aklai Temple are within walking distance.`,
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

      tax_payment: {
        title: "कर भरणा",
        subtitle: "तुमचे कर तपशील पहा",
      
        consumerLabel: "ग्राहक क्रमांक प्रविष्ट करा",
        consumerPlaceholder: "तुमचा ग्राहक क्रमांक प्रविष्ट करा",
        searchButton: "शोधा",
      
        filterLabel: "कर प्रकारानुसार फिल्टर करा",
        allTaxes: "सर्व कर",
      
        billDetails: "बिल तपशील",
        billNo: "बिल क्र",
        propertyNo: "मालमत्ता क्र",
        ownerName: "मालकाचे नाव",
      
        taxType: "कर प्रकार",
      
        gharpattiTax: "घरपट्टी कर",
        waterCharge: "पाणी शुल्क",
        divakarTax: "दिवाकर कर",
        arogyakarTax: "आरोग्यकर",
      
        pending: "प्रलंबित",
        penalty: "दंड",
        current: "चालू",
        total: "एकूण",
      
        noData: "या ग्राहक क्रमांकासाठी कोणतेही रेकॉर्ड आढळले नाहीत",
        loading: "लोड करत आहे...",
        error: "डेटा लोड करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.",
        enterConsumerNo: "कृपया ग्राहक क्रमांक प्रविष्ट करा",
      
        showingResults: "दाखवत आहे",
        of: "पैकी",
        results: "नोंदी",
      
        previous: "मागील",
        next: "पुढील"
      },
      
    

      gramPanchayat: "ग्राम पंचायत",
      yashwantnagarGrampanchayat: "यशवंतनगर ग्रामपंचायत",
      yashwantnagarMarathi: "यशवंतनगर ग्रामपंचायत",
      dashboard: "डॅशबोर्ड",
      billRecord: "बिल रेकॉर्ड",
      logout: "बाहेर पडा",
      
  
      welcomeBack: "पुन्हा स्वागत आहे, प्रशासक!",
      happeningToday: "आज यशवंतनगर मध्ये काय चालले आहे",
      week: "आठवडा",
      month: "महिना",
      quarter: "तिमाही",
      year: "वर्ष",
      
      
      totalPopulation: "एकूण लोकसंख्या",
      totalHouseholds: "एकूण घरे",
      pendingApplications: "प्रलंबित अर्ज",
      budgetUtilization: "अर्थसंकल्प वापर",
  
      govSchemesProgress: "सरकारी योजना प्रगती",
      viewAll: "सर्व पहा",
      beneficiaries: "लाभार्थी",
      budget: "अर्थसंकल्प",
      complete: "पूर्ण",
      
     
      mgnrega: "मनरेगा",
      pmAwasYojana: "पीएम आवास योजना",
      yashwantraoPanchayat: "यशवंतराव पंचायत राज अभियान",
      swachhBharat: "स्वच्छ भारत मिशन",
      ayushmanBharat: "आयुष्मान भारत",
      

      alerts: "सूचना",
      high: "उच्च",
      
    
      applicationStatus: "अर्ज स्थिती",
      birthCertificate: "जन्म प्रमाणपत्र",
      deathCertificate: "मृत्यू प्रमाणपत्र",
      propertyTax: "मालमत्ता कर",
      casteCertificate: "जात प्रमाणपत्र",
      waterConnection: "पाणी कनेक्शन",
      pending: "प्रलंबित",
      approved: "मंजूर",
      rejected: "नाकारले",
      
     
      recentActivities: "अलीकडील क्रियाकलाप",
      viewTimeline: "टाइमलाइन पहा",
      
  
      deptPendingTasks: "विभागनिहाय प्रलंबित कार्ये",
      waterSupply: "पाणी पुरवठा",
      construction: "बांधकाम",
      certificates: "प्रमाणपत्रे",
      
      
      quickActions: "द्रुत क्रिया",
      approvePending: "प्रलंबित मंजूर करा",
      generateReport: "अहवाल तयार करा",
      manageCitizens: "नागरिक व्यवस्थापित करा",
      wardDetails: "प्रभाग तपशील",
      
      
      searchByOwner: "मालकाचे नाव, मालमत्ता क्र, किंवा बिल क्र द्वारे शोधा...",
      filter: "फिल्टर",
      export: "निर्यात",
      view: "पहा",
      edit: "संपादित करा",
      delete: "हटवा",
      uploadExcel: "एक्सेल अपलोड करा",
      addNew: "नवीन जोडा",
      
    
      billNo: "बिल क्र",
      propertyNo: "मालमत्ता क्र",
      ownerName: "मालकाचे नाव",
      gharpattiTax: "घरपट्टी कर",
      waterCharge: "पाणी शुल्क",
      divakarTax: "दिवाकर कर",
      arogyakarTax: "आरोग्यकर कर",
      penalty: "दंड",
      current: "चालू",
      total: "एकूण",
      noRecordsFound: "कोणतेही रेकॉर्ड आढळले नाहीत",
      loadingRecords: "रेकॉर्ड लोड होत आहेत...",
      
     
      addNewBillRecord: "नवीन बिल रेकॉर्ड जोडा",
      editBillRecord: "बिल रेकॉर्ड संपादित करा",
      viewBillRecord: "बिल रेकॉर्ड पहा",
      gharpattiPending: "घरपट्टी - प्रलंबित",
      gharpattiPenalty: "घरपट्टी - दंड",
      gharpattiCurrent: "घरपट्टी - चालू",
      waterPending: "पाणी - प्रलंबित",
      waterCurrent: "पाणी - चालू",
      divakarPending: "दिवाकर - प्रलंबित",
      divakarCurrent: "दिवाकर - चालू",
      arogyakarPending: "आरोग्यकर - प्रलंबित",
      arogyakarCurrent: "आरोग्यकर - चालू",
      saveRecord: "रेकॉर्ड जतन करा",
      saving: "जतन होत आहे...",
      cancel: "रद्द करा",
      close: "बंद करा",
      
     
      confirmDeletion: "हटवण्याची पुष्टी करा",
      deleteConfirmMessage: "तुम्हाला खात्री आहे की तुम्ही हे बिल रेकॉर्ड हटवू इच्छिता? ही क्रिया पूर्ववत केली जाऊ शकत नाही.",
      
   
      uploadExcelFile: "एक्सेल फाइल अपलोड करा",
      upload: "अपलोड",
      
     
      adminLogin: "प्रशासक लॉगिन",
      loginUsingGoogle: "गूगल खात्याचा वापर करून लॉगिन करा",
      loginWithGoogle: "गूगलसह लॉगिन करा",

      
      title: "कर भरणा",
    subtitle: "तुमचे कर तपशील पहा",
    
    // Language
    english: "English",
    marathi: "मराठी",
    
    // Search Section
    consumerLabel: "ग्राहक क्रमांक प्रविष्ट करा",
    consumerPlaceholder: "तुमचा ग्राहक क्रमांक प्रविष्ट करा",
    searchButton: "शोधा",
    
    // Bill Details
    billDetails: "बिल तपशील",
    billNo: "बिल क्र",
    propertyNo: "मालमत्ता क्र",
    ownerName: "मालकाचे नाव",
    
    // Tax Types
    gharpattiTax: "घरपट्टी कर",
    waterCharge: "पाणी शुल्क",
    divakarTax: "दिवाकर कर",
    arogyakarTax: "आरोग्यकर कर",
    
    // Tax Status
    pending: "प्रलंबित",
    penalty: "दंड",
    current: "वर्तमान",
    total: "एकूण",
    
    // Messages
    noData: "या ग्राहक क्रमांकासाठी कोणतेही रेकॉर्ड आढळले नाहीत",
    loading: "लोड करत आहे...",
    error: "डेटा लोड करताना त्रुटी. कृपया पुन्हा प्रयत्न करा.",
    enterConsumerNo: "कृपया ग्राहक क्रमांक प्रविष्ट करा",
    
    // Navigation
    home: "मुख्यपृष्ठ",
    dashboard: "डॅशबोर्ड",
    billRecord: "बिल रेकॉर्ड",
    taxPayment: "कर भरणा",
    
    // Actions
    view: "पहा",
    edit: "संपादित करा",
    delete: "हटवा",
    export: "निर्यात करा",
    filter: "फिल्टर",
    uploadExcel: "एक्सेल अपलोड करा",
    addNew: "नवीन जोडा",
    
    // Form Labels
    taxType: "कर प्रकार",
    amount: "रक्कम",
    dueDate: "देय तारीख",
    paymentDate: "पैसे भरण्याची तारीख",
    status: "स्थिती",
    
    // Status Types
    paid: "भरलेले",
    unpaid: "न भरलेले",
    overdue: "थकित",
    partial: "आंशिक",
     
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
            form8extract: "नमुना ८ उतारा",
            no_dues_certificate: "थकबाकी नसल्याचा दाखला",
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

      file_upload: {
        choose: "फाईल निवडा",
        no_file: "कोणतीही फाईल निवडलेली नाही",
        selected: "निवडलेली फाईल",
        instructions: "अपलोड सूचना",
        formats: "मान्य स्वरूप: PDF, JPG, PNG | कमाल आकार: प्रति फाइल २ MB | स्पष्ट स्कॅन/फोटो आवश्यक",
        size_error: "फाईल आकार २MB पेक्षा कमी असावा",
        format_error: "कृपया फक्त PDF, JPG किंवा PNG फाइल अपलोड करा"
      },


      confirmation: {
        title: "सबमिशनची खात्री",
        message:
          "आपण जन्म प्रमाणपत्र अर्ज सबमिट करू इच्छिता याची खात्री आहे का? अंतिम सबमिट करण्यापूर्वी सर्व तपशील काळजीपूर्वक तपासा.",
        previewBtn: "अर्ज पूर्वावलोकन",
        cancel: "रद्द करा",
        confirm: "सबमिट करा",
        previewTitle: "अर्जाचे पूर्वावलोकन",
      },

      


      caste: {
        title: "जातीचा दाखला",
        subtitle: "ऑनलाईन जातीचा दाखला अर्ज",
        submit: "अर्ज सबमिट करा",
        success: "✓ जातीचा दाखला अर्ज यशस्वीरित्या सबमिट झाला!",
        
        documents_title: "आवश्यक कागदपत्रे",
        documents: [
          "शाळा सोडल्याचा दाखला / जन्म दाखला",
          "आधार कार्ड",
          "रेशन कार्ड (असल्यास)",
          "स्वयंघोषणा"
        ],
        
        download_title: "डाउनलोड करून सबमिट करा",
        download_btn: "जातीचा दाखला अर्ज डाउनलोड करा",
        download_desc: "अर्जाचा नमुना डाउनलोड करून तो हाताने भरावा व ग्रामपंचायतीत सादर करावा",
download_success: "जात प्रमाणपत्राचा अर्ज यशस्वीरीत्या डाउनलोड झाला आहे",
online_title: "ऑनलाईन अर्ज",
online_desc: "ऑनलाईन अर्ज भरा, आवश्यक कागदपत्रे अपलोड करा आणि डिजिटल पद्धतीने सादर करा",
proceed_btn: "ऑनलाईन अर्ज सुरू करा",
back_btn: "मागे जा",

        
        sections: {
          applicant_details: "अर्जदाराची माहिती",
          caste_details: "जातीची माहिती",
          documents: "कागदपत्रे अपलोड करा"
        },

        
        

          errors: {
            required: "हा फील्ड भरणे आवश्यक आहे",
            name_required: "नाव भरणे आवश्यक आहे",
            name_invalid: "फक्त अक्षरे वापरा (अंक किंवा चिन्हे चालणार नाहीत)",
            name_length: "नाव 20 ते 40 अक्षरांमध्ये असणे आवश्यक आहे",
            mobile_required: "मोबाईल क्रमांक भरणे आवश्यक आहे",
            mobile_invalid: "मोबाईल क्रमांक 10 अंकी असावा",
            upload_required: "हे कागदपत्र अपलोड करणे आवश्यक आहे",
            purpose_length: "कारण किमान 10 अक्षरांचे असावे"
          },
        
        



          file_upload: {
            instructions: "फाईल अपलोड सूचना",
            formats: "मान्य फॉरमॅट: PDF, JPG, PNG (कमाल 2MB)",
            choose: "फाईल निवडा",
            size_error: "फाईलचा आकार 2MB पेक्षा कमी असावा"
          },
        
          menu: {
            online_certificates: {
              title: "ऑनलाइन प्रमाणपत्रे"
            }
          },
        
          caste: {
            download_title: "डाउनलोड आणि सबमिट",
            download_desc: "फॉर्म डाउनलोड करून भरून ग्रामपंचायत कार्यालयात सादर करा",
            online_title: "ऑनलाइन अर्ज",
            online_desc: "ऑनलाइन अर्ज भरा, कागदपत्रे अपलोड करा आणि सबमिट करा",
            proceed_btn: "ऑनलाइन फॉर्म सुरू करा",
            download_success: "फॉर्म यशस्वीरित्या डाउनलोड झाला",
            back_btn: "परत पर्यायांकडे"
          },
        
        
        
        fields: {
          applicant_name: "अर्जदाराचे पूर्ण नाव",
          applicant_address: "संपूर्ण पत्ता",
          applicant_mobile: "मोबाईल क्रमांक (१० अंक)",
          caste_name: "जातीचे नाव",
          purpose: "दाखल्याचा उद्देश"
        },
        
        uploads: {
          school_certificate: "शाळा सोडल्याचा दाखला / जन्म दाखला",
          aadhaar: "आधार कार्ड"
        },
        
        errors: {
          errors: {
            required: "हे क्षेत्र आवश्यक आहे",
          
            name_required: "अर्जदाराचे नाव आवश्यक आहे",
            name_invalid: "नावामध्ये फक्त अक्षरे असावीत (अंक किंवा चिन्हे नसावीत)",
            name_length: "नाव 20 ते 40 अक्षरांदरम्यान असावे",
          
            mobile_required: "मोबाईल क्रमांक आवश्यक आहे",
            mobile_invalid: "मोबाईल क्रमांक अचूक 10 अंकी असावा (फक्त अंक)",
          
            upload_required: "कृपया हा दस्तऐवज अपलोड करा"
          }
          
        }
      },

      marriage: {
        title: "विवाह प्रमाणपत्र",
        subtitle: "ऑनलाइन अर्ज करा किंवा अर्जाचा नमुना डाउनलोड करा",
        choose: "अर्ज करण्याची पद्धत निवडा",
        
        download_title: "डाउनलोड करून सादर करा",
        download_desc: "अर्ज डाउनलोड करा, माहिती भरून ग्रामपंचायत कार्यालयात सादर करा",
        download_btn: "अर्ज डाउनलोड करा",
        
        online_title: "ऑनलाइन अर्ज",
        online_desc: "ऑनलाइन अर्ज भरा, आवश्यक कागदपत्रे अपलोड करा व अर्ज सादर करा",
        proceed: "ऑनलाइन अर्ज सुरू करा",
        back: "परत पर्यायांवर",
        
        submit: "अर्ज सादर करा",
        success: "✓ विवाह अर्ज यशस्वीरीत्या सादर करण्यात आला!",
        
        requiredDocs: "आवश्यक कागदपत्रे",
        docs: [
          "विवाह नोंदणी अर्ज (फॉर्म D)",
          "वर व वधू यांचे आधार कार्ड",
          "वर व वधू यांचे पासपोर्ट साईज फोटो",
          "तीन साक्षीदारांचे आधार कार्ड",
          "पुरोहिताची माहिती व स्वाक्षरी"
        ],
        
        sections: {
          marriage: "विवाहाची माहिती",
          groom: "वराची माहिती",
          bride: "वधूची माहिती",
          witness: "साक्षीदारांची माहिती (३ आवश्यक)",
          priest: "पुरोहिताची माहिती",
          documents: "कागदपत्रे अपलोड करा"
        },
        
        fields: {
          date: "विवाहाची तारीख",
          place: "विवाहाचे ठिकाण",
          groom_name: "वराचे पूर्ण नाव",
          bride_name: "वधूचे पूर्ण नाव",
          mobile: "मोबाईल क्रमांक (१० अंक)",
          address: "संपूर्ण पत्ता",
          witness: "साक्षीदाराचे नाव",
          priest_name: "पुरोहिताचे नाव",
          religion: "धर्म"
        },
        
        uploads: {
          groom: "वराचा फोटो (पासपोर्ट साईज)",
          bride: "वधूचा फोटो (पासपोर्ट साईज)",
          aadhaar: "आधार कार्ड (वर व वधू)"
        },
        
        errors: {
          required: "हे क्षेत्र आवश्यक आहे",
          only_letters: "फक्त अक्षरे (इंग्रजी/मराठी) मान्य आहेत",
          no_numbers: "नावात अंक मान्य नाहीत",
          no_symbols: "नावात चिन्हे मान्य नाहीत",
          name_length: "नाव २ ते ४० अक्षरांपर्यंत असावे",
          mobile_length: "मोबाईल नंबर १० अंकी असावा",
          mobile_invalid: "कृपया वैध १० अंकी मोबाईल नंबर टाका",
          only_numbers: "फक्त अंक मान्य आहेत",
          upload_required: "कृपया हे कागदपत्र अपलोड करा",
          file_size: "फाईल आकार २MB पेक्षा कमी असावा",
          date_required: "तारीख आवश्यक आहे",
          place_required: "ठिकाण आवश्यक आहे"
        }
      },

      birth_certificate: {
        title: "जन्म प्रमाणपत्र",
        subtitle: "ऑनलाइन अर्ज करा किंवा अर्ज डाउनलोड करा",
        applicationMethods: "अर्ज पद्धत निवडा",
        requiredDocs: "आवश्यक कागदपत्रे",
        docs: [
          "बाळाचे आधारकार्ड झेरॉक्स( असल्यास ) ",
          "बाळाचे आई आणि वडील यांचे आधारकार्ड झेरॉक्स"
        ],
        option1Title: "डाउनलोड करून सादर करा",
        option1Desc: "फॉर्म डाउनलोड करा, भरा व ग्रामपंचायत कार्यालयात सादर करा",
        option2Title: "ऑनलाइन अर्ज",
        option2Desc: "ऑनलाइन अर्ज भरा, कागदपत्रे अपलोड करा",
        downloadBtn: "अर्ज डाउनलोड करा",
        proceedBtn: "ऑनलाइन फॉर्म सुरू करा",
        backBtn: "प्रमाणपत्र पर्यायांकडे परत जा",
      
        submitBtn: "अर्ज सादर करा",
        success: "✓ जन्म प्रमाणपत्र अर्ज यशस्वीरीत्या सादर झाला!",
        error: "⚠ कृपया सर्व आवश्यक माहिती भरा",
      
        uploadDocuments: "कागदपत्रे अपलोड करा",
      
        fields: {
          childNameMar: "बाळाचे नाव (मराठी)",
          childNameEng: "बाळाचे नाव (इंग्रजी)",
          birthDate: "जन्म तारीख",
          motherName: "आईचे नाव (आधार प्रमाणे)",
          fatherName: "वडिलांचे नाव (आधार प्रमाणे)",
          motherAadhaar: "आईचा आधार क्रमांक",
          fatherAadhaar: "वडिलांचा आधार क्रमांक",
          address: "कायमचा पत्ता",
          mobile: "मोबाइल क्रमांक",
          motherEdu: "आईचे शिक्षण",
          fatherEdu: "वडिलांचे शिक्षण",
          motherOcc: "आईचा व्यवसाय",
          fatherOcc: "वडिलांचा व्यवसाय",
          birthPlace: "जन्म स्थळ / रुग्णालय",
          relation: "बाळाशी नाते"
        },
      
        uploads: {
          childAadhaar: "बाळाचा आधार (ऐच्छिक)",
          motherAadhaar: "आईचा आधार",
          fatherAadhaar: "वडिलांचा आधार",
          signature: "पालकांची स्वाक्षरी"
        },
      
        errors: {
          required: "हे क्षेत्र आवश्यक आहे",
        

          only_marathi: "कृपया पूर्ण नाव मराठीत (देवनागरी लिपीमध्ये) भरा",
          only_english: "कृपया पूर्ण नाव फक्त इंग्रजी अक्षरांत भरा",
          only_letters: "फक्त इंग्रजी किंवा मराठी अक्षरे वापरा",
          no_numbers: "नावामध्ये अंक वापरू नका",
          no_symbols: "नावामध्ये विशेष चिन्हे वापरू नका",
          name_length: "नाव २ ते ५० अक्षरांचे असावे",
          mobile_required: "मोबाइल क्रमांक आवश्यक आहे",
          mobile_numbers: "मोबाइल क्रमांकात फक्त अंक वापरा",
          mobile_length: "मोबाइल क्रमांक १० अंकी असावा",
          aadhaar_length: "आधार क्रमांक १२ अंकी असावा",
          upload_required: "कृपया सर्व आवश्यक कागदपत्रे अपलोड करा",
          fill_required_fields: "कृपया सर्व आवश्यक माहिती भरा",
          submission_failed: "कृपया दाखवलेल्या चुका दुरुस्त करून पुन्हा प्रयत्न करा"
        }
        
      },
      
      // शिक्षण पर्याय
      education_options: {
        illiterate: "निरक्षर",
        primary: "प्राथमिक शिक्षण",
        middle_school: "माध्यमिक शिक्षण (इयत्ता ५ वी ते ७ वी)",
        tenth_pass: "उच्च माध्यमिक शिक्षण (इयत्ता १० वी उत्तीर्ण)",
        twelfth_pass: "उच्च माध्यमिक शिक्षण (इयत्ता १० वी उत्तीर्ण)",
        graduate: "पदवीधर (Graduate)",
        post_graduate: "पदव्युत्तर (Post Graduate)",
        other: "इतर"
      },

      

      // व्यवसाय पर्याय
      occupation_options: {
        housewife: "गृहिणी",
        farmer: "शेतकरी",
        labourer: "मजूर",
        self_employed: "स्वयंरोजगार",
        private_service: "खाजगी नोकरी",
        government_service: "शासकीय नोकरी",
        business: "व्यवसाय",
        student: "विद्यार्थी",
        unemployed: "बेरोजगार",
        retired: "निवृत्त",
        other: "इतर"
      },  
      
      download_title: "डाउनलोड व सादर करा",
download_btn: "जात प्रमाणपत्र अर्ज डाउनलोड करा",
download_desc: "अर्ज डाउनलोड करून तो हाताने भरा व ग्रामपंचायत कार्यालयात सादर करा",
download_success: "जात प्रमाणपत्र अर्ज यशस्वीरित्या डाउनलोड झाला आहे",
online_title: "ऑनलाईन अर्ज",
online_desc: "अर्ज ऑनलाईन भरा, आवश्यक कागदपत्रे अपलोड करा आणि डिजिटल पद्धतीने सादर करा",
proceed_btn: "ऑनलाईन अर्ज भरण्यास पुढे जा",
back_btn: "पर्यायांकडे परत जा",

      bpl_certificate: {
        title: "BPL दाखला",
        subtitle: "दारिद्र्य रेषे खालील दाखला अर्ज – ग्रामपंचायत",
        requiredDocs: "आवश्यक कागदपत्रे",
        docs: [
          "रेशन कार्ड (केशरी/पिवळे/पांढरे)",
          "आधार कार्ड"
        ],
        applicationMethods: "अर्ज पद्धत निवडा",
        option1Title: "डाउनलोड आणि सबमिट करा",
        option1Desc: "फॉर्म डाउनलोड करा, भरा आणि ग्रामपंचायत कार्यालयात सबमिट करा",
        option2Title: "ऑनलाइन अर्ज",
        option2Desc: "ऑनलाइन फॉर्म भरा, कागदपत्रे अपलोड करा आणि सबमिट करा",
        downloadBtn: "अर्ज फॉर्म डाउनलोड करा",
        proceedBtn: "ऑनलाइन फॉर्मसह पुढे जा",
        backBtn: "परत पर्यायांवर",
        submitBtn: "अर्ज सबमिट करा",
        date: "दिनांक",
        to: "प्रति",
        sarpanch: "मा. सरपंच",
        gpOfficer: "ग्रामपंचायत अधिकारी",
        gpName: "ग्रामपंचायत यशवंतनगर",
        applicant: "अर्जदार",
        name: "नाव (श्री/श्रीम.)",
        aadhaarNo: "आधार कार्ड क्रमांक",
        residentialAddress: "रा.",
        mobileNo: "मो.न.",
        subject: "विषय",
        subjectText: "दारिद्र्य रेषे खालील दाखला मिळणेबाबत....",
        bodyText: "वरील विषयास अनुसरून विनंती की, मी मौजे",
        village: "गाव",
        taluka: "ता.",
        district: "जि.",
        rationCardText: "येथील रहिवाशी आहे. मौजे यशवंतनगर मधील श्री/श्रीम.",
        hasRationCard: "यांचेकडे रेशन कार्ड आहे",
        rationCardColor: "रेशन कार्ड रंग",
        orange: "केशरी",
        yellow: "पिवळे",
        white: "पांढरे",
        cardNumber: "कार्ड क्रमांक",
        uploadDocs: "आवश्यक कागदपत्रे अपलोड करा",
        uploadRation: "रेशन कार्ड अपलोड करा",
        uploadAadhaar: "आधार कार्ड अपलोड करा",
        success: "✓ BPL दाखला अर्ज यशस्वीरित्या सबमिट झाला!",
        error: "⚠ कृपया सर्व आवश्यक फील्ड भरा"
      },
      
      nodues_certificate: {
        title: "येणे बाकी नसल्याचा दाखला",
        subtitle: "येणे बाकी नसल्याचा दाखला अर्ज – ग्रामपंचायत",
        requiredDocs: "आवश्यक कागदपत्रे",
        docs: [
          "घरपट्टी कर पावती",
          "दिवाकर कर पावती",
          "आरोग्यकर पावती",
          "पाणीपट्टी कर पावती"
        ],
        applicationMethods: "अर्ज पद्धत निवडा",
        option1Title: "डाउनलोड आणि सबमिट करा",
        option1Desc: "फॉर्म डाउनलोड करा, भरा आणि ग्रामपंचायत कार्यालयात सबमिट करा",
        option2Title: "ऑनलाइन अर्ज",
        option2Desc: "ऑनलाइन फॉर्म भरा, कर पावत्या अपलोड करा आणि सबमिट करा",
        downloadBtn: "अर्ज फॉर्म डाउनलोड करा",
        proceedBtn: "ऑनलाइन फॉर्मसह पुढे जा",
        backBtn: "परत पर्यायांवर",
        submitBtn: "अर्ज सबमिट करा",
        date: "दिनांक",
        to: "प्रति",
        sarpanch: "मा. सरपंच",
        gpName: "ग्रामपंचायत यशवंतनगर",
        applicant: "अर्जदार",
        name: "नाव (श्री/श्रीम.)",
        aadhaarNo: "आधार कार्ड क्रमांक",
        residentialAddress: "रा.",
        mobileNo: "मो.न.",
        bodyText: "वरील विषयास अनुसरून विनंती की, मी मौजे",
        village: "गाव",
        taluka: "ता.",
        district: "जि.",
        propertyDetails: "मालमत्ता तपशील",
        propertyOwner: "मालमत्ता मालकाचे नाव (श्री/श्रीम.)",
        propertyNumber: "मालमत्ता क्रमांक",
        uploadDocs: "कर भरलेल्या पावत्या अपलोड करा",
        uploadProperty: "घरपट्टी कर पावती अपलोड करा",
        uploadLight: "दिवाकर कर पावती अपलोड करा",
        uploadHealth: "आरोग्यकर पावती अपलोड करा",
        uploadWater: "पाणीपट्टी कर पावती अपलोड करा",
        charOnlyError: "फक्त अक्षरे वापरा (अंक किंवा चिन्हे चालणार नाहीत)",
        aadhaarError: "आधार क्रमांक नेमका १२ अंकी असावा",
        fixErrors: "कृपया दाखवलेल्या चुका दुरुस्त करा",
        mobileError: "मोबाईल क्रमांक १० अंकी असावा",
        numberOnlyError: "फक्त अंक वापरा",
        success: "✓ येणे बाकी दाखला अर्ज यशस्वीरित्या सबमिट झाला!",
        error: "⚠ कृपया सर्व आवश्यक फील्ड भरा आणि किमान एक कर पावती अपलोड करा"
      },
      
      form8_certificate: {
        title: "नमुना ८ उतारा",
        subtitle: "नमुना ८ उतारा (मालमत्ता नोंद) अर्ज – ग्रामपंचायत",
        requiredDocs: "आवश्यक कागदपत्रे",
        docs: [
          "आधार कार्ड"
        ],
        applicationMethods: "अर्ज पद्धत निवडा",
        option1Title: "डाउनलोड आणि सबमिट करा",
        option1Desc: "फॉर्म डाउनलोड करा, भरा आणि ग्रामपंचायत कार्यालयात सबमिट करा",
        option2Title: "ऑनलाइन अर्ज",
        option2Desc: "ऑनलाइन फॉर्म भरा, कागदपत्रे अपलोड करा आणि सबमिट करा",
        downloadBtn: "अर्ज फॉर्म डाउनलोड करा",
        proceedBtn: "ऑनलाइन फॉर्मसह पुढे जा",
        backBtn: "परत पर्यायांवर",
        submitBtn: "अर्ज सबमिट करा",
        date: "दिनांक",
        to: "प्रति",
        sarpanch: "मा. सरपंच",
        gpName: "ग्रामपंचायत यशवंतनगर",
        applicant: "अर्जदार",
        name: "नाव (श्री/श्रीम.)",
        aadhaarNo: "आधार कार्ड क्रमांक",
        residentialAddress: "रा.",
        mobileNo: "मो.न.",
        bodyText: "वरील विषयास अनुसरून विनंती की, मी मौजे",
        village: "गाव",
        taluka: "ता.",
        district: "जि.",
        form8Details: "नमुना ८ उतारा तपशील",
        personName: "ज्यांच्यासाठी नमुना ८ हवा आहे त्यांचे नाव (श्री/श्रीम.)",
        purposeType: "कारण प्रकार",
        educational: "शैक्षणिक",
        government: "शासकीय",
        election: "निवडणूक",
        other: "इतर",
        purposeDetails: "कारण तपशील (नमूद करा)",
        uploadDocs: "आवश्यक कागदपत्रे अपलोड करा",
        uploadAadhaar: "आधार कार्ड अपलोड करा",
        success: "✓ नमुना ८ उतारा अर्ज यशस्वीरित्या सबमिट झाला!",
        error: "⚠ कृपया सर्व आवश्यक फील्ड भरा"
      },
      
        
      

       
        

        form8: {
          title: "नमुना ८ उतारा",
          subtitle: "नमुना ८ उतारा (मालमत्ता नोंद) अर्ज – ग्रामपंचायत",
        
          requiredDocs: "आवश्यक कागदपत्रे",
          docs: [
            "आधार कार्ड (स्वत: साक्षांकित प्रत)"
          ],
        
          applicationMethods: "अर्ज पद्धत निवडा",
        
          option1Title: "डाउनलोड करून सबमिट करा",
          option1Desc:
            "अर्ज फॉर्म डाउनलोड करा, हाताने भरा व ग्रामपंचायत कार्यालयात सादर करा.",
        
          option2Title: "ऑनलाइन अर्ज",
          option2Desc:
            "ऑनलाइन अर्ज भरा, आवश्यक कागदपत्रे अपलोड करा व सबमिट करा.",
        
          downloadBtn: "अर्ज फॉर्म डाउनलोड करा",
          proceedBtn: "ऑनलाइन फॉर्म सुरू करा",
          backBtn: "परत पर्यायांकडे",
        
          applicant: "अर्जदाराची माहिती",
          name: "अर्जदाराचे नाव (श्री / श्रीमती)",
          aadhaarNo: "आधार कार्ड क्रमांक",
          residentialAddress: "राहण्याचा पत्ता",
          mobileNo: "मोबाईल क्रमांक",
        
          form8Details: "नमुना ८ उतारा तपशील",
          personName: "ज्यांच्यासाठी नमुना ८ हवा आहे त्यांचे नाव",
          purposeType: "कारणाचा प्रकार",
        
          educational: "शैक्षणिक",
          government: "शासकीय",
          election: "निवडणूक",
          other: "इतर",
        
          purposeDetails: "कारण (नमूद करा)",
        
          uploadDocs: "आवश्यक कागदपत्रे अपलोड करा",
          uploadAadhaar: "आधार कार्ड अपलोड करा (PDF / JPG / PNG, 2MB पर्यंत)",
        
          submitBtn: "अर्ज सबमिट करा",
        
          success:
            "✓ नमुना ८ उतारा अर्ज यशस्वीरित्या सबमिट झाला आहे. लवकरच आपल्याशी संपर्क केला जाईल.",
          error:
            "⚠ कृपया सर्व आवश्यक माहिती भरा व आवश्यक कागदपत्रे अपलोड करा."
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

