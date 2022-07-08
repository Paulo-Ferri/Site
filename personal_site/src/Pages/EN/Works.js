import React, { useState } from 'react';
import '../Works.css';
import VideoPlayer from '../../Components/VideoPlayer';
import { Dialog } from '@headlessui/react'
import projectsDetails from '../../helpers/EN/ProjectsDetails';

function Works() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Recipes App');

  return (
    <div className="works_container" id="works_container">
      <div className="projects_exhibition">
        {projectsDetails && projectsDetails.map((project, index) => {
          return (
            <div
            className={selectedProject === project.projectName ? "project_selector active_project" : "project_selector"}
            id={project.projectName}
            onClick={(e) => setSelectedProject(e.target.id) }
            key={index}
            >
              <img
                src={project.icon}
                alt={`project ${project.projectName} icon`}
                id={project.projectName}
              />
              <h1 id={project.projectName}>{project.projectName}</h1>
            </div>
          )
        })}
      </div>
      {projectsDetails && projectsDetails.filter(project => project.projectName === selectedProject)
      .map((filteredProject, index) => {
        return (
          <>
            <div className="project_details" key={index}>
              <h1>{filteredProject.projectName}</h1>
              <p>{filteredProject.projectDescription}</p>
              <div className="project_details_buttons">
                {filteredProject.hasExhibition === true && (
                  <button
                    onClick={() => setIsOpen(true)}
                  >
                    Open project exhibition
                </button>
                )}
                <button>
                  <a href={filteredProject.repo} target="_blank" rel="noreferrer">
                    Open repository
                  </a>
                </button>
              </div>
            </div>
            <Dialog 
              open={isOpen}
              className="project_video_container"
              onClose={() => setIsOpen(false)}
            >
              <div className="backdrop" />
              <div className="full_screen_video_container">
                <VideoPlayer
                  className="video_player"
                  project={filteredProject.video}
                />
              </div>
            </Dialog>
          </>
        )
      })}
    </div>
  );
}

export default Works;
