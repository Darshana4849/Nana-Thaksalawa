/**
 * ============================================================================
 * LETTER HELPER — CENTRALISED IMAGES & ASSETS CONFIGURATION
 * ============================================================================
 * 
 * All website images, logos, team photos, and gallery figures are configured here.
 * 
 * HOW TO ADD YOUR OWN IMAGES:
 * 1. Put your image files in the `public/images/` folder (e.g. `public/images/logo/logo.png`, `public/images/team/member1.jpg`).
 * 2. Update the paths below if your filenames are different, or keep the default names!
 * 
 * Folder Structure:
 * /public/images/
 *   ├── home/
 *   │   └── hero-banner.svg       <- Home page hero image (change to your own .png/.jpg/.svg!)
 *   ├── logo/
 *   │   └── logo.png              <- Your project / institution logo
 *   ├── team/
 *   │   ├── member1.jpg           <- Researcher 1 (Letter Recognition)
 *   │   ├── member2.jpg           <- Researcher 2 (Tracing & Adaptive Guidance)
 *   │   ├── member3.jpg           <- Researcher 3 (Gamified Learning)
 *   │   └── member4.jpg           <- Researcher 4 (Sentences & Progress)
 *   ├── supervisors/
 *   │   ├── supervisor1.jpg       <- Academic Supervisor
 *   │   └── supervisor2.jpg       <- Academic Co-Supervisor
 *   └── gallery/
 *       ├── c1-evaluation.png     <- Component 1 Evaluation Plot / Confusion Matrix
 *       ├── c2-canvas.png         <- Component 2 Canvas Tracing Screenshot
 *       └── c4-dashboard.png      <- Component 4 Sentence / Progress Dashboard
 *
 * HOW TO CHANGE THE HOME PAGE IMAGE (සිංහල උපදෙස්):
 * 1. ඔබට අවශ්‍ය ඕනෑම Image එකක් (PNG, JPG, WEBP, SVG) `public/images/home/` ෆෝල්ඩරයට දමන්න (උදා: `public/images/home/my-image.png`).
 * 2. පහත ඇති `IMAGES_CONFIG.homeHero.src` අගය ඔබ දැමූ Image එකේ path එකට වෙනස් කරන්න (උදා: `src: '/images/home/my-image.png'`).
 */

export const IMAGES_CONFIG = {
  // Home Page Hero Showcase Image (මුල් පිටුවේ ප්‍රධාන රූපය)
  homeHero: {
    src: '/images/home/hero-banner.svg', // Change to your custom image, e.g. '/images/home/my-image.png' or '/images/hero.png'
    alt: 'Letter Helper — Sinhala Handwriting Learning System Showcase',
    title: 'Letter Helper · Interactive Learning Suite',
    subtitle: 'Sinhala Handwriting Recognition & Guided Tracing Platform',
  },

  // Main Project Logo
  logo: {
    src: '/images/logo/logo.svg', // or '/images/logo/logo.png'
    alt: 'Letter Helper Logo',
  },

  // Team Member Photos (displayed on About Us page)
  team: {
    member1: {
      src: '/images/team/member1.svg', // or member1.jpg / member1.png
      alt: 'Researcher 1 — Letter Recognition Lead',
    },
    member2: {
      src: '/images/team/member2.svg', // or member2.jpg / member2.png
      alt: 'Researcher 2 — Tracing & Guidance Lead',
    },
    member3: {
      src: '/images/team/member3.svg', // or member3.jpg / member3.png
      alt: 'Researcher 3 — Gamified Learning Lead',
    },
    member4: {
      src: '/images/team/member4.svg', // or member4.jpg / member4.png
      alt: 'Researcher 4 — Sentences & Progress Lead',
    },
  },

  // Academic Supervisor Photos (displayed on About Us page)
  supervisors: {
    supervisor1: {
      src: '/images/supervisors/supervisor1.svg', // or supervisor1.jpg
      alt: 'Academic Supervisor',
    },
    supervisor2: {
      src: '/images/supervisors/supervisor2.svg', // or supervisor2.jpg
      alt: 'Academic Co-Supervisor',
    },
  },

  // Research Evaluation & Interface Gallery Screenshots (displayed on Domain page)
  gallery: {
    c1Evaluation: {
      src: '/images/gallery/c1-evaluation.svg',
      title: 'Component 1 Evaluation Plot',
      caption: 'Multiclass confusion matrix and accuracy distribution for the 22 Sinhala character classes.',
    },
    c2Canvas: {
      src: '/images/gallery/c2-canvas.svg',
      title: 'Component 2 Writing Canvas',
      caption: 'Ordered keypoint checkpoints, directional hints, and dynamic boundary error warning highlights.',
    },
    c4Dashboard: {
      src: '/images/gallery/c4-dashboard.svg',
      title: 'Component 4 Progress View',
      caption: 'Longitudinal accuracy trendline charts and curriculum sentence repository manager.',
    },
  },
};
