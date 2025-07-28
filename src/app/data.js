/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "PLY Sequence Converter",
    description:
      "A Blender plugin built to visualize CryoDRGN output by rendering dynamic protein conformations. Converts voxel-based CryoDRGN results to point cloud `.ply` mesh sequences, reducing memory usage by 97%. Upgrades legacy Stop Motion OBJ support for Blender 4.0+, enabling seamless import and real-time rendering of complex protein shape transitions.",
    date: "2023-05-12",
    demoLink: "https://github.com/dy-hu/plysequenceconverter",
    image: "/projects/cryodrgn.png",
    tags: ["Python", "Blender", "CryoDRGN", "Point Cloud"],
  },
  {
    id: 2,
    name: "Workwell",
    description:
      "A full-stack web app built for a nonprofit serving formerly incarcerated individuals in Trenton, NJ. The platform enables staff to record, track, and analyze program outcomes, reducing paperwork and improving client support. Developed as part of Princeton's COS333 course.",
    date: "2023-01-30",
    demoLink: "",
    image: "/projects/workwell.png",
    tags: ["Django", "PostgreSQL", "HTML", "CSS"],
  },
  {
    id: 3,
    name: "48U Studios",
    description:
      "Designed and deployed a branded landing page for the Daily Princetonian to connect students with potential employers. Created responsive user interfaces and recruiter dashboards as part of a cross-functional media-tech initiative.",
    date: "2022-11-17",
    demoLink: "",
    image: "/projects/48u.png",
    tags: ["Flask", "React", "TypeScript"],
  },
  {
    id: 4,
    name: "HSS Clubs",
    description:
      "Created an online club discovery and registration portal in response to COVID-19 campus closures. Students could browse, search, and sign up for clubs in a virtual environment simulating a physical fair experience.",
    date: "2021-09-05",
    demoLink: "",
    image: "/projects/hssclubs.png",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    id: 5,
    name: "SocialScout",
    description:
      "A web utility that flags potentially inappropriate content on social media bios using natural language heuristics. Built with a scraping engine to scan public Twitter profiles and identify NSFW phrases.",
    date: "2020-07-01",
    demoLink: "",
    image: "/projects/socialscout.png",
    tags: ["Python", "BeautifulSoup4", "Regex"],
  },
  {
    id: 6,
    name: "Hoagie Mail",
    description:
      "Internal web tool built for Princeton’s student community. Allows club officers and admins to send email announcements to the entire student body with a single click.",
    date: "2023-03-14",
    demoLink: "",
    image: "/projects/hoagie.jpeg",
    tags: ["React", "Go", "Email APIs"],
  }
];



export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/dy-hu",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dy-hu",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Hu_Daniel_resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


