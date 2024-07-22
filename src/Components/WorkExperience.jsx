import React, { useState, useEffect } from 'react';

const WorkExperience = ({ onSubmit }) => {
  const [editMode, setEditMode] = useState(true);
  const [experiences, setExperiences] = useState([{ company: '', positionTitle: '', mainResponsibilities: '', dateFrom: '', dateTo: '' }]);

  useEffect(() => {
    onSubmit(experiences);
  }, [experiences, onSubmit]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = experiences.map((experience, i) => (
      i === index ? { ...experience, [name]: value } : experience
    ));
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: '', positionTitle: '', mainResponsibilities: '', dateFrom: '', dateTo: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div className="p-4 border rounded mb-4">
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {experiences.map((experience, index) => (
            <div key={index} className="space-y-2">
              <input type="text" name="company" placeholder="Company Name" value={experience.company} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
              <input type="text" name="positionTitle" placeholder="Position Title" value={experience.positionTitle} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
              <input type="text" name="mainResponsibilities" placeholder="Main Responsibilities" value={experience.mainResponsibilities} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
              <input type="date" name="dateFrom" placeholder="Date From" value={experience.dateFrom} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
              <input type="date" name="dateTo" placeholder="Date To" value={experience.dateTo} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
            </div>
          ))}
          <button type="button" onClick={addExperience} className="px-4 py-2 bg-green-500 text-white rounded">Add More</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      ) : (
        <div>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <p>Company: {experience.company}</p>
              <p>Position Title: {experience.positionTitle}</p>
              <p>Main Responsibilities: {experience.mainResponsibilities}</p>
              <p>Date From: {experience.dateFrom}</p>
              <p>Date To: {experience.dateTo}</p>
            </div>
          ))}
          <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;


