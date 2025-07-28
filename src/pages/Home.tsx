import React, { useState } from "react";
import { MapPin, Mail, Phone, Download, Github, Linkedin } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import WeatherModal from "../components/WeatherModal";
import { projects } from "../data/projects";
import profileImage from "../assets/profile.png";
import resume from "../assets/Animesh_Sharma_resume.pdf";

const Home: React.FC = () => {
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 sm:w-60 sm:h-60 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <img
              src={profileImage}
              alt="Animesh Sharma"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Animesh Sharma
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto px-4">
            Full-Stack Developer passionate about creating beautiful,
            functional, and user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Ahemdabad, India</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5" />
              <span>sanimesh2902@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <Phone className="w-5 h-5" />
              <span>+91 8209011873</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button> */}
            <a
              href={resume}
              download="Animesh-Sharma-Resume.pdf"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/Animesh-Sharma-work"
                target="_blank"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/animesh-sharma-7145361b7/"
                target="_blank"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that matter. I specialize
                in React, TypeScript, and modern web technologies.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                    7+ Months
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8 md:mt-0">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    React & TypeScript
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    75%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Node.js & APIs
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    80%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Django & Flask
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    60%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onWeatherClick={() => setIsWeatherModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      <WeatherModal
        isOpen={isWeatherModalOpen}
        onClose={() => setIsWeatherModalOpen(false)}
      />
    </div>
  );
};

export default Home;
