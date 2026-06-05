export interface SelectableProperties {
  active?: boolean;
  label: string;
  text: string;
  color: string;
  highlight: string;
  onClick?: () => void;
}
