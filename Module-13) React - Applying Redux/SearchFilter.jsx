import React, { useState } from "react";

const SearchFilter = () => {
  // Step 1: Declare state for search input and items list
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];

  // Step 2: Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Search Filter</h2>
      {/* Step 3: Input field to take search term */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />
      <ul>
        {/* Render filtered items */}
        {filteredItems.map((item, index) => (
          <li key={index} style={{ fontSize: "18px", marginBottom: "8px", color:"blue" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;