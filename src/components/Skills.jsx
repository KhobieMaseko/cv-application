import { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import '../styles/Skills.css';

export default function Skills({ skills, onChange, onAdd, onDelete }) {
  const [isEditing, setIsEditing] = useState(true);
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} aria-label="Skills form">
          {skills.map((skill, index) => (
            <div key={skill.id} className="skill-entry">
              {index > 0 && (
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => onDelete(skill.id)}
                  aria-label={`Delete skill ${index + 1}`}
                >
                  <FaTrash />
                </button>
              )}

              <div className="form-group">
                <label htmlFor={`skill-name-${skill.id}`}>
                  Skill Name:
                  <input
                    id={`skill-name-${skill.id}`}
                    name={`skillName-${skill.id}`}
                    type="text"
                    value={skill.name}
                    onChange={(e) => onChange(skill.id, 'name', e.target.value)}
                    aria-required="true"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor={`skill-level-${skill.id}`}>
                  Skill Level:
                  <select
                    id={`skill-level-${skill.id}`}
                    name={`skillLevel-${skill.id}`}
                    value={skill.level}
                    onChange={(e) => onChange(skill.id, 'level', e.target.value)}
                  >
                    {skillLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          ))}

          <div className="form-actions">
            <button
              type="button"
              className="add-btn"
              onClick={onAdd}
            >
              <FaPlus /> Add Another Skill
            </button>
            <button type="submit" className="save-button">
              Save Skills
            </button>
          </div>
        </form>
      ) : (
        <div className="info-display" aria-live="polite">
          {skills.map((skill, index) => (
            <div key={skill.id} className="skill-display">
              <p><strong>{skill.name || 'Unnamed Skill'}</strong> - {skill.level}</p>
              {index < skills.length - 1 && <hr />}
            </div>
          ))}
          <button
            onClick={handleEdit}
            className="edit-button"
            aria-label="Edit skills"
          >
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
