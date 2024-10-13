import React, { useEffect, useState } from 'react';

const AddCoach = ({ onSave, setIsAdding, initialCoach = null, deleteCoach }) => {
  const [coach, setCoach] = useState({
    name: '',
    email: '',
    bio: '',
    dob: '',
    age: '',
    gender: '',
    phone: '',
    expertise: [],
    photo: '',
  });

  useEffect(() => {
    if (initialCoach) {
      setCoach(initialCoach);
    }
  }, [initialCoach]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoach(prevCoach => ({
      ...prevCoach,
      [name]: name === 'expertise' ? value.split(',') : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(coach);
    setIsAdding(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Coach Name"
        value={coach.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={coach.email}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="About"
        value={coach.bio}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={coach.dob}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={coach.age}
        onChange={handleChange}
      />
      <select
        name="gender"
        value={coach.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="text"
        name="phone"
        placeholder="Enter your 11-digit mobile number"
        value={coach.phone}
        onChange={handleChange}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setCoach({ ...coach, photo: URL.createObjectURL(e.target.files[0]) })}
      />
      <textarea
        name="expertise"
        placeholder="Expertise (comma separated)"
        value={coach.expertise.join(',')}
        onChange={handleChange}
      />
      <button type="submit">{initialCoach ? 'Save Changes' : 'Add Coach'}</button>
      <button type="button" onClick={() => setIsAdding(false)}>Cancel</button>
      {initialCoach && (
        <button type="button" onClick={() => deleteCoach(coach.id)}>Delete</button>
      )}
    </form>
  );
};

export default AddCoach;
