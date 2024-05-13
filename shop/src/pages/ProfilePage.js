import React, { useState } from 'react';
import profileImage from '../assets/images/profile.png';



function ProfilePage() {
    const [profile, setProfile] = useState({
        name: 'Miguel',
        email: 'miguel@example.com',
        bio: 'Developer based in Spain, passionate about technology and innovation.'
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Updated:', profile);
    };

    return (
        <div className="profile-container">
            <h1>Profile Page</h1>
            <img src={profileImage} alt="Profile" className="profile-image" />
            <form onSubmit={handleSubmit} className="profile-form">
                <FormInput label="Name" name="name" value={profile.name} onChange={handleChange} />
                <FormInput label="Email" type="email" name="email" value={profile.email} onChange={handleChange} />
                <FormInput label="Bio" type="textarea" name="bio" value={profile.bio} onChange={handleChange} />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

function FormInput({ label, type = 'text', name, value, onChange }) {
    return (
        <div className="form-group">
            <label>{label}:</label>
            {type === 'textarea' ? (
                <textarea name={name} value={value} onChange={onChange} />
            ) : (
                <input type={type} name={name} value={value} onChange={onChange} />
            )}
        </div>
    );
}

export default ProfilePage;