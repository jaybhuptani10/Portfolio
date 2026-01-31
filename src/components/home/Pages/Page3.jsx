import { RevealOnScroll, Reveal } from "../../utils/Reveal"; // Adjust path if necessary
import { motion } from "framer-motion"; // Still needed for hover effects on spans

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "Bash", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "C", category: "languages" },
    { name: "ReactJs", category: "frameworks" },
    { name: "NodeJs", category: "frameworks" },
    { name: "NextJs", category: "frameworks" },
    { name: "Redux", category: "frameworks" },
    { name: "Express", category: "frameworks" },
    { name: "React Native", category: "frameworks" },
    { name: "Tailwind CSS", category: "frameworks" },
    { name: "MongoDb", category: "databases" },
    { name: "MySQL", category: "databases" },
    { name: "PostgreSQL", category: "databases" },
    { name: "Linux", category: "platforms" },
    { name: "Web", category: "platforms" },
    { name: "Figma", category: "platforms" },
    { name: "Git", category: "platforms" },
    { name: "GitHub", category: "platforms" },
    { name: "AWS", category: "platforms" },
    { name: "Firebase", category: "platforms" },
    { name: "Vercel", category: "platforms" },
    { name: "Postman", category: "platforms" },
  ];

  const categories = {
    languages: skills.filter((s) => s.category === "languages"),
    frameworks: skills.filter((s) => s.category === "frameworks"),
    databases: skills.filter((s) => s.category === "databases"),
    platforms: skills.filter((s) => s.category === "platforms"),
  };

  const categoryTitles = {
    languages: "Languages",
    frameworks: "Frameworks & Libraries",
    databases: "Databases",
    platforms: "Tools & Platforms",
  };

  return (
    <section className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-800">
              Technical Proficiency
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-gray-300 dark:text-gray-900 text-lg max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I utilize
              to build scalable and efficient solutions.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([key, categorySkills], index) => (
            <Reveal key={key} delay={index * 0.2}>
              <div className="bg-[#1A202B]/80 dark:bg-white/80 backdrop-blur-sm border border-gray-700 dark:border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 capitalize text-white dark:text-gray-800 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                  {categoryTitles[key]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-lg bg-gray-800/50 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 text-gray-200 dark:text-gray-900 font-medium hover:bg-blue-900/20 dark:hover:bg-blue-50 hover:border-blue-700 dark:hover:border-blue-200 transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
