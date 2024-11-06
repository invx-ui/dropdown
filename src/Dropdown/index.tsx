import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Dropdown: React.FC<ButtonProps> = ({ type, ...props }) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    {...props}
  />
);
