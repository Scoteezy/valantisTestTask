
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Filters as IFilters, removeEmptyStrings } from '@/shared';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { ZodError } from 'zod';

import { priceSchema } from './schemas/validation';

import 'react-toastify/dist/ReactToastify.css';

interface FiltersProps {
    setFilters:(filters:IFilters)=>void
}

const Filters = ({setFilters}: FiltersProps) => {
  const [filter,setFilter] = useState<IFilters>({
    price: '',
    product: '',
    brand: ''
  });

  const showErrorToast = (errorMessage:string) => {
    toast.error(errorMessage, {
      autoClose: 5000 
    });
  };

  const validatePrice = (filter: IFilters)=>{
    if(!filter.price){
      return { success: true };
    }
    try {
      const price = +filter.price;
      const validatedData = priceSchema.parse(price);

      return { success: true, result: validatedData };
      
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((error)=>{
          showErrorToast(error.message);
        });
        return { success: false, error };
      }
    }
  };
  const onSubmit = ()=>{
    const newFilters = removeEmptyStrings(filter);
    
    if(newFilters && validatePrice(newFilters)?.success){
      setFilters(newFilters);
    }
  };
  const onReset = ()=>{
    const newFilters = {
      price: '',
      product: '',
      brand: ''
    };

    setFilters(newFilters);
  };

  return (
    <div className='flex flex-col xxs:flex-row   gap-10 sm:items-center lg:items-end'>
      <div className='flex flex-col sm:flex-row flex-between gap-10'>
        <Input 
          className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack'
          onChange={(e)=>setFilter({
            ...filter,
            product: e.target.value
          })}
          placeholder='Название'
          value={filter.product}
        />
        <Input   
          className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack'
          onChange={(e)=>setFilter({
            ...filter,
            price: e.target.value
          })}
          placeholder='Цена'
          value={filter.price}

        />
        <Input   
          className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack'
          onChange={(e)=>setFilter({
            ...filter,
            brand: e.target.value
          })}
          placeholder='Бренд'
          value={filter.brand}
        />
      </div>
      <div className='flex flex-col sm:flex-row gap-5'>
        <Button 
          className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack ' 
          onClick={onSubmit}>
          Применить
        </Button>
        <Button 
          className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack ' 
          onClick={onReset}>
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
};

export default Filters;