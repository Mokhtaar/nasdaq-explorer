export interface SearchBarProps {
  onSearch(search: string): void;
  placeholder?: string;
}
export type HeaderProps = SearchBarProps;

export interface LoadingSpinnerProps {
  fullPage?: boolean;
}

export interface ButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export interface ProgressProps {
  countdown: number;
  progress: number;
}

export interface SplashScreenProps {
  redirectTo: string;
  delay?: number;
}
