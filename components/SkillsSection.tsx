
"use client";

import { portfolioData } from "@/data/portfolioData";
import { Layers, Code2, Database, Boxes, Wrench } from "lucide-react";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";

const skillGroups = [
  {
    title: "Core Languages & Frameworks",
    description: "Languages and libraries used to build applications.",
    icon: Code2,
    color: "#67e8f9",
    borderColor: "rgba(34, 211, 238, 0.4)",
    skills: [
      ...portfolioData.skills.languages,
      ...portfolioData.skills.frameworks,
    ],
  },
  {
    title: "ERP & Domain Knowledge",
    description: "Enterprise systems and business workflows.",
    icon: Database,
    color: "#c4b5fd",
    borderColor: "rgba(167, 139, 250, 0.4)",
    skills: portfolioData.skills.domain,
  },
  {
    title: "Concepts & Architecture",
    description: "Engineering principles and application design.",
    icon: Boxes,
    color: "#6ee7b7",
    borderColor: "rgba(52, 211, 153, 0.4)",
    skills: portfolioData.skills.concepts,
  },
  {
    title: "Tools & Practices",
    description: "Development tools and everyday workflows.",
    icon: Wrench,
    color: "#fcd34d",
    borderColor: "rgba(251, 191, 36, 0.4)",
    skills: portfolioData.skills.tools,
  },
];

const cardStyles = {
  height: "100%",
  backgroundColor: "rgba(9, 13, 22, 0.85)",
  backgroundImage: "none",
  color: "#f8fafc",
  border: "1px solid rgba(51, 65, 85, 0.7)",
  borderRadius: "18px",
  overflow: "hidden",
  transition:
    "transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "rgba(34, 211, 238, 0.4)",
    boxShadow: "0 16px 35px rgba(6, 182, 212, 0.08)",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      {/* Section heading */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300 transition duration-300 hover:rotate-6 hover:scale-110">
          <Layers size={24} />
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Technical Profile
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Technical Expertise
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Technologies, tools, and concepts I work with.
          </p>
        </div>
      </div>

      {/* Skills cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <Card
              key={group.title}
              elevation={0}
              sx={{
                ...cardStyles,

                "&:hover": {
                  ...cardStyles["&:hover"],
                  borderColor: group.borderColor,
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  "&:last-child": {
                    pb: { xs: 2.5, sm: 3 },
                  },
                }}
              >
                {/* Card heading */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.75,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 42,
                      height: 42,
                      flexShrink: 0,
                      borderRadius: "12px",
                      backgroundColor: `${group.color}12`,
                      border: `1px solid ${group.color}30`,
                      color: group.color,
                    }}
                  >
                    <Icon size={21} />
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      component="h3"
                      sx={{
                        color: group.color,
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {group.title}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: "#64748b",
                        fontSize: "0.75rem",
                        mt: 0.5,
                        lineHeight: 1.6,
                      }}
                    >
                      {group.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Skill chips */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {group.skills.map((skill, idx) => (
                    <Chip
                      key={`${group.title}-${skill}-${idx}`}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(30, 41, 59, 0.75)",
                        color: "#cbd5e1",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        height: "30px",
                        borderRadius: "8px",
                        border: "1px solid #334155",
                        transition:
                          "all 200ms ease",

                        "&:hover": {
                          backgroundColor: `${group.color}15`,
                          borderColor: `${group.color}70`,
                          color: group.color,
                          transform: "translateY(-2px)",
                        },

                        "& .MuiChip-label": {
                          px: 1.25,
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Footer */}
                <Box
                  sx={{
                    mt: 3,
                    pt: 2,
                    borderTop: "1px solid rgba(51, 65, 85, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: group.color,
                      boxShadow: `0 0 10px ${group.color}70`,
                    }}
                  />

                  <Typography
                    component="span"
                    sx={{
                      color: "#64748b",
                      fontSize: "0.7rem",
                    }}
                  >
                    {group.skills.length} skills
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
