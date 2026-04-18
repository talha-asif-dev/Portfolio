import { Linkedin, Mail, MapPin, Phone, Send, Github, Loader2 } from "lucide-react";
import { useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const showToast = (title, description, type) => {
    setToast({ title, description, type });
    setTimeout(() => setToast(null), 4000);
  };

  const validateForm = () => {
    if (!formData.name.trim()) { showToast("Name is required", "", "error"); return false; }
    if (!formData.email.trim()) { showToast("Email is required", "", "error"); return false; }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) { showToast("Invalid email format", "", "error"); return false; }
    if (!formData.message.trim() || formData.message.length < 10) { showToast("Message must be at least 10 characters", "", "error"); return false; }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xwpbojaj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        showToast("Message sent! 🎉", "I'll get back to you within 24 hours.", "success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      showToast("Something went wrong", "Please email me at tasif751@gmail.com", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      {/* Toast notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg border max-w-sm ${toast.type === 'success' ? 'bg-green-600 text-white border-green-700' : 'bg-red-600 text-white border-red-700'}`}>
          <div className="font-semibold">{toast.title}</div>
          {toast.description && <div className="text-sm opacity-90 mt-1">{toast.description}</div>}
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-primary"></span>
              Contact Details
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "tasif751@gmail.com", href: "mailto:tasif751@gmail.com" },
                { icon: Phone, label: "Phone", value: "+92 346 1695000", href: "tel:+923461695000" },
                { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-accent/30 rounded-xl transition-all duration-300">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-base font-medium hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-base font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4 text-sm text-muted-foreground">Find me on</h4>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/talha-asif-2b4174232" },
                  { icon: Github,   label: "GitHub",   url: "https://github.com/talha-asif-dev" },
                  { icon: Mail,     label: "Email",    url: "mailto:tasif751@gmail.com" },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={s.label}>
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-primary"></span>
              Send Me a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Your Name" />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="your@email.com" />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Hey Talha, I'd love to collaborate on..." />
              </div>

              <button type="submit" disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}>
                {isSubmitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin" />Sending...</>
                ) : (
                  <>Send Message<Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
