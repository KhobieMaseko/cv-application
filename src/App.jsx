// import { useState, useEffect, useRef } from 'react';
// import GeneralInfo from './components/GeneralInfo';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import CVPreview from './components/CVPreview';
// import { FaTrash } from 'react-icons/fa';
// import './styles/App.css';

// export default function App() {
//   const [general, setGeneral] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   });

//   const [educations, setEducations] = useState([{
//     id: Date.now(),
//     school: '',
//     degree: '',
//     field: '',
//     startDate: '',
//     endDate: ''
//   }]);

//   const [experiences, setExperiences] = useState([{
//     id: Date.now(),
//     company: '',
//     position: '',
//     responsibilities: '',
//     startDate: '',
//     endDate: ''
//   }]);

//   const arrowRef = useRef(null);

//   useEffect(() => {
//     // Add bounce animation class when component mounts
//     if (arrowRef.current) {
//       arrowRef.current.classList.add('bounce');

//       // Remove the class after animation completes (2 seconds)
//       const timer = setTimeout(() => {
//         arrowRef.current?.classList.remove('bounce');
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleGeneralChange = (field, value) => {
//     setGeneral(prev => ({ ...prev, [field]: value }));
//   };

//   const handleEducationChange = (id, field, value) => {
//     setEducations(prev =>
//       prev.map(edu =>
//         edu.id === id ? { ...edu, [field]: value } : edu
//       )
//     );
//   };

//   const handleExperienceChange = (id, field, value) => {
//     setExperiences(prev =>
//       prev.map(exp =>
//         exp.id === id ? { ...exp, [field]: value } : exp
//       )
//     );
//   };

//   const addEducation = () => {
//     setEducations(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         school: '',
//         degree: '',
//         field: '',
//         startDate: '',
//         endDate: ''
//       }
//     ]);
//   };

//   const addExperience = () => {
//     setExperiences(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         company: '',
//         position: '',
//         responsibilities: '',
//         startDate: '',
//         endDate: ''
//       }
//     ]);
//   };

//   const deleteEducation = (id) => {
//     setEducations(prev => prev.filter(edu => edu.id !== id));
//   };

//   const deleteExperience = (id) => {
//     setExperiences(prev => prev.filter(exp => exp.id !== id));
//   };

//   return (
//     <div className="app">
//       <h1>CV Maker</h1>
//       <p className="preview-instruction">
//         Start filling out the form below!{' '}
//         <span ref={arrowRef} className="arrow-icon">🔽</span>
//       </p>
//       <div className="builder-container">
//         <div className="form-container">
//           <GeneralInfo data={general} onChange={handleGeneralChange} />
//           <Education
//             educations={educations}
//             onChange={handleEducationChange}
//             onAdd={addEducation}
//             onDelete={deleteEducation}
//           />
//           <Experience
//             experiences={experiences}
//             onChange={handleExperienceChange}
//             onAdd={addExperience}
//             onDelete={deleteExperience}
//           />
//         </div>
//         <div className="preview-container">
//           <CVPreview
//             general={general}
//             educations={educations}
//             experiences={experiences}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import CVPreview from './components/CVPreview';
import { FaTrash } from 'react-icons/fa';
import './styles/App.css';

export default function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    website: '',
    twitter: ''
  });

  const [educations, setEducations] = useState([{
    id: Date.now(),
    school: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: ''
  }]);

  const [experiences, setExperiences] = useState([{
    id: Date.now(),
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  }]);

  const [skills, setSkills] = useState([{
    id: Date.now(),
    name: '',
    level: 'Intermediate'
  }]);

  const [languages, setLanguages] = useState([{
    id: Date.now(),
    name: '',
    proficiency: 'Intermediate'
  }]);

  const arrowRef = useRef(null);

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.classList.add('bounce');
      const timer = setTimeout(() => {
        arrowRef.current?.classList.remove('bounce');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleGeneralChange = (field, value) => {
    setGeneral(prev => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (id, field, value) => {
    setEducations(prev =>
      prev.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences(prev =>
      prev.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const addEducation = () => {
    setEducations(prev => [
      ...prev,
      {
        id: Date.now(),
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const addExperience = () => {
    setExperiences(prev => [
      ...prev,
      {
        id: Date.now(),
        company: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const deleteEducation = (id) => {
    setEducations(prev => prev.filter(edu => edu.id !== id));
  };

  const deleteExperience = (id) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  const handleSkillChange = (id, field, value) => {
    setSkills(prev =>
      prev.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const addSkill = () => {
    setSkills(prev => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        level: 'Intermediate'
      }
    ]);
  };

  const deleteSkill = (id) => {
    setSkills(prev => prev.filter(skill => skill.id !== id));
  };

  const handleLanguageChange = (id, field, value) => {
    setLanguages(prev =>
      prev.map(lang =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    );
  };

  const addLanguage = () => {
    setLanguages(prev => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        proficiency: 'Intermediate'
      }
    ]);
  };

  const deleteLanguage = (id) => {
    setLanguages(prev => prev.filter(lang => lang.id !== id));
  };

  return (
    <div className="app">
      <h1>CV Maker</h1>
      <p className="preview-instruction">
        Start filling out the form below!{' '}
        <span ref={arrowRef} className="arrow-icon">🔽</span>
      </p>
      <div className="builder-container">
        <div className="form-container">
          <GeneralInfo data={general} onChange={handleGeneralChange} />
          <Education
            educations={educations}
            onChange={handleEducationChange}
            onAdd={addEducation}
            onDelete={deleteEducation}
          />
          <Experience
            experiences={experiences}
            onChange={handleExperienceChange}
            onAdd={addExperience}
            onDelete={deleteExperience}
          />
          <Skills
            skills={skills}
            onChange={handleSkillChange}
            onAdd={addSkill}
            onDelete={deleteSkill}
          />
          <Languages
            languages={languages}
            onChange={handleLanguageChange}
            onAdd={addLanguage}
            onDelete={deleteLanguage}
          />
        </div>
        <div className="preview-container">
          <CVPreview
            general={general}
            educations={educations}
            experiences={experiences}
            skills={skills}
            languages={languages}
          />
        </div>
      </div>
    </div>
  );
}
