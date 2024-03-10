import { Theme } from '@/features';

const Header = () => {
  return (
    <div className="text-defaultTextWhite w-full shadow-md  bg-neutral-100 dark:bg-[#1D2125]">
      <div className="wrapper flex-between">
        <div>
          <h2 className="h2-regular">Denis Bondarenko</h2>
          <a className="p-medium-20 text-[#758195] dark:text-[#758195] dark:hover:text-[#C7D1DB] hover:text-[#172B4D] transition-all duration-300" href="https://rostov.hh.ru/resume/74635185ff0c1ff1960039ed1f48737274724a" target="_blank">
            HeadHunter
          </a>
        </div>
        <Theme/>
      </div>
    </div>
  );
};

export default Header;
