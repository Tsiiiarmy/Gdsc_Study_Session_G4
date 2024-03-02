import React from 'react';
import myImage from './myImage.jpg';
import './App.css';

function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center">
          <img src={myImage} alt="My Image" className="w-48 h-48 mt-8 rounded-full" />
        </div>
        <div className="text-center px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Hello 👋, I'm Tsion Getachew </h2>
          <p className="mt-2 text-gray-600"> a 3rd year Software Engineering student at Addis Ababa Science and Technology University.</p>
          <div className="mt-4">
            <p>

            </p>
          </div>
          <div className="mt-4">
            <p>
              Feel free to reach out to me at Tsiiiarmy@gmail.com. <br /> and @Tsiiiarmy on telegram <br /> +251953420184
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;