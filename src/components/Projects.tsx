"use client";

import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "ReviewFusion-AI: Integrated CART Framework",
    description:
      "An AI-based e-commerce review analysis system using NLP and Machine Learning techniques. Implemented TF-IDF, XGBoost, and MTNN-ET-CART models for sentiment analysis, recommendation prediction, and rating estimation. Built a Flask-based web application achieving 96.4% prediction accuracy through optimized feature engineering and model tuning.",
    tech: ["Python", "NLP", "TF-IDF", "XGBoost", "Flask"],
    category: "AI / ML",
  },
  {
    title: "Twitter Sentiment Analysis on Jamili Elections",
    description:
      "Collected real-time Twitter data using Tweepy and performed sentiment analysis with VADER. Applied preprocessing and feature engineering techniques to improve classification performance. Analyzed public opinion trends and extracted insights from social media data.",
    tech: ["Tweepy", "VADER", "NLP", "Matplotlib"],
    category: "AI / ML",
  },
  {
    title: "Machine Learning-Based Energy Consumption Forecasting",
    description:
      "Developed a predictive model for smart grid energy consumption using temporal and environmental features. Optimized model performance through feature selection and comparison of SVR and Random Forest algorithms. Achieved 93% R² score and built an end-to-end ML pipeline for preprocessing, training, and inference.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: "AI / ML",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="A collection of projects that showcase my skills and passion"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="pro-card rounded-2xl overflow-hidden group h-full flex flex-col"
              >
                {/* Accent bar */}
                <div className="h-1 bg-primary" />

                <div className="p-4 sm:p-6 flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                  {/* Category badge */}
                  <span className="inline-flex self-center sm:self-start px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border mb-3 sm:mb-4">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-lg bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border w-full">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      >
                        <FaGithub size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all"
                      >
                        <HiOutlineExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="text-xs text-muted-foreground italic">
                        Links coming soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
