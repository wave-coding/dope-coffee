import { FC, ReactNode } from 'react';
import '@/app/globals.css';
import { NavigationBottom } from '@/components';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden bg-color-six">
      <div className="mx-auto mb-28 h-max">{children}</div>
      <div className="container">
        <div className="fixed bottom-0 left-0 z-50 flex w-full content-center items-center justify-center border-t bg-white shadow-[0px_-5px_5px_-5px_rgb(0,0,0,0.3)]">
          <NavigationBottom />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
