import { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import '../styles/Languages.css';

export default function Languages({ languages, onChange, onAdd, onDelete }) {
  const [isEditing, setIsEditing] = useState(true);
  const proficiencyLevels = ['Basic', 'Intermediate', 'Fluent', 'Native'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="languages" aria-labelledby="languages-heading">
      <h2 id="languages-heading">Languages</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} aria-label="Languages form">
          {languages.map((lang, index) => (
            <div key={lang.id} className="language-entry">
              {index > 0 && (
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => onDelete(lang.id)}
                  aria-label={`Delete language ${index + 1}`}
                >
                  <FaTrash />
                </button>
              )}

              <div className="form-group">
                <label htmlFor={`language-name-${lang.id}`}>
                  Language:
                  <input
                    id={`language-name-${lang.id}`}
                    name={`languageName-${lang.id}`}
                    type="text"
                    value={lang.name}
                    onChange={(e) => onChange(lang.id, 'name', e.target.value)}
                    aria-required="true"
                    required
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor={`proficiency-${lang.id}`}>
                  Proficiency:
                  <select
                    id={`proficiency-${lang.id}`}
                    name={`proficiency-${lang.id}`}
                    value={lang.proficiency}
                    onChange={(e) => onChange(lang.id, 'proficiency', e.target.value)}
                  >
                    {proficiencyLevels.map(level => (
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
              <FaPlus /> Add Another Language
            </button>
            <button type="submit" className="save-button">
              Save Languages
            </button>
          </div>
        </form>
      ) : (
        <div className="info-display" aria-live="polite">
          {languages.map((lang, index) => (
            <div key={lang.id} className="language-display">
              <p><strong>{lang.name || 'Unspecified Language'}</strong> - {lang.proficiency}</p>
              {index < languages.length - 1 && <hr />}
            </div>
          ))}
          <button
            onClick={handleEdit}
            className="edit-button"
            aria-label="Edit languages"
          >
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
