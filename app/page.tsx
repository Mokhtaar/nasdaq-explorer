import { SplashScreen } from "./components/ui/SplashScreen";

export default async function HomePage() {
  return <SplashScreen redirectTo="/explore" />;
}
