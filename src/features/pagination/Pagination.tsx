import { Button } from '@/shared/ui/button';

interface PaginationProps {
    page:number,
    setPage:(page:number) => void
}

const Pagination = ({page,setPage}:PaginationProps) => {
  return (
    <div className='my-16 w-full max-w-[300px] flex-between'>
      
      <Button 
        className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack '
        onClick={()=>setPage(page-1)}
      >
        Назад
      </Button>
      <Button 
        className='bg-neutral-200 dark:bg-[#1D2125] hover:bg-neutral-300 dark:hover:bg-[#22272B] text-defaultTextWhite dark:text-defaultTextBlack '
        onClick={()=>setPage(page+1)}>
        Вперед
      </Button>
    </div>
  );
};

export default Pagination;