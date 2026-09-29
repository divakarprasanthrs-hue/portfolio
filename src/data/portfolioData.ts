export interface Project {
  id: string;
  title: string;
  category: 'development' | 'video';
  subtitle: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  tools?: string[];
  image: string;
  videoPreview?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  iconName?: string;
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface VideoReel {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  aspectRatio: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  type: 'education' | 'tech' | 'video' | 'milestone';
}

export const portfolioData = {
  personalInfo: {
    name: "DIVAKARPRASANTH S.R",
    role: "DEVELOPER • VIDEO EDITOR",
    badge: "SUPERHERO × ANIME × CODE",
    headline: "CODE THE FUTURE. EDIT THE MOMENT.",
    college: "KARPAGAM COLLEGE OF ENGINEERING",
    location: "Coimbatore, Tamil Nadu, India",
    bio: "I fuse technical software engineering with cinematic storytelling, anime motion graphics, and superhero-grade visual effects. Bridging code architecture and high-octane video production to create legendary digital experiences.",
    email: "divakarprasanth.sr@example.com",
    status: "Open to Collaborations & High-Impact Projects",
    stats: [
      { label: "Identity", value: "Code x Motion" },
      { label: "Institution", value: "KCE" },
      { label: "Aesthetic", value: "Superhero Anime" },
      { label: "Power", value: "Dev + Editor" },
    ]
  },

  socialLinks: {
    github: "https://github.com/divakarprasanthrs-hue",
    linkedin: "https://www.linkedin.com/in/divakarprasanth-sr/",
    instagram: "https://instagram.com/divakarprasanth_01",
    instagramHandle: "@DIVAKARPRASANTH_01",
    youtube: "https://youtube.com/@divakarprasanth",
    email: "mailto:divakarprasanth.sr@example.com"
  },

  devSkillCategories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C / C++", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Web Engineering",
      skills: [
        { name: "React.js", level: 92 },
        { name: "HTML5 / Modern CSS", level: 95 },
        { name: "Node.js", level: 82 },
        { name: "REST APIs", level: 88 }
      ]
    },
    {
      title: "Frontend & WebGL 3D",
      skills: [
        { name: "Tailwind CSS", level: 94 },
        { name: "Three.js / WebGL", level: 85 },
        { name: "Framer Motion", level: 90 },
        { name: "Figma UI/UX", level: 85 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "PostgreSQL / SQL", level: 75 },
        { name: "Firebase", level: 82 }
      ]
    },
    {
      title: "Developer Tools & Control",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Vite Build Engine", level: 88 },
        { name: "Postman API Tester", level: 85 }
      ]
    }
  ] as SkillCategory[],

  videoSkillCategories: [
    {
      title: "Video Editing",
      skills: [
        { name: "Adobe Premiere Pro", level: 94 },
        { name: "DaVinci Resolve", level: 88 },
        { name: "CapCut Pro / Desktop", level: 92 },
        { name: "Multi-Cam Editing", level: 86 }
      ]
    },
    {
      title: "Anime & Motion Graphics",
      skills: [
        { name: "Adobe After Effects", level: 92 },
        { name: "3D Camera Tracking", level: 86 },
        { name: "Kinetic Typography", level: 94 },
        { name: "Visual Effects (VFX)", level: 85 }
      ]
    },
    {
      title: "Cinematic Post-Production",
      skills: [
        { name: "Color Grading (LOG/LUTs)", level: 90 },
        { name: "Sound Design & Audio SFX", level: 88 },
        { name: "Speed Ramping & Beat Sync", level: 95 },
        { name: "Impact Transitions", level: 94 }
      ]
    },
    {
      title: "Content & Storytelling",
      skills: [
        { name: "Short-Form Content (Reels/Shorts)", level: 96 },
        { name: "Storyboarding & Pacing", level: 90 },
        { name: "YouTube Production", level: 88 },
        { name: "Cinematic Trailers & Promos", level: 94 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      title: "CyberPulse 3D Dashboard",
      category: "development",
      subtitle: "Futuristic Real-Time Telemetry Platform",
      description: "A superhero-grade WebGL telemetry dashboard built with React, Three.js, and Tailwind CSS featuring interactive 3D grid nodes, energy shaders, and glowing visual cards.",
      fullDescription: "Designed to showcase high-performance real-time data streaming visuals with immersive 3D grid layouts, node controls, custom shaders, and anime-cyber telemetry cards.",
      tags: ["React", "Three.js", "TypeScript", "Tailwind CSS", "WebGL"],
      tools: ["VS Code", "Vite", "R3F"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/divakarprasanthrs-hue",
      featured: true
    },
    {
      id: "project-2",
      title: "NeonVision Anime Reel",
      category: "video",
      subtitle: "Cinematic Motion Graphics & Impact Edits",
      description: "A high-octane motion graphics reel featuring fast-paced kinetic typography, 3D camera tracking, superhero sound design, and color-graded footage.",
      fullDescription: "Produced for high-impact social video campaigns. Combined After Effects 3D space with Premiere Pro timing to deliver crisp, sync-matched beats and anime-inspired impact frames.",
      tags: ["After Effects", "Premiere Pro", "Color Grading", "Motion Design"],
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      featured: true
    },
    {
      id: "project-3",
      title: "Aura Cyber UI System",
      category: "development",
      subtitle: "Glassmorphic Superhero Component Library",
      description: "A modern developer design system focusing on dark mode aesthetic, smooth CSS blur micro-interactions, magnetic aura buttons, and responsive keyboard controls.",
      fullDescription: "Built with React and Tailwind CSS. Includes 30+ reusable glass components, volumetric ambient shadows, anime accent borders, and dark-theme customization.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
      tools: ["Figma", "React", "TypeScript"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/divakarprasanthrs-hue",
      featured: false
    },
    {
      id: "project-4",
      title: "Cinematic Action Teaser",
      category: "video",
      subtitle: "High-Energy Anime Style Promo",
      description: "Dynamic video edit featuring speed ramping, speedline VFX, custom impact SFX, color pop LUTs, and engaging narrative pacing.",
      fullDescription: "Edited with precision rhythm matching to audio stems. Applied custom glow overlays, audio ducking, and cinematic letterboxing for studio finish.",
      tags: ["Video Editing", "Sound Design", "Speed Ramping", "VFX"],
      tools: ["Premiere Pro", "Sound SFX", "Color Correction"],
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      featured: false
    }
  ] as Project[],

  videoReels: [
    {
      id: "reel-1",
      title: "Anime & Motion Showreel 2026",
      tagline: "High-energy fusion of software aesthetics and kinetic anime motion graphics.",
      duration: "0:45",
      category: "Showreel 2026",
      thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      aspectRatio: "16/9",
      description: "A showcase of cinematic transitions, 3D element tracking, anime speedlines, and tight beat sync editing."
    },
    {
      id: "reel-2",
      title: "Short-Form Superhero Storytelling",
      tagline: "Engaging vertical videos engineered for maximum visual retention.",
      duration: "0:30",
      category: "Shorts / Reels",
      thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      aspectRatio: "9/16",
      description: "Custom kinetic subtitle animations, sound design cues, and dynamic visual hooks."
    },
    {
      id: "reel-3",
      title: "Cinematic Color Science & Aura",
      tagline: "Transforming flat LOG profiles into vibrant superhero visual grades.",
      duration: "1:15",
      category: "Post-Production",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      aspectRatio: "16/9",
      description: "Before & after color transformation focusing on tone mapping, skin preservation, and neon mood lighting."
    }
  ] as VideoReel[],

  journey: [
    {
      year: "Present",
      title: "Developer & Creative Video Editor",
      subtitle: "Karpagam College of Engineering",
      description: "Building modern full-stack web applications, engineering 3D WebGL experiences, and editing cinematic anime motion projects.",
      badge: "Education & Practice",
      type: "education"
    },
    {
      year: "2025",
      title: "Superhero & Anime Motion Graphics",
      subtitle: "Cinematic Post-Production",
      description: "Mastered Premiere Pro, After Effects, kinetic typography, multi-track audio engineering, speed ramping, and color grading.",
      badge: "Creative Power",
      type: "video"
    },
    {
      year: "2024",
      title: "Full-Stack Web Architecture",
      subtitle: "React & Code Crafting",
      description: "Deepened frontend development skills with React, TypeScript, Tailwind CSS, 3D WebGL, and interactive state management systems.",
      badge: "Technical Power",
      type: "tech"
    }
  ] as TimelineItem[]
};
