export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Machine Learning' | 'Database' | 'Architecture' | 'Tools';
  description: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  note: string;
}

export const PROJECT_METADATA = {
  name: 'LETTER HELPER',
  fullTitle: 'Sinhala Handwriting Learning Support System',
  tagline: 'Helping Young Learners Write Sinhala with Confidence.',
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  faculty: 'Faculty of Computing',
  department: 'Department of Software Engineering / Computer Science',
  academicYear: 'Final-Year Undergraduate Research Project (2025/2026)',
  researchArea: 'Educational Technology, Artificial Intelligence, Sinhala Handwriting Recognition, Interactive Learning, and Intelligent Writing Assistance',
  officialEmail: 'info.nanathaksalawa@gmail.com',
  projectLeadContact: '[Project Coordinator Contact - To be updated]',
  location: 'SLIIT Malabe Campus, New Kandy Road, Malabe, Sri Lanka',
};

export const PROJECT_STATS: StatItem[] = [
  {
    label: 'Research Components',
    value: '4',
    note: 'Recognition, Tracing & Guidance, Gamification, and Sentence & Progress',
  },
  {
    label: 'Integrated System',
    value: '1',
    note: 'Unified learning support framework for primary education',
  },
  {
    label: 'Recognition Classes',
    value: '22',
    note: 'Distinct Sinhala handwritten character classes evaluated in CNN model',
  },
  {
    label: 'Educational Focus',
    value: 'Primary',
    note: 'Designed specifically for early grade Sinhala handwriting development',
  },
];

export const RESEARCH_OBJECTIVES = {
  overall:
    'To develop an integrated digital learning support system that assists primary school learners in recognising Sinhala letters, practising handwriting, participating in engaging learning activities, and improving writing skills through interactive educational support.',
  specific: [
    {
      id: 'obj-1',
      title: 'Develop Sinhala Handwritten Letter Recognition Capabilities',
      description:
        'Design and train a deep learning classification pipeline using a compact residual convolutional neural network tailored for 22 Sinhala character classes on normalized 80×80 grayscale inputs.',
    },
    {
      id: 'obj-2',
      title: 'Support Structured Sinhala Letter Tracing and Writing Practice',
      description:
        'Implement ordered keypoint guidance, dynamic stroke boundary validation, and pixel-based stroke accuracy scoring to provide real-time tactile writing feedback for early learners.',
    },
    {
      id: 'obj-3',
      title: 'Investigate Performance-Adaptive Guidance for Handwriting Practice',
      description:
        'Formulate a 3-attempt rolling performance evaluation algorithm transitioning scaffolding levels dynamically between High, Medium, and Low Support based on learner mastery.',
    },
    {
      id: 'obj-4',
      title: 'Incorporate Gamified Learning Activities',
      description:
        'Explore age-appropriate gamification strategies that motivate primary school children to sustain writing engagement without overwhelming developmental cognitive load.',
    },
    {
      id: 'obj-5',
      title: 'Support Sentence-Level Writing Practice',
      description:
        'Extend individual character skills to meaningful Sinhala sentences with curriculum-aligned content management, image pairing, and structured reading-writing exercises.',
    },
    {
      id: 'obj-6',
      title: 'Facilitate Monitoring of Learner Progress',
      description:
        'Provide structured longitudinal tracking of student writing attempts, accuracy trends, and completion metrics accessible to educators and parents.',
    },
    {
      id: 'obj-7',
      title: 'Integrate Components within a Unified Educational System',
      description:
        'Unify the four specialized research components into an accessible, responsive web application backed by robust Spring Boot microservices and PyTorch inference endpoints.',
    },
  ],
};

export const RESEARCH_GAPS = [
  {
    title: 'Scarcity of Sinhala-Specific Digital Handwriting Systems',
    description:
      'While numerous interactive handwriting tools exist for Latin, Hanzi, and Arabic scripts, digital handwriting assistance specifically engineered for the intricate circular geometry and ligatures of the Sinhala script remains severely limited in primary education.',
  },
  {
    title: 'Disconnection Between Recognition and Guided Writing Practice',
    description:
      'Existing character recognition research operates predominantly on isolated offline scanned images rather than being embedded synchronously alongside real-time stroke-by-stroke guided handwriting canvas environments.',
  },
  {
    title: 'Lack of Dynamic Learner-Adaptive Scaffolding',
    description:
      'Most educational tracing tools enforce rigid, static guides regardless of learner proficiency, either providing too little guidance for struggling children or redundant hand-holding for proficient writers.',
  },
  {
    title: 'Absence of Sentence-Level Continuity & Longitudinal Progress',
    description:
      'Early writing interventions frequently terminate at single-character tracing, neglecting the pedagogical transition to multi-word sentence formation, semantic context, and structured student progress tracking.',
  },
];

export const RESEARCH_PROBLEM_STATEMENT =
  'Primary school children learning to write Sinhala encounter unique developmental hurdles due to the script\'s intricate curved geometries, distinct diacritic marks, and subtle stroke differentiations. Traditional classroom instruction often lacks the continuous, individualized tactile feedback required to correct stroke order, directionality, and spatial proportions in real time. Concurrently, existing educational software lacks integrated handwriting recognition, performance-adaptive scaffolding, sentence-level progression, and longitudinal tracking tailored to the Sinhala language.';

export const RESEARCH_METHODOLOGY_PHASES = [
  {
    phase: 1,
    title: 'Problem Identification & Research Planning',
    description:
      'Formulating the scope, engaging with educational requirements, establishing ethical considerations for children\'s computing, and defining component boundaries.',
  },
  {
    phase: 2,
    title: 'Literature Review & Theoretical Modeling',
    description:
      'Investigating Sinhala optical character recognition, residual neural network architectures, stroke keypoint tracing mechanics, and pedagogical scaffolding frameworks.',
  },
  {
    phase: 3,
    title: 'Requirements Analysis & Pedagogical Alignment',
    description:
      'Specifying primary curriculum letter sets (22 foundational classes), stroke order conventions, boundary tolerances, and interactive UI requirements for young hands.',
  },
  {
    phase: 4,
    title: 'System Architecture & Interface Design',
    description:
      'Architecting the decoupled React client, Spring Boot REST API layer, PyTorch deep learning microservice, and relational persistence schema.',
  },
  {
    phase: 5,
    title: 'Individual Component Development',
    description:
      'Parallel engineering of the 4 research components: CNN training and inference, tracing canvas algorithm, gamification module, and sentence/progress management.',
  },
  {
    phase: 6,
    title: 'System Integration & Cross-Component Communication',
    description:
      'Interfacing the client canvas with backend recognition endpoints, synchronizing stroke scoring with the adaptive support engine, and logging progress data.',
  },
  {
    phase: 7,
    title: 'Empirical Testing & Rigorous Evaluation',
    description:
      'Evaluating character recognition on balanced test sets (evaluating accuracy, precision, recall, macro F1), benchmarking canvas response latency, and verifying scaffolding state transitions.',
  },
  {
    phase: 8,
    title: 'Academic Documentation & University Thesis Defense',
    description:
      'Compiling the comprehensive project report, individual research theses, IEEE format research papers, and presenting at academic progress vivas.',
  },
];

export const TECHNOLOGIES_USED: TechItem[] = [
  {
    name: 'React 19 & TypeScript',
    category: 'Frontend',
    description: 'Interactive component-driven user interface with responsive canvas rendering and strict type safety.',
    iconName: 'Code',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first modern styling facilitating clean visual hierarchy, accessibility, and zero bloated assets.',
    iconName: 'Layout',
  },
  {
    name: 'Spring Boot 3',
    category: 'Backend',
    description: 'Enterprise REST API backend managing sentence repositories, student records, and service coordination.',
    iconName: 'Server',
  },
  {
    name: 'Python 3.10+ & PyTorch',
    category: 'AI & Machine Learning',
    description: 'Deep learning framework for training and serving the compact residual CNN classification network.',
    iconName: 'Brain',
  },
  {
    name: 'Convolutional Neural Networks (CNN)',
    category: 'AI & Machine Learning',
    description: 'Compact residual architecture with [2, 2, 2] stage blocks for 80×80 grayscale Sinhala character classification.',
    iconName: 'Cpu',
  },
  {
    name: 'PostgreSQL / Relational DB',
    category: 'Database',
    description: 'Structured relational storage for sentence content, student profiles, attempt scores, and metadata.',
    iconName: 'Database',
  },
  {
    name: 'RESTful API Architecture',
    category: 'Architecture',
    description: 'Decoupled HTTP communication protocols between React client, Spring services, and AI inference microservice.',
    iconName: 'Network',
  },
  {
    name: 'Adaptive Scaffolding Engine',
    category: 'Architecture',
    description: 'Algorithmic 3-attempt moving average controller for dynamic High/Medium/Low handwriting support adjustment.',
    iconName: 'Sliders',
  },
  {
    name: 'Vite & Build Tooling',
    category: 'Tools',
    description: 'Lightning-fast module bundler yielding an ultra-compact static distribution (<20MB university compliance).',
    iconName: 'Wrench',
  },
];
