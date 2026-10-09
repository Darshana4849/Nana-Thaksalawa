import React, { useState } from 'react';
import {
  ACADEMIC_DOCUMENTS,
  DOCUMENT_CATEGORIES,
  AcademicDocument,
} from '../data/documentsData';
import { OneDriveActionButton, FileTypeBadge } from '../components/OneDriveActionButton';
import {
  BookOpen,
  Search,
  FileText,
  Cloud,
  ArrowUpDown,
} from 'lucide-react';

interface DocumentsPageProps {
  // Cleaned up maintainer guide props
}

export const DocumentsPage: React.FC<DocumentsPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'title' | 'date'>('date');

  // Filter documents
  const filteredDocuments = ACADEMIC_DOCUMENTS.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.component && doc.component.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (doc.deliverableCode && doc.deliverableCode.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0; // preserve logical chronological order
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-left max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Academic Documentation Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Research Documents & Submissions Archive
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Official academic documentation archive for the Letter Helper research project, encompassing
          the 6 core deliverables required by the SLIIT Faculty of Computing: Topic Assessment Form,
          Project Proposal Documents, Draft Thesis Documents, Logbook Submissions, Research Paper Submissions,
          and Final Thesis Documents.
        </p>
      </div>

      {/* OneDrive Storage Notice Banner */}
      <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200 flex items-start gap-2.5 text-xs">
        <Cloud className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Microsoft OneDrive Integration:</strong> Research documents are stored on
          Microsoft OneDrive. Clicking <strong>View / Download</strong> opens the specific file in a
          new browser tab where you can preview or download it using OneDrive's built-in options.
          Unlinked files display <strong>Not Uploaded Yet</strong> until sharing links are configured.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents by title, keyword, or deliverable code (e.g. TAF, PROP, DRAFT, FINAL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-800 transition-all"
            />
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 self-end md:self-auto">
            <span className="flex items-center gap-1 font-medium">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span>Sort:</span>
            </span>
            <button
              onClick={() => setSortBy(sortBy === 'date' ? 'title' : 'date')}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium text-slate-800 dark:text-slate-200 transition-colors"
            >
              {sortBy === 'date' ? 'Default Academic Order' : 'Title (A–Z)'}
            </button>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-blue-600 dark:bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Documents ({ACADEMIC_DOCUMENTS.length})
          </button>
          {DOCUMENT_CATEGORIES.map((cat) => {
            const count = ACADEMIC_DOCUMENTS.filter((d) => d.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Document Records Grid */}
      <div className="space-y-4">
        {filteredDocuments.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <FileText className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-white">No matching documents found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Try adjusting your search query or clear the selected category filter to view other
              research submissions.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDocuments.map((doc) => {
              const hasOneDrive = Boolean(doc.oneDriveUrl && doc.oneDriveUrl.trim().length > 0);

              const statusBadges = {
                Available: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
                'Coming Soon': 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700',
                'Under Academic Review': 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
                'Draft Completed': 'bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
                'Not Uploaded Yet': 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
              }[doc.availabilityStatus] || 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

              return (
                <div
                  key={doc.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-800/70 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    {/* Top Row: Deliverable code, FileType Badge, Status */}
                    <div className="flex items-center justify-between text-[11px] gap-2">
                      <div className="flex items-center gap-2">
                        <FileTypeBadge fileType={doc.fileType} />
                        {doc.deliverableCode && (
                          <span className="font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[10px]">
                            {doc.deliverableCode}
                          </span>
                        )}
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 dark:text-slate-400 truncate max-w-[140px] sm:max-w-[180px]">
                          {doc.category === doc.title ? 'Academic Deliverable' : doc.category}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded font-medium border text-[11px] ${statusBadges}`}>
                        {hasOneDrive ? 'Available' : doc.availabilityStatus}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {doc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {doc.description}
                    </p>

                    {/* Component Tag if present */}
                    {doc.component && (
                      <div className="pt-1">
                        <span className="text-[11px] text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 px-2 py-0.5 rounded font-medium">
                          Component: {doc.component}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Metadata & View / Download Action */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
                    <span className="font-mono text-[11px]">{doc.date}</span>

                    <OneDriveActionButton
                      oneDriveUrl={doc.oneDriveUrl}
                      title={doc.title}
                      fileType={doc.fileType}
                      status={doc.availabilityStatus}
                      size="md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
