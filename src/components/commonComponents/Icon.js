import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

function Icon({icon,className}) {
  return (
    <IconifyIcon 
    icon={icon} 
    className={className} 
    />
  )
}

export default Icon;
