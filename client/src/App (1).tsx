
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import FairUse from "./pages/fair-use";

function ProtectedRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Route path="/" component={Home} />;
  }
  
  return <Component {...rest} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={(props) => <ProtectedRoute component={Terms} {...props} />} />
      <Route path="/privacy" component={(props) => <ProtectedRoute component={Privacy} {...props} />} />
      <Route path="/fair-use" component={(props) => <ProtectedRoute component={FairUse} {...props} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </AuthProvider>
  );
}
