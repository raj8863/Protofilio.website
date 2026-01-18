import '../module.Skills.css'
const categories = [
  { title: "Frontend", skills: 7, icon: "🎨" },
  { title: "Backend", skills: 2, icon: "💻" },
  { title: "Database", skills: 2, icon: "🗄️" },
  { title: "Version Control", skills: 2, icon: "🔧" },
  { title: "Deployment", skills: 4, icon: "🚀" }
];

export default function Categories() {
  return (
    <div className="categories">
      <h2 className="section-title">🔧 Categories</h2>

      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <div className="category-icon">{cat.icon}</div>
          <h3>{cat.title}</h3>
          <p>{cat.skills} skills</p>
        </div>
      ))}
    </div>
  );
}
