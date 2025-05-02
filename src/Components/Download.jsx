import React, { useState } from "react";

function Download() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    const link = document.createElement('a');
    link.href = '/SibaPradhan.pdf'; // Public URL
    link.download = 'SibaPradhan_Resume.pdf'; // Suggests browser a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleDownload}
      style={{ fontFamily: '"Winky Rough", cursive' }}
      className="mt-4 bg-gradient-to-r border-2 text-xl cursor-pointer border-[#2e9088] from-cyan-300 via-purple-400 to-blue-600 text-white font-semibold py-2 w-60 rounded-xl
      transition-all duration-300 ease-in-out transform hover:bg-gradient-to-l hover:scale-105 hover:shadow-lg shiny-text"
      disabled={downloading}
    >
      {downloading ? (
        <div className="flex justify-center items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Downloading...
        </div>
      ) : (
        "Get Resume"
      )}
    </button>
  );
}

export default Download;
