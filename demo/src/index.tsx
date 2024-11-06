import React from 'react';
import ReactDOM from 'react-dom/client';
import { DropdownContent, DropdownProvider, DropdownToggle } from '@invx-ui/dropdown'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DropdownProvider>
      <DropdownToggle>
        Open Dropdown
      </DropdownToggle>
      <DropdownContent
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
        }}
      >
        Dropdown Content
      </DropdownContent>
    </DropdownProvider>
    <p>Content Underneath</p>
  </React.StrictMode>,
);
