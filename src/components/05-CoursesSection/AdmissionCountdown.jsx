// src/components/AdmissionCountdown.js

import React, { useState, useEffect } from 'react';

// Set your target date (e.g., Application Deadline: December 31, 2025)
const targetDate = new Date('January 31, 2026 23:59:59').getTime();

function AdmissionCountdown() {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    // 1. Function to calculate remaining time
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeRemaining(0);
        return;
      }

      // 2. Calculate time components (in milliseconds)
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      // 3. Store the formatted result as an object
      setTimeRemaining({
        days: days,
        hours: hours,
        min: minutes,
        sec: seconds,
      });
    };

    // Run the calculation immediately and then every second
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval); 
  }, []);

  // Function to pad single digits (e.g., 5 -> 05)
  const pad = (num) => String(num).padStart(2, '0');
  
  // Check if the timer has expired
  const isExpired = timeRemaining === 0 || timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0;

// ... (JSX render structure continues below)
// ... (JSX render structure from Step 1)

  return (
    <div className="text-center p-4 bg-red-50 border-2 border-red-300 rounded-lg shadow-inner">
      <h3 className="text-xl font-bold text-red-600 mb-3">
        {isExpired ? "Application Closed!" : "Current Application Cycle Closes In:"}
      </h3>
      
      {/* Time Display Grid */}
      {isExpired ? (
          <p className="text-2xl font-extrabold text-red-800">Deadline Passed</p>
      ) : (
          <div className="grid grid-cols-4 gap-2">
            {Object.keys(timeRemaining).map((unit) => (
              <div key={unit} className="bg-white p-1 rounded-md shadow-md">
                {/* Time Value */}
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {pad(timeRemaining[unit])}
                </span>
                {/* Time Unit Label */}
                <span className="block text-xs font-semibold uppercase text-gray-500 mt-1">
                  {unit}
                </span>
              </div>
            ))}
          </div>
      )}
      
    </div>
  );
}

export default AdmissionCountdown;