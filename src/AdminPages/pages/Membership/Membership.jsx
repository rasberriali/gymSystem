import React, { useState } from 'react';
import './Membership.css';

const Membership = () => {
  const [plansData, setPlansData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [newPlanName, setNewPlanName] = useState('');
  const [newPlanDescription, setNewPlanDescription] = useState('');
  const [newPlanInclusions, setNewPlanInclusions] = useState(['']);
  const [newPlanPrice, setNewPlanPrice] = useState('');
  const [editPlanName, setEditPlanName] = useState('');
  const [editPlanDescription, setEditPlanDescription] = useState('');
  const [editPlanInclusions, setEditPlanInclusions] = useState(['']);
  const [editPlanPrice, setEditPlanPrice] = useState('');
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberSubscribed, setNewMemberSubscribed] = useState('');
  const [newMemberExpiry, setNewMemberExpiry] = useState('');
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(null);
  const [isEditingMember, setIsEditingMember] = useState(false);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [isEditingPlan, setIsEditingPlan] = useState(false);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setEditPlanName(plan.name);
    setEditPlanDescription(plan.description);
    setEditPlanInclusions(plan.inclusions);
    setEditPlanPrice(plan.price);
    setSelectedMemberIndex(null);
    setIsEditingMember(false);
    setIsAddingMember(false);
    setIsEditingPlan(false);
  };

  const handleAddPlan = () => {
    if (newPlanName && newPlanDescription && newPlanInclusions.length > 0 && newPlanPrice) {
      const newPlan = {
        name: newPlanName,
        description: newPlanDescription,
        inclusions: newPlanInclusions,
        price: newPlanPrice,
        members: []
      };
      setPlansData([...plansData, newPlan]);
      setSelectedPlan(newPlan);
      setNewPlanName('');
      setNewPlanDescription('');
      setNewPlanInclusions(['']);
      setNewPlanPrice('');
    }
  };

  const handleEditPlan = (planToEdit) => {
    if (editPlanName && editPlanDescription && editPlanInclusions.length > 0 && editPlanPrice && planToEdit) {
      const updatedPlans = plansData.map((plan) =>
        plan === planToEdit
          ? { ...plan, name: editPlanName, description: editPlanDescription, inclusions: editPlanInclusions, price: editPlanPrice }
          : plan
      );
      setPlansData(updatedPlans);
      setSelectedPlan({ ...planToEdit, name: editPlanName, description: editPlanDescription, inclusions: editPlanInclusions, price: editPlanPrice });
      setIsEditingPlan(false);
    }
  };

  const handleDeletePlan = (planToDelete) => {
    if (window.confirm(`Are you sure you want to delete ${planToDelete.name}?`)) {
      setPlansData(plansData.filter((plan) => plan !== planToDelete));
      setSelectedPlan(null);
    }
  };

  const handleAddMember = () => {
    if (newMemberName && newMemberSubscribed && newMemberExpiry) {
      const updatedPlans = plansData.map((plan) =>
        plan === selectedPlan
          ? {
              ...plan,
              members: [
                ...plan.members,
                {
                  name: newMemberName,
                  subscribed: newMemberSubscribed,
                  expiry: newMemberExpiry,
                },
              ],
            }
          : plan
      );
      setPlansData(updatedPlans);
      setNewMemberName('');
      setNewMemberSubscribed('');
      setNewMemberExpiry('');
      setIsAddingMember(false);
    }
  };

  const handleDeleteMember = (memberIndex) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      const updatedPlans = plansData.map((plan) =>
        plan === selectedPlan
          ? {
              ...plan,
              members: plan.members.filter((_, index) => index !== memberIndex),
            }
          : plan
      );
      setPlansData(updatedPlans);
      setSelectedMemberIndex(null);
      setIsEditingMember(false);
    }
  };

  const handleEditMember = (memberIndex) => {
    setSelectedMemberIndex(memberIndex);
    const memberToEdit = selectedPlan.members[memberIndex];
    setNewMemberName(memberToEdit.name);
    setNewMemberSubscribed(memberToEdit.subscribed);
    setNewMemberExpiry(memberToEdit.expiry);
    setIsEditingMember(true);
  };

  const handleSaveEditMember = () => {
    if (selectedMemberIndex !== null && newMemberName && newMemberSubscribed && newMemberExpiry) {
      const updatedPlans = plansData.map((plan) =>
        plan === selectedPlan
          ? {
              ...plan,
              members: plan.members.map((member, index) =>
                index === selectedMemberIndex
                  ? {
                      name: newMemberName,
                      subscribed: newMemberSubscribed,
                      expiry: newMemberExpiry,
                    }
                  : member
              ),
            }
          : plan
      );
      setPlansData(updatedPlans);
      setSelectedMemberIndex(null);
      setNewMemberName('');
      setNewMemberSubscribed('');
      setNewMemberExpiry('');
      setIsEditingMember(false);
    }
  };

  const handleAddInclusion = () => {
    setNewPlanInclusions([...newPlanInclusions, '']);
  };

  const handleInclusionChange = (index, value, isEdit = false) => {
    if (isEdit) {
      const updatedInclusions = editPlanInclusions.map((inclusion, i) => (i === index ? value : inclusion));
      setEditPlanInclusions(updatedInclusions);
    } else {
      const updatedInclusions = newPlanInclusions.map((inclusion, i) => (i === index ? value : inclusion));
      setNewPlanInclusions(updatedInclusions);
    }
  };

  const handleRemoveInclusion = (index, isEdit = false) => {
    if (isEdit) {
      const updatedInclusions = editPlanInclusions.filter((_, i) => i !== index);
      setEditPlanInclusions(updatedInclusions);
    } else {
      const updatedInclusions = newPlanInclusions.filter((_, i) => i !== index);
      setNewPlanInclusions(updatedInclusions);
    }
  };

  const handleAddEditInclusion = () => {
    setEditPlanInclusions([...editPlanInclusions, '']);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div className="app">
      <div className="container">
      <div className="plans">
        <h2>Plans</h2>
          {plansData.length === 0 ? (
          <p>No plans available. Please add a new plan.</p>
          ) : (
          plansData.map((plan, index) => (
            <div key={index} className={`plan ${plan === selectedPlan ? 'selected' : ''}`}>
              <div className="plan-name" onClick={() => handlePlanClick(plan)}>
              {plan.name}
            </div>
            <div className="plan-buttons">
              <button className="edit-button" onClick={() => setIsEditingPlan(true)}>
                Edit
              </button>
            <button className="delete-button" onClick={() => handleDeletePlan(plan)}>
              Delete
            </button>
        </div>
      </div>
    ))
  )}
  <div className="add-plan">
    <input
      type="text"
      placeholder="New Plan Name"
      value={newPlanName}
      onChange={(e) => setNewPlanName(e.target.value)}
    />
    <input
      type="text"
      placeholder="New Plan Price"
      value={newPlanPrice}
      onChange={(e) => setNewPlanPrice(e.target.value)}
    />
    <textarea
      placeholder="New Plan Description"
      value={newPlanDescription}
      onChange={(e) => setNewPlanDescription(e.target.value)}
    />
    {newPlanInclusions.map((inclusion, index) => (
      <div key={index} className="inclusion">
        <input
          type="text"
          placeholder={`Inclusion ${index + 1}`}
          value={inclusion}
          onChange={(e) => handleInclusionChange(index, e.target.value)}
        />
        <button onClick={() => handleRemoveInclusion(index)}>Remove</button>
      </div>
    ))}
    <button onClick={handleAddInclusion}>Add Inclusion</button>
    <button onClick={handleAddPlan}>Add Plan</button>
  </div>
</div>

        {selectedPlan && (
          <div className="members-section">
            <h2>{selectedPlan.name}</h2>
            <div>
              <strong>Price: </strong> {selectedPlan.price}
            </div>
            <p>{selectedPlan.description}</p>
            <h4>Inclusions:</h4>
            <ul>
              {selectedPlan.inclusions.map((inclusion, index) => (
                <li key={index}>{inclusion}</li>
              ))}
            </ul>
            {!isAddingMember && (
              <button className="add-member-button" onClick={() => setIsAddingMember(true)}>
                Add Member
              </button>
            )}
            <div className="member-labels">
              <strong>Name</strong>
              <strong>Subscribed</strong>
              <strong>Expiry</strong>
              <strong>Action</strong>
            </div>
            {selectedPlan.members.length === 0 ? (
              <p>No members subscribed.</p>
            ) : (
              selectedPlan.members.map((member, index) => (
                <div key={index} className="member">
                  <div className="member-info">
                    <span>{member.name}</span>
                    <span>{formatDate(member.subscribed)}</span>
                    <span>{formatDate(member.expiry)}</span>
                  </div>
                  <div className="member-actions">
                    <button onClick={() => handleEditMember(index)}>Edit</button>
                    <button onClick={() => handleDeleteMember(index)}>Delete</button>
                  </div>
                </div>
              ))
            )}
            {isAddingMember && (
              <div className="add-member-form">
                <h3>Add Member</h3>
                <input
                  type="text"
                  placeholder="Member Name"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Subscribed Date"
                  value={newMemberSubscribed}
                  onChange={(e) => setNewMemberSubscribed(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Expiry Date"
                  value={newMemberExpiry}
                  onChange={(e) => setNewMemberExpiry(e.target.value)}
                />
                <button onClick={handleAddMember}>Add Member</button>
              </div>
            )}
            {isEditingMember && (
              <div className="edit-member-form">
                <h3>Edit Member</h3>
                <input
                  type="text"
                  placeholder="Member Name"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Subscribed Date"
                  value={newMemberSubscribed}
                  onChange={(e) => setNewMemberSubscribed(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Expiry Date"
                  value={newMemberExpiry}
                  onChange={(e) => setNewMemberExpiry(e.target.value)}
                />
                <button onClick={handleSaveEditMember}>Save Changes</button>
              </div>
            )}
            {isEditingPlan && (
              <div className="edit-plan-form">
                <h3>Edit Plan</h3>
                <input
                  type="text"
                  placeholder="Edit Plan Name"
                  value={editPlanName}
                  onChange={(e) => setEditPlanName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Edit Plan Price"
                  value={editPlanPrice}
                  onChange={(e) => setEditPlanPrice(e.target.value)}
                />
                <textarea
                  placeholder="Edit Plan Description"
                  value={editPlanDescription}
                  onChange={(e) => setEditPlanDescription(e.target.value)}
                />
                {editPlanInclusions.map((inclusion, index) => (
                  <div key={index} className="inclusion">
                    <input
                      type="text"
                      placeholder={`Inclusion ${index + 1}`}
                      value={inclusion}
                      onChange={(e) => handleInclusionChange(index, e.target.value, true)}
                    />
                    <button onClick={() => handleRemoveInclusion(index, true)}>Remove</button>
                  </div>
                ))}
                <button onClick={handleAddEditInclusion}>Add Inclusion</button>
                <button onClick={() => handleEditPlan(selectedPlan)}>Save Changes</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;
