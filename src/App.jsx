// DISCORD ROLE SYNC BACKEND EXAMPLE
// Install:
// npm install discord.js passport passport-discord express-session dotenv express cors
//
// Example role sync middleware:
//
// const STAFF_ROLE_ID = 'YOUR_STAFF_ROLE_ID';
// const ADMIN_ROLE_ID = 'YOUR_ADMIN_ROLE_ID';
//
// async function syncDiscordRoles(req, res, next) {
//   if (!req.user) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//
//   const guild = await client.guilds.fetch('YOUR_GUILD_ID');
//   const member = await guild.members.fetch(req.user.id);
//
//   req.user.isStaff = member.roles.cache.has(STAFF_ROLE_ID);
//   req.user.isAdmin = member.roles.cache.has(ADMIN_ROLE_ID);
//
//   next();
// }

export default function SurfersParadiseRoleplayPortal() {
  const loginWithDiscord = () => {
    window.location.href = 'http://localhost:3001/auth/discord';
  };

  const sessions = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950/95 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
              S
            </div>

            <div>
              <h1 className="text-white font-bold text-lg leading-none">
                Surfers Paradise Roleplay
              </h1>
              <p className="text-blue-200 text-xs">Community Portal</p>
            </div>
          </div>

          <nav className="flex gap-3">
            {['Home', 'Login', 'Ban Appeal', 'Applications'].map((item, index) => (
              <button
                key={item}
                className={`px-5 py-2 rounded-xl border transition-all font-semibold ${
                  index === 0
                    ? 'bg-white text-blue-950 border-white'
                    : 'bg-transparent text-white border-white/20 hover:bg-white hover:text-blue-950'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-blue-950/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-200 text-sm font-bold mb-6">
              Portal Access
            </p>

            <h2 className="text-7xl md:text-8xl font-black text-white leading-none drop-shadow-2xl">
              SURFERS
            </h2>

            <h3 className="text-5xl md:text-6xl font-extrabold text-white/90 mt-2 leading-tight">
              Paradise Roleplay
            </h3>

            <p className="mt-8 text-lg text-blue-100 max-w-xl leading-relaxed">
              Manage applications, appeals, staff sessions, and shift tracking through a modern centralized community portal.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl transition-all">
                Open Portal
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white hover:text-blue-950 text-white font-bold transition-all">
                View Applications
              </button>
            </div>
          </div>

          {/* Login Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
              <h3 className="text-3xl font-black text-slate-900 mb-8">
                Login
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Login Type
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Owner</option>
                    <option>Administrator</option>
                    <option>Moderator</option>
                    <option>Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-4">
                  <button className="w-full py-4 rounded-2xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg transition-all shadow-lg">
                    Login
                  </button>

                  <button
                    onClick={loginWithDiscord}
                    className="w-full py-4 rounded-2xl bg-[#5865F2] hover:opacity-90 text-white font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    Continue with Discord
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
            <h2 className="text-5xl font-black text-blue-950 mb-4">
              Applications
            </h2>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              Thank you for checking our current applications.
            </p>

            <button className="px-8 py-4 rounded-2xl bg-blue-700 hover:bg-blue-600 text-white font-bold transition-all">
              Open Application
            </button>
          </div>
        </div>
      </section>

      {/* Roster */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-blue-950 mb-10">Roster</h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div
                key={session}
                className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-black text-blue-950 mb-6">
                  Session {session}
                </h3>

                <p className="text-slate-500">
                  {session === 1 ? 'Active Staff Assigned' : 'No staff assigned'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h4 className="font-black text-2xl">Surfers Paradise Roleplay</h4>
            <p className="text-blue-200 mt-2">
              Built for community management and staff operations.
            </p>
          </div>

          <div className="flex gap-4 text-sm text-blue-200">
            <span>Home</span>
            <span>Applications</span>
            <span>Appeals</span>
            <span>Staff Portal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
