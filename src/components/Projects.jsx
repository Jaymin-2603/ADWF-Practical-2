import React from 'react';

const projects = [
  {
    number: '01',
    title: 'TNP Cell',
    description: 'A React and FastAPI placement portal for student activity, companies, sessions, and reports.',
    category: 'Full-stack portal',
    mark: 'TC',
    repository: 'https://github.com/Jaymin-2603/TNP-CELL',
    accessNote: 'Private repository · GitHub access required.',
  },
  {
    number: '02',
    title: 'Intern Intelligence Platform',
    description: 'Mentor and intern analytics with ETL-backed reporting and an AI data assistant.',
    category: 'Data & AI',
    mark: 'II',
    repository: 'https://github.com/Jaymin-2603/intern-dashboard',
  },
  {
    number: '03',
    title: 'AquaSenti',
    description: 'An interactive flood digital twin for scenario-based inundation and infrastructure risk.',
    category: 'Flood digital twin',
    mark: 'AS',
    repository: 'https://github.com/Jaymin-2603/AquaSenti',
    accessNote: 'Private repository · GitHub access required.',
  },
  {
    number: '04',
    title: 'CrimeGPT',
    description: 'Case and evidence management with FIR drafting, approvals, and audit history.',
    category: 'Civic tech',
    mark: 'CG',
    repository: 'https://github.com/Priyanshu-Macwan/CrimeGPT',
  },
  {
    number: '05',
    title: 'SIH 2026 · AquaSenti Digital Twin',
    description: 'An end-to-end rainfall early-warning platform with AI nowcasts and impact-based alerts.',
    category: 'Smart India Hackathon',
    mark: 'DT',
    repository: 'https://github.com/Aryan-B-Parikh/SIH-2026',
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Projects</p>
            <h2 id="projects-title">Selected projects<span className="accent-period">.</span></h2>
          </div>
          <p>Five projects and team collaborations on GitHub.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual" aria-hidden="true"><span>{project.mark}</span></div>
              <div className="project-meta"><span>{project.number} / {project.category}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View repository for ${project.title} on GitHub`}>
                View repository <span aria-hidden="true">↗</span>
              </a>
              {project.accessNote && <p className="repo-access-note">{project.accessNote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
