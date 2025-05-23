// client/src/pages/Login.tsx
import React from 'react';

const Login: React.FC = () => {
  const discordClientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
  const redirectUri = encodeURIComponent('https://your-domain.com/api/auth/discord/callback');
  const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${discordClientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20email`;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <a href={discordAuthUrl}>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
          Login with Discord
        </button>
      </a>
    </div>
  );
};

export default Login;
