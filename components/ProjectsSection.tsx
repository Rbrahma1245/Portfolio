import { portfolioData } from "@/data/portfolioData";
import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-2xl font-bold border-b border-slate-800 pb-3 flex items-center gap-2 text-white">
        <Code className="text-cyan-400" size={24} /> Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.projects.map((project, idx) => (
          <Card 
            key={idx}
            sx={{ 
              backgroundColor: '#090d16', 
              border: '1px solid #1e293b', 
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(6, 182, 212, 0.5)',
                boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.15)'
              }
            }}
          >
            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <Box className="space-y-3">
                <div className="flex justify-between items-center">
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem' }}>
                    {project.title}
                  </Typography>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink
                      size={18}
                      className="text-slate-500 hover:text-cyan-400 transition cursor-pointer"
                    />
                  </a>
                </div>
                <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>
                  {project.description}
                </Typography>
              </Box>

              <div className="flex flex-wrap gap-2 pt-6">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-cyan-500/10 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-500/20 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}