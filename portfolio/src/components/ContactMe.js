const ContactMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 space-y-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Feel free to reach out to me! You can email me directly or connect with me on my socials.
      </p>

      {/* Email Section */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Me an Email</h2>
        <p className="text-sm text-gray-600 mb-2">
          You can reach me at <span className="font-bold text-gray-800">panpetertran123@gmail.com</span>
        </p>
        <p className="text-sm text-gray-600 mb-3">or press the button below:</p>
        <a
          href="mailto:panpetertran123@gmail.com?subject=Portfolio: [your subject here]&body= [your message here]"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Email Me
        </a>
      </div>

      {/* Social Links Section */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Me on Socials</h2>
        <div className="flex justify-center space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/aeMyst"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="h-12 w-12 rounded-full hover:opacity-80 transition-opacity"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/peter-tran-83ba53237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="h-12 w-12 rounded-full hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/peterthetran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="h-12 w-12 rounded-full hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
