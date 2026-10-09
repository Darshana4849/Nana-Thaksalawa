import React from 'react';
import { ExternalLink, Clock, Cloud, FileText, Presentation as PresentationIcon } from 'lucide-react';

interface OneDriveActionButtonProps {
  oneDriveUrl?: string;
  title: string;
  fileType?: string;
  status?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const OneDriveActionButton: React.FC<OneDriveActionButtonProps> = ({
  oneDriveUrl,
  title,
  fileType = 'PDF',
  status,
  size = 'md',
  className = '',
}) => {
  const isConfigured = Boolean(oneDriveUrl && oneDriveUrl.trim().length > 0);

  const padding = size === 'sm' ? 'px-2.5 py-1.5 text-xs' : 'px-3.5 py-2 text-xs font-semibold';

  if (isConfigured) {
    return (
      <a
        href={oneDriveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View or download ${title} on Microsoft OneDrive (opens in a new tab)`}
        className={`group inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 ${padding} ${className}`}
        title={`Open ${title} in Microsoft OneDrive`}
      >
        <Cloud className="w-3.5 h-3.5 text-blue-100 shrink-0 group-hover:scale-110 transition-transform duration-150" />
        <span>View / Download</span>
        <ExternalLink className="w-3 h-3 text-blue-200 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
      </a>
    );
  }

  // Not uploaded yet state
  const label = status && status.toLowerCase().includes('review')
    ? 'Under Review'
    : 'Not Uploaded Yet';

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      aria-label={`${title} is not yet uploaded to OneDrive`}
      className={`inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200/80 dark:border-slate-700/80 cursor-not-allowed select-none font-medium ${padding} ${className}`}
      title="This deliverable has not been uploaded yet"
    >
      <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
      <span>{label}</span>
    </button>
  );
};

export const FileTypeBadge: React.FC<{ fileType: string }> = ({ fileType }) => {
  const upper = fileType.toUpperCase();
  if (upper === 'PDF') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200/70 dark:border-rose-900/60">
        <FileText className="w-3 h-3 text-rose-500 dark:text-rose-400" />
        <span>PDF</span>
      </span>
    );
  }
  if (upper === 'PPTX' || upper === 'PPT') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-900/60">
        <PresentationIcon className="w-3 h-3 text-amber-500 dark:text-amber-400" />
        <span>PPTX</span>
      </span>
    );
  }
  if (upper === 'DOCX' || upper === 'DOC') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-900/60">
        <FileText className="w-3 h-3 text-blue-500 dark:text-blue-400" />
        <span>DOCX</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded font-mono text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      {upper}
    </span>
  );
};
