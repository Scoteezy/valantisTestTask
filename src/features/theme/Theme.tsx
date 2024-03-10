
import { useContext, useEffect } from 'react';

import { ThemeContext } from '@/app/providers/ThemeProvider';

import {DarkTheme,LightTheme} from './icons/ThemeIcon';
const Theme = () => {
  const {theme,setTheme} = useContext(ThemeContext);

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) 
    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      document.body.classList.add('dark');
    }
  },[setTheme]);
  const SwitchTheme = () => {
    if(theme==='dark'){
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }else{
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  return (
    <button className='dark:rotate-[360deg] rotate-0 transition-all duration-500 cursor-pointer' onClick={SwitchTheme}>
      {theme==='light' ? (<DarkTheme height={20}  width={20}/>): (<LightTheme height={20}  width={20}/>)}

    </button>
  );
};

export default Theme;