import React from 'react';
import './window.css'
import DesktopIcons from './desktop-icons';
import TaskbarIcons from './taskbar-icons';

const Window = () => {
  return (
     <div className="window">
        <DesktopIcons />
        <TaskbarIcons />
     </div>
  )
}

export default Window