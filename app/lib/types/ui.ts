export interface SearchBarProps {
  onSearch(search: string): void;
}
export type HeaderProps = SearchBarProps;

export interface LoadingSpinnerProps {
  fullPage?: boolean;
}
