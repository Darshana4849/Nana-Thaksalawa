import React, { useState } from 'react';
import {
  RESEARCH_TEAM,
  ACADEMIC_SUPERVISORS,
  INSTITUTION_INFO,
  ACKNOWLEDGEMENTS,
} from '../data/teamData';
import {
  Users,
  GraduationCap,
  Mail,
  Building,
  HeartHandshake,
} from 'lucide-react';

interface AboutPageProps {
  // Cleaned up maintainer guide props
}

const TeamAvatar: React.FC<{ imageUrl?: string; initials: string; name: string }> = ({
  imageUrl,
  initials,
  name,
}) => {
  const [hasError, setHasError] = useState(false);

  if (imageUrl && !hasError) {
    return (
      <div className="w-36 sm:w-40 h-44 sm:h-48 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 relative group/img transition-transform duration-300">
        <img
          src={imageUrl}
          alt={name}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="w-36 sm:w-40 h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 text-white flex flex-col items-center justify-center shrink-0 shadow-md border-2 border-slate-700 relative overflow-hidden group/img">
      <div className="w-16 h-16 rounded-full bg-slate-700/80 border border-slate-600 flex items-center justify-center font-bold text-2xl text-blue-300 shadow-inner group-hover/img:scale-105 transition-transform">
        {initials}
      </div>
      <span className="text-xs font-semibold text-slate-300 mt-2.5">Team Photo</span>
      <span className="text-[10px] text-slate-400 font-mono">/images/team/</span>
    </div>
  );
};

const SupervisorAvatar: React.FC<{ imageUrl?: string; name: string }> = ({
  imageUrl,
  name,
}) => {
  const [hasError, setHasError] = useState(false);

  if (imageUrl && !hasError) {
    return (
      <div className="w-36 sm:w-40 h-44 sm:h-48 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-purple-200 dark:border-purple-900/60 bg-purple-50 dark:bg-slate-800 relative group/img transition-transform duration-300">
        <img
          src={imageUrl}
          alt={name}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="w-36 sm:w-40 h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-900 text-purple-200 flex flex-col items-center justify-center shrink-0 shadow-md border-2 border-purple-800/60 relative overflow-hidden group/img">
      <div className="w-16 h-16 rounded-full bg-purple-800/60 border border-purple-700/70 flex items-center justify-center text-purple-200 shadow-inner group-hover/img:scale-105 transition-transform">
        <GraduationCap className="w-8 h-8" />
      </div>
      <span className="text-xs font-semibold text-purple-200 mt-2.5">Faculty Photo</span>
      <span className="text-[10px] text-purple-300/70 font-mono">/supervisors/</span>
    </div>
  );
};

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <div className="text-left max-w-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
          <Users className="w-4 h-4" />
          <span>Academic Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Research Team & Academic Supervision
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Letter Helper was developed collaboratively as a final-year undergraduate research project
          at the Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT).
        </p>
      </div>

      {/* 12.1 RESEARCH TEAM (4 RESEARCHERS) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Undergraduate Research Team</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Four specialized researchers leading individual research components while ensuring
              tight architectural integration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {RESEARCH_TEAM.map((researcher) => (
            <div
              key={researcher.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-800/70 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                {/* Header row: Larger Photo on Left + Details on Right */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <TeamAvatar
                    imageUrl={researcher.imageUrl}
                    initials={researcher.avatarInitials}
                    name={researcher.fullName}
                  />

                  {/* Right Side: Component Lead, Name, Student ID, Component Title, Lead Role */}
                  <div className="flex-1 min-w-0 space-y-2 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 px-2.5 py-0.5 rounded-md">
                        Component {researcher.componentNumber} Lead
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
                        [{researcher.studentId}]
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {researcher.fullName}
                      </h3>
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mt-1">
                        {researcher.componentTitle}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {researcher.shortRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contribution Summary */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {researcher.contributionSummary}
                  </p>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{researcher.universityEmail}</span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                  SLIIT Faculty of Computing
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12.2 ACADEMIC SUPERVISORS & CO-SUPERVISORS */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Academic Supervision</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Faculty guidance provided by the Department of Software Engineering and Computer Science.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {ACADEMIC_SUPERVISORS.map((sup) => (
            <div
              key={sup.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-800/70 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                {/* Header row: Larger Photo on Left + Details on Right */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <SupervisorAvatar imageUrl={sup.imageUrl} name={sup.name} />

                  {/* Right Side: Role, Name, Designation, Department, Institution */}
                  <div className="flex-1 min-w-0 space-y-2 text-left">
                    <span className="inline-block text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/60 px-2.5 py-0.5 rounded-md">
                      {sup.role}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {sup.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        {sup.designation}
                      </p>
                    </div>

                    {/* Department & Institution directly to the right of image */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                      <p className="text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="font-semibold text-slate-900 dark:text-white shrink-0">Department:</span>
                        <span>{sup.department}</span>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="font-semibold text-slate-900 dark:text-white shrink-0">Institution:</span>
                        <span>{sup.institution}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{sup.email}</span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                  SLIIT Academic Staff
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12.3 INSTITUTIONAL ATTRIBUTION */}
      <section className="p-8 rounded-2xl bg-slate-900 dark:bg-slate-900/90 text-white shadow-xl space-y-4 border border-slate-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
            <Building className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">
              Host Academic Institution
            </span>
            <h2 className="text-xl font-bold text-white">{INSTITUTION_INFO.name}</h2>
            <p className="text-xs text-slate-300">
              {INSTITUTION_INFO.faculty} · {INSTITUTION_INFO.campus} · {INSTITUTION_INFO.address}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
          {INSTITUTION_INFO.notice}
        </p>
      </section>

      {/* 12.4 ACKNOWLEDGEMENTS */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-rose-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Acknowledgements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACKNOWLEDGEMENTS.map((ack, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2"
            >
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {ack.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{ack.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
