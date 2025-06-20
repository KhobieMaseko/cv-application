import { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import '../styles/Experience.css';

export default function Experience({ experiences, onChange, onAdd, onDelete }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Work Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} aria-label="Work experience form">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-entry">
              {index > 0 && (
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => onDelete(exp.id)}
                  aria-label={`Delete experience ${index + 1}`}
                >
                  <FaTrash />
                </button>
              )}

              <div className="form-group">
                <label htmlFor={`company-name-${exp.id}`}>
                  Company:
                  <input
                    id={`company-name-${exp.id}`}
                    name={`companyName-${exp.id}`}
                    type="text"
                    value={exp.company}
                    onChange={(e) => onChange(exp.id, 'company', e.target.value)}
                    aria-required="true"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor={`position-${exp.id}`}>
                  Position:
                  <input
                    id={`position-${exp.id}`}
                    name={`position-${exp.id}`}
                    type="text"
                    value={exp.position}
                    onChange={(e) => onChange(exp.id, 'position', e.target.value)}
                    aria-required="true"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor={`responsibilities-${exp.id}`}>
                  Responsibilities:
                  <textarea
                    id={`responsibilities-${exp.id}`}
                    name={`responsibilities-${exp.id}`}
                    value={exp.responsibilities}
                    onChange={(e) => onChange(exp.id, 'responsibilities', e.target.value)}
                    aria-required="true"
                    rows="4"
                    required
                  />
                </label>
              </div>

              <div className="date-group">
                <div className="form-group">
                  <label htmlFor={`exp-start-date-${exp.id}`}>
                    Start Date:
                    <input
                      id={`exp-start-date-${exp.id}`}
                      name={`expStartDate-${exp.id}`}
                      type="date"
                      value={exp.startDate}
                      onChange={(e) => onChange(exp.id, 'startDate', e.target.value)}
                      aria-required="true"
                      required
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor={`exp-end-date-${exp.id}`}>
                    End Date:
                    <input
                      id={`exp-end-date-${exp.id}`}
                      name={`expEndDate-${exp.id}`}
                      type="date"
                      value={exp.endDate}
                      onChange={(e) => onChange(exp.id, 'endDate', e.target.value)}
                      aria-required="true"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

          <div className="form-actions">
            <button
              type="button"
              className="add-btn"
              onClick={onAdd}
            >
              <FaPlus /> Add More Experience
            </button>
            <button type="submit" className="save-button">
              Save Experience
            </button>
          </div>
        </form>
      ) : (
        <div className="info-display" aria-live="polite">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-display">
              <p><strong>Company:</strong> {exp.company || 'Not specified'}</p>
              <p><strong>Position:</strong> {exp.position || 'Not specified'}</p>
              <p><strong>Responsibilities:</strong></p>
              <p className="responsibilities">{exp.responsibilities || 'Not specified'}</p>
              <p><strong>Dates:</strong> {exp.startDate || 'Not specified'} to {exp.endDate || 'Present'}</p>
              {index < experiences.length - 1 && <hr />}
            </div>
          ))}
          <button
            onClick={handleEdit}
            className="edit-button"
            aria-label="Edit work experience"
          >
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
