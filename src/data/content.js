import radheshyamNaikPortrait from '../assets/Radheshyam Pic.png';
import shobha1 from '../assets/shobha 1.webp';
import shobha2 from '../assets/Shobha 2.webp';
import shobha3 from '../assets/Shobha 3.webp';
import shobha4 from '../assets/Shobha 4.webp';
import shobha5 from '../assets/Shobha 5.webp';
import shobha7 from '../assets/Shobha 7.webp';
import hospital02 from '../assets/Hospital_02.webp';
import program4 from '../assets/Program_4.webp';
import program5 from '../assets/program_5.webp';
import program6 from '../assets/program_6.webp';
import program7 from '../assets/program 7.webp';
import program8 from '../assets/program 8.webp';
import program1 from '../assets/Program_1.png';
import program2 from '../assets/Program_2.webp';
import shobhaLogo from '../assets/Shobha-only-logo-scaled-1.png';

export const routes = {
  home: '/',
  about: '/about',
  programs: '/programs',
  blog: '/blog',
  donate: '/donate',
  volunteer: '/volunteer',
  contact: '/contact',
};

export const navLinks = [
  { label: 'Home', to: routes.home },
  { label: 'About', to: routes.about },
  { label: 'Programs', to: routes.programs },
  { label: 'Blog', to: routes.blog },
  { label: 'Donate', to: routes.donate },
  { label: 'Contact', to: routes.contact },
];

export const hero = {
  badge: 'Registered NGO · Cancer Prevention & Community Empowerment',
  title: 'Inspiring women & youth to become',
  titleHighlight: 'change agents',
  titleEnd: 'for their communities',
  description:
    'Shobha Trust empowers rural and semi-urban communities through health awareness, cancer prevention, and grassroots leadership — building a healthier, more resilient India.',
  primaryCta: { label: 'Donate Now', to: '/donate' },
  secondaryCta: { label: 'Become a Volunteer', to: '/volunteer' },
  image:
    'https://images.unsplash.com/photo-1576765608535-39f1a02a1c42?w=1200&q=80&auto=format&fit=crop',
  imageAlt: 'Community health workers supporting rural families',
  stats: [
    { value: '15+', label: 'Years of Service' },
    { value: '460+', label: 'Projects Completed' },
  ],
};

export const homePage = {
  hero: {
    headline: 'Preventing Cancer. Protecting Lives.',
    subheadline: "India's Mission for Early Cancer Prevention, Awareness & Screening",
    tagline:
      'Together, we are building healthier, cancer-aware communities across Bengaluru, Karnataka, and rural India.',
    primaryCta: { label: 'Donate Now', to: '/donate' },
    secondaryCta: { label: 'Become a Volunteer', to: '/volunteer' },
    carousel: [
      { src: shobha4, alt: 'Shobha Trust community health outreach' },
      { src: hospital02, alt: 'Hospital and medical care for cancer prevention' },
      { src: program5, alt: 'Shobha Trust preventive oncology program' },
      { src: shobha5, alt: 'Shobha Trust awareness and screening initiative' },
      { src: shobha1, alt: 'Shobha Trust reaching villages before cancer does' },
    ],
  },
  credentials: {
    eyebrow: 'Why trust us',
    title: 'A Mission Built on Medical Expertise & Compassion',
    lead: 'Evidence-led preventive oncology with the reach and rigor communities deserve.',
    items: [
      { figure: '30+', caption: 'Years of oncology expertise' },
      { figure: '1000+', caption: 'Lives touched' },
      { figure: '60+', caption: 'Awareness & screening programs' },
      { figure: 'Pan-India', caption: 'Preventive outreach' },
      { figure: '80G · 12A', caption: 'CSR-eligible nonprofit' },
    ],
  },
  aboutIntro: {
    label: 'Stopping Cancer Before It Starts',
    title: 'At Shobha Trust, we believe prevention saves families.',
    paragraphs: [
      'Founded by renowned oncologist Dr. Radheshyam Naik, Shobha Trust was created to shift the focus from late-stage cancer treatment to prevention, awareness, and early diagnosis. Inspired by personal loss and decades of medical experience, our work focuses on helping communities recognize risks early and access life-saving screenings before cancer progresses.',
      'We work with communities, hospitals, caregivers, and medical professionals to create a future where cancer is detected early, prevented effectively, and treated affordably.',
    ],
    cta: { label: 'Know More About Us', to: '/about' },
    image: shobhaLogo,
    imageAlt: 'Shobha Trust logo',
  },
  focusAreas: {
    label: 'Our Focus Areas',
    title: 'How We Prevent Cancer',
    areas: [
      {
        icon: 'education',
        title: 'Cancer Awareness & Education',
        description:
          'Empowering communities with knowledge about early warning signs and symptoms of cancer, lifestyle risks, and preventive health practices.',
      },
      {
        icon: 'screening',
        title: 'Early Cancer Screening',
        description:
          'Making cancer detection accessible through screening initiatives, preventive oncology programs, and early intervention support.',
      },
      {
        icon: 'lifestyle',
        title: 'Lifestyle & Risk Reduction',
        description:
          'Educating communities on reducing risk factors including tobacco, alcohol, unsafe food habits, environmental toxins, and infections.',
      },
      {
        icon: 'research',
        title: 'Medical Research & Prevention',
        description:
          'Building evidence-based cancer prevention models supported by scientific knowledge and medical expertise.',
      },
    ],
  },
  projectUdharam: {
    label: 'Project Udharam',
    title: 'Fighting the Hidden Stomach Cancer Crisis in Rural Karnataka',
    description:
      'In rural regions of India, stomach cancer continues to affect vulnerable families due to unsafe water, H. pylori infections, poor nutrition, and environmental risks. Through Project Udharam, Shobha Trust is creating awareness, enabling screening, and promoting prevention to stop stomach cancer before it spreads.',
    subtitle: 'We aim to build healthier, cancer-aware villages through:',
    initiatives: [
      'Early Screening Programs',
      'Safe Drinking Water Awareness',
      'Tobacco & Alcohol Risk Education',
      'Community Health Training',
      'H. Pylori Prevention Initiatives',
    ],
    cta: { label: 'Explore Project Udharam', to: '/programs#project-udharam' },
    image: program1,
    imageAlt: 'Project Udharam — Shobha Trust rural health outreach',
  },
  impact: {
    label: 'Impact Section',
    title: 'Creating Measurable Change',
    stats: [
      { value: '1000+', label: 'Lives Reached Through Awareness & Screening' },
      { value: '60+', label: 'Programs Conducted Across Communities & Hospitals' },
      { value: 'Pan-India', label: 'Outreach Supporting Prevention & Early Detection' },
      { value: 'Doctors & Caregivers', label: 'Trained for Better Cancer Awareness & Support' },
    ],
    closing:
      'Every awareness session, screening camp, and preventive initiative brings us one step closer to a future where fewer families suffer because cancer was detected too late.',
  },
  whyPrevention: {
    label: 'Why Prevention Matters',
    title: 'Because Early Detection Saves Lives',
    paragraphs: [
      'Nearly 70% of cancers are preventable or treatable when identified early. Yet thousands of families continue to face emotional, physical, and financial hardship because of delayed diagnosis. Shobha Trust works to change this reality through preventive oncology, cancer awareness, and timely screening programs.',
    ],
    highlights: ['Treatment saves lives.', 'Prevention saves families.', 'Reduces Economic Burden'],
  },
  founder: {
    label: 'Founder Message Preview',
    title: 'A Vision Born from Experience',
    quote:
      'While treatment saves lives, prevention saves families.',
    name: 'Dr. Radheshyam Naik',
    role: 'Founder, Shobha Trust | Senior Medical Oncologist',
    cta: { label: "Read Founder's Story", to: '/about' },
    image: radheshyamNaikPortrait,
    imageAlt: 'Dr. Radheshyam Naik, Founder of Shobha Trust',
  },
};

export const founderStory = {
  label: 'Our story',
  title: 'From personal loss to a purpose of prevention',
  leadParagraphs: [
    'Behind Shobha Trust is a deeply personal journey.',
    "Founded by Dr. Radheshyam Naik, one of India's leading oncologists, the Trust emerged from years of witnessing the devastating impact of cancer—not only in hospitals but within his own family. After losing loved ones to cancer and supporting a family member through recovery, one realization became clear:",
  ],
  closingParagraph:
    'Today, we are committed to building a healthcare ecosystem where awareness replaces fear, screening replaces delay, and prevention becomes the first line of defense against cancer.',
  quote: homePage.founder.quote,
  name: homePage.founder.name,
  role: homePage.founder.role,
  image: homePage.founder.image,
  imageAlt: homePage.founder.imageAlt,
};

export const missionVision = {
  mission: {
    label: 'Our mission',
    title: 'Science-led preventive oncology',
    text: 'Scientifically driven preventive oncology program through early detection, screening, lifestyle intervention that focuses on reducing cancer incidence and mortality.',
  },
  vision: {
    label: 'Our vision',
    title: 'Empowered communities at the forefront',
    text: 'We envision a future where empowered communities take the lead through timely knowledge & support which enables them to nip the cancer in the bud, minimize their financial burden and lead a healthy lifestyle.',
  },
};

export const aboutPage = {
  heroImage: shobha1,
  intro: {
    tagline: 'Preventing Cancer. Protecting Lives.',
    paragraphs: [
      'Shobha Trust is a non-profit organization primarily into Preventive Oncology dedicated to reducing the burden of cancer through early detection, awareness, screening, education, and lifestyle intervention.',
      'We believe that cancer care should begin before diagnosis—through prevention, timely action, and informed communities.',
    ],
    missionLine:
      'To stop cancer before it starts and detect it before it becomes life-threatening.',
  },
  whoWeAre: {
    label: 'Who we are',
    title: 'A mission born from experience, driven by prevention',
    image: shobha4,
    imageAlt: 'Shobha Trust community health outreach and cancer awareness',
    paragraphs: [
      'Shobha Trust was founded with a deep purpose — to transform how communities fight cancer.',
      'Inspired by both medical expertise and personal experience, the Trust was established to shift the focus from expensive late-stage treatment to early cancer prevention and awareness, especially for underserved and vulnerable communities.',
      'At Shobha Trust, we work toward creating a future where families are empowered with the knowledge, access, and support needed to identify risks early, seek timely screening, and reduce preventable suffering caused by cancer.',
      'Through awareness programs, preventive screenings, community outreach, and medical education, we are helping individuals make informed health decisions before cancer becomes critical.',
    ],
  },
  approach: {
    label: 'Our unique approach',
    title: 'How we make prevention possible',
    subtitle:
      'Unlike traditional healthcare models focused on treatment, Shobha Trust focuses on preventing cancer before it progresses.',
    pillars: [
      {
        icon: 'risk',
        title: 'Comprehensive risk assessment',
        text: 'We evaluate multiple lifestyle and environmental risk factors linked to cancer.',
      },
      {
        icon: 'primary',
        title: 'Primary prevention',
        text: 'Promoting healthier habits and preventive health education.',
      },
      {
        icon: 'secondary',
        title: 'Secondary prevention',
        text: 'Supporting timely cancer screening and early-stage diagnosis.',
      },
      {
        icon: 'education',
        title: 'Medical education',
        text: 'Empowering healthcare professionals and caregivers to become force multipliers for awareness.',
      },
      {
        icon: 'family',
        title: 'Family-centered prevention',
        text: 'Encouraging preventive measures not only for patients but also for their families and communities.',
      },
    ],
  },
  focus: {
    label: 'Our focus area',
    title: 'Project Udharam – preventing stomach cancer in rural Karnataka',
    description:
      'One of our flagship initiatives, Project Udharam, focuses on preventing stomach cancer in vulnerable rural communities.',
    body: 'By addressing unsafe drinking water, H. pylori infections, environmental toxins, tobacco use, and dietary risks, the initiative works to reduce preventable stomach cancer through screening, education, and early intervention.',
    image: program2,
    imageAlt: 'Project Udharam — preventive stomach cancer initiative',
    cta: { label: 'Learn about Project Udharam', to: '/programs#project-udharam' },
  },
  whyMatters: {
    label: 'Why our work matters',
    title: 'Because prevention can change futures',
    intro:
      'Cancer affects more than health—it impacts families emotionally, socially, and financially. Delayed diagnosis often means:',
    bullets: [
      'Higher treatment costs',
      'Increased suffering',
      'Reduced survival chances',
      'Financial hardship for families',
    ],
    closing:
      'At Shobha Trust, we believe no family should suffer because cancer was detected too late. Prevention today can protect generations tomorrow.',
  },
};

export const programsPage = {
  intro: {
    tagline: 'Bringing Cancer Prevention Closer to Communities',
    paragraphs: [
      'At Shobha Trust, every event is an opportunity to educate, screen, empower, and save lives.',
      'From cancer awareness sessions and preventive screening camps to medical workshops and community outreach programs, our events focus on helping individuals recognize risks early and take informed health decisions.',
    ],
    closing:
      'Together, we are building healthier, cancer-aware communities across Bengaluru, Karnataka, and rural India through awareness, prevention, and timely intervention.',
    primaryCta: { label: 'Join an Event', to: '/contact' },
    secondaryCta: { label: 'Become a Volunteer', to: '/volunteer' },
  },
  impact: {
    label: 'Our events impact',
    title: 'More Than Events — Creating Lifesaving Awareness',
    subtitle:
      'Every awareness drive and screening initiative helps us move one step closer to a future where fewer cancers are detected late.',
    stats: [
      {
        value: '1000+',
        title: 'Lives Reached',
        description: 'Through awareness, screening, and preventive support.',
      },
      {
        value: '60+',
        title: 'Outreach Programs',
        description: 'Conducted across hospitals, villages, and community spaces.',
      },
      {
        fullTitle: 'Pan-India Impact',
        description: 'Helping communities access preventive cancer education.',
      },
      {
        fullTitle: 'Community-Focused Prevention',
        description: 'Supporting underserved populations with accessible healthcare awareness.',
      },
    ],
  },
  categories: {
    label: 'Event categories',
    title: 'Our Key Programs & Events',
    items: [
      {
        icon: 'awareness',
        title: 'Cancer Awareness Programs',
        description:
          'Interactive sessions helping individuals understand symptoms, risks, lifestyle habits, and prevention.',
      },
      {
        icon: 'screening',
        title: 'Preventive Screening Camps',
        description:
          'Early cancer detection initiatives designed to improve survival and reduce treatment burden.',
      },
      {
        icon: 'outreach',
        title: 'Community Health Outreach',
        description:
          'Healthcare awareness programs conducted in underserved and rural communities.',
      },
      {
        icon: 'workshop',
        title: 'Medical Workshops & Training',
        description:
          'Knowledge-sharing sessions for Non Oncology doctors of all streams, caregivers, healthcare workers, and volunteers.',
      },
      {
        icon: 'csr',
        title: 'CSR & Corporate Wellness Events',
        description:
          'Collaborative initiatives promoting preventive healthcare and employee well-being.',
      },
      {
        icon: 'udharam',
        title: 'Project Udharam Outreach Programs',
        description:
          'Awareness and screening initiatives in Mandya and Ramanagara to combat preventable stomach cancer.',
        featured: true,
        href: '#project-udharam',
      },
    ],
  },
  udharam: {
    label: 'Project Udharam',
    title: 'Preventing Stomach Cancer in Rural Karnataka',
    description:
      'Through Project Udharam, Shobha Trust organizes awareness and screening initiatives to combat stomach cancer caused by unsafe water, H. pylori infections, lifestyle risks, and environmental exposure.',
    initiatives: [
      'Community Awareness Sessions',
      'Risk Assessment & Screening',
      'Preventive Health Education',
      'Tobacco & Alcohol Risk Reduction',
      'Healthy Lifestyle Promotion',
    ],
    closing: 'Together, we are working toward creating cancer-aware and healthier villages.',
    image: program8,
    imageAlt: 'Project Udharam — Shobha Trust rural health outreach',
    cta: { label: 'Partner on an outreach', to: '/contact' },
  },
  gallery: {
    label: 'Gallery preview',
    title: 'Moments of Hope, Awareness & Impact',
    description: 'Every event reflects stories of courage, awareness, and prevention.',
    items: [
      { src: program1, title: 'Program outreach 1', category: 'Programs' },
      { src: program2, title: 'Program outreach 2', category: 'Programs' },
      { src: program4, title: 'Program outreach 3', category: 'Programs' },
      { src: program5, title: 'Program outreach 4', category: 'Programs' },
      { src: program6, title: 'Program outreach 5', category: 'Programs' },
      { src: program7, title: 'Program outreach 6', category: 'Programs' },
      { src: program8, title: 'Program outreach 7', category: 'Programs' },
      { src: shobha1, title: 'Shobha Trust outreach 1', category: 'Shobha Trust' },
      { src: shobha2, title: 'Shobha Trust outreach 2', category: 'Shobha Trust' },
      { src: shobha3, title: 'Shobha Trust outreach 3', category: 'Shobha Trust' },
      { src: shobha4, title: 'Shobha Trust outreach 4', category: 'Shobha Trust' },
      { src: shobha5, title: 'Shobha Trust outreach 5', category: 'Shobha Trust' },
      { src: shobha7, title: 'Shobha Trust outreach 6', category: 'Shobha Trust' },
      { src: hospital02, title: 'Hospital partnership', category: 'Shobha Trust' },
    ],
  },
};

export const blogPage = {
  intro: {
    tagline: 'Knowledge That Can Save Lives',
    paragraphs: [
      'Welcome to the Shobha Trust Blog — your trusted resource for cancer prevention, early detection, healthy living, medical awareness, and preventive healthcare education.',
      'We believe awareness is one of the strongest tools in fighting cancer. Through expert-backed articles, health insights, prevention guides, survivor stories, and community updates, we aim to help individuals and families make informed health decisions before it is too late.',
    ],
    closing: 'Because early awareness can lead to early action.',
  },
  categories: {
    label: 'Blog categories',
    title: 'Explore Topics That Matter',
    items: [
      {
        icon: 'prevention',
        title: 'Cancer Prevention',
        description: 'Evidence-based guidance on reducing risk through lifestyle, screening, and informed choices.',
      },
      {
        icon: 'detection',
        title: 'Early Detection',
        description: 'Recognizing warning signs and understanding when to seek timely medical evaluation.',
      },
      {
        icon: 'wellness',
        title: 'Healthy Living',
        description: 'Nutrition, exercise, stress management, and habits that support long-term wellbeing.',
      },
      {
        icon: 'medical',
        title: 'Medical Awareness',
        description: 'Clear, accessible explanations of preventive oncology and common health concerns.',
      },
      {
        icon: 'stories',
        title: 'Survivor Stories',
        description: 'Inspiring journeys of courage, recovery, and hope from our community.',
      },
      {
        icon: 'community',
        title: 'Community Updates',
        description: 'News from our awareness drives, screening camps, and outreach across Karnataka.',
      },
    ],
  },
  whyMatters: {
    label: 'Why this blog matters',
    title: 'Trusted Health Information for Better Decisions',
    intro:
      'The internet is full of confusing health information. At Shobha Trust, our blog is designed to offer:',
    bullets: [
      'Expert-backed health education',
      'Reliable cancer prevention information',
      'Awareness on early warning signs',
      'Prevention-focused medical guidance',
      'Community health insights',
    ],
    goal: 'To help people act early, stay informed, and live healthier lives.',
  },
};

export const pageHero = {
  about: {
    title: 'About Shobha Trust',
    description:
      'Preventing Cancer. Protecting Lives. Dedicated to reducing the burden of cancer through early detection, awareness, screening, education, and lifestyle intervention.',
  },
  programs: {
    title: 'Events & Awareness Programs',
    description:
      'Bringing cancer prevention closer to communities through awareness, screening, and outreach across Bengaluru, Karnataka, and rural India.',
    image: program4,
  },
  blog: {
    title: 'Cancer Awareness & Prevention Blog',
    description:
      'Knowledge that can save lives — expert-backed insights on prevention, early detection, and healthier living.',
    image: program6,
  },
  donate: {
    title: 'Donate Today. Prevent Cancer Tomorrow.',
    description:
      'Your support can save lives before cancer spreads — bringing awareness, screening, and prevention to communities that need it most.',
    image: shobha3,
  },
  volunteer: {
    title: 'Become a Volunteer',
    description:
      'Be the reason someone gets help in time — join changemakers building cancer-aware communities.',
    image: program7,
  },
  contact: {
    title: 'Contact Shobha Trust',
    description:
      'Together, we can prevent cancer before it starts. Reach out to collaborate, volunteer, or support our mission.',
    image: shobha2,
  },
};

export const donatePage = {
  intro: {
    tagline: 'Your Support Can Save Lives Before Cancer Spreads',
    paragraphs: [
      'At Shobha Trust, we believe prevention is the strongest defense against cancer.',
      'Your contribution helps us bring cancer awareness, preventive screening, early detection, and healthcare education to vulnerable individuals and underserved communities.',
      'Together, we can help families avoid the emotional, physical, and financial burden caused by late-stage cancer diagnosis.',
    ],
    closing: 'Every Contribution Creates Hope. Every Donation Protects Lives.',
    primaryCta: { label: 'Donate Now', href: '#make-a-donation' },
    secondaryCta: { label: 'Support a Cause', to: '/programs' },
  },
  confidence: {
    label: 'Donate with confidence',
    title: 'Donate With Confidence',
    intro:
      'Shobha Trust is a registered non-profit organization committed to transparency, accountability, and measurable impact.',
    weAreLabel: 'We Are:',
    badges: [
      '12A Registered',
      '80G Tax Exemption Eligible',
      'CSR Eligible Organization',
      'DARPAN Registered NGO',
    ],
    closing: 'Your trust empowers us to continue building healthier and cancer-aware communities.',
  },
  payment: {
    label: 'Payment',
    title: 'Make a Donation',
    description: 'Your generosity can help save lives through awareness and prevention.',
    bank: {
      title: 'Bank Details',
      fields: [
        { label: 'Account Name', value: 'SHOBHA TRUST', copy: true },
        { label: 'Account Number', value: '41632634592', copy: true },
        { label: 'IFSC Code', value: 'SBIN0003286', copy: true },
        { label: 'Bank', value: 'State Bank of India (SBI)', copy: false },
      ],
    },
    upi: {
      title: 'UPI Donation',
      id: 'shobhatrust8875@sbi',
      qrHint: 'Scan to pay via UPI',
    },
    submitLabel: 'Donate Securely',
  },
};

export const volunteerPage = {
  intro: {
    tagline: 'Be the Reason Someone Gets Help in Time',
    paragraphs: [
      'At Shobha Trust, volunteers are more than supporters — they are changemakers helping communities become aware, informed, and protected against preventable cancer risks.',
      'By volunteering with us, you can help spread awareness, support screening initiatives, assist outreach programs, and bring hope to families through preventive healthcare.',
    ],
    closing: 'Together, We Can Prevent Cancer Before It Starts',
  },
  why: {
    label: 'Why volunteer',
    title: 'Why Volunteer With Shobha Trust?',
    subtitle:
      'Every volunteer contributes to something bigger — saving lives through awareness and prevention.',
    reasons: [
      {
        icon: 'impact',
        title: 'Create Real Impact',
        description: 'Help communities understand cancer risks and preventive health practices.',
      },
      {
        icon: 'awareness',
        title: 'Support Awareness Programs',
        description: 'Participate in awareness drives, health camps, and educational initiatives.',
      },
      {
        icon: 'outreach',
        title: 'Contribute to Rural Outreach',
        description:
          'Help us reach underserved communities with critical cancer prevention knowledge.',
      },
      {
        icon: 'growth',
        title: 'Learn & Grow',
        description: 'Gain exposure to healthcare outreach, nonprofit impact, and social change.',
      },
    ],
  },
  form: {
    label: 'Volunteer form',
    title: 'Ready to Make an Impact?',
    description: 'Fill out the form below and become part of our growing volunteer community.',
    submitLabel: 'Become a Volunteer',
    successMessage: 'Thank you! Our team will reach out within 3–5 business days.',
    interests: [
      'Awareness Programs & Health Camps',
      'Rural Community Outreach',
      'Screening & Event Support',
      'Health Education Workshops',
      'Digital & Communications',
      'General Support',
    ],
    availability: [
      'Weekdays',
      'Weekends',
      'Evenings only',
      'Flexible / As needed',
    ],
  },
};

export const contactPage = {
  intro: {
    tagline: 'Together, We Can Prevent Cancer Before It Starts',
    paragraphs: [
      'Have questions, want to collaborate, volunteer, support our initiatives, or learn more about cancer prevention programs? We would love to hear from you.',
      'Whether you are an individual donor, volunteer, healthcare professional, CSR partner, or community organization, your support can help us bring cancer awareness, early screening, and preventive healthcare to more communities.',
    ],
    closing: "Let's Build a Cancer-Aware Future Together",
  },
  info: {
    label: 'Contact information',
    title: 'Get in Touch',
    visit: {
      title: 'Visit Us',
      organization: 'Shobha Trust',
      premises: '(Sammprada Hospital Premises)',
      lines: [
        'No. 76-1-1, VR Layout, Sarakki Main Road,',
        '1st Phase, J.P. Nagar, Bengaluru – 560078,',
        'Karnataka, India',
      ],
    },
    email: {
      title: 'Email Us',
      description:
        'For general queries, partnerships, volunteering, or support:',
      addresses: ['suma.radheshyam@shobhatrust.org', 'dr.naga@shobhatrust.org'],
    },
    donations: {
      title: 'Support & Donations',
      description:
        'For donation-related assistance and partnership inquiries, feel free to connect with our team.',
    },
  },
  form: {
    label: 'Contact form',
    title: 'Send Us a Message',
    description: 'Have a question or suggestion? Fill out the form below and our team will get back to you.',
    submitLabel: 'Submit Inquiry',
    successMessage: "Thank you! We'll get back to you soon.",
  },
  map: {
    label: 'Our location',
    title: 'Find Us in Bengaluru',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8!2d77.5851!3d12.9041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150f8c8e3f1d%3A0x6b5fe7e844c5c5c5!2sJP%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin',
  },
  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is Shobha Trust and what do you do?',
        answer:
          'Shobha Trust is a non-profit organization into preventive oncology and focused on cancer awareness, early detection, screening, lifestyle intervention, and preventive healthcare education. Our mission is to reduce the burden of cancer by promoting prevention and timely diagnosis before it becomes life-threatening.',
      },
      {
        question: 'Why is cancer prevention and early screening important?',
        answer:
          'Many cancers can be prevented or successfully treated when identified early. Awareness, routine screening, healthy lifestyle choices, and timely medical consultation can significantly improve outcomes and reduce treatment costs.',
      },
      {
        question: 'How can I support Shobha Trust?',
        lead: 'You can support us by:',
        bullets: [
          'Making a donation',
          'Becoming a volunteer',
          'Partnering through CSR initiatives',
          'Participating in awareness programs',
          'Helping spread cancer awareness in your community',
        ],
        answer:
          'Every contribution helps us bring preventive healthcare and awareness to more people.',
      },
      {
        question: 'Can I volunteer with Shobha Trust?',
        answer:
          'Yes. We welcome students, healthcare professionals, corporate teams, social workers, and individuals passionate about social impact. Volunteers can support awareness campaigns, outreach programs, screening events, fundraising, and digital awareness initiatives.',
      },
      {
        question: 'Is my donation eligible for tax exemption?',
        answer:
          'Yes. Shobha Trust is a registered non-profit organization with 12A and 80G approvals, making eligible donations tax exempt as per applicable guidelines. We are also CSR eligible and DARPAN registered.',
      },
      {
        question: 'Where does Shobha Trust work?',
        answer:
          'Shobha Trust is based in Bengaluru, Karnataka, and works across communities, hospitals, and underserved regions through cancer awareness, preventive healthcare, and screening initiatives, including rural outreach programs.',
      },
      {
        question: 'How can I contact Shobha Trust for support or partnership?',
        answer:
          'You can connect with us through the Contact Us page, submit an inquiry form, or email us directly for volunteering, partnerships, CSR collaboration, or general support.',
        showContactLinks: true,
      },
    ],
  },
  cta: {
    title: 'Every Conversation Can Lead to Prevention',
    description:
      "Whether you want to ask, support, volunteer, or partner — we're here to connect.",
    tagline: 'Reach Out. Join the Mission. Save Lives.',
    primaryLabel: 'Donate Now',
    primaryTo: '/donate',
    secondaryLabel: 'Become a Volunteer',
    secondaryTo: '/volunteer',
  },
};

export const team = [
  {
    name: 'Dr. Radheshyam Naik',
    role: 'Lead Oncologist · Sammprada Hospital',
    bio: 'Renowned oncologist with 30+ years of experience leading our Cancer Prevention initiative.',
    image: radheshyamNaikPortrait,
  },
  {
    name: 'Community Leadership',
    role: 'Grassroots Coordinators',
    bio: 'Dedicated volunteers who organize camps, screenings, and awareness drives in local villages.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Youth Ambassadors',
    role: 'Health Education Leaders',
    bio: 'Young changemakers trained to educate peers on tobacco risks, nutrition, and preventive health.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
  },
];

export const donateTiers = [
  { amount: '₹500', title: 'Supporter', description: 'Funds awareness materials for one school workshop.' },
  { amount: '₹2,000', title: 'Champion', description: 'Sponsors screening for 5 individuals in rural communities.' },
  { amount: '₹5,000', title: 'Guardian', description: 'Supports a full vaccination camp in a semi-urban area.' },
  { amount: '₹10,000+', title: 'Patron', description: 'Powers a complete community health outreach program.' },
];

export const volunteerRoles = [
  {
    title: 'Community Outreach',
    description: 'Help organize health camps and awareness sessions in villages and schools.',
  },
  {
    title: 'Health Education',
    description: 'Conduct workshops on nutrition, lifestyle, and cancer risk factors.',
  },
  {
    title: 'Event Support',
    description: 'Assist with screening drives, vaccination camps, and fundraising events.',
  },
  {
    title: 'Digital & Communications',
    description: 'Support social media, content creation, and donor communications remotely.',
  },
];

export const programs = [
  {
    id: 'project-udharam',
    icon: 'ribbon',
    title: 'Project Udharam',
    description:
      'Fighting the hidden stomach cancer crisis in rural Karnataka through awareness, screening, and H. pylori prevention.',
    longDescription:
      'In rural regions of India, stomach cancer affects vulnerable families due to unsafe water, H. pylori infections, poor nutrition, and environmental risks. Project Udharam creates awareness, enables screening, and promotes prevention — building healthier, cancer-aware villages through early screening, safe water education, tobacco & alcohol risk programs, community health training, and H. pylori prevention initiatives.',
    tag: 'Flagship',
  },
  {
    id: 'cancer-prevention',
    icon: 'ribbon',
    title: 'Cancer Prevention',
    description:
      'Our flagship initiative in association with Sammprada Hospital, led by Dr. Radheshyam Naik — combining curative services with proactive prevention.',
    longDescription:
      'Fight for Shobha Trust in association with Sammprada Hospital brings world-class oncology expertise to underserved communities. Building on curative services, we focus on early detection, patient education, and sustained follow-up care.',
    tag: 'Flagship',
  },
  {
    id: 'awareness',
    icon: 'megaphone',
    title: 'Awareness Activities',
    description:
      'Addressing addiction to tobacco and drugs among teenagers through peer-pressure education and community dialogue in schools and colleges.',
    longDescription:
      'Addiction to tobacco and drugs often starts during teenage years, reinforced by peer pressure and easy access. Our awareness activities engage students, parents, and educators in open dialogue.',
    tag: 'Education',
  },
  {
    id: 'vaccination',
    icon: 'syringe',
    title: 'Vaccination Camps',
    description:
      'Organizing vaccination drives in schools, colleges, and societies to reduce cancer incidence through proven preventive vaccines.',
    longDescription:
      'Vaccination camps held in schools, colleges, and housing societies help reduce incidences of vaccine-preventable cancers. We partner with medical professionals to ensure safe, accessible immunization.',
    tag: 'Prevention',
  },
  {
    id: 'screening',
    icon: 'search',
    title: 'Screening Activities',
    description:
      'Community-based cancer screening programs that effectively reach underprivileged populations beyond clinic walls.',
    longDescription:
      'Rather than clinic-based programs alone, we implement community-based cancer screening that effectively reaches underprivileged populations where they live and work.',
    tag: 'Outreach',
  },
  {
    id: 'nutrition',
    icon: 'leaf',
    title: 'Nutrition & Lifestyle',
    description:
      'Workshops on healthy nutrition, stress management, and lifestyle changes that reduce long-term cancer risk factors.',
    longDescription:
      'Poor nutrition, stress, and sedentary lifestyles are major cancer risk factors. Our wellness workshops teach practical, affordable habits families can adopt daily.',
    tag: 'Wellness',
  },
  {
    id: 'youth',
    icon: 'sparkle',
    title: 'Youth Leadership',
    description:
      'Training young leaders in rural and semi-urban areas to champion health awareness and social change in their communities.',
    longDescription:
      'Women and youth in rural and semi-urban areas become change agents for their families and villages — spreading knowledge, organizing local initiatives, and building self-reliant communities.',
    tag: 'Empowerment',
  },
];

export const impactStats = [
  { value: 1000, suffix: '+', label: 'Lives Reached Through Awareness & Screening', icon: 'heart', animate: true },
  { value: 60, suffix: '+', label: 'Programs Conducted Across Communities & Hospitals', icon: 'calendar', animate: true },
  { value: 'Pan-India', label: 'Outreach Supporting Prevention & Early Detection', icon: 'users', animate: false },
  {
    value: 'Doctors & Caregivers',
    label: 'Trained for Better Cancer Awareness & Support',
    icon: 'project',
    animate: false,
  },
];

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1532938911079-1ef02fcc9ada?w=600&q=80&auto=format&fit=crop',
    title: 'Health Awareness Camp',
    category: 'Outreach',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop',
    title: 'Community Screening Drive',
    category: 'Prevention',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&auto=format&fit=crop',
    title: 'Youth Empowerment Workshop',
    category: 'Education',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop',
    title: 'Rural Health Initiative',
    category: 'Community',
  },
  {
    src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop',
    title: 'Medical Camp Support',
    category: 'Healthcare',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop',
    title: 'Volunteer Training Day',
    category: 'Volunteers',
  },
];

export const testimonials = [
  {
    quote:
      'Shobha Trust brought cancer screening to our village for the first time. Many families received early guidance that may have saved lives.',
    name: 'Lakshmi Devi',
    role: 'Community Health Worker, Rural Karnataka',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop',
  },
  {
    quote:
      'As a young volunteer, I learned how to educate peers about tobacco risks. This trust gave me purpose and a platform to lead change.',
    name: 'Arjun Patel',
    role: 'Youth Volunteer, Semi-Urban Gujarat',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop',
  },
  {
    quote:
      'The partnership with expert oncologists through Sammprada Hospital gives our programs credibility that communities truly trust.',
    name: 'Dr. Priya Sharma',
    role: 'Public Health Advisor',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80&auto=format&fit=crop',
  },
];

export const contact = {
  phone: '+91 720 464 6957',
  email: 'suma.radheshyam@shobhatrust.org',
  emails: contactPage.info.email.addresses,
  address: 'J.P. Nagar, Bengaluru – 560078, Karnataka, India',
  mapEmbed: contactPage.map.embed,
};

export const footer = {
  tagline: 'Every Life Deserves a Chance — Preventing Cancer. Protecting Lives.',
  social: [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  ],
  quickLinks: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Programs', to: '/programs' },
    { label: 'Blog', to: '/blog' },
    { label: 'Donate', to: '/donate' },
    { label: 'Volunteer', to: '/volunteer' },
    { label: 'Contact', to: '/contact' },
  ],
};
