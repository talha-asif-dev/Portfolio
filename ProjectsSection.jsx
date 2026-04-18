import { ArrowRight, Github, Sparkles, Zap, Eye, Star, Code } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Login & Authentication System",
    category: "Full Stack",
    description: "A secure full-stack authentication system with JWT-based session management, role-based access control, and encrypted password handling using bcrypt.",
    tags: ["React.js", "PHP REST API", "MySQL", "JWT", "bcrypt"],
    demoUrl: "#",
    githubUrl: "https://github.com/talha-asif-dev/Login-Authentication-System",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Live",
    highlights: ["JWT-based session management", "Role-based access control", "Protected routes & form validation"]
  },
  {
    id: 2,
    title: "Event Booking System",
    category: "Full Stack",
    description: "An end-to-end event management platform enabling users to browse, book, and manage event registrations with real-time seat availability tracking.",
    tags: ["React.js", "PHP REST API", "MySQL", "Admin Dashboard"],
    demoUrl: "#",
    githubUrl: "https://github.com/talha-asif-dev/Event-Booking-System",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Live",
    highlights: ["Real-time seat availability", "Admin dashboard for event CRUD", "Attendee management & booking confirmation"]
  },
  {
    id: 3,
    title: "E-Commerce Mini Store",
    category: "Full Stack",
    description: "A fully functional e-commerce storefront with product catalogue, cart management, user authentication, and order processing powered by a custom PHP REST API.",
    tags: ["React.js", "PHP REST API", "MySQL", "Cart Management"],
    demoUrl: "#",
    githubUrl: "https://github.com/talha-asif-dev/E-Commerce-Store",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: ["Dynamic product filtering & search", "Cart management & checkout flow", "MySQL schema for products, orders & inventory"]
  }
];

const ProjectHighlights = ({ highlights }) => (
  <div className="space-y-2">
    {highlights.map((h, i) => (
      <div key={i} className="flex items-center gap-2 text-sm">
        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
        <span className="text-muted-foreground">{h}</span>
      </div>
    ))}
  </div>
);

export const ProjectsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="projects" className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">

        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <Sparkles className="h-4 w-4" /> My Projects
          </motion.div>
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            Project<span className="block text-primary">Portfolio</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            Full-stack projects built with React.js, PHP REST APIs, and MySQL showcasing my skills in frontend and backend development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">

                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">
                    {index === 0 ? "🔐" : index === 1 ? "🎫" : "🛒"}
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-emerald-500/20 text-emerald-600 border border-emerald-500/30">
                      {project.status}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border bg-blue-500/20 text-blue-600 border-blue-500/30">
                      {project.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 rounded-full backdrop-blur-sm border bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                      <Code size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    {project.featured && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30 ml-2 flex-shrink-0">
                        <Star size={12} className="fill-amber-500" /> Featured
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <ProjectHighlights highlights={project.highlights} />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                      <Github size={16} /> View Code
                    </motion.a>
                    <motion.a href={project.demoUrl} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium border bg-background text-foreground border-border hover:border-primary hover:bg-primary/5 transition-all duration-300" onClick={e => project.demoUrl === "#" && e.preventDefault()}>
                      <Eye size={16} /> {project.demoUrl === "#" ? "Soon" : "Demo"}
                    </motion.a>
                  </div>
                </div>

                <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="bg-background border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" /> Get In Touch
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Like what you see?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">I'm always open to discussing new opportunities and interesting projects.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                Contact Me <ArrowRight size={18} />
              </motion.a>
              <motion.a href="https://github.com/talha-asif-dev" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <Github size={18} /> View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
