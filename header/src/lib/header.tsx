import { InitialProps } from '@myresume/prop-types';
import { FC } from 'react';
import './header.module.less';

export const Header: FC<{ initials: InitialProps[] }> = ({ initials }) => {
  return (
    <div className="p-5 bg-primary flex justify-between">
      {initials.map((initial) => (
        <h1 key={initial.label} className={initial.className}>
          {initial.label}
        </h1>
      ))}
    </div>
  );
};
