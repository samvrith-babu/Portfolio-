import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Code2, Terminal, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { SKILLS_CATEGORIES, SkillCategory } from '../portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#00FF9C]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#00E5FF]" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-[#A855F7]" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILLS_CATEGORIES
      : SKILLS_CATEGORIES.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090D14] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <span>[02 // CAPABILITIES]</span>
            <span className="text-slate-600">•</span>
            <span>SKILL_ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            Technical <span className="text-[#00E5FF]">Competencies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Core stack and security proficiencies developed through coursework, laboratory simulations, and independent tool creation.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#05070A] font-semibold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  : 'bg-[#090D14] text-slate-400 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All Domains
            </button>
            {SKILLS_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.category
                    ? 'bg-[#090D14] text-[#00FF9C] border border-[#00FF9C] shadow-[0_0_12px_rgba(0,255,156,0.25)] font-semibold'
                    : 'bg-[#090D14] text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="rounded-xl bg-[#090D14]/85 border border-slate-800 hover:border-[#00FF9C]/40 transition-all p-6 backdrop-blur-md flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#05070A] border border-slate-800 group-hover:border-[#00FF9C]/40 transition-colors">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-mono font-semibold text-white text-base">
                      {category.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.skills.length} items
                  </span>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C]" />
                          <span className="font-mono text-slate-200 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#05070A] border border-slate-800 text-slate-400">
                          {skill.badge}
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              category.color === '#00FF9C'
                                ? 'linear-gradient(90deg, #00FF9C, #00E5FF)'
                                : category.color === '#00E5FF'
                                ? 'linear-gradient(90deg, #00E5FF, #3B82F6)'
                                : 'linear-gradient(90deg, #A855F7, #EC4899)',
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.05 + 0.2 }}
                        />
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-slate-400 pl-3.5 pt-0.5">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Micro-Terminal Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF9C]" />
                  Active Lab Practice
                </span>
                <span className="text-[#00E5FF]">&gt; verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
