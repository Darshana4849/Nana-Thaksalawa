export interface ComponentSpec {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  tagline: string;
  purpose: string;
  leadResearcherPlaceholder: string;
  technologies: string[];
  keyHighlights: string[];
  architectureDetails: string[];
  evaluationSummary?: {
    isVerified: boolean;
    datasetNote: string;
    metrics: { label: string; value: string; description: string }[];
  };
  approachDetails: { title: string; content: string }[];
  statusNote: string;
}

export const RESEARCH_COMPONENTS: ComponentSpec[] = [
  {
    id: 'component-1',
    number: 1,
    title: 'Sinhala Handwritten Letter Recognition',
    shortTitle: 'Letter Recognition',
    tagline: 'Deep residual convolutional classification across 22 fundamental Sinhala character classes.',
    purpose:
      'To recognise handwritten Sinhala characters using an optimized deep learning-based computer vision classification model operating on preprocessed single-stroke and composite writing samples.',
    leadResearcherPlaceholder: '[Researcher 1 — Handwritten Character Recognition Specialist]',
    technologies: ['Python 3.10', 'PyTorch', 'Residual CNN Architecture', 'OpenCV Preprocessing', 'FastAPI / REST API'],
    keyHighlights: [
      'Compact residual convolutional architecture with 3 residual stages [2, 2, 2]',
      '22 distinct foundational Sinhala alphabet classes',
      '80 × 80 pixel normalized grayscale input dimensions',
      'Batch Normalisation and Dropout regularization preventing overfitting on small strokes',
      'Dedicated REST inference endpoint: POST /api/recognition/predict',
    ],
    architectureDetails: [
      'Input Layer: 80×80 single-channel grayscale rasterized drawing image normalized to [0, 1].',
      'Stem Block: 3×3 Conv2D with stride 1, Batch Normalization, and ReLU activation function.',
      'Residual Stage 1: 2 residual blocks with 32 filters, preserving feature map resolution.',
      'Residual Stage 2: 2 residual blocks with 64 filters, downsampling via strided convolution.',
      'Residual Stage 3: 2 residual blocks with 128 filters, capturing complex glyph ligatures.',
      'Head: Adaptive Average Pooling (1×1), Dropout (p=0.4), and a Fully Connected layer producing 22 logits mapped to Softmax probabilities.',
    ],
    evaluationSummary: {
      isVerified: true,
      datasetNote: 'Project-reported evaluation results pending final thesis defense verification. Evaluated on curated split datasets.',
      metrics: [
        {
          label: 'Test Accuracy',
          value: '96.75%',
          description: 'Overall classification accuracy across evaluated test samples.',
        },
        {
          label: 'Balanced Test Accuracy',
          value: '96.74%',
          description: 'Class-balanced performance accounting for uniform representation across all 22 classes.',
        },
        {
          label: 'Test Macro F1-Score',
          value: '96.76%',
          description: 'Harmonic mean of precision and recall unweighted across classes, reflecting consistent per-character discrimination.',
        },
        {
          label: 'Validation Accuracy',
          value: '67.40%',
          description: 'Baseline validation metric recorded during intermediate training checkpoints prior to learning rate fine-tuning.',
        },
      ],
    },
    approachDetails: [
      {
        title: 'Input Preprocessing & Standardization',
        content:
          'Student drawing coordinates are rasterized onto an offscreen canvas, cropped to character bounding boxes with uniform padding, resized to 80×80 pixels with bilinear interpolation, and converted to single-channel normalized tensors.',
      },
      {
        title: 'Residual Feature Extraction',
        content:
          'Sinhala glyphs possess unique circular strokes and delicate hooks. The [2, 2, 2] residual stage structure enables deep contextual feature extraction without encountering gradient degradation, maintaining lightweight model weight sizes suitable for responsive inference.',
      },
      {
        title: 'REST API Inference Serving',
        content:
          'Exposes a lightweight Python service receiving base64 image payloads or binary blobs at /api/recognition/predict, returning predicted Unicode glyphs, top-3 ranked confidence distributions, and latency timestamps.',
      },
    ],
    statusNote: 'Model architecture implemented and evaluated on test datasets; integration verification in progress.',
  },
  {
    id: 'component-2',
    number: 2,
    title: 'Letter Tracing and Writing Practice',
    shortTitle: 'Tracing & Guidance',
    tagline: 'Ordered keypoint guidance and dynamic boundary validation with performance-adaptive scaffolding.',
    purpose:
      'To provide structured handwriting guidance and tactile writing practice for Sinhala letters using real-time stroke tracking, keypoint verification, and algorithmic scaffolding adjustment.',
    leadResearcherPlaceholder: '[Researcher 2 — Interactive Tracing & Adaptive Scaffolding Specialist]',
    technologies: ['HTML5 Canvas API', 'TypeScript', 'Vector Geometric Algorithms', 'Adaptive Logic Controller'],
    keyHighlights: [
      'Ordered Keypoint Guidance enforcing correct pedagogical stroke order and directionality',
      'Dynamic Boundary Validation preventing excessive deviation from canonical glyph hulls',
      'Pixel-Based Accuracy Scoring comparing drawn raster paths with canonical letter templates',
      'Dual-Mode Scaffolding: Static visual guides versus Performance-Adaptive dynamic assistance',
      'Algorithmic 3-attempt rolling average adjusting support levels between High, Medium, and Low',
    ],
    architectureDetails: [
      'Canvas Engine: High-DPI responsive touch/mouse event listener with Bezier path interpolation for smooth child strokes.',
      'Keypoint State Machine: Sequential checkpoints defined as ordered {x, y, radius, tolerance} tuples.',
      'Boundary Polygon Checker: Ray-casting hit detection checking stroke containment inside glyph boundary corridors.',
      'Accuracy Engine: Hausdorff distance combined with binary mask intersection-over-union (IoU).',
      'Adaptive Scaffolding Controller: Evaluates rolling mean of recent 3 valid attempts to govern visual aids.',
    ],
    evaluationSummary: {
      isVerified: false,
      datasetNote: 'Formal usability and scoring correlation benchmarks currently under active pilot study. Placeholders reserved for final thesis data.',
      metrics: [
        {
          label: 'Rolling History Window',
          value: '3 attempts',
          description: 'Window size used to compute moving average score for scaffold level shifts.',
        },
        {
          label: 'High Support Threshold',
          value: '< 60 Score',
          description: 'Displays full character outline, continuous directional arrows, and tight checkpoint tolerance.',
        },
        {
          label: 'Medium Support Threshold',
          value: '60 – 79 Score',
          description: 'Displays faint background template, primary intermediate keypoints, and moderate guidance.',
        },
        {
          label: 'Low Support Threshold',
          value: '≥ 80 Score',
          description: 'Minimal scaffolding: starting dot only with freehand canvas and post-stroke evaluation.',
        },
      ],
    },
    approachDetails: [
      {
        title: 'Ordered Keypoint Guidance',
        content:
          'Unlike Latin letters with linear segments, Sinhala characters (e.g., අ, ක, ම) require continuous circular loops. Ordered keypoints ensure the young writer follows genuine educational stroke order rather than drawing backward or starting at inappropriate positions.',
      },
      {
        title: 'Boundary Validation & Penalty Mechanics',
        content:
          'Children often slip outside letter corridors. The boundary engine detects out-of-bounds excursion in real time, softly alerting the learner and offering instantaneous correction before bad motor habits form.',
      },
      {
        title: 'Performance-Adaptive Scaffolding Algorithm',
        content:
          'Based on Vygotsky\'s Zone of Proximal Development (ZPD), the system calculates the average score of the last three completed attempts. If average < 60, High Support is enabled. If 60 ≤ average < 80, Medium Support is activated. If average ≥ 80, the child graduates to Low Support.',
      },
    ],
    statusNote: 'Core tracing algorithms, keypoints, and adaptive state machine designed; pilot school trials pending.',
  },
  {
    id: 'component-3',
    number: 3,
    title: 'Gamified Learning',
    shortTitle: 'Gamified Learning',
    tagline: 'Motivational mechanics and interactive activities fostering sustained handwriting engagement.',
    purpose:
      'To improve learner engagement and intrinsic motivation in Sinhala handwriting learning through age-appropriate gamification concepts without distracting from core educational practice.',
    leadResearcherPlaceholder: '[Researcher 3 — Educational Gamification & UX Specialist]',
    technologies: ['React Web UI', 'Audio/Visual Feedback Micro-interactions', 'Gamification State Engine'],
    keyHighlights: [
      'Designed to reduce early writing anxiety and repetitive fatigue among primary school children',
      'Interactive visual reward triggers providing positive reinforcement upon successful letter completion',
      'Progressive activity structure balancing mastery challenges with attainable micro-goals',
      'Culturally contextualized learning themes tailored for Sri Lankan primary school environments',
      'Editable research framework pending final empirical validation in thesis defense',
    ],
    architectureDetails: [
      'Activity Orchestrator: Governs activity flow between individual letter practice and interactive challenges.',
      'Feedback Subsystem: Triggers encouraging auditory and visual celebratory feedback upon achieving target accuracy.',
      'Engagement Metrics Logger: Records time on task, completion frequency, and repeat attempt enthusiasm.',
    ],
    evaluationSummary: {
      isVerified: false,
      datasetNote: 'Specific game mechanics, points, and evaluation outcomes are editable placeholders pending verified thesis materials.',
      metrics: [
        {
          label: 'Engagement Study Status',
          value: 'In Progress',
          description: 'Field evaluation in primary educational settings under ethical clearance.',
        },
        {
          label: 'Mechanics Scope',
          value: 'Educational',
          description: 'Intrinsic motivation centered on writing progress rather than hyper-stimulating extrinsic distractions.',
        },
      ],
    },
    approachDetails: [
      {
        title: 'Pedagogical Motivation Design',
        content:
          'Young children struggle with manual handwriting motor control. Gamification serves as gentle scaffolding to celebrate small incremental victories, turning challenging repetitive stroke practice into delightful developmental play.',
      },
      {
        title: 'Ethical & Child-Friendly UX Restraint',
        content:
          'The research carefully avoids manipulative dark patterns, excessive competitiveness, or distracting animations. Every visual incentive directly reinforces proper stroke formation and focus.',
      },
      {
        title: 'Empirical Verification Roadmap',
        content:
          'Final evaluation metrics regarding learner time-on-task, engagement retention, and teacher feedback will be updated upon completion of final research documentation.',
      },
    ],
    statusNote: 'Activity concepts and feedback interactions designed; qualitative school evaluation in progress.',
  },
  {
    id: 'component-4',
    number: 4,
    title: 'Practice Sentences and Progress Tracking',
    shortTitle: 'Sentences & Progress',
    tagline: 'Curriculum-aligned sentence management, REST API architecture, and student progress tracking.',
    purpose:
      'To support sentence-level learning practice, enable educator content management, and systematically track longitudinal handwriting progress for primary school learners.',
    leadResearcherPlaceholder: '[Researcher 4 — Full-Stack Architecture & Progress Tracking Specialist]',
    technologies: ['React Frontend', 'Java & Spring Boot 3', 'REST API Architecture', 'PostgreSQL', 'Multipart Image Storage'],
    keyHighlights: [
      'Curriculum-aligned sentence management with Create, Read, Update, Delete (CRUD) operations',
      'Associates illustrative imagery with Sinhala sentences for enhanced semantic reading comprehension',
      'Tiered enterprise architecture: Controller, Service, and Data Transfer Object (DTO) design pattern',
      'Database-supported tracking of student writing attempts, accuracy trends, and module completion',
      'Clear separation of concerns enabling educators to upload new curriculum sentences securely',
    ],
    architectureDetails: [
      'Presentation Layer: React components for sentence browsing, handwriting canvas, and visual progress charts.',
      'REST Controller: Exposes versioned endpoints (e.g. GET/POST /api/sentences, GET /api/progress/student/{id}).',
      'Service Layer: Implements business rules, validation, score aggregation, and file storage handlers.',
      'Data Access / DTO: Decoupled DTO objects mapping to relational tables (Sentences, PracticeAttempts, ProgressMetrics).',
      'Image Management: Supports multipart/form-data for uploading illustrative sentence prompt pictures.',
    ],
    evaluationSummary: {
      isVerified: false,
      datasetNote: 'System integration and performance benchmarks to be updated from final project dissertation.',
      metrics: [
        {
          label: 'CRUD Operations',
          value: 'Full Support',
          description: 'Create, Read, Update, and Delete operations for educational sentence repository.',
        },
        {
          label: 'Architecture Pattern',
          value: 'Controller-Service-DTO',
          description: 'Strict modular separation conforming to enterprise Spring Boot design standards.',
        },
      ],
    },
    approachDetails: [
      {
        title: 'Transition from Character to Sentence Writing',
        content:
          'Writing mastery requires combining individual characters into words and coherent sentences with appropriate spacing and baseline alignment. This component bridges isolated character practice to real communicative language.',
      },
      {
        title: 'Spring Boot Backend & Robust DTO Layer',
        content:
          'The backend provides clean separation of concerns using Spring Boot, JPA entities, and dedicated Request/Response DTOs. It handles multipart image uploads for visual sentence cues and guarantees relational data integrity.',
      },
      {
        title: 'Longitudinal Student Progress Analytics',
        content:
          'Logs each writing submission with timestamps, accuracy scores, and error hotspots. Enables teachers and guardians to review progress over time, identifying which Sinhala glyphs require remediation.',
      },
    ],
    statusNote: 'Spring Boot REST backend and React client components implemented; final deployment validation underway.',
  },
];

export const SINHALA_22_CLASSES = [
  { glyph: 'අ', name: 'A', category: 'Vowel' },
  { glyph: 'ආ', name: 'Aa', category: 'Vowel' },
  { glyph: 'ඇ', name: 'Ae', category: 'Vowel' },
  { glyph: 'ඉ', name: 'I', category: 'Vowel' },
  { glyph: 'ඊ', name: 'Ee', category: 'Vowel' },
  { glyph: 'උ', name: 'U', category: 'Vowel' },
  { glyph: 'ඌ', name: 'Oo', category: 'Vowel' },
  { glyph: 'එ', name: 'E', category: 'Vowel' },
  { glyph: 'ඒ', name: 'Ey', category: 'Vowel' },
  { glyph: 'ඔ', name: 'O', category: 'Vowel' },
  { glyph: 'ඕ', name: 'Oh', category: 'Vowel' },
  { glyph: 'ක', name: 'Ka', category: 'Consonant' },
  { glyph: 'ග', name: 'Ga', category: 'Consonant' },
  { glyph: 'ත', name: 'Tha', category: 'Consonant' },
  { glyph: 'ද', name: 'Da', category: 'Consonant' },
  { glyph: 'න', name: 'Na', category: 'Consonant' },
  { glyph: 'ප', name: 'Pa', category: 'Consonant' },
  { glyph: 'බ', name: 'Ba', category: 'Consonant' },
  { glyph: 'ම', name: 'Ma', category: 'Consonant' },
  { glyph: 'ය', name: 'Ya', category: 'Consonant' },
  { glyph: 'ර', name: 'Ra', category: 'Consonant' },
  { glyph: 'ල', name: 'La', category: 'Consonant' },
];
