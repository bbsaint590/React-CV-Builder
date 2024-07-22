import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const FormattedCV = ({ personalStatement, generalInfo, educations, experiences }) => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{generalInfo.name}</h1>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <AiOutlineMail className="text-gray-500" />
            <span className="text-lg text-gray-700">{generalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone className="text-gray-500" />
            <span className="text-lg text-gray-700">{generalInfo.phone}</span>
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-1"></h2>
        <p className="text-gray-700 leading-relaxed">{personalStatement}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-1">Experience</h2>
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg font-medium">{experience.company}</p>
              <p className="text-gray-700">{experience.positionTitle}</p>
              <p className="text-gray-500">{experience.dateFrom} - {experience.dateTo}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {experience.mainResponsibilities.split('\n').map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No practical experience added.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 pb-1">Educational Experience</h2>
        {educations.length > 0 ? (
          educations.map((education, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-medium">{education.school}</p>
              <p className="text-gray-700">{education.titleOfStudy}</p>
              <p className="text-gray-500">{education.dateOfStudy}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No educational experience added.</p>
        )}
      </section>
      
    </div>
  );
};

export default FormattedCV;
