const ProfHist = () => {
  const timelineData = [
    {
      title: "Server/Bartender",
      company: "Roy's Korean Kitchen",
      date: "September 2024 - Present",
      description: "Boosted sales by 10% through reporting, promotion analysis, and efficient guest planning.",
    },
    {
      title: "Server",
      company: "Baekjeong Korean BBQ House",
      date: "June 2022 - February 2024",
      description: "Ensured quality compliance and managed high-volume service, boosting efficiency and maintaining a 4.5-star rating.",
    },
    {
      title: "Keyholder",
      company: "Truedan (Jenjudan)",
      date: "June 2021 - June 2022",
      description: "Streamlined operations and ensured accurate cash handling, reducing shortages and expenses.",
    },
    {
      title: "Customer Service Specialist",
      company: "McDonald's",
      date: "June 2018 - June 2022",
      description: "Boosted customer satisfaction, engagement, and repeat visits through effective communication and training.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Professional Timeline</h1>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-4 border-gray-100"></div>

              {/* Content Box */}
              <div
                className={`w-[49%] bg-white p-6 shadow-lg rounded-lg ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.company}</p>
                <p className="text-sm text-gray-500 italic mb-4">{item.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfHist;
