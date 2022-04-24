export interface IInputProps {
  className?: string;
  value: string;
  type?: "number";
  maxLength?: number | undefined;
  placeholder?: string;
  onChange: (v: string) => void;
  onSearch?: (v: string) => void;
}

export interface IAvatar {
  src: string;
  alt?: string;
}
export interface ILoading {
  className?: string;
}
