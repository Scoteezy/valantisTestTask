import { useEffect,useState } from 'react';

import { Product,ProductCard } from '@/entities/product';
import { Filters, Loader, Pagination } from '@/features';
import { Filters as IFilters, fetchProducts,removeEmptyStrings } from '@/shared';
import { Params } from '@/shared/api/api';
const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState<IFilters>({
    product: '',
    price: '',
    brand: '',
  });
  const LIMIT = 50;
 
  const fetchData = async (params?:Params)=>{
    setIsLoading(true);
    let ids = await fetchProducts({params});

    if (filters.price) {
      const price = parseFloat(filters.price.toString());

      if (!isNaN(price) && price > 0) {
        filters.price = price;
      }
    }
    const newFilters = removeEmptyStrings(filters);

    if (Object.keys(newFilters).length > 0) {
      const filteredIds= await fetchProducts({action:'filter', params:newFilters}) as string[] ;
  
      if(filteredIds){
        ids = filteredIds.filter((id: string) => filteredIds.includes(id));
      }
    }

    let products:Product[]  = [];

    if(ids){
      products = (await fetchProducts({action:'get_items', params:{ids}})) as Product[];

    }
    const uniqueIds = new Set();
    let sortedProd:Product[];

    if(products){
      sortedProd = products.filter((obj:Product) => {
        if (!uniqueIds.has(obj.id)) {
          uniqueIds.add(obj.id);
          return true;
        }
        return false;
      });
    }else{
      sortedProd=[];
    }

    setProducts(sortedProd);
    setIsLoading(false);
  };

  useEffect(() =>{
    fetchData({offset: page * LIMIT,limit:LIMIT});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page,filters]);
  return (
    <>
      {
        isLoading?(<div className='flex flex-center   mt-24'>
          <h2 className='h2-regular '>Загрузка</h2>
          <Loader/>
        </div> ):
          (  <div className='wrapper'>
            <div className='flex flex-col lg:flex-row lg:flex-between mb-10'>
              <Pagination page={page} setPage={setPage}/>
              <Filters setFilters={setFilters}/>
            </div>
            <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {  products.map((prod)=><ProductCard key={prod.id} {...prod}/>)}
            </div>
          </div>
          )
      }
    </>
   
  
  );
};

export default ProductsList;