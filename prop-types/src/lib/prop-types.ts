export function propTypes(): string {
  return 'prop-types';
}

export interface InitialProps {
  className: string;
  label: string;
}

export const initialInitialPropsSchema: InitialProps[] = [
  { className: 'text-secondary text-5xl font-semibold', label: 'B' },
  { className: 'text-white  text-5xl font-semibold', label: 'M' },
  { className: 'text-tertiary  text-5xl font-semibold', label: 'A' },
];
