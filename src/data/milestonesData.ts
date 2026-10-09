export interface MilestoneItem {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  academicStage: string;
  confirmedDate: string; // "01 September 2026" or "To be updated"
  marksAllocated: string; // "To be updated" or specific confirmed percentage
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
  keyDeliverables: string[];
  assessmentFocus: string;
  relatedDocumentIds: string[];
  relatedPresentationIds: string[];
  historicalNotes?: string;
}

export const MILESTONES_DATA: MilestoneItem[] = [
  {
    id: 'milestone-proposal',
    order: 1,
    title: 'Project Proposal Evaluation',
    shortTitle: 'Project Proposal',
    academicStage: 'Initial Planning & Feasibility Defense',
    confirmedDate: 'To be updated',
    marksAllocated: 'To be updated',
    status: 'Completed',
    description:
      'Formulation and formal defense of the research scope, literature justification, component boundaries, and feasibility of building Letter Helper for primary Sinhala handwriting education.',
    keyDeliverables: [
      'Project Proposal Document',
      'Initial Literature Survey and Research Gap Synthesis',
      'High-Level System Architecture Specification',
      'Work Breakdown Structure (WBS) & Timeline',
    ],
    assessmentFocus:
      'Clarity of research problem, alignment with educational goals, technical feasibility of Sinhala character recognition and canvas tracing.',
    relatedDocumentIds: ['doc-proposal', 'doc-charter'],
    relatedPresentationIds: ['pres-proposal'],
  },
  {
    id: 'milestone-pp1',
    order: 2,
    title: 'Progress Presentation 1',
    shortTitle: 'Progress Presentation 1',
    academicStage: 'Mid-Cycle Architecture & Dataset Defense',
    confirmedDate: 'To be updated',
    marksAllocated: 'To be updated',
    status: 'Completed',
    description:
      'Evaluation of preliminary component prototypes, dataset curation for the 22 Sinhala character classes, tracing algorithms, and initial Spring Boot backend design.',
    keyDeliverables: [
      'Progress Report 1 Document',
      'Dataset Curation & Normalization Report (80×80 Grayscale)',
      'Ordered Keypoint Tracing Proof-of-Concept',
      'Sentence CRUD API Specification',
    ],
    assessmentFocus:
      'Validation of research methodology, dataset integrity, and preliminary experimental setups across all four components.',
    relatedDocumentIds: ['doc-progress-1', 'doc-req-design'],
    relatedPresentationIds: ['pres-pp1'],
  },
  {
    id: 'milestone-pp2',
    order: 3,
    title: 'Progress Presentation 2',
    shortTitle: 'Progress Presentation 2',
    academicStage: 'Advanced Implementation & Preliminary Results',
    confirmedDate: '01 September 2026',
    marksAllocated: 'To be updated',
    status: 'Completed',
    description:
      'Comprehensive defense of advanced model training, residual CNN metrics (96.75% test accuracy), adaptive scaffolding logic, and formal submission of the research paper draft.',
    keyDeliverables: [
      'Research Paper Submission Draft (Submitted: 31 August 2026)',
      'PyTorch Residual CNN [2, 2, 2] Architecture Evaluation',
      'Adaptive Scaffolding Algorithm Simulation (High/Medium/Low Support)',
      'Sentence Management Module with Image Upload Support',
    ],
    assessmentFocus:
      'Rigour of experimental results, test accuracy metrics, algorithmic coherence of the 3-attempt adaptive scaffolding, and paper draft readiness.',
    relatedDocumentIds: ['doc-progress-2', 'doc-paper-draft'],
    relatedPresentationIds: ['pres-pp2'],
    historicalNotes: 'Confirmed milestone date: 01 September 2026. Research paper draft submitted 31 August 2026.',
  },
  {
    id: 'milestone-final-assessment',
    order: 4,
    title: 'Final Project Assessment & Thesis Submission',
    shortTitle: 'Final Assessment',
    academicStage: 'Comprehensive Research Deliverables Submission',
    confirmedDate: 'To be updated',
    marksAllocated: 'To be updated',
    status: 'In Progress',
    description:
      'Submission of comprehensive final project documentation including the main project report, four individual research theses, verified code repositories, and complete system testing reports.',
    keyDeliverables: [
      'Main Final Project Report',
      'Four Individual Theses (Recognition, Tracing, Gamification, Sentences & Progress)',
      'Final Camera-Ready Research Paper',
      'Complete Integrated Codebase & Deployment Artifacts',
    ],
    assessmentFocus:
      'Academic rigor, comprehensive empirical validation, fulfillment of research objectives, and cohesive system integration.',
    relatedDocumentIds: ['doc-main-report', 'doc-thesis-1', 'doc-thesis-2', 'doc-thesis-3', 'doc-thesis-4'],
    relatedPresentationIds: ['pres-final'],
  },
  {
    id: 'milestone-viva',
    order: 5,
    title: 'Final Viva Voce & System Demonstration',
    shortTitle: 'Final Viva',
    academicStage: 'Oral Defense & Live Technical Demonstration',
    confirmedDate: 'To be updated',
    marksAllocated: 'To be updated',
    status: 'Upcoming',
    description:
      'Oral examination before academic assessment panel, external examiners, and supervisors featuring live demonstration of the integrated Letter Helper learning support system.',
    keyDeliverables: [
      'Live Demonstration of the Integrated Platform',
      'Individual Technical Defense for Each Research Component',
      'Examiner Q&A and Validation of Contributions',
    ],
    assessmentFocus:
      'Student technical mastery, individual component ownership, handling examiner critique, and pedagogical efficacy.',
    relatedDocumentIds: ['doc-main-report'],
    relatedPresentationIds: ['pres-final'],
  },
];
