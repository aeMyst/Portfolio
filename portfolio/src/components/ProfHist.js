const ProfHist = () => {
  const timelineData = [
    {
      title: "Server/Bartender",
      company: "Roy's Korean Kitchen",
      date: "September 2024 - Present",
    },
    {
      title: "Server",
      company: "Baekjeong Korean BBQ House",
      date: "June 2022 - February 2024",
    },
    {
      title: "Keyholder",
      company: "Truedan (Jenjudan)",
      date: "June 2021 - June 2022",
    },
    {
      title: "Customer Service Specialist",
      company: "Mcdonalds",
      date: "June 2018 - June 2022",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Professional Timeline</h1>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {/* Timeline Items */}
        <div className="space-y-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full border-4 border-gray-100"></div>

              {/* Content */}
              <div
                className={`w-1/2 bg-white p-4 shadow-md rounded-lg ${
                  index % 2 === 0 ? "text-right pr-6" : "text-left pl-6"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.company}</p>
                <p className="text-sm text-gray-500 italic">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfHist;
