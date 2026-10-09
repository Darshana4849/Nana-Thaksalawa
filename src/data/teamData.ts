import { IMAGES_CONFIG } from './imagesConfig';

export interface ResearcherProfile {
  id: string;
  componentNumber: number;
  fullName: string;
  studentId: string;
  componentTitle: string;
  shortRole: string;
  contributionSummary: string;
  universityEmail: string;
  imageUrl?: string; // Path to team member photo e.g. '/images/team/member1.jpg'
  githubUrl?: string;
  linkedinUrl?: string;
  isPlaceholder: boolean;
  avatarInitials: string;
}

export interface SupervisorProfile {
  id: string;
  role: 'Supervisor' | 'Co-Supervisor' | 'External Advisor';
  name: string;
  designation: string;
  department: string;
  institution: string;
  researchInterests: string[];
  email: string;
  imageUrl?: string; // Path to supervisor photo e.g. '/images/supervisors/supervisor1.jpg'
  isPlaceholder: boolean;
}

export const RESEARCH_TEAM: ResearcherProfile[] = [
  {
    id: 'researcher-1',
    componentNumber: 1,
    fullName: 'Rathnappuli S.D.D.',
    studentId: 'IT22541734',
    componentTitle: 'Sinhala Handwritten Letter Recognition',
    shortRole: 'Lead AI & Computer Vision Researcher',
    contributionSummary:
      'Engineered the compact residual convolutional neural network (stages [2, 2, 2]), curated the 80×80 grayscale dataset across 22 Sinhala character classes, and implemented the REST inference microservice.',
    universityEmail: 'it22541734@my.sliit.lk',
    imageUrl: IMAGES_CONFIG.team.member1.src,
    githubUrl: undefined,
    linkedinUrl: undefined,
    isPlaceholder: false,
    avatarInitials: 'RS',
  },
  {
    id: 'researcher-2',
    componentNumber: 2,
    fullName: 'Chathumini S.H.V.',
    studentId: 'IT22123718',
    componentTitle: 'Letter Tracing and Writing Practice',
    shortRole: 'Lead Canvas & Adaptive Scaffolding Researcher',
    contributionSummary:
      'Formulated ordered keypoint guidance, geometric boundary tolerance algorithms, stroke accuracy scoring, and the 3-attempt moving average adaptive scaffolding logic.',
    universityEmail: 'it22123718@my.sliit.lk',
    imageUrl: IMAGES_CONFIG.team.member2.src,
    githubUrl: undefined,
    linkedinUrl: undefined,
    isPlaceholder: true,
    avatarInitials: 'R2',
  },
  {
    id: 'researcher-3',
    componentNumber: 3,
    fullName: 'Gunasinghe M.N.D.K.',
    studentId: 'IT22151124',
    componentTitle: 'Gamified Learning',
    shortRole: 'Lead Educational UX & Gamification Researcher',
    contributionSummary:
      'Explored developmental motivation mechanics for primary school children, designing positive feedback micro-interactions and low-cognitive-load engagement frameworks for writing practice.',
    universityEmail: 'it22151124@my.sliit.lk',
    imageUrl: IMAGES_CONFIG.team.member3.src,
    githubUrl: undefined,
    linkedinUrl: undefined,
    isPlaceholder: true,
    avatarInitials: 'R3',
  },
  {
    id: 'researcher-4',
    componentNumber: 4,
    fullName: 'Kuruppu K.M.D.D.',
    studentId: 'IT22181138',
    componentTitle: 'Practice Sentences and Progress Tracking',
    shortRole: 'Lead Full-Stack & Progress Analytics Researcher',
    contributionSummary:
      'Architected the Spring Boot REST backend with Controller-Service-DTO structure, relational schema for curriculum sentences, multipart image upload, and longitudinal progress tracking analytics.',
    universityEmail: 'it22181138@my.sliit.lk',
    imageUrl: IMAGES_CONFIG.team.member4.src,
    githubUrl: undefined,
    linkedinUrl: undefined,
    isPlaceholder: true,
    avatarInitials: 'R4',
  },
];

export const ACADEMIC_SUPERVISORS: SupervisorProfile[] = [
  {
    id: 'sup-1',
    role: 'Supervisor',
    name: 'Ms. Suriyaa Kumari',
    designation: 'Senior Lecturer',
    department: 'Department of Information Technology',
    institution: 'Faculty of Computing, SLIIT',
    researchInterests: ['Artificial Intelligence', 'Educational Technology', 'Computer Vision'],
    email: 'suriyaa.k@sliit.lk',
    imageUrl: IMAGES_CONFIG.supervisors.supervisor1.src,
    isPlaceholder: true,
  },
  {
    id: 'sup-2',
    role: 'Co-Supervisor',
    name: 'Ms. Dulani Jayasinghe',
    designation: 'Assistant Lecturer',
    department: 'Department of Information Technology',
    institution: 'Faculty of Computing, SLIIT',
    researchInterests: ['Human-Computer Interaction', 'Pattern Recognition', 'Software Architecture'],
    email: 'dulani.m@sliit.lk',
    imageUrl: IMAGES_CONFIG.supervisors.supervisor2.src,
    isPlaceholder: true,
  },
];

export const INSTITUTION_INFO = {
  name: 'Sri Lanka Institute of Information Technology (SLIIT)',
  campus: 'Malabe Campus',
  faculty: 'Faculty of Computing',
  address: 'New Kandy Road, Malabe, Sri Lanka',
  website: 'https://www.sliit.lk',
  notice:
    'Letter Helper is an independent academic research project conducted by final-year undergraduate students at the Faculty of Computing, SLIIT. This website serves as a public research showcase and assessment portfolio.',
};

export const ACKNOWLEDGEMENTS = [
  {
    title: 'Academic Faculty & Review Panel',
    content:
      'We express our gratitude to the academic staff and project coordinators of the Faculty of Computing at SLIIT for their constructive feedback during project proposals and progress presentations.',
  },
  {
    title: 'Primary Education Practitioners',
    content:
      'We thank primary grade educators who provided insights into early Sinhala language learning curricula, traditional letter formation sequencing, and common motor-skill challenges encountered by young learners.',
  },
  {
    title: 'Open Source & Scientific Community',
    content:
      'We acknowledge the developers and researchers behind PyTorch, Spring Boot, React, and foundational OCR research who have advanced open machine learning and software engineering frameworks.',
  },
];
