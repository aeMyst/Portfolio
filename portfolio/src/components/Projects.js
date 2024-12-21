const Projects = () => {
  const projectData = [
    {
      name: "PetPals",
      description: "An anonymous blog platform with personalized AI-powered content.",
      technologies: "Firebase, React, JavaScript, Express.js, Gemini AI, Axios, Figma",
      gif: `${process.env.PUBLIC_URL}/logo512.png`,
      github: "https://github.com/username/petpals",
    },
    {
      name: "RevRentals Motorcycle Marketplace",
      description: "A peer-to-peer marketplace revolutionizing motorcycle rentals.",
      technologies: "Flutter, Dart, Figma, Firebase, SQL",
      gif: `${process.env.PUBLIC_URL}/logo512.png`,
      github: "https://github.com/username/revrentals",
    },
    {
      name: "Minigame Online Portal",
      description: "A multiplayer platform enabling seamless matchmaking.",
      technologies: "Java, JavaFX, CSS",
      gif: `${process.env.PUBLIC_URL}/logo512.png`,
      github: "https://github.com/username/minigameportal",
    },
    {
      name: "ChefAI",
      description: "A smart recipe generator using OpenAI for personalized recipes.",
      technologies: "HTML, CSS, JavaScript, Python, Flask, SQLite, Figma, OpenAI",
      gif: `${process.env.PUBLIC_URL}/logo512.png`,
      github: "https://github.com/username/chefai",
    },
    {
      name: "Celebrity Capability Data Survey",
      description: "A tool to calculate compatibility with celebrities and visualize results.",
      technologies: "Java, JavaFX, CSS",
      gif: `${process.env.PUBLIC_URL}/logo512.png`,
      github: "https://github.com/username/celebritysurvey",
    },
    {
      name: "Wordle Replica",
      description: "A console-based Python program replicating the popular Wordle game.",
      technologies: "Python",
      gif: `${process.env.PUBLIC_URL}/logo512.png`,
      github: "https://github.com/username/wordlereplica",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md flex flex-col items-center"
          >
            {/* Project GIF */}
            <img
              src={project.gif}
              alt={`${project.name} functionality`}
              className="h-32 w-auto mb-2"
            />

            {/* Project Name */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {project.name}
            </h2>

            {/* Project Technologies */}
            <p className="text-xs text-gray-500 italic mb-1">
              {project.technologies}
            </p>

            {/* Project Description */}
            <p className="text-sm text-gray-600 text-center mb-3">
              {project.description}
            </p>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
