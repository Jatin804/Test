"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"

const projects = [
  {
    title: "K8s Auto-Scaler",
    description:
      "Custom Kubernetes autoscaler that uses ML predictions to proactively scale workloads based on traffic patterns, reducing costs by 35%.",
    technologies: ["Go", "Kubernetes", "Python", "TensorFlow"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Terraform Cloud Modules",
    description:
      "Open-source collection of production-ready Terraform modules for AWS, GCP, and Azure with security best practices baked in.",
    technologies: ["Terraform", "AWS", "GCP", "Azure"],
    github: "#",
    featured: true,
  },
  {
    title: "CI/CD Pipeline Generator",
    description:
      "CLI tool that generates optimized CI/CD pipelines for various platforms based on project structure and requirements.",
    technologies: ["TypeScript", "Node.js", "GitHub Actions"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Infrastructure Cost Analyzer",
    description: "Dashboard for analyzing and optimizing cloud infrastructure costs across multiple providers.",
    technologies: ["React", "Python", "AWS", "GCP"],
    github: "#",
  },
  {
    title: "GitOps Starter Kit",
    description: "Complete GitOps setup with ArgoCD, sealed secrets, and monitoring for Kubernetes clusters.",
    technologies: ["Kubernetes", "ArgoCD", "Helm"],
    github: "#",
  },
  {
    title: "Log Aggregation Tool",
    description: "Lightweight log aggregation and analysis tool for distributed systems.",
    technologies: ["Go", "Elasticsearch", "Kafka"],
    github: "#",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm font-mono text-foreground mb-2 uppercase tracking-wider">{">"} Projects</h2>
          <div className="glow-line w-24 mb-12" />

          {/* Featured Projects */}
          <div className="space-y-6 sm:space-y-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                    <Folder className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <h3 className="text-lg font-semibold text-foreground mb-6">Other Noteworthy Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-8 h-8 text-foreground" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
