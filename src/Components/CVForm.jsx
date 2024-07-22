import React, { useState } from 'react';

const CVForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      generalInfo: {
        ...prevData.generalInfo,
        [name]: value,
      }
    }));
  };

  const handlePersonalStatementChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      personalStatement: e.target.value
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducations = [...formData.educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [name]: value
    };
    setFormData((prevData) => ({
      ...prevData,
      educations: updatedEducations
    }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value
    };
    setFormData((prevData) => ({
      ...prevData,
      experiences: updatedExperiences
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      educations: [...prevData.educations, { school: '', titleOfStudy: '', dateOfStudy: '' }]
    }));
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, { company: '', positionTitle: '', mainResponsibilities: '', dateFrom: '', dateTo: '' }]
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CV Form</h1>

      <div className="mb-6">
        <label className="block mb-2">Personal Statement</label>
        <textarea
          name="personalStatement"
          value={formData.personalStatement}
          onChange={handlePersonalStatementChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">General Information</h2>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.generalInfo.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block mt-4 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.generalInfo.email}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block mt-4 mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.generalInfo.phone}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Educational Experience</h2>
        {formData.educations.map((education, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">School</label>
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={(e) => handleEducationChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mt-4 mb-2">Title of Study</label>
            <input
              type="text"
              name="titleOfStudy"
              value={education.titleOfStudy}
              onChange={(e) => handleEducationChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mt-4 mb-2">Date of Study</label>
            <input
              type="text"
              name="dateOfStudy"
              value={education.dateOfStudy}
              onChange={(e) => handleEducationChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button onClick={addEducation} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Education</button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Practical Experience</h2>
        {formData.experiences.map((experience, index) => (
          <div key={index} className="mb-6">
            <label className="block mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mt-4 mb-2">Position Title</label>
            <input
              type="text"
              name="positionTitle"
              value={experience.positionTitle}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mt-4 mb-2">Main Responsibilities</label>
            <textarea
              name="mainResponsibilities"
              value={experience.mainResponsibilities}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
            <label className="block mt-4 mb-2">Date From</label>
            <input
              type="text"
              name="dateFrom"
              value={experience.dateFrom}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mt-4 mb-2">Date To</label>
            <input
              type="text"
              name="dateTo"
              value={experience.dateTo}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button onClick={addExperience} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Experience</button>
      </div>
    </div>
  );
};

export default CVForm;



