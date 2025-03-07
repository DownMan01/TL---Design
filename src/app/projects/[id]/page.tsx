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
  const projectData = {
    "grass-protocol": {
      id: "grass-protocol",
      name: "Grass Protocol",
      description: "Building the Data Layer of AI",
      longDescription: "Grass Protocol is building the decentralized data layer for AI. By leveraging blockchain technology, Grass enables secure, transparent, and efficient data sharing between AI systems while ensuring data providers maintain ownership and are fairly compensated.",
      chain: "Solana",
      cost: "FREE",
      backers: "Polychain, Tribe Capital, Coinbase Ventures, Solana Ventures",
      stage: "Active",
      logo: "🌱",
      logoColor: "green",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Beginner",
      estimatedReward: "$50-$500",
      endDate: "June 30, 2024",
      participants: "45,678",
    },
    "monad-protocol": {
      id: "monad-protocol",
      name: "Monad Protocol",
      description: "Layer 1 blockchain",
      longDescription: "Monad is a high-performance Layer 1 blockchain designed to address the scalability and performance limitations of existing blockchain networks. With its innovative consensus mechanism and optimized architecture, Monad delivers unprecedented transaction throughput and minimal latency.",
      chain: "Monad",
      cost: "FREE",
      backers: "OKX Ventures, Paradigm, Dragonfly Capital, Electric Capital",
      stage: "Active",
      logo: "⚫",
      logoColor: "purple",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Intermediate",
      estimatedReward: "$100-$1000",
      endDate: "July 15, 2024",
      participants: "32,145",
    },
    "celestia": {
      id: "celestia",
      name: "Celestia",
      description: "Modular blockchain network",
      longDescription: "Celestia is the first modular blockchain network that enables anyone to easily deploy their own blockchain with minimal overhead. By decoupling consensus from execution, Celestia allows developers to focus on building applications without worrying about the underlying consensus layer.",
      chain: "Celestia",
      cost: "FREE",
      backers: "Bain Capital, Polychain, Delphi Digital, Placeholder",
      stage: "Active",
      logo: "🌌",
      logoColor: "blue",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Intermediate",
      estimatedReward: "$75-$750",
      endDate: "August 5, 2024",
      participants: "38,921",
    },
    "sui": {
      id: "sui",
      name: "Sui Network",
      description: "Layer 1 with horizontal scaling",
      longDescription: "Sui is a Layer 1 blockchain designed from the ground up to enable creators and developers to build experiences that cater to the next billion users in web3. Sui's horizontally scalable architecture enables low-latency, high-throughput transactions with minimal gas fees.",
      chain: "Sui",
      cost: "FREE",
      backers: "a16z, Coinbase Ventures, Jump Crypto, FTX Ventures",
      stage: "Active",
      logo: "🌊",
      logoColor: "cyan",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Beginner",
      estimatedReward: "$50-$600",
      endDate: "July 25, 2024",
      participants: "41,532",
    },
    "arbitrum": {
      id: "arbitrum",
      name: "Arbitrum Nova",
      description: "Ethereum L2 scaling solution",
      longDescription: "Arbitrum Nova is a Layer 2 scaling solution for Ethereum that uses optimistic rollups to achieve high throughput and low fees. Nova is designed for gaming and social applications, offering a balance of security and cost-effectiveness for high-volume, low-value transactions.",
      chain: "Ethereum",
      cost: "PAID",
      backers: "Offchain Labs, Consensys, Coinbase Ventures",
      stage: "Upcoming",
      logo: "⚖️",
      logoColor: "indigo",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Advanced",
      estimatedReward: "$200-$2000",
      endDate: "September 10, 2024",
      participants: "28,765",
    },
    "starknet": {
      id: "starknet",
      name: "StarkNet",
      description: "ZK rollup for Ethereum",
      longDescription: "StarkNet is a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum. It enables dApps to achieve unlimited scale for their computation without compromising Ethereum's security and decentralization. StarkNet uses STARK proofs to ensure transaction validity.",
      chain: "Ethereum",
      cost: "FREE",
      backers: "Paradigm, Sequoia Capital, Founders Fund",
      stage: "Active",
      logo: "⭐",
      logoColor: "gray",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Intermediate",
      estimatedReward: "$100-$1200",
      endDate: "August 15, 2024",
      participants: "35,421",
    },
    "zksync": {
      id: "zksync",
      name: "zkSync Era",
      description: "ZK rollup scaling solution",
      longDescription: "zkSync Era is a user-centric, Ethereum-native ZK rollup platform that uses zero-knowledge proofs to scale Ethereum without compromising on security or decentralization. Era supports EVM compatibility for easy porting of Ethereum applications and uses zkEVM to ensure transaction validity.",
      chain: "Ethereum",
      cost: "FREE",
      backers: "a16z, BitMEX, Binance, Blockchain Capital",
      stage: "Active",
      logo: "🔐",
      logoColor: "pink",
      website: "https://example.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      difficulty: "Intermediate",
      estimatedReward: "$80-$900",
      endDate: "July 20, 2024",
      participants: "39,876",
    }
  };
  
  // Get project data or use default if not found
  const defaultProject = {
    id: params.id,
    name: params.id,
    description: "Blockchain project",
    longDescription: "A blockchain project with innovative features and solutions.",
    chain: "Ethereum",
    cost: "FREE",
    backers: "Various venture capital firms",
    stage: "Active",
    logo: "🔷",
    logoColor: "blue",
    website: "https://example.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    difficulty: "Intermediate",
    estimatedReward: "$50-$500",
    endDate: "December 31, 2024",
    participants: "10,000+",
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
  
  // Merge project data with default values
  const project = projectData[params.id] ? {
    ...defaultProject,
    ...projectData[params.id],
  } : defaultProject;
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

        <div className="max-w-4xl mx-auto">
          {/* Hero section with banner image and profile */}
          <div className="mb-8 bg-card rounded-xl border border-border overflow-hidden shadow-md">
            {/* Banner image */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={400}
                className="w-full object-cover h-[250px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70"></div>
            </div>

            {/* Profile section with avatar overlapping the banner */}
            <div className="relative px-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 mb-6">
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full bg-${project.logoColor}-100 dark:bg-${project.logoColor}-900 shadow-lg border-4 border-card`}
                >
                  <span
                    className={`text-${project.logoColor}-600 dark:text-${project.logoColor}-300 text-4xl`}
                  >
                    {project.logo}
                  </span>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold">{project.name}</h1>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-colors shadow-md">
                  Register for Airdrop
                </Button>
              </div>

              {/* Project description */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {project.longDescription}
                </p>
              </div>

              {/* Airdrop stats in card grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Globe className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Chain</div>
                  </div>
                  <div className="font-medium">{project.chain}</div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <DollarSign className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Cost</div>
                  </div>
                  <div className="font-medium">{project.cost}</div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Award className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Difficulty</div>
                  </div>
                  <div className="font-medium">{project.difficulty}</div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <DollarSign className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Est. Reward</div>
                  </div>
                  <div className="font-medium">{project.estimatedReward}</div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">End Date</div>
                  </div>
                  <div className="font-medium">{project.endDate}</div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Participants</div>
                  </div>
                  <div className="font-medium">{project.participants}</div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Stage</div>
                  </div>
                  <div>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {project.stage}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card/50 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Globe className="mr-2 h-4 w-4 text-primary" />
                    <div className="text-sm font-medium">Links</div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                    <a
                      href={project.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Combined How to Participate & Requirements section */}
          <div className="mb-8 bg-card rounded-xl border border-border p-6 shadow-md">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-semibold">How to Participate</h2>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Steps to participate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg border border-border bg-card/50 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-medium">Create an Account</h3>
                </div>
                <p className="text-muted-foreground">
                  Register on the official {project.name} website and complete
                  the KYC verification process to ensure eligibility for the
                  airdrop.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-medium">Connect Your Wallet</h3>
                </div>
                <p className="text-muted-foreground">
                  Link your compatible crypto wallet to your account. Make sure
                  your wallet supports the {project.chain} network.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-medium">Complete Tasks</h3>
                </div>
                <p className="text-muted-foreground">
                  Participate in the testnet, engage with the community, and
                  complete all required tasks to maximize your airdrop
                  allocation.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card/50 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mr-3">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-medium">Claim Your Tokens</h3>
                </div>
                <p className="text-muted-foreground">
                  Once the airdrop is live, return to the platform to claim your
                  tokens. Make sure to follow the official announcements for the
                  exact claim date.
                </p>
              </div>
            </div>

            {/* Requirements section */}
            <div className="w-full h-px bg-border my-6"></div>
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg border border-border bg-card/50 hover:shadow-sm transition-shadow"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mr-3">
                    <span className="text-primary">{index + 1}</span>
                  </div>
                  <span>{req}</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-8 text-center">
              <Button className="px-8 py-6 h-auto text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all">
                Register for Airdrop
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Join {project.participants} participants already registered
              </p>
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
