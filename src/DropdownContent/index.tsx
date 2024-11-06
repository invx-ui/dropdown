import React, { ElementType, HTMLProps } from 'react';
import { useDropdown } from '../hooks/index.js';
import { constructClassName } from '../utils/constructClassName/index.js';

export interface DropdownContentProps extends HTMLProps<HTMLDivElement> {
  htmlElement?: ElementType
  children?: React.ReactNode
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  htmlElement: Tag = 'div',
  children,
  className,
  style,
  ...props
}) => {
  const {
    id,
    rootClass,
    isOpen,
  } = useDropdown();

  const baseClass = `${rootClass}__content`;
  const baseId = `${id}-content`;

  return (
    <Tag
      id={baseId}
      aria-labelledby={baseId}
      className={constructClassName([
        baseClass,
        className,
      ])}
      style={{
        opacity: isOpen ? 1 : 0,
        position: 'absolute',
        visibility: isOpen ? 'visible' : 'hidden',
        zIndex: 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};
