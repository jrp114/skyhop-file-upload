import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
}

export default function SectionWrapper(props: SectionWrapperProps) {
  return (
    <div className="flex flex-col gap-1 xs:items-center lg:items-start">
      {props.children}
    </div>
  );
}
