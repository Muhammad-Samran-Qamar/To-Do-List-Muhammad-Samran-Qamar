import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Show success message
    setMessage('Profile has been Upgraded');

    // Hide form
    setIsEditing(false);

    // Clear message after 2 seconds
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>

      {/* ✅ Success Message */}
      {message && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
      )}

      <section className="profile-info">
        <h3>Account Information</h3>

        {isEditing ? (
          <div className="edit-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <button className="profile-btn" onClick={handleSave}>
              Save
            </button>
            <button className="profile-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
          </div>
        )}
      </section>

      <section className="profile-buttons">
        {!isEditing && (
          <button className="profile-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
        <button className="profile-btn" onClick={() => console.log('Logging out...')}>
          Logout
        </button>
      </section>
    </div>
  );
};

export default Profile;
