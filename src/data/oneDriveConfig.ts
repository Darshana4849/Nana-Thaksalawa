/**
 * ============================================================================
 * LETTER HELPER — CENTRALISED MICROSOFT ONEDRIVE LINKS CONFIGURATION
 * ============================================================================
 * 
 * PASTE YOUR ONEDRIVE SHARING LINKS HERE:
 * 
 * How to add a file link:
 * 1. Open your document or presentation in Microsoft OneDrive (e.g. OneDrive for Web / SharePoint).
 * 2. Click "Share" -> Choose "Anyone with the link can view" (or Organisation link).
 * 3. Copy the sharing link.
 * 4. Paste the URL into the `oneDriveUrl` field of the corresponding item below.
 * 
 * When a `oneDriveUrl` is filled with a valid link:
 * - The "View / Download" button automatically becomes active on the website.
 * - Clicking it opens the individual file in a new browser tab directly on Microsoft OneDrive.
 * - Visitors can preview or download the file using OneDrive's built-in options.
 * 
 * When `oneDriveUrl` is left empty (""):
 * - The button automatically remains in the "Not Uploaded Yet" disabled state.
 */

export interface DocumentRecord {
  id: string;
  title: string;
  category: string;
  fileType: 'PDF' | 'DOCX' | 'PPTX' | 'ZIP' | 'DIAGRAM';
  description: string;
  oneDriveUrl: string; // <-- Paste OneDrive link here
  status: 'pending' | 'available' | 'review' | 'completed';
  date: string;
  component?: string;
  deliverableCode?: string;
}

export interface PresentationRecord {
  id: string;
  order: number;
  title: string;
  academicStage: string;
  date: string;
  fileType: 'PPTX' | 'PDF';
  description: string;
  topicsCovered: string[];
  oneDriveUrl: string; // <-- Paste OneDrive link here
  status: 'pending' | 'available' | 'completed';
  slideCountEstimate?: string;
  statusNote?: string;
}

/**
 * ============================================================================
 * 1. ACADEMIC RESEARCH DOCUMENTS
 * ============================================================================
 */
export const documents: DocumentRecord[] = [
  {
    id: 'topic-assessment-form',
    title: 'Topic Assessment Form',
    category: 'Topic Assessment Form',
    fileType: 'PDF',
    description: 'Official SLIIT Faculty of Computing Topic Assessment Form (TAF) defining the research domain, problem statement, core objectives, and supervisor allocations.',
    oneDriveUrl: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22151124_my_sliit_lk/IgBTXpXmM_2hRKMhy6SxVr7qAXAiJb5-RgfapKG3joGE7ic?e=d8Qauh', // <-- Paste OneDrive sharing link here
    status: 'completed',
    date: 'February 2026',
    deliverableCode: 'TAF',
  },
  {
    id: 'project-proposal-documents',
    title: 'Project Proposal Documents',
    category: 'Project Proposal Documents',
    fileType: 'PDF',
    description: 'Comprehensive research project proposal documentation encompassing the literature review, methodology, architectural design, and semester execution plan.',
    oneDriveUrl: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22151124_my_sliit_lk/IgBra5PdsadgRLziYZXnHTulAYDNMsXh-HYXM4UrTTHjCPo?e=pAMlFY', // <-- Paste OneDrive sharing link here
    status: 'completed',
    date: 'March 2026',
    deliverableCode: 'PROP',
  },
  {
    id: 'draft-thesis-documents',
    title: 'Draft Thesis Documents',
    category: 'Draft Thesis Documents',
    fileType: 'PDF',
    description: 'Interim draft thesis reports covering machine learning models, character recognition pipelines, interactive stroke tracing algorithms, and preliminary evaluations.',
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'review',
    date: 'June 2026',
    deliverableCode: 'DRAFT',
  },
  {
    id: 'logbook-submissions',
    title: 'Logbook Submissions',
    category: 'Logbook Submissions',
    fileType: 'PDF',
    description: 'Verified weekly research activity logs, continuous supervisor meeting minutes, milestone progress sign-offs, and supervisory assessment records.',
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'pending',
    date: 'Monthly Submissions',
    deliverableCode: 'LOG',
  },
  {
    id: 'research-paper-submissions',
    title: 'Research Paper Submissions',
    category: 'Research Paper Submissions',
    fileType: 'PDF',
    description: 'Academic manuscript submissions and conference drafts detailing the novel 22-class Sinhala handwriting CNN recognition model, empirical results, and findings.',
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'review',
    date: '31 August 2026',
    deliverableCode: 'PAPER',
  },
  {
    id: 'final-thesis-documents',
    title: 'Final Thesis Documents',
    category: 'Final Thesis Documents',
    fileType: 'PDF',
    description: 'Complete camera-ready final thesis documentation consolidating all four components, empirical validations, pedagogical insights, and project viva defenses.',
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'pending',
    date: 'October 2026',
    deliverableCode: 'FINAL',
  },
];

/**
 * ============================================================================
 * 2. ACADEMIC RESEARCH PRESENTATION DECKS
 * ============================================================================
 */
export const presentations: PresentationRecord[] = [
  {
    id: 'proposal-presentation',
    order: 1,
    title: 'Proposal Presentation',
    academicStage: 'Initial Defense & Feasibility Review',
    date: 'March 2026',
    fileType: 'PPTX',
    description:
      'Introductory slide deck establishing the project problem domain, research motivation, educational technology context in Sri Lanka, and technical feasibility.',
    topicsCovered: [
      'Problem definition in primary Sinhala handwriting instruction',
      'Literature review on handwriting recognition & interactive educational tools',
      'Research objectives & preliminary architectural concepts',
      'Resource allocation & academic semester timeline',
    ],
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'pending',
    slideCountEstimate: '22 Slides',
    statusNote: 'Presentation delivered; official slide deck to be uploaded to OneDrive.',
  },
  {
    id: 'progress-presentation-1',
    order: 2,
    title: 'Progress Presentation 1',
    academicStage: 'Mid-Cycle Architecture & Dataset Defense',
    date: 'May 2026',
    fileType: 'PPTX',
    description:
      'Intermediate technical defense reviewing the 22 Sinhala character dataset curation, stroke preprocessing canvas, and Spring Boot service infrastructure.',
    topicsCovered: [
      'Dataset curation & normalization for 22 foundational character classes',
      'Ordered keypoints and canvas stroke boundary geometry',
      'Curriculum sentence structure and CRUD API models',
      'Supervisor feedback integration & subsequent milestones',
    ],
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'pending',
    slideCountEstimate: '28 Slides',
    statusNote: 'Delivered before SLIIT review panel; slide deck archive pending OneDrive upload.',
  },
  {
    id: 'progress-presentation-2',
    order: 3,
    title: 'Progress Presentation 2',
    academicStage: 'Advanced Implementation & Preliminary Results',
    date: '01 September 2026',
    fileType: 'PPTX',
    description:
      'Major milestone defense presenting empirical evaluation of the PyTorch residual CNN (96.75% test accuracy), 3-attempt adaptive scaffolding logic, and research paper draft submission.',
    topicsCovered: [
      'PyTorch Residual CNN [2, 2, 2] classification metrics & confusion analysis',
      'Adaptive Scaffolding Algorithm (High/Medium/Low support transition curves)',
      'Sentence management, multipart image uploads, and progress logging',
      'Research paper submission recap (Submitted: 31 August 2026)',
    ],
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'pending',
    slideCountEstimate: '34 Slides',
    statusNote: 'Confirmed milestone date: 01 September 2026. Slide deck to be attached via OneDrive.',
  },
  {
    id: 'final-presentation',
    order: 4,
    title: 'Final Presentation',
    academicStage: 'Final Viva Voce & System Demonstration',
    date: 'To be updated',
    fileType: 'PPTX',
    description:
      'Culminating presentation encompassing all research outcomes, empirical comparisons, integrated system demo, and future research recommendations.',
    topicsCovered: [
      'Comprehensive system architecture & cross-component workflow',
      'Empirical validation across all 4 research components',
      'Primary school usability findings and pedagogical impact',
      'Publications, future roadmap, and live demonstration',
    ],
    oneDriveUrl: '', // <-- Paste OneDrive sharing link here
    status: 'pending',
    slideCountEstimate: '40+ Slides',
    statusNote: 'Pending final viva schedule.',
  },
];
