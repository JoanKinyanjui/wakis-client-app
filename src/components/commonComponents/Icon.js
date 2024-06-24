import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

function Icon({icon,className,onClick={}}) {
  return (
    <IconifyIcon 
    icon={icon} 
    className={className} 
    onClick={onClick}
    />
  )
}

export default Icon;
