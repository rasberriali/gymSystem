import React, { useState } from 'react';
import './Services.css';

const Service = ({
  service, index, startEditService, deleteService, editingService, saveEditService, newService, setNewService, removePhoto
}) => (
  <div className="service">
    <div className="service-details">
      {service.photo && <img src={service.photo} alt="Service" className="service-photo" />}
      <div className="service-text">
        <strong>{service.name}</strong>
        <p>{service.description}</p> {/* Ensure description is rendered within <p> tag */}
      </div>
      <div className="service-actions">
        <button onClick={() => startEditService(index)}>✏️</button>
        <button onClick={() => deleteService(index)}>🗑️</button>
      </div>
    </div>
    {editingService === index && (
      <div className="form-container">
        <input
          type="text"
          placeholder="Service Name"
          value={newService.name}
          onChange={e => setNewService({ ...newService, name: e.target.value })}
        />
        <textarea
          placeholder="Service Description" /* Use textarea for multi-line input */
          value={newService.description}
          onChange={e => setNewService({ ...newService, description: e.target.value })}
          rows={4} /* Adjust rows based on expected input size */
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setNewService({ ...newService, photo: URL.createObjectURL(e.target.files[0]) })}
        />
        {service.photo && (
          <button className="remove-photo-btn" onClick={removePhoto}>Remove Photo</button>
        )}
        <button className="form-btn" onClick={saveEditService}>Save Service</button>
      </div>
    )}
  </div>
);

const Services = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', photo: '' });
  const [editingService, setEditingService] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const addService = () => {
    setServices([...services, newService]);
    setNewService({ name: '', description: '', photo: '' });
    setIsAdding(false);
  };

  const startEditService = index => {
    setEditingService(index);
    setNewService(services[index]);
  };

  const saveEditService = () => {
    const updatedServices = services.map((service, i) =>
      i === editingService ? newService : service
    );
    setServices(updatedServices);
    setNewService({ name: '', description: '', photo: '' });
    setEditingService(null);
  };

  const removePhoto = () => {
    setNewService({ ...newService, photo: '' });
  };

  const deleteService = index => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter((_, i) => i !== index);
      setServices(updatedServices);
    }
  };

  return (
    <div className="Services">
      {!isAdding && editingService === null && (
        <button className="add-btn" onClick={() => setIsAdding(true)}>+ Add Service</button>
      )}
      {isAdding && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={e => setNewService({ ...newService, name: e.target.value })}
          />
          <textarea
            placeholder="Service Description"
            value={newService.description}
            onChange={e => setNewService({ ...newService, description: e.target.value })}
            rows={4} /* Adjust rows based on expected input size */
          />
          <input
            type="file"
            accept="image/*"
            onChange={e => setNewService({ ...newService, photo: URL.createObjectURL(e.target.files[0]) })}
          />
          <button className="form-btn" onClick={addService}>Add Service</button>
        </div>
      )}
      <div className="service-list">
        {services.map((service, index) => (
          <Service
            key={index}
            index={index}
            service={service}
            startEditService={startEditService}
            deleteService={deleteService}
            editingService={editingService}
            saveEditService={saveEditService}
            newService={newService}
            setNewService={setNewService}
            removePhoto={removePhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
