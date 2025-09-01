import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Meng Kung",
  lastName: "Kao",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Electrical & Electronic Engineer",
  avatar: "/images/avatar.jpg",
  email: "mengkungkao@gmail.com",
  location: "Australia/Melbourne", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Khmer"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mengkungkao",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mengkung/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Graduate Electrical & Electronic Engineer</>,
  featured: {
    display: true,
    title: <>About <strong className="ml-4">Me</strong></>,
    href: "/about",
  },
  subline: (
    <>
      I am currently pursuing a Master of Professional Engineering at Swinburne University of Technology. 
      I have over a year of experience as an electrical system designer, working on lighting, power distribution, 
      and extra-low voltage systems in buildings.
      Aside from employment, I've been volunteering as a tutor, teaching high school students about STEM and 
      guiding them in the best route for their next studies. Currently, I am a team member of Team Swinburne Formula SAE 
      to contribute my knowledge and skills improving car performance.
      </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an Electrical & Electronic Engineer. I am now pursuing a Master of Professional Engineering at Swinburne University of Technology. I have over a year of experience as an electrical system designer, working on lighting, power distribution, and extra-low voltage systems in buildings. Aside from employment, I've been volunteering as a tutor, teaching high school students about STEM and guiding them in the best route for their next studies. Currently, I am a team member of Team Swinburne Formula SAE to contribute my knowledge and skills improving car performance.
       </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Universal Biosensor",
        timeframe: "2025 - Present",
        role: "Engineering Intern",
        achievements: [
          <>
            Redesigned the PLC schematic.
          </>,
          <>
            Developed and write a new easy understanding working instruction.
          
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ET&S Engineering Import Export Co., Ltd",
        timeframe: "2022 - 2023",
        role: "Electrical CAD Operator",
        achievements: [
          <>
            Developed the Electrical load calculation, sizing cables, & voltage drop with Excels and Ecodial Schneider Software.
            
          </>,
          <>
            Read and write electrical work documents that comply with IEC/BS standard regulatory in Cambodia.
       
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Swinburne University of Technology",
        description: <>Master of Professional Engineering (Electrical & Electronic Engineering)</>,
      },
      {
        name: "Institute of Technology of Cambodia",
        description: <>Engineer's degree (Electrical and Electronic Engineering)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "CAD Drawing",
        description: <>Able to work with 2D AutoCAD, 3D SolidWork, and Fusion360.</>,
        // optional: leave the array empty if you don't want to display images
       
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Programming",
        description: <>Writing code C, C++, Python, Matlab for engineering simulation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
