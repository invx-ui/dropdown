import React, { HTMLProps, useId, useEffect, useRef } from 'react';
import { DropdownContext } from '../hooks/index.js';

export const dropdownBaseClass = 'dropdown';

export type ChildFunction = (context: DropdownContext) => React.ReactNode;

export type DropdownSettings = {
  classPrefix?: string;
  id?: string;
};

export type DropdownProviderProps = DropdownSettings & HTMLProps<HTMLDivElement> & {
  children: React.ReactNode | ChildFunction;
};

export const DropdownProvider: React.FC<DropdownProviderProps> = ({
  children,
  classPrefix,
  id: idFromProps,
  style,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownProviderRef = useRef<HTMLDivElement>(null);

  const uniqueId = useId();
  const id = idFromProps || uniqueId;
  const prefixToUse = classPrefix;
  const rootClass = prefixToUse ? `${prefixToUse}__${dropdownBaseClass}` : `invx-${dropdownBaseClass}`;

  const context = {
    id,
    isOpen,
    rootClass,
    setIsOpen,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownProviderRef.current && !dropdownProviderRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownProviderRef]);

  return (
    <DropdownContext.Provider value={context}>
      <div
        id={id}
        aria-labelledby={id}
        ref={dropdownProviderRef}
        {...rest}
        style={{
          position: 'relative',
          ...style,
        }}
      >
        {typeof children === 'function' ? children(context) : children}
      </div>
    </DropdownContext.Provider>
  );
};
