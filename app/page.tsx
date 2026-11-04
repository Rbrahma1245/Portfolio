
import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="mx-auto max-w-5xl space-y-24 px-6 py-12">
        {/* About */}
        <section id="about" className="space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            3 Years Experience · Enterprise ERP Focus
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Hi, I'm{" "}
            <span className="animate-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rahul Brahma
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {/* Replace with your actual portfolio summary */}
            Front-end developer focused on building responsive,
            scalable enterprise applications.
          </p>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        {/* Education */}
        <section id="education" className="scroll-mt-28 space-y-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300">
              <GraduationCap size={25} />
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Academic Background
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Education
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {portfolioData.education.map((edu, idx) => (
              <article
                key={`${edu.institution}-${edu.year}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/80 sm:p-7"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/[0.05] blur-2xl transition duration-500 group-hover:bg-cyan-400/10" />

                <div className="relative">
                  <span className="inline-flex rounded-lg border border-cyan-400/15 bg-cyan-400/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                    {edu.year}
                  </span>

                  <h3 className="mt-5 text-lg font-bold leading-relaxed text-white">
                    {edu.degree}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {edu.institution}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-slate-800 pt-4 text-sm font-semibold text-cyan-300">
                    <GraduationCap size={17} />
                    {edu.grade}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer
          id="contact"
          className="space-y-6 border-t border-slate-800 pb-16 pt-12 text-center"
        >
          <h2 className="text-2xl font-bold">
            Let's Build Something Great Together
          </h2>

          <p className="mx-auto max-w-md text-sm text-slate-400">
            I'm open to discussing front-end engineering roles,
            enterprise ERP challenges, and collaborative React projects.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Contact Me
          </a>
        </footer>
      </main>
    </div>
  );
}
