import React from "react";
import { Cloud } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onWeatherClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onWeatherClick,
}) => {
  const handleClick = () => {
    if (project.isWeatherProject && onWeatherClick) {
      onWeatherClick();
    }
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        project.isWeatherProject ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover"
        />
        {project.isWeatherProject && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            <Cloud className="w-3 h-3 inline mr-1" />
            Interactive
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* {!project.isWeatherProject && (
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProjectCard;
