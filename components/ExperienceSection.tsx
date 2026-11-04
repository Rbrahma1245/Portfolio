
"use client";

import { portfolioData } from "@/data/portfolioData";

import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Building2,
  Code2,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent, Typography, Chip } from "@mui/material";

import Reveal from "./Reveal";

const glassCardStyles = {
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.88), rgba(9,15,30,0.95))",
  border: "1px solid rgba(100,116,139,0.25)",
  borderRadius: "24px",
  color: "#f8fafc",
  transition:
    "transform 450ms cubic-bezier(0.16,1,0.3,1), border-color 400ms ease, box-shadow 400ms ease",

  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: "rgba(34,211,238,0.4)",
    boxShadow:
      "0 25px 70px rgba(8,145,178,0.12), inset 0 0 35px rgba(34,211,238,0.025)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(34,211,238,0.8), rgba(129,140,248,0.8), transparent)",
    opacity: 0.8,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    width: "220px",
    height: "220px",
    top: "-120px",
    right: "-100px",
    borderRadius: "50%",
    background: "rgba(99,102,241,0.10)",
    filter: "blur(65px)",
    pointerEvents: "none",
    transition: "all 500ms ease",
  },

  "&:hover::after": {
    background: "rgba(34,211,238,0.13)",
    transform: "scale(1.3)",
  },
};

const dateChipStyles = {
  flexShrink: 0,
  background: "rgba(30,41,59,0.65)",
  color: "#cbd5e1",
  fontWeight: 600,
  fontSize: "0.68rem",
  border: "1px solid rgba(100,116,139,0.3)",
  borderRadius: "10px",
  height: "30px",

  "& .MuiChip-icon": {
    color: "#67e8f9",
    marginLeft: "8px",
  },
};

const floatingIconStyles = {
  animation: "floatIcon 5s ease-in-out infinite",

  "@keyframes floatIcon": {
    "0%, 100%": {
      transform: "translateY(0px) rotate(0deg)",
    },
    "50%": {
      transform: "translateY(-10px) rotate(3deg)",
    },
  },
};

const internshipCardStyles = {
  ...glassCardStyles,
  height: "100%",
  borderRadius: "22px",

  "&:hover": {
    ...glassCardStyles["&:hover"],
    borderColor: "rgba(167,139,250,0.4)",
    boxShadow:
      "0 25px 65px rgba(139,92,246,0.10), inset 0 0 30px rgba(139,92,246,0.025)",
  },

  "&::before": {
    ...glassCardStyles["&::before"],
    background:
      "linear-gradient(90deg, transparent, #a78bfa, #6366f1, transparent)",
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative space-y-12 overflow-hidden sm:space-y-16">

      {/* ==================== PROFESSIONAL EXPERIENCE HEADING ==================== */}

      <Reveal>
        <div className="relative grid grid-cols-1 items-center gap-5 sm:gap-8 md:grid-cols-[1.2fr_0.8fr]">

          {/* Heading content */}
          <div className="relative z-10">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-[10px] font-semibold text-cyan-300 sm:mb-5 sm:px-4 sm:py-2 sm:text-xs">
              <BriefcaseBusiness size={13} />
              <span>Career Journey</span>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Professional
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mt-3 max-w-md text-xs leading-6 text-slate-400 sm:mt-4 sm:text-sm sm:leading-7">
              Building impactful solutions through innovation, creativity, and
              technology.
            </p>
          </div>

          {/* Decorative animated illustration */}
          <div className="relative hidden h-[180px] items-center justify-center md:flex lg:h-[210px]">

            {/* Background glow */}
            <div className="absolute h-32 w-32 rounded-full bg-cyan-500/10 blur-[60px] lg:h-40 lg:w-40 lg:blur-[70px]" />

            {/* Floating briefcase */}
            <div
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[24px] border border-cyan-400/20 bg-gradient-to-br from-slate-800/90 via-slate-900 to-indigo-950/90 shadow-[0_25px_70px_rgba(34,211,238,0.12)] lg:h-28 lg:w-28 lg:rounded-[28px]"
              style={floatingIconStyles}
            >
              <BriefcaseBusiness
                size={48}
                strokeWidth={1.3}
                className="text-cyan-300 lg:h-[54px] lg:w-[54px]"
              />

              <div className="absolute -right-4 -top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/30 bg-indigo-950 shadow-lg lg:-right-5 lg:-top-5 lg:h-11 lg:w-11 lg:rounded-2xl">
                <Code2 size={18} className="text-violet-300 lg:h-[22px] lg:w-[22px]" />
              </div>

              <div className="absolute -bottom-3 -left-4 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-900 shadow-lg lg:-bottom-4 lg:-left-5 lg:h-10 lg:w-10">
                <Sparkles size={16} className="text-cyan-300 lg:h-[18px] lg:w-[18px]" />
              </div>
            </div>

            {/* Decorative particles */}
            <span className="absolute left-8 top-5 h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

            <span
              className="absolute bottom-5 right-8 h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]"
              style={{ animationDelay: "1s" }}
            />

            <span
              className="absolute right-16 top-10 h-1.5 w-1.5 animate-ping rounded-full bg-blue-400/70"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>
      </Reveal>

      {/* ==================== PROFESSIONAL EXPERIENCE CARD ==================== */}

      <div className="space-y-5 sm:space-y-7">

        {portfolioData.experience.map((exp, idx) => (
          <Reveal
            key={`${exp.company}-${exp.period}-${idx}`}
            delay={idx * 180}
          >
            <Card elevation={0} sx={glassCardStyles}>
              <CardContent
                sx={{
                  p: { xs: 2, sm: 3.5, md: 4.5 },
                  "&:last-child": {
                    pb: { xs: 2, sm: 3.5, md: 4.5 },
                  },
                }}
              >
                <div className="relative z-10">

                  {/* Main header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex items-start gap-3 sm:gap-4">

                      {/* Company icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 shadow-[0_0_30px_rgba(34,211,238,0.04)] transition-transform duration-500 hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                        <Building2
                          size={22}
                          strokeWidth={1.6}
                          className="text-cyan-300 sm:h-7 sm:w-7"
                        />
                      </div>

                      <div className="min-w-0">

                        <Typography
                          component="h3"
                          sx={{
                            color: "#f8fafc",
                            fontSize: {
                              xs: "1rem",
                              sm: "1.25rem",
                              md: "1.4rem",
                            },
                            fontWeight: 800,
                            lineHeight: 1.4,
                            letterSpacing: "-0.035em",
                          }}
                        >
                          {exp.role}
                        </Typography>

                        <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                          <Typography
                            component="p"
                            sx={{
                              color: "#67e8f9",
                              fontSize: { xs: "0.78rem", sm: "0.9rem" },
                              fontWeight: 600,
                            }}
                          >
                            {exp.company}
                          </Typography>
                        </div>
                      </div>
                    </div>

                    {/* Employment period */}
                    <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                      <Chip
                        icon={<CalendarDays size={13} />}
                        label={exp.period}
                        size="small"
                        sx={dateChipStyles}
                      />

                      {/* Current position indicator */}
                      {idx === 0 && (
                        <div className="inline-flex items-center gap-2 px-2 py-1 text-[10px] font-medium text-emerald-400 sm:text-xs">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                          </span>
                          Currently Working
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project details */}
                  {exp.project && (
                    <div className="mt-5 rounded-xl border border-slate-700/50 bg-gradient-to-r from-slate-800/50 via-slate-900/60 to-indigo-950/30 p-3.5 sm:mt-6 sm:rounded-2xl sm:p-5">

                      <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 sm:h-7 sm:w-7">
                          <Code2 size={13} />
                        </div>

                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-[10px] sm:tracking-[0.2em]">
                          Featured Project
                        </p>
                      </div>

                      <p className="text-xs font-semibold leading-6 text-slate-200 sm:text-sm sm:leading-7">
                        {exp.project}
                      </p>
                    </div>
                  )}

                  {/* Location */}
                  {exp.location && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-900/40 px-2.5 py-1.5 text-[10px] text-slate-400 sm:mt-4 sm:px-3 sm:py-2 sm:text-xs">
                      <MapPin size={12} className="text-cyan-400 sm:h-[14px] sm:w-[14px]" />
                      {exp.location}
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mt-5 border-t border-slate-800/80 pt-4 sm:mt-7 sm:pt-6">

                    <div className="mb-4 flex items-center justify-between sm:mb-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px] sm:tracking-[0.2em]">
                        Key Contributions
                      </p>

                      <span className="rounded-full border border-slate-700/50 bg-slate-800/40 px-2 py-1 text-[9px] font-semibold text-slate-400 sm:px-2.5 sm:text-[10px]">
                        {String(exp.highlights.length).padStart(2, "0")} Highlights
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="group/highlight flex items-start gap-2.5 rounded-lg p-1.5 text-xs leading-5 text-slate-400 transition-all duration-300 hover:bg-slate-800/30 hover:text-slate-200 sm:gap-3 sm:p-2 sm:text-sm sm:leading-6"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-1 shrink-0 text-cyan-400/70 transition-transform duration-300 group-hover/highlight:scale-110 group-hover/highlight:text-cyan-300 sm:h-[17px] sm:w-[17px]"
                          />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom footer */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60 pt-4 sm:mt-6 sm:gap-3 sm:pt-5">

                    <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:gap-2 sm:text-[10px] sm:tracking-[0.12em]">
                      <Sparkles size={12} className="text-cyan-400/70 sm:h-[13px] sm:w-[13px]" />
                      Growth · Innovation · Impact
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-cyan-400/60 transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 sm:h-[17px] sm:w-[17px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* ==================== INTERNSHIP SECTION ==================== */}

      <Reveal>
        <div className="relative">

          {/* Section heading */}
          <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-400/15 to-indigo-500/10 text-violet-300 sm:h-12 sm:w-12 sm:rounded-2xl">
              <GraduationCap size={20} className="sm:h-6 sm:w-6" />
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-300 sm:gap-2 sm:px-3 sm:text-[10px]">
                <Sparkles size={11} />
                Early Career
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Internships
              </h3>

              <p className="mt-1.5 max-w-lg text-xs leading-5 text-slate-400 sm:mt-2 sm:text-sm sm:leading-6">
                Where I built my foundation, explored new technologies, and
                developed my passion for creating.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Internship cards */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">

        {portfolioData.internships.map((intern, idx) => (
          <Reveal
            key={`${intern.company}-${intern.period}-${idx}`}
            delay={idx * 180}
            className="h-full"
          >
            <Card elevation={0} sx={internshipCardStyles}>
              <CardContent
                sx={{
                  p: { xs: 2, sm: 3 },
                  "&:last-child": {
                    pb: { xs: 2, sm: 3 },
                  },
                }}
              >
                <div className="relative z-10 flex h-full flex-col gap-4 sm:gap-5">

                  {/* Card header */}
                  <div className="flex items-center justify-between gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/[0.08] text-violet-300 sm:h-11 sm:w-11 sm:rounded-xl">
                      <BriefcaseBusiness size={17} className="sm:h-5 sm:w-5" />
                    </div>

                    <Chip
                      icon={<CalendarDays size={12} />}
                      label={intern.period}
                      size="small"
                      sx={{
                        ...dateChipStyles,
                        height: "28px",
                        maxWidth: "75%",
                        background: "rgba(139,92,246,0.06)",
                        color: "#c4b5fd",
                        borderColor: "rgba(139,92,246,0.2)",
                        fontSize: "0.62rem",

                        "& .MuiChip-icon": {
                          color: "#a78bfa",
                          marginLeft: "7px",
                        },

                        "& .MuiChip-label": {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },
                      }}
                    />
                  </div>

                  {/* Role and company */}
                  <div>
                    <Typography
                      component="h4"
                      sx={{
                        color: "#f8fafc",
                        fontWeight: 800,
                        fontSize: {
                          xs: "0.9rem",
                          sm: "1rem",
                          md: "1.05rem",
                        },
                        lineHeight: 1.5,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {intern.role}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: "#c4b5fd",
                        mt: 0.75,
                        fontSize: { xs: "0.75rem", sm: "0.85rem" },
                        fontWeight: 600,
                      }}
                    >
                      {intern.company}
                    </Typography>
                  </div>

                  {/* Internship highlights */}
                  <div className="flex-1 border-t border-slate-800/80 pt-4 sm:pt-5">

                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:mb-4 sm:text-[10px] sm:tracking-[0.2em]">
                      Key Learnings
                    </p>

                    <ul className="space-y-2.5 sm:space-y-3">
                      {intern.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="group/learning flex items-start gap-2.5 text-[11px] leading-5 text-slate-400 transition-colors duration-300 hover:text-slate-200 sm:gap-3 sm:text-xs sm:leading-6"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/80 transition-transform duration-300 group-hover/learning:scale-150" />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-slate-800/50 pt-3.5 sm:pt-4">

                    <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-300/70 sm:text-[10px] sm:tracking-[0.12em]">
                      Experience & Learning
                    </span>

                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/15 bg-violet-400/[0.05] transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10 sm:h-7 sm:w-7">
                      <ArrowUpRight
                        size={12}
                        className="text-violet-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-[14px] sm:w-[14px]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
