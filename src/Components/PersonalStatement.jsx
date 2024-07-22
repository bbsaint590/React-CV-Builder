import React, { useState, useEffect } from 'react';

const PersonalStatement = ({ onSubmit }) => {
  const [editMode, setEditMode] = useState(true);
  const [statement, setStatement] = useState('');

  useEffect(() => {
    onSubmit(statement);
  }, [statement, onSubmit]);

  const handleChange = (e) => {
    setStatement(e.target.value);
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
          <textarea
            name="statement"
            placeholder="Personal Statement"
            value={statement}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      ) : (
        <div>
          <p>{statement}</p>
          <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
        </div>
      )}
    </div>
  );
};

export default PersonalStatement;
