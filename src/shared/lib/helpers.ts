import { Filters as IFilters } from '@/shared';

export const removeEmptyStrings = (obj: IFilters) => {
  const newObj:IFilters = {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'string' && (obj[key] as string).trim() !== '')  {
        newObj[key] = (obj[key] as string).trim();
      } else if(typeof obj[key] ==='number'){
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};