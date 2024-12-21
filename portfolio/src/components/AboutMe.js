const AboutMe = () => {
  const techStack = {
    languages: [
      { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { name: 'Java', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
      { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
      { name: 'SQL', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png' },
      { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
      { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
      { name: 'Dart', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png' },
    ],
    frameworks: [
      { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
      { name: 'Flutter', image: 'https://www.svgrepo.com/show/353751/flutter.svg' },
      { name: 'Flask', image: 'https://cdn.worldvectorlogo.com/logos/flask.svg' },
      { name: 'TailwindCSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Django', image: 'https://www.svgrepo.com/show/353657/django-icon.svg' },
    ],
    tools: [
      { name: 'Microsoft Excel', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg' },
      { name: 'GitHub', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
      { name: 'GitLab', image: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg' },
      { name: 'MySQL', image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
      { name: 'SQLite', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1024px-Sqlite-square-icon.svg.png' },
      { name: 'DBeaver', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/2048px-DBeaver_logo.svg.png' },
      { name: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
      { name: 'IntelliJ', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/768px-IntelliJ_IDEA_Icon.svg.png' },
      { name: 'Figma', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
      { name: 'Firebase', image: 'https://www.svgrepo.com/show/353735/firebase.svg' },
      { name: 'Android Studio', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png'},
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      {/* About Me Section */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">I'm currently a University of Calgary Student in my 3rd year of Computer Science.</span> 
          I’ve worked on impactful projects such as <span className="font-semibold text-gray-800">PetPals</span>, 
          an award-winning blog platform, and <span className="font-semibold text-gray-800">RevRentals</span>, a mobile motorcycle rental marketplace. 
          With strong leadership, adaptability, and a drive to  <span className="font-semibold text-gray-800">make meaningful contributions,</span> 
          I’m excited to learn and <span className="font-semibold text-gray-800">contribute to real problems and solutions!</span>
        </p>
      </div>

      <div className="max-w-7xl flex flex-wrap justify-center gap-6">
  {/* Languages Section */}
  <div className="flex flex-col w-96 h-[300px] bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Languages</h3>
    <div className="grid grid-cols-4 gap-4 justify-center items-center">
      {techStack.languages.map((tech) => (
        <div key={tech.name}>
          <img src={tech.image} alt={tech.name} className="h-12 w-12 object-contain mx-auto" />
        </div>
      ))}
    </div>
  </div>

  {/* Frameworks Section */}
  <div className="flex flex-col w-96 h-[300px] bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Frameworks</h3>
    <div className="grid grid-cols-4 gap-4 justify-center items-center">
      {techStack.frameworks.map((tech) => (
        <div key={tech.name}>
          <img src={tech.image} alt={tech.name} className="h-12 w-12 object-contain mx-auto" />
        </div>
      ))}
    </div>
  </div>

  {/* Tools Section */}
  <div className="flex flex-col w-96 h-[300px] bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Tools</h3>
    <div className="grid grid-cols-4 gap-4 justify-center items-center">
      {techStack.tools.map((tech) => (
        <div key={tech.name}>
          <img src={tech.image} alt={tech.name} className="h-12 w-12 object-contain mx-auto" />
        </div>
      ))}
    </div>
  </div>
</div>
</div>
  );
};

export default AboutMe;
