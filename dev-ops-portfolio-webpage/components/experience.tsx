"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior DevOps Engineer",
    company: "TechFlow Inc.",
    url: "#",
    description:
      "Lead cloud infrastructure initiatives serving 50M+ users. Architected multi-region Kubernetes clusters reducing downtime by 99.9%. Implemented GitOps workflows cutting deployment time by 80%.",
    technologies: ["AWS", "Kubernetes", "Terraform", "ArgoCD", "Prometheus"],
  },
  {
    period: "2019 — 2022",
    title: "DevOps Engineer",
    company: "CloudScale Solutions",
    url: "#",
    description:
      "Built and maintained CI/CD pipelines for 200+ microservices. Migrated legacy infrastructure to containerized workloads. Reduced infrastructure costs by 40% through optimization.",
    technologies: ["GCP", "Docker", "Jenkins", "Ansible", "Datadog"],
  },
  {
    period: "2017 — 2019",
    title: "Cloud Infrastructure Engineer",
    company: "DataSphere",
    url: "#",
    description:
      "Designed scalable data processing pipelines on AWS. Implemented infrastructure as code practices. Managed production environments for real-time analytics platform.",
    technologies: ["AWS", "Docker", "CloudFormation", "ELK Stack"],
  },
  {
    period: "2015 — 2017",
    title: "Systems Administrator",
    company: "NetSecure Corp",
    url: "#",
    description:
      "Managed hybrid cloud infrastructure. Automated server provisioning reducing setup time by 70%. Implemented monitoring and alerting systems.",
    technologies: ["Linux", "Python", "Bash", "Nagios", "VMware"],
  },
]

export function Experience() {
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm font-mono text-foreground mb-2 uppercase tracking-wider">{">"} Experience</h2>
          <div className="glow-line w-24 mb-12" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-[200px_1fr] gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                    {exp.title} ·{" "}
                    <a href={exp.url} className="inline-flex items-center gap-1 hover:underline">
                      {exp.company}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-foreground bg-secondary rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
