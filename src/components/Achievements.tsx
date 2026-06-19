"use client";

import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineAcademicCap, HiOutlineUsers } from "react-icons/hi";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: HiOutlineBadgeCheck,
    title: "Qualified GATE 2026",
    description: "Qualified GATE 2026 (Computer Science) with a score of 369.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Academic Topper",
    description: "Achieved a perfect 10.0 GPA in Semester 2 at KPR Institute of Technology.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: HiOutlineUsers,
    title: "School Leader",
    description: "Led student teams, organized events, and supported campus initiatives.",
    color: "from-purple-400 to-pink-500",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Key accomplishments and milestones that showcase my growth, leadership, and impact."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.55 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="pro-card rounded-3xl p-6 sm:p-8 group h-full flex flex-col items-center text-center bg-background/80 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                  {achievement.description}
                </p>

                <div className={`mt-6 h-1 w-10 bg-gradient-to-r ${achievement.color} rounded-full group-hover:w-16 transition-all`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
