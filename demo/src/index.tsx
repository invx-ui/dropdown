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
          padding: '10px',
          width: '100px',
          height: '100px',
        }}
      >
        Dropdown Content
      </DropdownContent>
    </DropdownProvider>
    <p>Content Underneath</p>
  </React.StrictMode>,
);
