import { useState } from "react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    { name: "JavaScript", level: 80, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "Bash", level: 60, category: "languages" },
    { name: "Java", level: 50, category: "languages" },
    { name: "C", level: 60, category: "languages" },
    { name: "ReactJs", level: 90, category: "frameworks" },
    { name: "NodeJs", level: 90, category: "frameworks" },
    { name: "NextJs", level: 65, category: "frameworks" },
    { name: "Redux", level: 70, category: "frameworks" },
    { name: "Express", level: 90, category: "frameworks" },
    { name: "React Native", level: 60, category: "frameworks" },
    { name: "Tailwind CSS", level: 90, category: "frameworks" },
    { name: "MongoDb", level: 70, category: "databases" },
    { name: "MySQL", level: 70, category: "databases" },
    { name: "PostgreSQL", level: 70, category: "databases" },
    { name: "Linux", level: 70, category: "platforms" },
    { name: "Web", level: 95, category: "platforms" },
    { name: "Figma", level: 80, category: "platforms" },
    { name: "Git", level: 80, category: "platforms" },
    { name: "GitHub", level: 80, category: "platforms" },
    { name: "AWS", level: 60, category: "platforms" },
    { name: "Firebase", level: 50, category: "platforms" },
    { name: "Vercel", level: 80, category: "platforms" },
    { name: "Postman", level: 80, category: "platforms" },
  ];

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks" },
    { id: "databases", name: "Databases" },
    { id: "platforms", name: "Platforms" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-white dark:text-black ">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 sm:p-0">
          {filteredSkills.slice(0, 9).map((skill, index) => (
            <div key={index} className="bg-[#F1DEDC] p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {skill.name}
                </h3>
                <span className="text-blue-500 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
