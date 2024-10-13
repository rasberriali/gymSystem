import { format } from 'date-fns';
import React, { useState } from 'react';
import './Classes.css';

const Classes = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingClass, setIsAddingClass] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  //const [newCategoryDescription, setNewCategoryDescription] = useState('');
  const [newClassName, setNewClassName] = useState('');
  //const [newClassDescription, setNewClassDescription] = useState('');
  const [newClassStartTime, setNewClassStartTime] = useState('');
  const [newClassEndTime, setNewClassEndTime] = useState('');
  const [newClassPhoto, setNewClassPhoto] = useState(null);
  const [newClassLocation, setNewClassLocation] = useState('');
  const [newClassCoach, setNewClassCoach] = useState('');
  const [newClassCapacity, setNewClassCapacity] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName) { //&& newCategoryDescription
      const newCategory = {
        id: Date.now(),
        name: newCategoryName,
        //description: newCategoryDescription,
        classes: []
      };
      setCategories([...categories, newCategory]);
      setSelectedCategory(newCategory);
      setNewCategoryName('');
      //setNewCategoryDescription('');
      setIsAddingCategory(false);
    }
  };

  const handleAddClass = () => {
    if (newClassName && newClassStartTime && newClassEndTime && newClassPhoto && selectedCategory) { //&& newClassDescription
      const newClass = {
        id: Date.now(),
        name: newClassName,
        //description: newClassDescription,
        startTime: newClassStartTime,
        endTime: newClassEndTime,
        photo: URL.createObjectURL(newClassPhoto),
        location: newClassLocation,
        coachName: newClassCoach,
        date: new Date(),
        capacity: parseInt(newClassCapacity) || 0,
      };
      const updatedCategories = categories.map((category) =>
        category.id === selectedCategory.id
          ? { ...category, classes: [...category.classes, newClass] }
          : category
      );
      setCategories(updatedCategories);
      setSelectedCategory({ ...selectedCategory, classes: [...selectedCategory.classes, newClass] });
      setNewClassName('');
      //setNewClassDescription('');
      setNewClassStartTime('');
      setNewClassEndTime('');
      setNewClassPhoto(null);
      setNewClassLocation('');
      setNewClassCoach('');
      setNewClassCapacity('');
      setIsAddingClass(false);
      setSelectedClass(newClass);
    }
  };

  const handleSelectClass = (classItem) => {
    setSelectedClass(classItem);
  };

  return (
    <div className="classes-container">
      <div className="categories">
        <h2>Categories</h2>
        {categories.map((category) => (
          <div key={category.id} className={`category ${category === selectedCategory ? 'selected' : ''}`} onClick={() => setSelectedCategory(category)}>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
        {isAddingCategory ? (
          <div className="add-category">
            <input
              type="text"
              placeholder="New Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />{/* 
            <textarea
              placeholder="New Category Description"
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              rows="4"
            />*/}
            <button className="add-button" onClick={handleAddCategory}>
              Add Category
            </button>
          </div>
        ) : (
          <button onClick={() => setIsAddingCategory(true)}>+ Add Category</button>
        )}
      </div>
      <h1>Classes</h1>
      <div className="class-details-and-schedule">
        <div className="class-details">
          <h2>Class Details</h2>
          {selectedClass ? (
            <>
              <h3>{selectedClass.name}</h3>
              <p>Location: {selectedClass.location}</p>
              <p>Coach: {selectedClass.coachName}</p>
              <p>Date: {format(selectedClass.date, 'MMMM d, yyyy')}</p>
              <p>Time: {selectedClass.startTime} - {selectedClass.endTime}</p>
              <p>Capacity: {selectedClass.capacity} members</p>{/*
              <p>Description: {selectedClass.description}</p>/*}*/}
              {selectedClass.photo && <img src={selectedClass.photo} alt={selectedClass.name} className="class-photo" />}
            </>
          ) : (
            <p>Select a class to view details</p>
          )}
        </div>
        <div className="schedule">
          <h2>Schedule</h2>
          <Calendar />
        </div>
      </div>
      
      <div className="classes-list">
        <h2>Classes</h2>
        {selectedCategory && (
          <>
            {isAddingClass ? (
              <div className="add-class-form">
                <input type="text" placeholder="Class Name" value={newClassName} onChange={(e) => setNewClassName(e.target.value)} />
                
                <input type="time" placeholder="Start Time" value={newClassStartTime} onChange={(e) => setNewClassStartTime(e.target.value)} />
                <input type="time" placeholder="End Time" value={newClassEndTime} onChange={(e) => setNewClassEndTime(e.target.value)} />
                <input type="file" onChange={(e) => setNewClassPhoto(e.target.files[0])} />
                <input type="text" placeholder="Location" value={newClassLocation} onChange={(e) => setNewClassLocation(e.target.value)} />
                <input type="text" placeholder="Coach Name" value={newClassCoach} onChange={(e) => setNewClassCoach(e.target.value)} />
                <input type="number" placeholder="Capacity" value={newClassCapacity} onChange={(e) => setNewClassCapacity(e.target.value)} />
                <button className="add-button" onClick={handleAddClass}>Add Class</button>
              </div>
            ) : (
              <button onClick={() => setIsAddingClass(true)}>+ Add Class</button>
            )}
            <div className="class-grid">
              {selectedCategory.classes.map((classItem) => (
                <div key={classItem.id} className="class-item" onClick={() => handleSelectClass(classItem)}>
                  <div className="class-image-placeholder">
                    {classItem.photo && <img src={classItem.photo} alt={classItem.name} className="class-photo" />}
                  </div>
                  <h3>{classItem.name}</h3>
                  <p>{classItem.location}</p>
                  <p>{classItem.coachName}</p>
                  <button>Edit</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Calendar = () => {
  return <div className="calendar">Calendar placeholder</div>;
};

export default Classes;