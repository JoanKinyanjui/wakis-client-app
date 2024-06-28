import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

interface IconProps {
  icon: string;
  className?: string;
  onClick?: () => void;
}

function Icon({icon,className,onClick}:IconProps) {
  return (
    <IconifyIcon 
    icon={icon} 
    className={className} 
    onClick={onClick}
    />
  )
}

export default Icon;
