import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    const githubUrl = "https://github.com/leorecoa";
    const linkedinUrl = "https://www.linkedin.com/in/leandro-jess%C3%A9-7b575539a/";

    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
            {/* Shifting Background Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.07, 0.03],
                    x: ['-50%', '-40%', '-50%'],
                    y: ['-50%', '-60%', '-50%']
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.02, 0.05, 0.02],
                    x: ['-40%', '-55%', '-40%'],
                    y: ['-60%', '-45%', '-60%']
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/5 blur-[130px] rounded-full pointer-events-none z-0"
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        Vamos construir o <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">próximo nível?</span>
                    </h2>
                    <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
                        Seja um projeto inovador, uma ideia maluca ou apenas uma conversa sobre IA e tecnologia, estou sempre pronto para ouvir.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-16">
                        <Button variant="primary" href="mailto:contato@leandrojesse.com">
                            Diga Olá <Send size={18} />
                        </Button>
                        <Button variant="secondary" href={githubUrl} target="_blank">
                            GitHub Profile
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-8">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 glass-card rounded-full text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:scale-110 active:scale-95"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 glass-card rounded-full text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:scale-110 active:scale-95"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-sm">
                <p>© 2025 Leandro Jesse. Criado com IA & Código.</p>
                <div className="flex gap-8">
                    <a href="#home" className="hover:text-white transition-colors">Back to top</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
            </footer>
        </section>
    );
};

export default Contact;