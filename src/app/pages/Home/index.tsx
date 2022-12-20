import { Header } from '@myresume/header';
import { initialInitialPropsSchema, InitialProps } from '@myresume/prop-types';
import { FC, useEffect, useState } from 'react';

export const Home: FC = (): JSX.Element => {
  const [initials, setInitials] = useState<InitialProps[] | null>(null);
  useEffect(() => setInitials(initialInitialPropsSchema), []);
  return initials?.length ? <Header initials={initials} /> : <div />;
};
