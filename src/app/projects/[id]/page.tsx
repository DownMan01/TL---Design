import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  Twitter,
  Github,
  Users,
  Calendar,
  DollarSign,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProjectParams = {
  params: {
    id: string;
  };
};

export default function ProjectDetails({ params }: ProjectParams) {
  // In a real app, you would fetch project data based on params.id
  // This is mock data for demonstration
  const project = {
    id: params.id,
    name: params.id === "grass-protocol" ? "Grass Protocol" : "Monad Protocol",
    description:
      params.id === "grass-protocol"
        ? "Building the Data Layer of AI"
        : "Layer 1 blockchain",
    longDescription:
      params.id === "grass-protocol"
        ? "Grass Protocol is building the decentralized data layer for AI. By leveraging blockchain technology, Grass enables secure, transparent, and efficient data sharing between AI systems while ensuring data providers maintain ownership and are fairly compensated."
        : "Monad is a high-performance Layer 1 blockchain designed to address the scalability and performance limitations of existing blockchain networks. With its innovative consensus mechanism and optimized architecture, Monad delivers unprecedented transaction throughput and minimal latency.",
    chain: params.id === "grass-protocol" ? "Solana" : "Monad",
    cost: "FREE",
    backers:
      params.id === "grass-protocol"
        ? "Polychain, Tribe Capital, Coinbase Ventures, Solana Ventures"
        : "OKX Ventures, Paradigm, Dragonfly Capital, Electric Capital",
    stage: "Active",
    logo: params.id === "grass-protocol" ? "🌱" : "⚫",
    logoColor: params.id === "grass-protocol" ? "green" : "purple",
    website: "https://example.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    difficulty: params.id === "grass-protocol" ? "Beginner" : "Intermediate",
    estimatedReward: params.id === "grass-protocol" ? "$50-$500" : "$100-$1000",
    endDate: params.id === "grass-protocol" ? "June 30, 2024" : "July 15, 2024",
    participants: params.id === "grass-protocol" ? "45,678" : "32,145",

    timeline: [
      { date: "2023-01", event: "Project Launch" },
      { date: "2023-03", event: "Seed Funding Round" },
      { date: "2023-06", event: "Testnet Launch" },
      { date: "2023-09", event: "Mainnet Launch" },
      { date: "2023-12", event: "Token Generation Event" },
      { date: "2024-03", event: "Airdrop Distribution" },
    ],
    requirements: [
      "Complete KYC verification",
      "Interact with testnet",
      "Hold minimum token amount",
      "Participate in governance",
    ],
    image: `https://images.unsplash.com/photo-${params.id === "grass-protocol" ? "1579546929518-9e396f3cc809" : "1639322537228-f4d9d1a2f2c3"}?w=1200&q=80`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="text-lg font-bold">N</span>
            </div>
            <h1 className="text-xl font-bold">NoteDrop</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      <main className="container flex-1 px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={600}
                className="w-full object-cover h-[400px]"
              />
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-${project.logoColor}-100 dark:bg-${project.logoColor}-900`}
              >
                <span
                  className={`text-${project.logoColor}-600 dark:text-${project.logoColor}-300 text-2xl`}
                >
                  {project.logo}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{project.name}</h1>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">About</h2>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                How to Participate
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-medium mb-3">
                    Step 1: Create an Account
                  </h3>
                  <p className="text-muted-foreground">
                    Register on the official {project.name} website and complete
                    the KYC verification process to ensure eligibility for the
                    airdrop.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-medium mb-3">
                    Step 2: Connect Your Wallet
                  </h3>
                  <p className="text-muted-foreground">
                    Link your compatible crypto wallet to your account. Make
                    sure your wallet supports the {project.chain} network.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-medium mb-3">
                    Step 3: Complete Tasks
                  </h3>
                  <p className="text-muted-foreground">
                    Participate in the testnet, engage with the community, and
                    complete all required tasks to maximize your airdrop
                    allocation.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-medium mb-3">
                    Step 4: Claim Your Tokens
                  </h3>
                  <p className="text-muted-foreground">
                    Once the airdrop is live, return to the platform to claim
                    your tokens. Make sure to follow the official announcements
                    for the exact claim date.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Timeline</h2>
              <div className="relative border-l border-border pl-6">
                {project.timeline.map((item, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-border bg-background"></div>
                    <div className="text-sm text-muted-foreground">
                      {item.date}
                    </div>
                    <div className="mt-1 font-medium">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Airdrop Requirements
              </h2>
              <ul className="space-y-2">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <div className="mb-6 rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold">Airdrop Details</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Globe className="mr-2 h-4 w-4" />
                      Chain
                    </div>
                    <div>
                      <span
                        className={`rounded-full bg-${project.logoColor}-100 px-2 py-1 text-xs text-${project.logoColor}-800 dark:bg-${project.logoColor}-900 dark:text-${project.logoColor}-300`}
                      >
                        {project.chain}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Cost
                    </div>
                    <div>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                        {project.cost}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Award className="mr-2 h-4 w-4" />
                      Difficulty
                    </div>
                    <div className="text-sm">{project.difficulty}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Est. Reward
                    </div>
                    <div className="text-sm">{project.estimatedReward}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      End Date
                    </div>
                    <div className="text-sm">{project.endDate}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      Participants
                    </div>
                    <div className="text-sm">{project.participants}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-2 h-4 w-4" />
                      Stage
                    </div>
                    <div>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {project.stage}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <Button className="w-full">Register for Airdrop</Button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold">Links</h2>

                <div className="space-y-3">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href={project.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="flex items-center">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-border bg-muted/40">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <span className="text-lg font-bold">N</span>
                </div>
                <h2 className="text-xl font-bold">NoteDrop</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The ultimate platform for discovering and tracking Web3
                airdrops, projects, and protocols.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold">Stay Updated</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button size="sm" className="h-9">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} NoteDrop. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-discord"
                >
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M7.5 7.2A4.3 4.3 0 0 1 12 4a4.3 4.3 0 0 1 4.5 3.2 10 10 0 0 1 .5 3.8 10 10 0 0 1-.5 3.8A4.3 4.3 0 0 1 12 18a4.3 4.3 0 0 1-4.5-3.2 10 10 0 0 1-.5-3.8 10 10 0 0 1 .5-3.8z"></path>
                  <path d="M7 16.8c-.5-1.2-1-2.5-1-4.8s.5-3.6 1-4.8"></path>
                  <path d="M17 16.8c.5-1.2 1-2.5 1-4.8s-.5-3.6-1-4.8"></path>
                </svg>
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
