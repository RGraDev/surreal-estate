import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 100000,
      email: "John@JohnDoe.com",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h2>Add Property</h2>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            type="text"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="type">
          Type:
          <input
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bedrooms">
          Bedrooms:
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms:
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            id="price"
            type="number"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            aria-label="Select City"
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
