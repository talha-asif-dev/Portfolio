import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML5",       level: 90, category: "frontend", emoji: "🌐" },
  { name: "CSS3",        level: 88, category: "frontend", emoji: "🎨" },
  { name: "JavaScript",  level: 85, category: "frontend", emoji: "⚡" },
  { name: "React.js",    level: 88, category: "frontend", emoji: "⚛️" },
  { name: "Bootstrap",   level: 85, category: "frontend", emoji: "🅱️" },
  { name: "Tailwind CSS",level: 80, category: "frontend", emoji: "💨" },
  { name: "jQuery",      level: 78, category: "frontend", emoji: "💲" },

  // Backend & DB
  { name: "PHP",          level: 80, category: "backend", emoji: "🐘" },
  { name: "PHP REST API", level: 78, category: "backend", emoji: "🔌" },
  { name: "MySQL",        level: 80, category: "backend", emoji: "🗄️" },
  { name: "Firebase",     level: 70, category: "backend", emoji: "🔥" },

  // Tools
  { name: "Git",    level: 85, category: "tools", emoji: "🌿" },
  { name: "GitHub", level: 85, category: "tools", emoji: "🐙" },
  { name: "VS Code",level: 92, category: "tools", emoji: "💻" },
  { name: "npm",    level: 82, category: "tools", emoji: "📦" },
];

const categories = [
  { id: "all",      label: "All Skills",   color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "frontend", label: "Frontend",     color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "backend",  label: "Backend & DB", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "tools",    label: "Tools",        color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
];

const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${
        level > 75 ? "bg-gradient-to-r from-green-400 to-emerald-500"
        : level > 50 ? "bg-gradient-to-r from-yellow-400 to-amber-500"
        : "bg-gradient-to-r from-red-400 to-pink-500"
      }`}
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const triple = [...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {triple.map((skill, i) => (
          <div key={`a-${i}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl">
              {skill.emoji}
            </div>
            <span className="text-sm font-medium text-center whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...triple].reverse().map((skill, i) => (
          <div key={`b-${i}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl">
              {skill.emoji}
            </div>
            <span className="text-sm font-medium text-center whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = skills.filter(s => activeCategory === "all" || s.category === activeCategory);

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg ${
                activeCategory === cat.id ? `${cat.color} text-white shadow-md` : "bg-secondary/50 text-foreground hover:bg-secondary/70"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(skill => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center text-2xl flex-shrink-0">
                      {skill.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</h3>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          skill.level > 75 ? "bg-emerald-500/10 text-emerald-500"
                          : skill.level > 50 ? "bg-amber-500/10 text-amber-500"
                          : "bg-pink-500/10 text-pink-500"
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>Basic</span><span>Advanced</span><span>Expert</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
