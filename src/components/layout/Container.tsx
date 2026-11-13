import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-10 ${className}`}>
      {children}
    </Component>
  );
}
