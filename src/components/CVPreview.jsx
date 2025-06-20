// import '../styles/CVPreview.css';

// export default function CVPreview({ general, educations, experiences }) {
//   return (
//     <div className="cv-preview">
//       <header className="cv-header">
//         <h1>{general.name || 'Your Name'}</h1>
//         <div className="contact-info">
//           <p>{general.email || 'email@example.com'}</p>
//           <p>{general.phone || '(123) 456-7890'}</p>
//           <p>{general.address || 'Your Address'}</p>
//         </div>
//       </header>

//       <section className="cv-section">
//         <h2>Education</h2>
//         {educations.map(edu => (
//           <div key={edu.id} className="cv-entry">
//             <h3>{edu.school || 'School/University'}</h3>
//             <p>{edu.degree || 'Degree'} in {edu.field || 'Field of Study'}</p>
//             <p className="dates">
//               {edu.startDate || 'Start Date'} - {edu.endDate || 'End Date'}
//             </p>
//           </div>
//         ))}
//       </section>

//       <section className="cv-section">
//         <h2>Work Experience</h2>
//         {experiences.map(exp => (
//           <div key={exp.id} className="cv-entry">
//             <h3>{exp.company || 'Company Name'}</h3>
//             <p className="position">{exp.position || 'Your Position'}</p>
//             <p className="dates">
//               {exp.startDate || 'Start Date'} - {exp.endDate || 'End Date'}
//             </p>
//             <p className="responsibilities">
//               {exp.responsibilities || 'Your responsibilities and achievements'}
//             </p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }


import '../styles/CVPreview.css';

export default function CVPreview({ general, educations, experiences, skills, languages }) {
  return (
    <div className="cv-preview">
      <header className="cv-header">
        <h1>{general.name || 'Your Name'}</h1>
        <div className="contact-info">
          <p>{general.email || 'email@example.com'}</p>
          <p>{general.phone || '(123) 456-7890'}</p>
          <p>{general.address || 'Your Address'}</p>
          {(general.linkedin || general.github || general.website || general.twitter) && (
            <div className="social-links">
              {general.linkedin && <p><a href={general.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
              {general.github && <p><a href={general.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
              {general.website && <p><a href={general.website} target="_blank" rel="noopener noreferrer">Website</a></p>}
              {general.twitter && <p><a href={general.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></p>}
            </div>
          )}
        </div>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        {educations.map(edu => (
          <div key={edu.id} className="cv-entry">
            <h3>{edu.school || 'School/University'}</h3>
            <p>{edu.degree || 'Degree'} in {edu.field || 'Field of Study'}</p>
            <p className="dates">
              {edu.startDate || 'Start Date'} - {edu.endDate || 'End Date'}
            </p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Work Experience</h2>
        {experiences.map(exp => (
          <div key={exp.id} className="cv-entry">
            <h3>{exp.company || 'Company Name'}</h3>
            <p className="position">{exp.position || 'Your Position'}</p>
            <p className="dates">
              {exp.startDate || 'Start Date'} - {exp.endDate || 'End Date'}
            </p>
            <p className="responsibilities">
              {exp.responsibilities || 'Your responsibilities and achievements'}
            </p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map(skill => (
            <div key={skill.id} className="skill-item">
              <span className="skill-name">{skill.name || 'Skill'}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Languages</h2>
        <div className="languages-list">
          {languages.map(lang => (
            <div key={lang.id} className="language-item">
              <span className="language-name">{lang.name || 'Language'}</span>
              <span className="language-proficiency">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
