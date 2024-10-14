export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    //{ name: "Testimonials", link: "#testimonials" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently developing a video conferencing app using Next.js, Stream and Tailwind CSS",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "MovieFlix - Fetch Movie Data from IMBD",
      des: "React web app to search for movies using an API that provides information about movies.",
      img: "/movieflix.png",
      iconLists: ["/re.svg"],
      link: "https://github.com/elucifurr/movieflix",
      live: "https://moviefliximdb.netlify.app",
    },
    {
      id: 2,
      title: "Chef's Cookbook - Blog to browse Recipes",
      des: "Search, Create and Share the best Recipes created by others in a Great and Innovative Community.",
      img: "/chefscookbook.png",
      iconLists: ["/next.svg", "/re.svg","/tail.svg"],
      link: "https://github.com/elucifurr/chefscookbook",
      live: "https://chefscookbook.vercel.app",
    },
    {
      id: 3,
      title: "Nexus Banking",
      des: "A REAL Banking App to link your bank account. Check your funds and make transactions using the latest tech stack.",
      img: "/nexus.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "app.svg"],
      link: "https://github.com/elucifurr/nexus-banking",
      live: "https://nexus-banking.vercel.app",
    },
    {
      id: 4,
      title: "Room - Video Conferencing app (WIP)",
      des: "Simplify your video conferencing experience with Room. Seamlessly connect with colleagues and friends.",
      img: "",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "",
      live: "",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Mario was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mario's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mario is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Mario was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mario's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mario is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Mario was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mario's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mario is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Mario was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mario's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mario is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Mario was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mario's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mario is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 2,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 3,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 4,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "FullStack Developer",
      desc: "Built an entire banking platform to connect your bank accounts using Next.js, Plaid, Appwrite and Dwolla, allowing transactions.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      desc: "Designed layout for multiple webs, e-commerce shops, appointment scheduling, bussiness services, etc.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Workspace Account Manager",
      desc: "Created a Google Bussiness Account, making it appear on search and maps, integrated scheduling components allowing book online.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/elucifurr",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/mario-segundo-galindo",
    },
  ];