import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Mail, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [
    { number: "3+", label: "Projects",  icon: <Briefcase className="h-5 w-5" />, suffix: "" },
    { number: "1",  label: "Years Exp", icon: <Calendar className="h-5 w-5" />,  suffix: "+" },
    { number: "100",label: "Success",   icon: <Target className="h-5 w-5" />,    suffix: "%" },
    { number: "3.0",label: "GPA",       icon: <User className="h-5 w-5" />,      suffix: "" }
  ];

  const techStack = [
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Tailwind CSS", "jQuery"] },
    { category: "Backend",  items: ["PHP", "PHP REST API"] },
    { category: "Tools & DB", items: ["MySQL", "Firebase", "Git", "GitHub", "VS Code", "npm"] }
  ];

  const features = [
    "Responsive UI Development",
    "REST API Integration",
    "Clean, maintainable code",
    "JWT Authentication",
    "Agile team collaboration",
    "Fast learner & problem solver"
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />,   href: "https://github.com/talha-asif-dev" },
    { icon: <Linkedin className="h-5 w-5" />,  href: "https://www.linkedin.com/in/talha-asif-2b4174232" },
    { icon: <Mail className="h-5 w-5" />,      href: "mailto:tasif751@gmail.com" }
  ];

  const tabContent = {
    personal:     "Detail-oriented Junior Software Developer passionate about building clean, user-friendly web applications. When I'm not coding, I enjoy mentoring junior students and participating in hackathons and coding competitions.",
    professional: "With 1+ year of professional experience at The Websters, Mian Channu, I build and maintain responsive web applications using React.js, PHP REST APIs, and MySQL. Previously interned at Maxenius Solutions, Faisalabad.",
    approach:     "I believe in clean code, responsive design, and real user impact. I thrive in collaborative, agile environments and am always focused on translating client requirements into polished, performant UI solutions."
  };

  useEffect(() => {
    const fn = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCounter(p => (p + 1) % 4), 2000);
    return () => clearInterval(id);
  }, []);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/Talha-resume.pdf';
    a.download = 'Talha-Asif-resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl" style={{ transform: `translate(${mousePosition.x*0.02}px, ${mousePosition.y*0.02}px)` }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Transforming</span>
            <span className="block text-primary">Ideas Into Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that combine <span className="text-primary font-semibold">innovation</span>, <span className="text-primary font-semibold">performance</span>, and <span className="text-primary font-semibold">elegance</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          <div className="xl:col-span-2 space-y-8">
            {/* Main Card */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500 group">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:border-primary/40 group-hover:scale-105 transition-all duration-500 flex-shrink-0 bg-primary/10 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1">Talha Asif</h2>
                  <p className="text-primary text-base sm:text-lg font-semibold mb-4">Junior Software Developer</p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {achievements.map((a, i) => (
                      <div key={i} className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${counter === i ? 'bg-primary/10 border-primary/50' : ''}`}>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          {a.icon}
                          <div>
                            <div className="font-bold text-sm sm:text-lg">{a.number}{a.suffix}</div>
                            <div className="text-[10px] sm:text-xs text-muted-foreground">{a.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-border mb-6">
                {['personal','professional','approach'].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="min-h-[100px]">
                <AnimatePresence mode="sync">
                  <motion.p key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {tabContent[activeTab]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500">
              <h3 className="text-lg sm:text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" /> Tech Stack Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {techStack.map((stack, i) => (
                  <div key={i} className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/30 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300"><Code className="h-4 w-4" /></div>
                      <h4 className="font-semibold text-sm sm:text-lg">{stack.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {stack.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />{item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500">
              <h3 className="text-lg sm:text-2xl font-bold mb-6 text-center">Let's Work Together</h3>
              <div className="flex flex-col space-y-3">
                <a href="#contact" className="block w-full p-4 bg-primary text-primary-foreground rounded-xl text-center font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3"><User className="h-5 w-5" />Hire Me</div>
                </a>
                <button onClick={handleDownload} className="block w-full p-4 border border-border rounded-xl text-center font-semibold hover:bg-accent hover:border-primary/30 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3"><Download className="h-5 w-5" />Download CV</div>
                </button>
              </div>
              <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border">
                <h4 className="font-semibold mb-3 text-center text-sm">Quick Connect</h4>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">{s.icon}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500">
              <h3 className="text-base sm:text-xl font-bold mb-4 flex items-center gap-2"><Star className="h-5 w-5 text-primary" />Why Choose Me</h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 hover:scale-105 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/60 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="font-semibold text-sm">Available</span>
                </div>
                <span className="text-sm bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">For new projects</span>
              </div>
              <div className="text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-2">
                ⚡ Response time: Under 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
