import { useContext } from 'react';

import { ThemeContext } from '@/app/providers/ThemeProvider';

import { LoaderBlack, LoaderWhite } from './icons/ThemedLoader';
const Loader = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      {theme === 'dark'? (
        <LoaderWhite height={25} width={25}/>
      ) : (
        <LoaderBlack height={25} width={25}/>
        
      )}
    </>
   
  );
};

export default Loader;
