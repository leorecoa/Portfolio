
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 overflow-hidden relative">
      {/* Texto decorativo de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        ABOUT ME • ABOUT ME • ABOUT ME
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              The Vision
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] tracking-tighter">
              A Essência do <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Novo Criador</span>
            </h2>
            <div className="space-y-8 text-lg text-white/50 leading-relaxed font-light">
              <p className="border-l-2 border-cyan-400/30 pl-6 italic text-white/70">
                "A tecnologia não é apenas uma ferramenta, é uma extensão da nossa criatividade."
              </p>
              <p>
                Como desenvolvedor assistido por IA, meu papel é orquestrar a inteligência das máquinas para potencializar a visão humana. Cada linha de código é pensada para ser eficiente, elegante e, acima de tudo, útil.
              </p>
              <p>
                Acredito na simplicidade que esconde a complexidade sob uma interface impecável. Minha jornada é marcada pelo aprendizado contínuo e pela busca incessante da perfeição visual focada na experiência de quem usa.
              </p>
            </div>

            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-3xl font-bold font-space text-white">1</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Ano de Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-space text-white">10+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Projetos</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-space text-white">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Foco no Usuário</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Moldura de Design Figma */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 p-2 bg-gradient-to-br from-white/15 to-transparent shadow-2xl transition-all duration-700 group-hover:border-cyan-400/30">
              
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black">
                
                {/* Imagem com Tratamento Digital Avançado */}
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src="https://avatars.githubusercontent.com/u/203870432?v=4" 
                    alt="Leandro Jesse Portrait" 
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
                    style={{ 
                      filter: 'contrast(1.15) brightness(1.05) saturate(1.15) sepia(0.1) drop-shadow(0 0 20px rgba(0,0,0,0.8))',
                      imageRendering: 'auto'
                    }}
                  />
                  
                  {/* Overlay de Vinheta Estúdio */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>
                  
                  {/* Brilho Lateral (Rim Light) */}
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(34,211,238,0.15)_0%,transparent_40%)] mix-blend-screen pointer-events-none"></div>

                  {/* Efeito de Scanlines e Grão de Filme */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-10 left-10 z-20 transition-transform duration-700 group-hover:translate-y-[-10px]">
                  <p className="text-white text-3xl font-space font-bold tracking-tighter text-shadow-lg">Leandro Jesse</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="h-px w-8 bg-cyan-400 transition-all duration-700 group-hover:w-12"></span>
                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] font-bold">AI-Driven Architect</p>
                  </div>
                </div>

                {/* Gradient de Fundo para o Texto */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>

            {/* Badge Flutuante IA */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 -right-12 w-48 h-48 glass-card rounded-[2.5rem] flex items-center justify-center p-8 border border-cyan-400/40 shadow-[0_20px_50px_rgba(34,211,238,0.15)] z-20 backdrop-blur-3xl"
            >
              <div className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
                </div>
                <p className="text-4xl font-black font-space text-white leading-none mb-1 tracking-tighter">AI</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 font-black">Focused Dev</p>
                
                {/* Decorative dots */}
                <div className="absolute -top-2 -left-2 w-1 h-1 bg-cyan-400/40 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-cyan-400/40 rounded-full"></div>
              </div>
            </motion.div>

            {/* Aura de fundo (Backlight) */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/15 blur-[120px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
