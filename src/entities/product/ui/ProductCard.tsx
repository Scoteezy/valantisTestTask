import { Product } from '../model/types';


const ProductCard = ({id,product,brand,price}: Product) => {
  return (
    <div className='bg-neutral-200 dark:bg-[#1D2125] flex flex-col p-5 rounded-md gap-2 w-full shadow-md'>
      <p className='p-bold-20'>{product}</p>

      <p className='p-medium-16'>  {brand? `Бренд: ${brand}`: ''}</p>
      <p className='p-medium-16'> Цена: {price} Руб.</p>
      <p className='p-medium-16 text-center !text-gray-500 dark:!text-gray-400'> {id}</p>

    </div>
  );
};

export default ProductCard;