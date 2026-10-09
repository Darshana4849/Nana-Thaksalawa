# Letter Helper — Sinhala Handwriting Learning Support System
### Academic Research Project Website (SLIIT Faculty of Computing)

This repository contains the official academic research project showcase website for **Letter Helper**, a final-year undergraduate research project developed at the Sri Lanka Institute of Information Technology (SLIIT).

---

## 1. Centralised Images & Logo Management

All images, logos, and team photographs are managed in:

📁 **`public/images/`** (Folder where files are stored)  
⚙️ **`src/data/imagesConfig.ts`** (Central configuration file)

### Image Folders:
* **Logo**: `public/images/logo/logo.png` (or `.svg`)
* **Team Photos (About Us)**:
  * `public/images/team/member1.jpg` (Researcher 1 - Recognition Lead)
  * `public/images/team/member2.jpg` (Researcher 2 - Tracing Lead)
  * `public/images/team/member3.jpg` (Researcher 3 - Gamified Learning Lead)
  * `public/images/team/member4.jpg` (Researcher 4 - Sentences & Progress Lead)
* **Supervisors (About Us)**:
  * `public/images/supervisors/supervisor1.jpg` (Academic Supervisor)
  * `public/images/supervisors/supervisor2.jpg` (Academic Co-Supervisor)
* **Research Evaluation & Gallery**:
  * `public/images/gallery/c1-evaluation.png`
  * `public/images/gallery/c2-canvas.png`
  * `public/images/gallery/c4-dashboard.png`

> **Note:** If an image file is not yet added, the website automatically displays clean, professional fallback avatars and graphics without breaking!

---

## 2. Centralised Microsoft OneDrive Link Configuration

All research documents and presentation slide decks are managed from a single central configuration file:

📁 **`src/data/oneDriveConfig.ts`**

### How to Add or Update OneDrive Links:
1. Open your document or slide deck in **Microsoft OneDrive** (Web).
2. Click **Share** -> Choose **"Anyone with the link can view"** (or organization read-only share).
3. Copy the sharing link.
4. Open `src/data/oneDriveConfig.ts`.
5. Paste the link into the `oneDriveUrl` property of the target item:
   ```typescript
   {
     id: "project-charter",
     title: "Project Charter — Letter Helper",
     category: "Project Management Documents",
     fileType: "PDF",
     description: "Foundational project authorization document...",
     oneDriveUrl: "https://1drv.ms/b/s!A...YOUR_ONEDRIVE_SHARING_LINK", // <-- Paste here
     status: "pending"
   }
   ```
6. **Automatic Behavior**:
   - When `oneDriveUrl` has a link: The **"View / Download"** button automatically turns active. Clicking it opens the individual file in a new tab (`target="_blank" rel="noopener noreferrer"`), keeping the Letter Helper website open.
   - When `oneDriveUrl` is empty (`""`): The button remains cleanly disabled, showing **"Not Uploaded Yet"**, preventing dead clicks or broken redirects.

---

## 3. Project Sections Overview

The website is architected into the seven university-prescribed sections:
1. **Home**: Hero section, statistics, overview of Letter Helper, four research component cards, learning workflow sequence, verified technical stack, research highlights, and exploration links.
2. **Domain**: Literature survey (with academic placeholder citations), research gap, formal research problem statement, 7 specific research objectives, in-depth breakdowns of all 4 components, 8-phase research methodology, technology table, system architecture schematic, and interface evaluation gallery.
3. **Milestones**: Interactive assessment timeline featuring the 5 formal assessment stages with dropdown selection, status indicators, and confirmed historical dates (Progress Presentation 2: 01 September 2026; research paper submission: 31 August 2026).
4. **Documents**: Searchable academic archive categorized into Project Management, Research & Technical, Individual Theses, and Final Documents, with Microsoft OneDrive integration.
5. **Presentations**: Slide deck archive with stage badges and Microsoft OneDrive PowerPoint/PDF access.
6. **About Us**: Profiles for the 4 undergraduate researchers, academic supervisors, co-supervisors, institutional attribution, and acknowledgements.
7. **Contact Us**: Official institutional correspondence details, copy-to-clipboard email utility, and accessible inquiry form pre-configured for static hosting mail routing.

---

## 4. Centralized Content Architecture (`src/data/`)

All project content is cleanly separated from presentation code so researchers can make updates without editing React layout components:

| Content Area | Data File | What to Edit |
|---|---|---|
| **Images & Logos** | **`src/data/imagesConfig.ts`** | **Configure paths for logo, team photos, supervisors, and gallery.** |
| **OneDrive Documents & Slides** | **`src/data/oneDriveConfig.ts`** | **Paste OneDrive sharing links for all documents and presentation decks.** |
| Project Metadata & Objectives | `src/data/projectData.ts` | Update official title, institution, research objectives, methodology phases, and tech stack. |
| Research Components | `src/data/componentsData.ts` | Update model accuracy, CNN topology, 80×80 normalization specs, tracing algorithms, gamification, and Spring Boot REST API details. |
| Assessment Milestones | `src/data/milestonesData.ts` | Update confirmed presentation dates, allocated marks, and transition milestone status (`Completed`, `In Progress`, `Upcoming`). |
| Research Team & Supervisors | `src/data/teamData.ts` | Replace student name/ID placeholders, supervisor names, designations, and contact emails. |

---

## 5. University Hosting & <20 MB Static Compliance

The university guidelines specify WordPress, HTML, and CSS as permitted technologies and impose a **maximum web-space allocation of 20 MB**.

- Running `npm run build` generates an ultra-lightweight static single-page bundle in the `dist/` directory.
- The compiled bundle is **under 1.5 MB**, well below the 20 MB allocation.
- To deploy to university servers:
  ```bash
  npm run build
  ```
  Upload the generated files inside `dist/` directly to your university web root or static hosting provider (Vercel, Netlify, GitHub Pages).

---

## 6. Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons
- **Cloud Storage**: Microsoft OneDrive (read-only sharing links)
- **Backend Architecture**: Spring Boot 3 REST API (CRUD sentences, DTO pattern)
- **Machine Learning**: PyTorch compact residual CNN ([2, 2, 2] stages, 80×80 grayscale, 22 classes)
- **Vector Tracing**: HTML5 Canvas with ordered keypoints & adaptive scaffolding logic
- **Bundler**: Vite
