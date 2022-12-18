import { FC } from 'react';
import './header.module.less';

const Header: FC = (): JSX.Element => {
  return (
    <div className="p-5 bg-primary flex justify-between">
      <h1 className="text-secondary text-5xl font-semibold">B</h1>
      <h1 className="text-white text-5xl font-semibold">M</h1>
      <h1 className="text-tertiary text-5xl font-semibold">A</h1>
    </div>
  );
};

export { Header };
