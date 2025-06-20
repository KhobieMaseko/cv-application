import { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import '../styles/Education.css';

export default function Education({ educations, onChange, onAdd, onDelete }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} aria-label="Education information form">
          {educations.map((edu, index) => (
            <div key={edu.id} className="education-entry">
              {index > 0 && (
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => onDelete(edu.id)}
                  aria-label={`Delete education ${index + 1}`}
                >
                  <FaTrash />
                </button>
              )}

              <div className="form-group">
                <label htmlFor={`school-name-${edu.id}`}>
                  School Name:
                  <input
                    id={`school-name-${edu.id}`}
                    name={`schoolName-${edu.id}`}
                    type="text"
                    value={edu.school}
                    onChange={(e) => onChange(edu.id, 'school', e.target.value)}
                    aria-required="true"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor={`degree-${edu.id}`}>
                  Degree:
                  <input
                    id={`degree-${edu.id}`}
                    name={`degree-${edu.id}`}
                    type="text"
                    value={edu.degree}
                    onChange={(e) => onChange(edu.id, 'degree', e.target.value)}
                    aria-required="true"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor={`field-${edu.id}`}>
                  Field of Study:
                  <input
                    id={`field-${edu.id}`}
                    name={`field-${edu.id}`}
                    type="text"
                    value={edu.field}
                    onChange={(e) => onChange(edu.id, 'field', e.target.value)}
                  />
                </label>
              </div>

              <div className="date-group">
                <div className="form-group">
                  <label htmlFor={`start-date-${edu.id}`}>
                    Start Date:
                    <input
                      id={`start-date-${edu.id}`}
                      name={`startDate-${edu.id}`}
                      type="date"
                      value={edu.startDate}
                      onChange={(e) => onChange(edu.id, 'startDate', e.target.value)}
                      aria-required="true"
                      required
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor={`end-date-${edu.id}`}>
                    End Date:
                    <input
                      id={`end-date-${edu.id}`}
                      name={`endDate-${edu.id}`}
                      type="date"
                      value={edu.endDate}
                      onChange={(e) => onChange(edu.id, 'endDate', e.target.value)}
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
              <FaPlus /> Add More Education
            </button>
            <button type="submit" className="save-button">
              Save Education
            </button>
          </div>
        </form>
      ) : (
        <div className="info-display" aria-live="polite">
          {educations.map((edu, index) => (
            <div key={edu.id} className="education-display">
              <p><strong>School:</strong> {edu.school || 'Not specified'}</p>
              <p><strong>Degree:</strong> {edu.degree || 'Not specified'}</p>
              {edu.field && <p><strong>Field:</strong> {edu.field}</p>}
              <p><strong>Dates:</strong> {edu.startDate || 'Not specified'} to {edu.endDate || 'Present'}</p>
              {index < educations.length - 1 && <hr />}
            </div>
          ))}
          <button
            onClick={handleEdit}
            className="edit-button"
            aria-label="Edit education information"
          >
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
