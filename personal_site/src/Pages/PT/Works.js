import React, { useState } from 'react';
import '../Works.css';
import VideoPlayer from '../../Components/VideoPlayer';
import { Dialog } from '@headlessui/react'
import projectsDetails from '../../helpers/PT/ProjectsDetails';
import closeIcon from '../../images/close-icon.png';

function Works() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Recipes App');

  return (
    <>
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
                      Abrir exibição do projeto
                  </button>
                  )}
                  <button>
                    <a href={filteredProject.repo} target="_blank" rel="noreferrer">
                      Abrir repositório
                    </a>
                  </button>
                </div>
              </div>
              <Dialog 
                open={isOpen}
                className="project_video_container"
                onClose={() => setIsOpen(false)}
              >
                <div className="backdrop"/>
                <div className="full_screen_video_container">
                  <VideoPlayer
                    className="video_player"
                    project={filteredProject.video}
                  />
                  <button className="close_video_btn" onClick={() => setIsOpen(false)}>
                    <img src={closeIcon} alt="close video" />
                  </button>
                </div>
              </Dialog>
            </>
          )
        })}
      </div>
      {/* <div className="custom-shape-divider-bottom-works">
        <svg className="works_svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div> */}
    </>
  );
}

export default Works;
