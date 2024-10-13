import React, { useState } from 'react';
import './Facilities.css';

const Facility = ({
  facility, index, startEditFacility, deleteFacility, editingFacility, saveEditFacility, newFacility, setNewFacility, removePhoto
}) => (
  <div className="facility">
    <div className="facility-details">
      {facility.photo && <img src={facility.photo} alt="Facility" className="facility-photo" />}
      <div className="facility-text">
        <strong>{facility.name}</strong>
        <p>{facility.description}</p> {/* Ensure description is rendered within <p> tag */}
      </div>
      <div className="facility-actions">
        <button onClick={() => startEditFacility(index)}>✏️</button>
        <button onClick={() => deleteFacility(index)}>🗑️</button>
      </div>
    </div>
    {editingFacility === index && (
      <div className="form-container">
        <input
          type="text"
          placeholder="Facility Name"
          value={newFacility.name}
          onChange={e => setNewFacility({ ...newFacility, name: e.target.value })}
        />
        <textarea
          placeholder="Facility Description" /* Use textarea for multi-line input */
          value={newFacility.description}
          onChange={e => setNewFacility({ ...newFacility, description: e.target.value })}
          rows={4} /* Adjust rows based on expected input size */
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setNewFacility({ ...newFacility, photo: URL.createObjectURL(e.target.files[0]) })}
        />
        {facility.photo && (
          <button className="remove-photo-btn" onClick={removePhoto}>Remove Photo</button>
        )}
        <button className="form-btn" onClick={saveEditFacility}>Save Facility</button>
      </div>
    )}
  </div>
);

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState({ name: '', description: '', photo: '' });
  const [editingFacility, setEditingFacility] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const addFacility = () => {
    setFacilities([...facilities, newFacility]);
    setNewFacility({ name: '', description: '', photo: '' });
    setIsAdding(false);
  };

  const startEditFacility = index => {
    setEditingFacility(index);
    setNewFacility(facilities[index]);
  };

  const saveEditFacility = () => {
    const updatedFacilities = facilities.map((facility, i) =>
      i === editingFacility ? newFacility : facility
    );
    setFacilities(updatedFacilities);
    setNewFacility({ name: '', description: '', photo: '' });
    setEditingFacility(null);
  };

  const removePhoto = () => {
    setNewFacility({ ...newFacility, photo: '' });
  };

  const deleteFacility = index => {
    if (window.confirm('Are you sure you want to delete this facility?')) {
      const updatedFacilities = facilities.filter((_, i) => i !== index);
      setFacilities(updatedFacilities);
    }
  };

  return (
    <div className="Facilities">
      {!isAdding && editingFacility === null && (
        <button className="add-btn" onClick={() => setIsAdding(true)}>+ Add Facility</button>
      )}
      {isAdding && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Facility Name"
            value={newFacility.name}
            onChange={e => setNewFacility({ ...newFacility, name: e.target.value })}
          />
          <textarea
            placeholder="Facility Description"
            value={newFacility.description}
            onChange={e => setNewFacility({ ...newFacility, description: e.target.value })}
            rows={4} /* Adjust rows based on expected input size */
          />
          <input
            type="file"
            accept="image/*"
            onChange={e => setNewFacility({ ...newFacility, photo: URL.createObjectURL(e.target.files[0]) })}
          />
          <button className="form-btn" onClick={addFacility}>Add Facility</button>
        </div>
      )}
      <div className="facility-list">
        {facilities.map((facility, index) => (
          <Facility
            key={index}
            index={index}
            facility={facility}
            startEditFacility={startEditFacility}
            deleteFacility={deleteFacility}
            editingFacility={editingFacility}
            saveEditFacility={saveEditFacility}
            newFacility={newFacility}
            setNewFacility={setNewFacility}
            removePhoto={removePhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
