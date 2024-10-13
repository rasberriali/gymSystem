import React, { useState } from 'react';
import AddCoach from './AddCoach';
import CoachDetails from './CoachDetails';
import './Coaches.css';

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCoach, setEditingCoach] = useState(null);

  const selectCoach = (coach) => {
    setSelectedCoach(coach);
    setIsAdding(false);
    setIsEditing(false);
  };

  const addCoach = (coach) => {
    const newCoach = { ...coach, id: Date.now() };
    setCoaches([...coaches, newCoach]);
    setIsAdding(false);
  };

  const deleteCoach = (id) => {
    if (window.confirm('Are you sure you want to delete this coach?')) {
      const updatedCoaches = coaches.filter(coach => coach.id !== id);
      setCoaches(updatedCoaches);
      setSelectedCoach(null);
      setIsEditing(false);
      setEditingCoach(null);
    }
  };

  const startEditCoach = (coach) => {
    setEditingCoach(coach);
    setIsEditing(true);
  };

  const saveEditCoach = (updatedCoach) => {
    const updatedCoaches = coaches.map(coach => 
      coach.id === updatedCoach.id ? updatedCoach : coach
    );
    setCoaches(updatedCoaches);
    setSelectedCoach(updatedCoach);
    setIsEditing(false);
    setEditingCoach(null);
  };

  return (
    <div className="app-container">
      <div className="coach-list-container">
        <button className="add-button" onClick={() => setIsAdding(true)}>✛ Add</button>
        {coaches.map((coach) => (
          <div 
            key={coach.id} 
            className={`coach-list-item ${selectedCoach && selectedCoach.id === coach.id ? 'selected' : ''}`}
            onClick={() => selectCoach(coach)}
          >
            <img src={coach.photo || '/placeholder.jpg'} alt={coach.name} />
            <span>{coach.name}</span>
          </div>
        ))}
      </div>
      <div className="coach-detail-container">
        {isAdding ? (
          <AddCoach onSave={addCoach} setIsAdding={setIsAdding} />
        ) : isEditing ? (
          <AddCoach 
            onSave={saveEditCoach} 
            setIsAdding={setIsEditing} 
            initialCoach={editingCoach} 
            deleteCoach={deleteCoach} 
          />
        ) : selectedCoach ? (
          <CoachDetails
            coach={selectedCoach}
            deleteCoach={deleteCoach}
            startEditCoach={startEditCoach}
          />
        ) : (
          <div>Discover coach information by adding a coach.</div>
        )}
      </div>
    </div>
  );
};

export default Coaches;
