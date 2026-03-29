import maMicroImg from "../assets/project-ma-micro.png";
import findThisImg from "../assets/project-findthis.png";
import joberOneImg from "../assets/project-joberone.png";

export const projects = [
  {
    id: "ma-micro",
    sysId: "01",
    status: "DEPLOYED",
    title: "Ma Micro",
    company: "Win Technologie",
    year: "2026",
    type: "FlutterFlow • Mobile",
    image: maMicroImg,
    source: "",
    live: "https://wintechnologie.ca/single-project?id=2",
    summary:
      "Mobile app built with FlutterFlow at Win Technologie — clean onboarding, smooth navigation, and reliable feature delivery.",
    problem:
      "Deliver a mobile app experience that feels simple and professional while keeping screens/components easy to iterate.",
    solution:
      "A structured FlutterFlow build with consistent UI patterns, reusable components, and a stable flow from onboarding to core features.",
    bullets: [
      "Production-ready UI flows and navigation structure",
      "Iterative delivery + bug fixing in a team workflow",
      "Backend-ready approach (Firebase / API modules depending on features)",
    ],
    stack: ["FlutterFlow", "Firebase", "UI/UX", "Delivery"],
  },
  {
    id: "findthis",
    sysId: "02",
    status: "ACTIVE",
    title: "FindThis (IGEA partnership)",
    company: "Win Technologie",
    year: "2026",
    type: "FlutterFlow • Mobile",
    image: findThisImg,
    source: "",
    live: "",
    summary:
      "Mobile app that helps people find products in stores using an interactive map plus a product search bar.",
    problem:
      "Users waste time searching for items — they need a fast way to locate products and navigate inside/around stores.",
    solution:
      "Map-first UX with a simple search bar and clear results that guide the user to the right place.",
    bullets: [
      "Product search experience (fast input → clear results)",
      "Map-based navigation to guide users",
      "Scalable screens for more stores & products",
    ],
    stack: ["FlutterFlow", "Maps", "Search UX", "Partnership"],
  },
  {
    id: "joberone",
    sysId: "03",
    status: "STAGING",
    title: "JoberOne",
    company: "Win Technologie",
    year: "2026",
    type: "Web • Job Search",
    image: joberOneImg,
    source: "",
    live: "",
    summary:
      "Web platform to find short-duration jobs (time-limited opportunities) with a simple and focused search experience.",
    problem:
      "People want quick, time-limited jobs — but typical job boards are heavy and not optimized for this use case.",
    solution:
      "A clean job-search experience focused on speed, clarity, and structured listing → details navigation.",
    bullets: [
      "Short-duration job search (ready for filters)",
      "Clean listing + details UX",
      "Performance-minded UI and navigation flows",
    ],
    stack: ["React", "UI/UX", "Search", "Web"],
  },
];
