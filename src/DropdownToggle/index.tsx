import React, { ElementType } from 'react';
import { useDropdown } from '../hooks/index.js';
import { constructClassName } from '../utils/constructClassName/index.js';

export interface DropdownToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlElement?: ElementType
  children?: React.ReactNode
}

export const DropdownToggle: React.FC<DropdownToggleProps> = ({
  htmlElement: Tag = 'button',
  children,
  className,
  ...props
}) => {
  const {
    id,
    rootClass,
    setIsOpen,
    isOpen,
  } = useDropdown();

  const baseClass = `${rootClass}__toggle`;
  const baseId = `${id}-toggle`;

  return (
    <Tag
      id={baseId}
      aria-labelledby={baseId}
      className={constructClassName([
        baseClass,
        className,
      ])}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </Tag>
  );
};
