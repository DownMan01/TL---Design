import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border">
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
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Web3 Airdrop Database
          </h1>
          <p className="text-muted-foreground">
            Discover and track the latest blockchain projects, airdrops, and
            protocols. Stay updated with comprehensive information about Web3
            innovations.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <div className="w-40">
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Chain (All)</option>
                <option>Ethereum</option>
                <option>Solana</option>
                <option>Monad</option>
              </select>
            </div>
            <div className="w-40">
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Cost (All)</option>
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>
            <div className="w-40">
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Stage (All)</option>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Ended</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-4 pr-4 font-medium">Project</th>
                <th className="py-4 pr-4 font-medium">About</th>
                <th className="py-4 pr-4 font-medium">Chain</th>
                <th className="py-4 pr-4 font-medium">Cost</th>
                <th className="py-4 pr-4 font-medium">Backers</th>
                <th className="py-4 pr-4 font-medium">Stage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/grass-protocol"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <span className="text-green-600 dark:text-green-300">
                        🌱
                      </span>
                    </div>
                    <span className="font-medium">Grass Protocol</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Building the Data Layer of AI
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    Solana
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Polychain, Tribe Capital, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/monad-protocol"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                      <span className="text-purple-600 dark:text-purple-300">
                        ⚫
                      </span>
                    </div>
                    <span className="font-medium">Monad Protocol</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Layer 1 blockchain
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    Monad
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  OKX Ventures, Paradigm, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/celestia"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <span className="text-blue-600 dark:text-blue-300">
                        🌌
                      </span>
                    </div>
                    <span className="font-medium">Celestia</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Modular blockchain network
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Celestia
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Bain Capital, Polychain, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/sui"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900">
                      <span className="text-cyan-600 dark:text-cyan-300">
                        🌊
                      </span>
                    </div>
                    <span className="font-medium">Sui Network</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Layer 1 with horizontal scaling
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                    Sui
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  a16z, Coinbase Ventures, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/arbitrum"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                      <span className="text-indigo-600 dark:text-indigo-300">
                        ⚖️
                      </span>
                    </div>
                    <span className="font-medium">Arbitrum Nova</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Ethereum L2 scaling solution
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    PAID
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Offchain Labs, Consensys, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Upcoming
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/starknet"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <span className="text-gray-600 dark:text-gray-300">
                        ⭐
                      </span>
                    </div>
                    <span className="font-medium">StarkNet</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  ZK rollup for Ethereum
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Paradigm, Sequoia Capital, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/zksync"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900">
                      <span className="text-pink-600 dark:text-pink-300">
                        🔐
                      </span>
                    </div>
                    <span className="font-medium">zkSync Era</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  ZK rollup scaling solution
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  a16z, BitMEX, Binance, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/linea"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <span className="text-blue-600 dark:text-blue-300">
                        📈
                      </span>
                    </div>
                    <span className="font-medium">Linea</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Consensys ZK rollup
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Consensys, MetaMask, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/base"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <span className="text-blue-600 dark:text-blue-300">
                        🔷
                      </span>
                    </div>
                    <span className="font-medium">Base</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Coinbase L2 solution
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Coinbase, Optimism, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                    Ended
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/scroll"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                      <span className="text-amber-600 dark:text-amber-300">
                        📜
                      </span>
                    </div>
                    <span className="font-medium">Scroll</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  EVM-compatible ZK rollup
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Polychain, Sequoia, Bain Capital, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Upcoming
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/taiko"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                      <span className="text-red-600 dark:text-red-300">🥁</span>
                    </div>
                    <span className="font-medium">Taiko</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Type 1 ZK-EVM rollup
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  IOSG Ventures, Coinbase Ventures, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors">
                <td className="py-4 pr-4">
                  <Link
                    href="/projects/mantle"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
                      <span className="text-orange-600 dark:text-orange-300">
                        🔥
                      </span>
                    </div>
                    <span className="font-medium">Mantle</span>
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  Modular Ethereum L2 solution
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Ethereum
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-300">
                    FREE
                  </span>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">
                  BitDAO, Pantera Capital, etc.
                </td>
                <td className="py-4">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            <span className="sr-only">Go to first page</span>
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
              className="h-4 w-4"
            >
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            <span className="sr-only">Go to previous page</span>
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
              className="h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-input bg-primary text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            1
          </button>
          <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            2
          </button>
          <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            3
          </button>
          <span className="mx-1 text-sm text-muted-foreground">...</span>
          <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            8
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            <span className="sr-only">Go to next page</span>
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
              className="h-4 w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            <span className="sr-only">Go to last page</span>
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
              className="h-4 w-4"
            >
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">12</span> of{" "}
          <span className="font-medium">48</span> projects
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
                <Input placeholder="Enter your email" className="h-9" />
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
