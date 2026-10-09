import { presentations, PresentationRecord } from './oneDriveConfig';

export interface PresentationItem {
  id: string;
  order: number;
  title: string;
  academicStage: string;
  date: string;
  description: string;
  slideFormat: 'PDF' | 'PPTX';
  fileType: 'PDF' | 'PPTX';
  slideCountEstimate?: string;
  topicsCovered: string[];
  fileUrl?: string;
  oneDriveUrl?: string;
  isAvailable: boolean;
  statusNote: string;
}

export const PRESENTATIONS_DATA: PresentationItem[] = presentations.map((pres) => {
  const isAvailable = Boolean(pres.oneDriveUrl && pres.oneDriveUrl.trim().length > 0);
  return {
    id: pres.id,
    order: pres.order,
    title: pres.title,
    academicStage: pres.academicStage,
    date: pres.date,
    description: pres.description,
    slideFormat: pres.fileType,
    fileType: pres.fileType,
    slideCountEstimate: pres.slideCountEstimate,
    topicsCovered: pres.topicsCovered,
    fileUrl: pres.oneDriveUrl,
    oneDriveUrl: pres.oneDriveUrl,
    isAvailable,
    statusNote: isAvailable
      ? 'Available for viewing or download on Microsoft OneDrive.'
      : pres.statusNote || 'Slides pending upload to Microsoft OneDrive.',
  };
});

// Re-export raw presentations config for central management
export { presentations };
