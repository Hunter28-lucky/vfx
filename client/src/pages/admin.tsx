import React, { useState } from "react";

const ADMIN_PASSWORD = "1234";

const sections = [
  { name: "Home", key: "home" },
  { name: "About", key: "about" },
  { name: "Journey", key: "journey" },
  { name: "Gallery", key: "gallery" },
  { name: "Stats", key: "stats" },
  { name: "Contact", key: "contact" },
  { name: "Footer", key: "footer" },
];

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" && localStorage.getItem("admin_logged_in") === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [section, setSection] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      localStorage.setItem("admin_logged_in", "true");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("admin_logged_in");
    setPassword("");
    setSection(null);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-pink-900/60 to-purple-900/80">
        <form
          onSubmit={handleLogin}
          className="bg-black/80 p-8 rounded-2xl shadow-2xl w-full max-w-xs flex flex-col gap-4 border border-pink-600/20"
        >
          <h2 className="text-2xl font-bold gta-gradient-text text-center mb-2">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-3 rounded-lg bg-black/60 border border-pink-600/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            autoFocus
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="gta-button px-4 py-2 text-lg font-semibold shadow bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-pink-900/60 to-purple-900/80">
      <header className="flex items-center justify-between px-6 py-4 border-b border-pink-600/20 bg-black/80">
        <h1 className="text-2xl font-bold gta-gradient-text">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="gta-button px-4 py-2 text-base font-semibold shadow bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:scale-105 transition-transform"
        >
          Logout
        </button>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {!section ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl mt-8">
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setSection(s.key)}
                className="gta-card p-8 rounded-xl shadow-lg bg-black/70 border border-pink-600/20 hover:scale-105 transition-transform text-center"
              >
                <span className="text-2xl font-bold gta-gradient-text block mb-2">{s.name}</span>
                <span className="text-gray-300 text-sm">Edit {s.name} Section</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-auto bg-black/80 p-8 rounded-2xl shadow-2xl border border-pink-600/20">
            <button
              onClick={() => setSection(null)}
              className="mb-4 text-pink-400 hover:underline"
            >
              ← Back to Dashboard
            </button>
            <h2 className="text-2xl font-bold gta-gradient-text mb-4">Edit {sections.find(s => s.key === section)?.name} Section</h2>
            <div className="text-gray-400">(Editor coming soon...)</div>
          </div>
        )}
      </main>
    </div>
  );
}