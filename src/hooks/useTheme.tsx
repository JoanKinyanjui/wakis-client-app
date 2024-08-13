import React, { useEffect, useState } from 'react'

function useTheme() {
    const [isDarkMode,setIsDarkMode] = useState(false);

    useEffect(()=>{
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === 'dark'){
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    }else if(savedTheme === 'light'){
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark')
    }
    },[]);

    const toggleTheme =()=>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }
        setIsDarkMode(!isDarkMode);
    }
  return (
   {isDarkMode,toggleTheme}
  )
}

export default useTheme
