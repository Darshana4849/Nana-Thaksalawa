import { documents, DocumentRecord } from './oneDriveConfig';

export type DocumentCategory =
  | 'Topic Assessment Form'
  | 'Project Proposal Documents'
  | 'Draft Thesis Documents'
  | 'Logbook Submissions'
  | 'Research Paper Submissions'
  | 'Final Thesis Documents';

export type AvailabilityStatus =
  | 'Available'
  | 'Coming Soon'
  | 'Under Academic Review'
  | 'Draft Completed'
  | 'Not Uploaded Yet';

export interface AcademicDocument {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory | string;
  component?: string;
  fileUrl?: string; // Optional local/external URL
  oneDriveUrl?: string; // Primary Microsoft OneDrive sharing link
  fileType: 'PDF' | 'DOCX' | 'PPTX' | 'ZIP' | 'DIAGRAM';
  fileSizeNote?: string;
  date: string;
  availabilityStatus: AvailabilityStatus;
  deliverableCode?: string;
}

export const DOCUMENT_CATEGORIES: string[] = [
  'Topic Assessment Form',
  'Project Proposal Documents',
  'Draft Thesis Documents',
  'Logbook Submissions',
  'Research Paper Submissions',
  'Final Thesis Documents',
];

/**
 * Re-export the centralised OneDrive documents list as ACADEMIC_DOCUMENTS
 * and map status dynamically based on whether oneDriveUrl is filled.
 */
export const ACADEMIC_DOCUMENTS: AcademicDocument[] = documents.map((doc) => {
  const isAvailable = Boolean(doc.oneDriveUrl && doc.oneDriveUrl.trim().length > 0);

  let status: AvailabilityStatus = 'Coming Soon';
  if (isAvailable) {
    status = 'Available';
  } else if (doc.status === 'review') {
    status = 'Under Academic Review';
  } else if (doc.status === 'completed') {
    status = 'Draft Completed';
  }

  return {
    id: doc.id,
    title: doc.title,
    description: doc.description,
    category: doc.category,
    component: doc.component,
    fileType: doc.fileType,
    oneDriveUrl: doc.oneDriveUrl,
    fileUrl: doc.oneDriveUrl,
    date: doc.date,
    availabilityStatus: status,
    deliverableCode: doc.deliverableCode,
  };
});

// Direct export of the raw documents array for central link management
export { documents };
