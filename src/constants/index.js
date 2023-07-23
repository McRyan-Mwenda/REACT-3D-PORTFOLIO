import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cb,
    kaa,
    kfc,
    icta,
    blender,
    maya,
    filmora,
    threejs,
    python,
    django,
    ArchiViz,
    Bedroom,
    Board,
    Desert,
    DNA,
    hut,
    MicroChip,
    Mountains,
    Office,
    Office2,
    Sunset,
    Volcano,
    Env
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
    
  ];
  
  const services = [
    {
      title: "3D Artist",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
        {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "Autodesk Maya",
      icon: maya,
    },
    {
      name: "Filmora",
      icon: filmora,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Barista",
      company_name: "Coffee and Bagels",
      icon: cb,
      iconBg: "#383E56",
      date: "December 2018 - September 2022",
      points: [
        "Roasting of coffee",
        "Brewing of specialized coffee brews",
        
      ],
    },
    {
      title: "I.C.T Engineer Trainee",
      company_name: "Kenya Airports Authority- Wilson Airport",
      icon: kaa,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - May 2022",
      points: [
        "Installation and configuration of windows 7/8/10 professional and basic office application and E.R.P software. This included installation of fixes, enhancements, and upgrades to supported systems.",
        "Configuration and troubleshooting email problems in MS exchange server 2010, outlook mails on client PCs, Smart phones using Ms. Outlook.",
        "Administers support, anti-virus and anti-malware solutions for desktops and laptops.",
        "Orientation and configuration of print server, printing and imaging solutions.",
        "Resolving basic network connectivity issues.",
        "Troubleshooting and diagnosing system failures.",
        "Basic skills of SAP systems.",
        "Logging and tracking all systems and process issues and incidents using K.A.A help-desk.",
        "Conducting preventive maintenance.",
        "Configure devices to local area networks and AD domain and replacing hardware components in PCs if needed.",
        "Maintenance of inventory database of all IT hardware and software.",
        "Perform all ongoing performance tuning, hardware upgrades, and resource optimization as required. Configure CPU, memory, disk and performing cleanups for slow PCs.",
        "Working as a team member with other technical staff such as networking to ensure that security and connectivity is maintained within the organization.",
      ],
    },
    {
      title: "Animator",
      company_name: "Kenya Film Commission",
      icon: kfc,
      iconBg: "#383E56",
      date: "October 2022 - December 2022",
      points: [
        "Modelling",
        "Environment Design and Modelling",
        "Surfacing",
        "Lighting",
        "Animation",
        "Compositing",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "I.C.T. Authority",
      icon: icta,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Developing and maintaining web applications using Django-Python and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developing a management information system for ICTA-NOC that will be used to manage all services related to the organisation, from reporting to inventory and knowledge management. Technology used for this is Django Framework and Bootstrap.",
        "Troubleshooting of equipment such as switches, routers and computers remotely.",
        "Monitoring of GCCN networks across the country and escalating of emerging issues to the relevant contractors.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a 3D models as beautiful as our product, but MacRyan proved me wrong.",
      name: "Loisa Kitakaya",
      designation: "CFO",
      company: "Finance Fluent",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like MacRyan does.",
      name: "Brandon Gaathe",
      designation: "COO",
      company: "Wahenga Animations",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mwenda optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Fridah Muyu",
      designation: "CTO",
      company: "Tuntoon",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sunset Render",
      description:
        "Sunset render made in Blender 3D and rendered using Evee render engine",
      tags: [
        {
          name: "Blender",
          color: "Orange-text-gradient",
        },
        {
          name: "Evee",
          color: "green-text-gradient",
        },
        {
          name: "Compositing",
          color: "pink-text-gradient",
        },
      ],
      image: Sunset,
      instagram_link: "https://www.instagram.com/p/CrI6iRGPPnD/",
    },
    {
      name: "Volcano",
      description:
        "Volcano render made in Blender 3D and rendered using Cycles render engine",
      tags: [
        {
          name: "Blender",
          color: "Orange-text-gradient",
        },
        {
          name: "Cycles",
          color: "green-text-gradient",
        },
        {
          name: "awesome",
          color: "pink-text-gradient",
        },
      ],
      image: Volcano,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Office Render",
      description:
        "This is an interior design of an Office made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "Design",
          color: "blue-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "cycles",
          color: "pink-text-gradient",
        },
      ],
      image: Office,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Office Render",
      description:
        "This is an interior design of an Office made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "Design",
          color: "blue-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "cycles",
          color: "pink-text-gradient",
        },
      ],
      image: Office2,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Mountain Environment Render",
      description:
        "This is a render for environment done in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "environmentDesign",
          color: "blue-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "cycles",
          color: "pink-text-gradient",
        },
      ],
      image: Mountains,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "DNA Abstract Render",
      description:
        "This is an abstract render for DNA done in Blender 3D and rendered in Evee render engine",
      tags: [
        {
          name: "abstractDesign",
          color: "blue-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Evee",
          color: "pink-text-gradient",
        },
      ],
      image: DNA,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Bedroom Render",
      description:
        "This is an interior design of a bedroom made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "interiorDesign",
          color: "red-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Cycles",
          color: "pink-text-gradient",
        },
      ],
      image: Bedroom,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Exterior ArchiViz Render",
      description:
        "This is an exterior design of a mansion made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "exteriorDesign",
          color: "blue-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Cycles",
          color: "pink-text-gradient",
        },
      ],
      image: ArchiViz,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Desert Render",
      description:
        "This is an environment design of a desert made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "environmentDesign",
          color: "brown-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Evee",
          color: "pink-text-gradient",
        },
      ],
      image: Desert,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Exterior ArchiViz Render",
      description:
        "This is an exterior design of a mansion made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "exteriorDesign",
          color: "blue-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Cycles",
          color: "pink-text-gradient",
        },
      ],
      image: ArchiViz,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Hut Render",
      description:
        "This is a design of an African hut made in Blender 3D and rendered in Cycles render engine",
      tags: [
        {
          name: "africa",
          color: "brown-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Evee",
          color: "pink-text-gradient",
        },
      ],
      image: hut,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
    {
      name: "Stylized Render",
      description:
        "This is a design of a stylized house made in Blender 3D and rendered in Evee render engine",
      tags: [
        {
          name: "stylized",
          color: "brown-text-gradient",
        },
        {
          name: "b3D",
          color: "green-text-gradient",
        },
        {
          name: "Evee",
          color: "pink-text-gradient",
        },
      ],
      image: Env,
      instagram_link: "https://www.instagram.com/macryan_mwenda/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  