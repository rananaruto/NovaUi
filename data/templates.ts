import type { Template } from "@/types";

export const templates: Template[] = [
  {
    name: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description: "A modern analytics dashboard with stats cards, charts, and data tables.",
    category: "Dashboard",
    image: "",
    tags: ["dashboard", "analytics", "charts", "data"],
    featured: true,
    code: `<div className="min-h-screen bg-gray-950 p-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-gray-400 text-sm">Total Users</p>
      <p className="text-2xl font-bold text-white mt-1">24,521</p>
      <span className="text-emerald-400 text-xs">↑ 12.5%</span>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-gray-400 text-sm">Revenue</p>
      <p className="text-2xl font-bold text-white mt-1">$45,231</p>
      <span className="text-emerald-400 text-xs">↑ 8.2%</span>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-gray-400 text-sm">Conversion</p>
      <p className="text-2xl font-bold text-white mt-1">3.24%</p>
      <span className="text-red-400 text-xs">↓ 1.1%</span>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-gray-400 text-sm">Active Now</p>
      <p className="text-2xl font-bold text-white mt-1">1,429</p>
      <span className="text-emerald-400 text-xs">↑ 4.3%</span>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 h-64 flex items-center justify-center text-gray-500">Chart Area</div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-64 flex items-center justify-center text-gray-500">Activity Feed</div>
  </div>
</div>`,
  },
  {
    name: "SaaS Landing Page",
    slug: "saas-landing",
    description: "A stunning SaaS landing page with hero, features, pricing, and CTA sections.",
    category: "Landing",
    image: "",
    tags: ["landing", "saas", "marketing", "hero"],
    featured: true,
    code: `<div className="min-h-screen bg-gray-950">
  <section className="relative py-24 text-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/30 rounded-full blur-[128px]" />
    <div className="relative z-10 max-w-3xl mx-auto px-6">
      <span className="text-violet-400 text-sm font-semibold uppercase tracking-wider">Introducing Nova</span>
      <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">Build faster, ship better</h1>
      <p className="text-xl text-gray-400 mt-6">The modern toolkit for building beautiful React applications.</p>
      <div className="flex gap-4 justify-center mt-8">
        <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold">Get Started</button>
        <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold border border-white/10">View Docs</button>
      </div>
    </div>
  </section>
  <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-3xl">⚡</span>
      <h3 className="text-white font-semibold mt-3">Lightning Fast</h3>
      <p className="text-gray-400 text-sm mt-2">Optimized for performance.</p>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-3xl">🎨</span>
      <h3 className="text-white font-semibold mt-3">Beautiful Design</h3>
      <p className="text-gray-400 text-sm mt-2">Premium aesthetics built in.</p>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <span className="text-3xl">🔧</span>
      <h3 className="text-white font-semibold mt-3">Fully Customizable</h3>
      <p className="text-gray-400 text-sm mt-2">Tailor every component.</p>
    </div>
  </section>
</div>`,
  },
  {
    name: "Developer Portfolio",
    slug: "developer-portfolio",
    description: "A sleek developer portfolio with about, projects, and contact sections.",
    category: "Portfolio",
    image: "",
    tags: ["portfolio", "developer", "personal", "projects"],
    featured: false,
    code: `<div className="min-h-screen bg-gray-950 text-white">
  <section className="py-24 text-center">
    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-4xl ring-4 ring-violet-500/20">👨‍💻</div>
    <h1 className="text-4xl font-bold mt-6">Alex Chen</h1>
    <p className="text-gray-400 mt-2">Full-Stack Developer & UI Designer</p>
    <div className="flex justify-center gap-4 mt-6">
      <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">React</span>
      <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">TypeScript</span>
      <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">Next.js</span>
    </div>
  </section>
  <section className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="font-semibold">Nova UI</h3>
      <p className="text-gray-400 text-sm mt-2">Component library with 50+ components.</p>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="font-semibold">Task Flow</h3>
      <p className="text-gray-400 text-sm mt-2">Project management tool built with Next.js.</p>
    </div>
  </section>
</div>`,
  },
  {
    name: "Music App",
    slug: "music-app",
    description: "A Spotify-inspired music app interface with player and playlists.",
    category: "App",
    image: "",
    tags: ["music", "app", "player", "spotify"],
    featured: true,
    code: `<div className="min-h-screen bg-gray-950 flex">
  <aside className="w-64 bg-black/40 border-r border-white/10 p-6">
    <h2 className="text-lg font-bold text-white mb-6">🎵 Nova Music</h2>
    <nav className="space-y-2">
      <a className="flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-xl text-sm">🏠 Home</a>
      <a className="flex items-center gap-3 text-gray-400 px-4 py-2 rounded-xl text-sm hover:text-white">🔍 Search</a>
      <a className="flex items-center gap-3 text-gray-400 px-4 py-2 rounded-xl text-sm hover:text-white">📚 Library</a>
    </nav>
    <h3 className="text-sm font-semibold text-gray-500 uppercase mt-8 mb-3">Playlists</h3>
    <div className="space-y-2 text-sm text-gray-400">
      <p className="hover:text-white cursor-pointer">Chill Vibes</p>
      <p className="hover:text-white cursor-pointer">Workout Mix</p>
      <p className="hover:text-white cursor-pointer">Focus Mode</p>
    </div>
  </aside>
  <main className="flex-1 p-6">
    <h1 className="text-3xl font-bold text-white mb-6">Good Evening</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 cursor-pointer">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-2xl">🎧</div>
        <div><p className="text-white font-semibold">Daily Mix 1</p><p className="text-gray-400 text-xs">Your personalized mix</p></div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 cursor-pointer">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-2xl">🌊</div>
        <div><p className="text-white font-semibold">Lo-Fi Beats</p><p className="text-gray-400 text-xs">Beats to relax to</p></div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 cursor-pointer">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-amber-600 to-red-600 flex items-center justify-center text-2xl">🔥</div>
        <div><p className="text-white font-semibold">Top Hits</p><p className="text-gray-400 text-xs">Trending worldwide</p></div>
      </div>
    </div>
  </main>
</div>`,
  },
  {
    name: "Finance Dashboard",
    slug: "finance-dashboard",
    description: "A fintech dashboard with portfolio overview, transactions, and market data.",
    category: "Dashboard",
    image: "",
    tags: ["finance", "dashboard", "banking", "fintech"],
    featured: false,
    code: `<div className="min-h-screen bg-gray-950 p-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Finance Dashboard</h1>
        <p className="text-gray-400 text-sm">Welcome back, Alex</p>
      </div>
      <button className="px-5 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-sm font-semibold">+ Add Card</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-6">
        <p className="text-white/80 text-sm">Total Balance</p>
        <p className="text-3xl font-bold text-white mt-2">$128,430</p>
        <p className="text-white/60 text-sm mt-4">•••• 4532</p>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-gray-400 text-sm">Income</p>
        <p className="text-2xl font-bold text-white mt-2">$8,420</p>
        <span className="text-emerald-400 text-xs">↑ 12%</span>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-gray-400 text-sm">Expenses</p>
        <p className="text-2xl font-bold text-white mt-2">$3,240</p>
        <span className="text-red-400 text-xs">↑ 4%</span>
      </div>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2 border-b border-white/5">
          <div className="flex items-center gap-3"><span className="text-xl">🛒</span><div><p className="text-white text-sm">Amazon</p><p className="text-gray-500 text-xs">Shopping</p></div></div>
          <span className="text-red-400 text-sm">-$124.00</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-white/5">
          <div className="flex items-center gap-3"><span className="text-xl">💰</span><div><p className="text-white text-sm">Salary</p><p className="text-gray-500 text-xs">Income</p></div></div>
          <span className="text-emerald-400 text-sm">+$8,420.00</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3"><span className="text-xl">☕</span><div><p className="text-white text-sm">Starbucks</p><p className="text-gray-500 text-xs">Food</p></div></div>
          <span className="text-red-400 text-sm">-$5.40</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
