import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="py-10 max-w-[1280px] mx-auto xl:px-10 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
