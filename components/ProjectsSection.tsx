
"use client";

import { portfolioData } from "@/data/portfolioData";
import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const projectCardStyles = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#090d16",
  backgroundImage: "none",
  color: "#fff",
  border: "1px solid #1e293b",
  borderRadius: "12px",
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: "rgba(6, 182, 212, 0.5)",
    boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.15)",
    transform: "translateY(-4px)",
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="flex items-center gap-2 border-b border-slate-800 pb-3 text-2xl font-bold text-white">
        <Code className="text-cyan-400" size={24} />
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {portfolioData.projects.map((project, idx) => (
          <Card
            key={project.title || idx}
            elevation={0}
            sx={projectCardStyles}
          >
            <CardContent
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "space-between",
                "&:last-child": {
                  pb: 3,
                },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "1.1rem",
                    }}
                  >
                    {project.title}
                  </Typography>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      className="shrink-0"
                    >
                      <ExternalLink
                        size={18}
                        className="cursor-pointer text-slate-500 transition-colors hover:text-cyan-400"
                      />
                    </a>
                  )}
                </Box>

                <Typography
                  component="p"
                  variant="body2"
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  pt: 3,
                }}
              >
                {project.tech.map((technology, index) => (
                  <span
                    key={`${project.title}-${technology}-${index}`}
                    className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
