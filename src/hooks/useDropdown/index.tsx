import { createContext, useContext } from 'react';
import { DropdownProviderProps } from '../../DropdownProvider/index.js';

export interface DropdownContext extends Omit<DropdownProviderProps, 'children'> {
  rootClass: string
  id: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const DropdownContext = createContext<DropdownContext>({} as DropdownContext);

export const useDropdown = (): DropdownContext => useContext(DropdownContext);
