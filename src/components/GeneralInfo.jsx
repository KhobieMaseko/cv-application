// import { useState } from 'react';
// import '../styles/GeneralInfo.css';

// export default function GeneralInfo({ data, onChange }) {
//   const [isEditing, setIsEditing] = useState(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <section className="general-info" aria-labelledby="general-info-heading">
//       <h2 id="general-info-heading">General Information</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit} aria-label="General information form">
//           <div className="form-group">
//             <label htmlFor="full-name">
//               Full Name:
//               <input
//                 id="full-name"
//                 name="fullName"
//                 type="text"
//                 value={data.name}
//                 onChange={(e) => onChange('name', e.target.value)}
//                 autoComplete="name"
//                 aria-required="true"
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">
//               Email:
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={data.email}
//                 onChange={(e) => onChange('email', e.target.value)}
//                 autoComplete="email"
//                 aria-required="true"
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone">
//               Phone:
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 value={data.phone}
//                 onChange={(e) => onChange('phone', e.target.value)}
//                 autoComplete="tel"
//                 aria-required="true"
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">
//               Address:
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 value={data.address}
//                 onChange={(e) => onChange('address', e.target.value)}
//                 autoComplete="address-line1"
//               />
//             </label>
//           </div>

//           <button type="submit" className="save-button">
//             Save Information
//           </button>
//         </form>
//       ) : (
//         <div className="info-display" aria-live="polite">
//           <p><strong>Name:</strong> {data.name || 'Not specified'}</p>
//           <p><strong>Email:</strong> {data.email || 'Not specified'}</p>
//           <p><strong>Phone:</strong> {data.phone || 'Not specified'}</p>
//           <p><strong>Address:</strong> {data.address || 'Not specified'}</p>
//           <button
//             onClick={handleEdit}
//             className="edit-button"
//             aria-label="Edit general information"
//           >
//             Edit
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }


// import { useState } from 'react';
// import '../styles/GeneralInfo.css';

// export default function GeneralInfo({ data, onChange }) {
//   const [isEditing, setIsEditing] = useState(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <section className="general-info" aria-labelledby="general-info-heading">
//       <h2 id="general-info-heading">General Information</h2>
//       {isEditing ? (
//         <form onSubmit={handleSubmit} aria-label="General information form">
//           <div className="form-group">
//             <label htmlFor="full-name">
//               Full Name:
//               <input
//                 id="full-name"
//                 name="fullName"
//                 type="text"
//                 value={data.name}
//                 onChange={(e) => onChange('name', e.target.value)}
//                 autoComplete="name"
//                 aria-required="true"
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">
//               Email:
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={data.email}
//                 onChange={(e) => onChange('email', e.target.value)}
//                 autoComplete="email"
//                 aria-required="true"
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-group">
//             <label htmlFor="phone">
//               Phone:
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 value={data.phone}
//                 onChange={(e) => onChange('phone', e.target.value)}
//                 autoComplete="tel"
//                 aria-required="true"
//                 required
//               />
//             </label>
//           </div>

//           <div className="form-group">
//             <label htmlFor="address">
//               Address:
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 value={data.address}
//                 onChange={(e) => onChange('address', e.target.value)}
//                 autoComplete="address-line1"
//               />
//             </label>
//           </div>

//           <div className="social-links">
//             <h3>Social Links</h3>
//             <div className="form-group">
//               <label htmlFor="linkedin">
//                 LinkedIn:
//                 <input
//                   id="linkedin"
//                   name="linkedin"
//                   type="url"
//                   value={data.linkedin}
//                   onChange={(e) => onChange('linkedin', e.target.value)}
//                   placeholder="https://linkedin.com/in/yourname"
//                 />
//               </label>
//             </div>

//             <div className="form-group">
//               <label htmlFor="github">
//                 GitHub:
//                 <input
//                   id="github"
//                   name="github"
//                   type="url"
//                   value={data.github}
//                   onChange={(e) => onChange('github', e.target.value)}
//                   placeholder="https://github.com/yourname"
//                 />
//               </label>
//             </div>

//             <div className="form-group">
//               <label htmlFor="website">
//                 Personal Website:
//                 <input
//                   id="website"
//                   name="website"
//                   type="url"
//                   value={data.website}
//                   onChange={(e) => onChange('website', e.target.value)}
//                   placeholder="https://yourwebsite.com"
//                 />
//               </label>
//             </div>

//             <div className="form-group">
//               <label htmlFor="twitter">
//                 Twitter/X:
//                 <input
//                   id="twitter"
//                   name="twitter"
//                   type="url"
//                   value={data.twitter}
//                   onChange={(e) => onChange('twitter', e.target.value)}
//                   placeholder="https://twitter.com/yourhandle"
//                 />
//               </label>
//             </div>
//           </div>

//           <button type="submit" className="save-button">
//             Save Information
//           </button>
//         </form>
//       ) : (
//         <div className="info-display" aria-live="polite">
//           <p><strong>Name:</strong> {data.name || 'Not specified'}</p>
//           <p><strong>Email:</strong> {data.email || 'Not specified'}</p>
//           <p><strong>Phone:</strong> {data.phone || 'Not specified'}</p>
//           <p><strong>Address:</strong> {data.address || 'Not specified'}</p>

//           {(data.linkedin || data.github || data.website || data.twitter) && (
//             <div className="social-links-display">
//               <h3>Social Links</h3>
//               {data.linkedin && <p><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>}
//               {data.github && <p><strong>GitHub:</strong> <a href={data.github} target="_blank" rel="noopener noreferrer">{data.github}</a></p>}
//               {data.website && <p><strong>Website:</strong> <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a></p>}
//               {data.twitter && <p><strong>Twitter:</strong> <a href={data.twitter} target="_blank" rel="noopener noreferrer">{data.twitter}</a></p>}
//             </div>
//           )}

//           <button
//             onClick={handleEdit}
//             className="edit-button"
//             aria-label="Edit general information"
//           >
//             Edit
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }


import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="general-info" aria-labelledby="general-info-heading">
      <h2 id="general-info-heading">General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} aria-label="General information form">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="full-name">
                Full Name:
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  value={data.name}
                  onChange={(e) => onChange('name', e.target.value)}
                  autoComplete="name"
                  aria-required="true"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => onChange('email', e.target.value)}
                  autoComplete="email"
                  aria-required="true"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone:
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => onChange('phone', e.target.value)}
                  autoComplete="tel"
                  aria-required="true"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Address:
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={data.address}
                  onChange={(e) => onChange('address', e.target.value)}
                  autoComplete="address-line1"
                />
              </label>
            </div>
          </div>

          <div className="social-links-section">
            <h3 className="social-links-heading">Social Links</h3>
            <div className="social-links-grid">
              <div className="form-group">
                <label htmlFor="linkedin">
                  LinkedIn:
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={data.linkedin}
                    onChange={(e) => onChange('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/yourname"
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="github">
                  GitHub:
                  <input
                    id="github"
                    name="github"
                    type="url"
                    value={data.github}
                    onChange={(e) => onChange('github', e.target.value)}
                    placeholder="https://github.com/yourname"
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="website">
                  Personal Website:
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={data.website}
                    onChange={(e) => onChange('website', e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="twitter">
                  Twitter/X:
                  <input
                    id="twitter"
                    name="twitter"
                    type="url"
                    value={data.twitter}
                    onChange={(e) => onChange('twitter', e.target.value)}
                    placeholder="https://twitter.com/yourhandle"
                  />
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="save-button">
            Save Information
          </button>
        </form>
      ) : (
        <div className="info-display" aria-live="polite">
          <div className="info-section">
            <p><strong>Name:</strong> {data.name || 'Not specified'}</p>
            <p><strong>Email:</strong> {data.email || 'Not specified'}</p>
            <p><strong>Phone:</strong> {data.phone || 'Not specified'}</p>
            <p><strong>Address:</strong> {data.address || 'Not specified'}</p>
          </div>

          {(data.linkedin || data.github || data.website || data.twitter) && (
            <div className="social-links-display">
              <h3>Social Links</h3>
              <div className="social-links-list">
                {data.linkedin && (
                  <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                      {data.linkedin}
                    </a>
                  </p>
                )}
                {data.github && (
                  <p>
                    <strong>GitHub:</strong>{' '}
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                      {data.github}
                    </a>
                  </p>
                )}
                {data.website && (
                  <p>
                    <strong>Website:</strong>{' '}
                    <a href={data.website} target="_blank" rel="noopener noreferrer">
                      {data.website}
                    </a>
                  </p>
                )}
                {data.twitter && (
                  <p>
                    <strong>Twitter:</strong>{' '}
                    <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                      {data.twitter}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}

          <button
            onClick={handleEdit}
            className="edit-button"
            aria-label="Edit general information"
          >
            Edit
          </button>
        </div>
      )}
    </section>
  );
}
