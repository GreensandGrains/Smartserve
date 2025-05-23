
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";

export function DiscordLoginButton() {
  const handleLogin = () => {
    window.location.href = '/auth/discord';
  };

  return (
    <Button 
      onClick={handleLogin}
      className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white"
    >
      <FaDiscord className="w-5 h-5" />
      Login with Discord
    </Button>
  );
}
