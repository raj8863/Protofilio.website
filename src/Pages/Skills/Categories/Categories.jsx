import React from "react";
import { FaPaintBrush, FaServer, FaDatabase, FaTools, FaRocket } from "react-icons/fa";
import "../module.Skills.css";

const categories = [
  { title: "Frontend", skills: 7, icon: <FaPaintBrush /> },
  { title: "Backend", skills: 2, icon: <FaServer /> },
  { title: "Database", skills: 2, icon: <FaDatabase /> },
  { title: "Version Control", skills: 2, icon: <FaTools /> },
  { title: "Deployment", skills: 4, icon: <FaRocket /> }
];

const Categories = () => {
  return (
    <div className="categories">
      <h2 className="section-title">Categories</h2>

      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <div className="category-icon">{cat.icon}</div>
          <h3>{cat.title}</h3>
          <p>{cat.skills} Skills</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
