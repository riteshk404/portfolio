import { useState } from 'react';
import { Mail, Github, Linkedin, Globe, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/riteshkarki505@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Message from Portfolio (${formData.name})`,
                    _captcha: false,
                })
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });

                // Auto-hide success message
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (err) {
            console.error("Submission Error:", err);
        }

        setIsLoading(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'riteshkarki505@gmail.com',
            href: 'mailto:riteshkarki505@gmail.com',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        },
        {
            icon: Github,
            label: 'github.com/riteshk404',
            href: 'https://github.com/riteshk404',
            color: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
        },
        {
            icon: Linkedin,
            label: 'linkedin.com/in/riteshkarki',
            href: 'https://linkedin.com/in/riteshkarki',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        },
        {
            icon: Globe,
            label: 'riteshk.com.np',
            href: 'https://riteshk.com.np',
            color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
        },
    ];

    return (
        <section id="contact" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Let's discuss how we can work together to bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* CONTACT INFO */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium break-all">
                                            {item.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SEND MESSAGE */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Send Message
                        </h3>

                        {/* SUCCESS ALERT */}
                        {isSubmitted && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-green-900 dark:text-green-300">
                                        Message received!
                                    </p>
                                    <p className="text-sm text-green-700 dark:text-green-400">
                                        Thank you for reaching out. I'll get back to you soon.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Your message"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}
