// Mock data for Kamakhya Clinic & Lab

export const clinicInfo = {
  name: "Kamakhya Clinic & Lab",
  tagline: "Your Trusted Family Healthcare Partner Since 1980",
  previousName: "Formerly Sharda Clinic & Laboratory",
  established: 1980,
  address: "B-5/157, Safdarjung Enclave (Basement), New Delhi",
  workingHours: "9:00 AM - 9:00 PM",
  workingDays: "Monday - Sunday",
  phone: "9810501778",
  whatsapp: "9873898040",
  email: "kamakhyaclinic@gmail.com"
};

export const teamMembers = [
  {
    id: 1,
    name: "Dr. B B Gupta",
    role: "Senior Family Physician",
    phone: "9810501778",
    image: "https://customer-assets.emergentagent.com/job_clinic-and-lab/artifacts/02g7uvzi_WhatsApp%20Image%202026-01-10%20at%2014.38.54.jpeg",
    experience: "40+ Years"
  },
  {
    id: 2,
    name: "Dr. Shaveta Verma",
    role: "Dental Surgeon & Implantologist",
    phone: "8527969545",
    image: "https://customer-assets.emergentagent.com/job_clinic-and-lab/artifacts/woeafrlt_WhatsApp%20Image%202026-01-12%20at%2010.27.53.jpeg",
    experience: "15+ Years"
  },
  {
    id: 3,
    name: "Anjana Gupta",
    role: "Counselor & Spiritual Therapist",
    phone: "9871333818",
    image: "https://customer-assets.emergentagent.com/job_clinic-and-lab/artifacts/okg5d4lb_WhatsApp%20Image%202026-01-10%20at%2014.38.53%20%281%29.jpeg",
    experience: "20+ Years"
  },
  {
    id: 4,
    name: "Mr. Deepak Singh",
    role: "Lab Operations Manager",
    phone: "9873898040",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    experience: "10+ Years"
  }
];

export const services = [
  {
    id: 1,
    title: "Lab Tests",
    description: "Comprehensive blood, urine and other diagnostic tests with accurate results",
    icon: "FlaskConical"
  },
  {
    id: 2,
    title: "ECG",
    description: "Electrocardiogram for heart health monitoring",
    icon: "HeartPulse"
  },
  {
    id: 3,
    title: "Dental Care",
    description: "Complete dental solutions including implants and oral surgery",
    icon: "Smile"
  },
  {
    id: 4,
    title: "Vaccinations",
    description: "Immunization for children and adults",
    icon: "Syringe"
  },
  {
    id: 5,
    title: "Home Collection",
    description: "Sample collection at your doorstep for your convenience",
    icon: "Home"
  },
  {
    id: 6,
    title: "Pharmacy",
    description: "Quality medicines and healthcare products",
    icon: "Pill"
  },
  {
    id: 7,
    title: "Family Physician",
    description: "Expert consultation for all family health concerns",
    icon: "Stethoscope"
  },
  {
    id: 8,
    title: "Counseling",
    description: "Mental wellness and spiritual therapy sessions",
    icon: "Brain"
  }
];

export const healthPackages = [
  {
    id: 1,
    name: "Health Profile Basic",
    category: "General Health",
    originalPrice: 1900,
    discountedPrice: 1200,
    parameters: 35,
    reportTime: "Same Day",
    tests: ["CBC", "ESR", "LFT", "KFT", "Lipid Profile Basic", "Thyroid Profile", "Blood Sugar Fasting", "HbA1C", "Urine R/M"]
  },
  {
    id: 2,
    name: "Executive Health Profile",
    category: "Comprehensive",
    originalPrice: 2400,
    discountedPrice: 2000,
    parameters: 55,
    reportTime: "Same Day",
    tests: ["Hemogram", "CRP", "Blood Sugar", "HbA1C", "Thyroid Profile", "Lipid Profile", "Liver & Kidney Profile", "Iron Study", "Urine R/M"],
    popular: true
  },
  {
    id: 3,
    name: "Extended Health Profile",
    category: "Comprehensive",
    originalPrice: 3000,
    discountedPrice: 2500,
    parameters: 60,
    reportTime: "Same Day",
    tests: ["All Executive Profile Tests", "Vitamin D", "Vitamin B12", "PSA (Males)", "Serum Ferritin"]
  },
  {
    id: 4,
    name: "Health Profile Comprehensive",
    category: "Premium",
    originalPrice: 3100,
    discountedPrice: 2400,
    parameters: 65,
    reportTime: "Same Day",
    tests: ["CBC", "ESR", "LFT", "KFT", "Lipid Profile", "Thyroid Profile", "HbA1C", "Vitamin D", "Vitamin B12", "PSA (Male)", "ECG"]
  },
  {
    id: 5,
    name: "Liver & Kidney Panel",
    category: "Organ Function",
    originalPrice: 1200,
    discountedPrice: 900,
    parameters: 22,
    reportTime: "Same Day",
    tests: ["Blood Urea", "Creatinine", "GFR", "Uric Acid", "SGOT", "SGPT", "Bilirubin", "Proteins", "Electrolytes"]
  },
  {
    id: 6,
    name: "PCOD Panel",
    category: "Women's Health",
    originalPrice: 4500,
    discountedPrice: 3500,
    parameters: 18,
    reportTime: "Next Day",
    tests: ["Thyroid Profile", "Blood Sugar", "Insulin", "Testosterone", "LH", "FSH", "Prolactin", "DHEAS", "Lipid Profile"]
  },
  {
    id: 7,
    name: "PCOD Panel Extended",
    category: "Women's Health",
    originalPrice: 6500,
    discountedPrice: 4800,
    parameters: 22,
    reportTime: "Next Day",
    tests: ["All PCOD Panel Tests", "Estrogen", "17 OH Progesterone"]
  },
  {
    id: 8,
    name: "Anaemia Profile",
    category: "Blood Disorder",
    originalPrice: 2900,
    discountedPrice: 2100,
    parameters: 15,
    reportTime: "Same Day",
    tests: ["CBC", "Peripheral Smear", "Serum Iron", "Ferritin", "TIBC", "Folate", "Vitamin B12"]
  },
  {
    id: 9,
    name: "Arthritis Profile Basic",
    category: "Joint Health",
    originalPrice: 1800,
    discountedPrice: 1200,
    parameters: 12,
    reportTime: "Same Day",
    tests: ["CBC", "ESR", "CRP", "Uric Acid", "RA Factor", "ANA", "Urine R/M"]
  },
  {
    id: 10,
    name: "Arthritis Profile Comprehensive",
    category: "Joint Health",
    originalPrice: 4400,
    discountedPrice: 2800,
    parameters: 18,
    reportTime: "Same Day",
    tests: ["CBC", "ESR", "CRP", "Uric Acid", "RA Factor", "ANA", "Anti-CCP", "Calcium", "Vitamin D"]
  },
  {
    id: 11,
    name: "Cancer Screening (Male)",
    category: "Cancer Screening",
    originalPrice: 4000,
    discountedPrice: 3200,
    parameters: 10,
    reportTime: "Next Day",
    tests: ["CBC", "ESR", "PSA", "CEA", "AFP", "CA 19.9"]
  },
  {
    id: 12,
    name: "Cancer Screening (Female)",
    category: "Cancer Screening",
    originalPrice: 4800,
    discountedPrice: 3500,
    parameters: 12,
    reportTime: "Next Day",
    tests: ["CBC", "ESR", "CA 125", "CA 15.3", "CEA", "AFP", "Beta HCG"]
  }
];

export const popularTests = [
  { id: 1, name: "CBC (Complete Blood Count)", price: 250, parameters: 25, reportTime: "Same Day" },
  { id: 2, name: "Thyroid Profile (T3, T4, TSH)", price: 450, parameters: 3, reportTime: "Same Day" },
  { id: 3, name: "HbA1c (Glycated Hemoglobin)", price: 350, parameters: 2, reportTime: "Same Day" },
  { id: 4, name: "Lipid Profile", price: 400, parameters: 8, reportTime: "Same Day" },
  { id: 5, name: "Liver Function Test (LFT)", price: 500, parameters: 12, reportTime: "Same Day" },
  { id: 6, name: "Kidney Function Test (KFT)", price: 500, parameters: 11, reportTime: "Same Day" },
  { id: 7, name: "Vitamin D (25-OH)", price: 800, parameters: 1, reportTime: "Same Day" },
  { id: 8, name: "Vitamin B12", price: 700, parameters: 1, reportTime: "Same Day" },
  { id: 9, name: "Urine Routine & Microscopy", price: 150, parameters: 15, reportTime: "Same Day" },
  { id: 10, name: "Blood Sugar Fasting", price: 80, parameters: 1, reportTime: "Same Day" },
  { id: 11, name: "ECG", price: 200, parameters: 1, reportTime: "Immediate" },
  { id: 12, name: "ESR", price: 100, parameters: 1, reportTime: "Same Day" }
];

export const dentalServices = [
  // General Dentistry
  { id: 1, name: "Check-ups", description: "Routine examinations of oral health", category: "General Dentistry" },
  { id: 2, name: "Teeth Cleaning", description: "Professional cleaning to remove plaque and tartar", category: "Preventive Care" },
  { id: 3, name: "X-ray & Digital X-ray", description: "Advanced radiographic imaging for accurate diagnosis", category: "Diagnostics" },
  { id: 4, name: "Dental Air Polishing", description: "Advanced dental cleaning procedure", category: "Preventive Care" },
  
  // Restorative Dentistry
  { id: 5, name: "Root Canals", description: "Treatment to repair and save damaged or infected teeth", category: "Restorative" },
  { id: 6, name: "Fillings & Sealants", description: "Cavity treatment and tooth protection", category: "Restorative" },
  { id: 7, name: "Dental Implants", description: "Permanent tooth replacement with surgical implants", category: "Restorative" },
  { id: 8, name: "Dentures & Bridges", description: "Prosthetic devices to replace missing teeth", category: "Restorative" },
  { id: 9, name: "Veneers & Crowns", description: "Dental restorations to cover or cap teeth", category: "Restorative" },
  { id: 10, name: "Bonding", description: "Repair or improve the appearance of teeth", category: "Restorative" },
  
  // Cosmetic Dentistry
  { id: 11, name: "Teeth Whitening", description: "Pola office teeth whitening system", category: "Cosmetic" },
  { id: 12, name: "Teeth Reshaping", description: "Procedures to improve appearance of teeth", category: "Cosmetic" },
  { id: 13, name: "Cosmetic Procedures", description: "Aesthetic treatments for beautiful smiles", category: "Cosmetic" },
  
  // Surgical & Specialized
  { id: 14, name: "Oral Surgery", description: "Surgical procedures performed in the mouth", category: "Surgery" },
  { id: 15, name: "Extractions", description: "Safe and painless tooth removal", category: "Surgery" },
  { id: 16, name: "Laser Dentistry", description: "Advanced laser-based dental treatments", category: "Specialized" },
  { id: 17, name: "TMJ Disorder Treatment", description: "Treatment for temporomandibular joint disorders", category: "Specialized" },
  { id: 18, name: "TMJ Pain Treatment", description: "Alleviating pain associated with TMJ disorders", category: "Specialized" },
  
  // Pediatric & Protective
  { id: 19, name: "Paediatric Dentistry", description: "Specialized dental care for children", category: "Pediatric" },
  { id: 20, name: "Mouth Guards", description: "Protective devices for teeth and mouth", category: "Protective" },
  { id: 21, name: "Emergency Care", description: "Immediate dental treatment for urgent conditions", category: "Emergency" }
];

export const dentalCategories = [
  { id: 1, name: "General Dentistry", icon: "Stethoscope" },
  { id: 2, name: "Preventive Care", icon: "Shield" },
  { id: 3, name: "Diagnostics", icon: "ScanLine" },
  { id: 4, name: "Restorative", icon: "Wrench" },
  { id: 5, name: "Cosmetic", icon: "Sparkles" },
  { id: 6, name: "Surgery", icon: "Scissors" },
  { id: 7, name: "Specialized", icon: "Star" },
  { id: 8, name: "Pediatric", icon: "Baby" },
  { id: 9, name: "Protective", icon: "ShieldCheck" },
  { id: 10, name: "Emergency", icon: "AlertCircle" }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "45+ Years of Trust",
    description: "Serving families in Delhi since 1980 with reliable healthcare services"
  },
  {
    id: 2,
    title: "Accurate Results",
    description: "State-of-the-art lab equipment ensuring precise diagnostic reports"
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description: "Quality healthcare at competitive prices with special package discounts"
  },
  {
    id: 4,
    title: "Same Day Reports",
    description: "Quick turnaround time for most tests with digital report delivery"
  },
  {
    id: 5,
    title: "Home Collection",
    description: "Convenient sample collection at your doorstep"
  },
  {
    id: 6,
    title: "Expert Team",
    description: "Experienced doctors and skilled technicians for your care"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Safdarjung Enclave",
    rating: 5,
    text: "Been visiting Kamakhya Clinic for over 20 years. Dr. Gupta is an excellent physician who truly cares about his patients. The lab services are always accurate and timely."
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Green Park",
    rating: 5,
    text: "Home collection service is very convenient. The staff is professional and reports come on time. Highly recommend for all lab tests!"
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Hauz Khas",
    rating: 5,
    text: "Dr. Shaveta did my dental implant and it was a smooth experience. The clinic maintains excellent hygiene standards. Very satisfied with the treatment."
  },
  {
    id: 4,
    name: "Sunita Jain",
    location: "South Extension",
    rating: 5,
    text: "The health checkup packages are comprehensive and affordable. Got my entire family tested here. Quick service and accurate results every time."
  }
];

export const announcements = [
  {
    id: 1,
    title: "Home Collection Available",
    description: "Book sample collection from the comfort of your home",
    highlight: true
  },
  {
    id: 2,
    title: "Same Day Reports",
    description: "Get most test reports within 24 hours",
    highlight: false
  },
  {
    id: 3,
    title: "Special Discounts",
    description: "Up to 40% off on health packages",
    highlight: true
  }
];
