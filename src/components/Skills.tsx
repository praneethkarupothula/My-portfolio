"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiStreamlit,
  SiVercel,
  SiFlask,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
      { name: "Java", icon: FaJava, color: "#ed8b00" },
      { name: "C++", icon: TbBrandCpp, color: "#00599c" },
    ],
  },
  {
    title: "ML & Data Science",
    icon: "🤖",
    skills: [
      { name: "TensorFlow", icon: SiPython, color: "#ff6f00" },
      { name: "Scikit-learn", icon: SiPython, color: "#f7931e" },
      { name: "Pandas", icon: SiPython, color: "#150458" },
      { name: "NumPy", icon: SiPython, color: "#013243" },
      { name: "VADER", icon: SiPython, color: "#3776ab" }
    ],
  },
  {
    title: "Generative AI",
    icon: "🧠",
    skills: [
      { name: "Transformers", icon: SiPython, color: "#3776ab" },
      { name: "Langchain", icon: SiPython, color: "#f7931e" },
      { name: "LLM", icon: SiPython, color: "#f7931e" },
      { name: "RAG", icon: SiPython, color: "#f7931e" },
      { name: "LangGraph", icon: SiPython, color: "#3776ab" }
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: "🛠️",
    skills: [
      { name: "Jupyter", icon: SiPython, color: "#3776ab" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "VS Code", icon: VscCode, color: "#007acc" },
    ],
  },
  {
    title: "Data Visualization",
    icon: "📊",
    skills: [
      { name: "Matplotlib", icon: SiPython, color: "#3776ab" },
      { name: "Seaborn", icon: SiPython, color: "#3776ab" },
      { name: "Plotly", icon: SiPython, color: "#3776ab" },
      { name: "Streamlit", icon: SiStreamlit, color: "#ff4b4b" },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: "☁️",
    skills: [
      { name: "Google Colab", icon: SiPython, color: "#f37726" },
      { name: "Render", icon: SiVercel, color: "#46e3b7" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32">
      {/* Background accent */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="Machine Learning, Data Science, and AI tools I use for building intelligent solutions"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, catIdx) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className="pro-card rounded-2xl p-4 sm:p-6 h-full"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                  <h3 className="text-foreground font-semibold text-base sm:text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIdx * 0.05 + catIdx * 0.1 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="tag-pill cursor-default group"
                    >
                      <skill.icon
                        size={18}
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
