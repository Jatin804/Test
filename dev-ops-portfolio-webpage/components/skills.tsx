"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      "AWS (EC2, S3, Lambda, EKS, RDS)",
      "Google Cloud Platform (GKE, Cloud Run)",
      "Microsoft Azure",
      "DigitalOcean",
    ],
  },
  {
    title: "Container & Orchestration",
    skills: [
      "Kubernetes & Helm Charts",
      "Docker & Docker Compose",
      "Istio Service Mesh",
      "Container Registry Management",
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitHub Actions & GitLab CI", "Jenkins Pipelines", "ArgoCD & GitOps", "Terraform & Ansible"],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      "Prometheus & Grafana",
      "Datadog & New Relic",
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "CloudWatch & Stackdriver",
    ],
  },
  {
    title: "Programming & Scripting",
    skills: ["Python & Bash Scripting", "Go for CLI Tools", "YAML & JSON Configuration", "Infrastructure as Code"],
  },
  {
    title: "Security & Networking",
    skills: [
      "VPC & Network Security",
      "IAM & RBAC Policies",
      "Secrets Management (Vault)",
      "SSL/TLS & Certificate Management",
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm font-mono text-foreground mb-2 uppercase tracking-wider">{">"} Skills</h2>
          <div className="glow-line w-24 mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-foreground/30 hover:shadow-xl transition-all duration-300"
                style={{
                  transitionDelay: `${catIndex * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Category title with decorative line */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 bg-foreground rounded-full" />
                  <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills as bullet points */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                      style={{
                        transitionDelay: `${catIndex * 100 + skillIndex * 50}ms`,
                      }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-muted-foreground/50 rounded-full shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
