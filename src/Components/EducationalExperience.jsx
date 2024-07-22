import React, { useState, useEffect } from 'react';

const EducationalExperience = ({ onSubmit }) => {
  const [editMode, setEditMode] = useState(true);
  const [educations, setEducations] = useState([{ school: '', titleOfStudy: '', dateOfStudy: '' }]);

  useEffect(() => {
    onSubmit(educations);
  }, [educations, onSubmit]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducations = educations.map((education, i) => (
      i === index ? { ...education, [name]: value } : education
    ));
    setEducations(newEducations);
  };

  const addEducation = () => {
    setEducations([...educations, { school: '', titleOfStudy: '', dateOfStudy: '' }]);
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
          {educations.map((education, index) => (
            <div key={index} className="space-y-2">
              <input type="text" name="school" placeholder="School Name" value={education.school} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
              <input type="text" name="titleOfStudy" placeholder="Title of Study" value={education.titleOfStudy} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
              <input type="date" name="dateOfStudy" placeholder="Date of Study" value={education.dateOfStudy} onChange={(e) => handleChange(index, e)} className="w-full p-2 border rounded" />
            </div>
          ))}
          <button type="button" onClick={addEducation} className="px-4 py-2 bg-green-500 text-white rounded">Add More</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      ) : (
        <div>
          {educations.map((education, index) => (
            <div key={index} className="mb-4">
              <p>School: {education.school}</p>
              <p>Title of Study: {education.titleOfStudy}</p>
              <p>Date of Study: {education.dateOfStudy}</p>
            </div>
          ))}
          <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
