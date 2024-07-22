import React, { useState, useEffect } from 'react';

const GeneralInfo = ({ onSubmit }) => {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    onSubmit(info);
  }, [info, onSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
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
          <input type="text" name="name" placeholder="Name" value={info.name} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={info.email} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="tel" name="phone" placeholder="Phone" value={info.phone} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;

