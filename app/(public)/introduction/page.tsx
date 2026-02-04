import { Code2, Layers, FileText, Zap, Bot, Globe } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                About Me
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Building{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Intelligent Systems
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              I&apos;m Rajat Kumar Thakur, a Software Engineer passionate about AI/ML, LLMs, and
              building intelligent systems. Currently working at Cableteque Corporation on
              scalable search agents and agentic workflows.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                Background
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Education & Experience
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m pursuing my B.Tech in Computer Science and Engineering at the Indian
                Institute of Information Technology Vadodara with a CGPA of 9.46. My academic
                journey has been complemented by hands-on industry experience.
              </p>

              <p>
                Currently, I&apos;m a Software Engineer Intern at Cableteque Corporation (California, USA)
                where I&apos;ve engineered scalable search agents using MCP servers achieving 97.6%
                accuracy, and collaborated on deploying agentic models to production.
              </p>

              <p>
                Previously, I interned at IIT Gandhinagar where I fine-tuned language models for
                code generation on resource-constrained devices, achieving StarCoder inference in
                under 3 seconds and reducing inference latency by 46.3% for TinyLlama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Skills & Expertise
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Proficiencies
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "AI/ML & LLMs",
                description:
                  "Expertise in RAG pipelines, fine-tuning, agentic workflows, vector databases, and working with open-source LLMs like Llama 3, Mistral, and Gemma.",
              },
              {
                icon: Code2,
                title: "Full-Stack Development",
                description:
                  "Building applications with Next.js, React, FastAPI, and modern web technologies. From frontend to backend.",
              },
              {
                icon: Layers,
                title: "Computer Vision",
                description:
                  "Research in pose estimation, facial expression detection, and image processing. Paper accepted at PREMI '25 conference.",
              },
              {
                icon: Zap,
                title: "Model Optimization",
                description:
                  "Optimizing language models for resource-constrained devices. Achieved 46.3% latency reduction for TinyLlama.",
              },
              {
                icon: FileText,
                title: "Research & Publications",
                description:
                  "Published research on efficient pose estimation algorithms. Actively contributing to academic conferences.",
              },
              {
                icon: Globe,
                title: "Cloud & DevOps",
                description:
                  "Experience with GCP, AWS, Vertex AI, Docker, and GitHub Actions for deploying production-ready AI systems.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
