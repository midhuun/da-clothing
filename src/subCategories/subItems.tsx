import React from 'react';
import AllProducts from '../categories';
import { Link, useParams } from 'react-router-dom';
const SubItems:React.FC = () => {
    const {category,subcategory} = useParams(); 
    const current = AllProducts?.find((cat:any)=>cat.id === category) || null;
    const items = current?.subCategories.find((item:any)=> item.id === subcategory);
    
  return (
    <div className='w-full  md:p-2 flex justify-center flex-wrap md:gap-5  gap-4'>
      {items?.Products?.map((item:any)=>
        <Link key={item.id} to={{
            pathname: `/categories/${category}/${subcategory}/${item.id}`
        }}> <div  className="flex justify-center flex-col items-center md:h-[450px] md:w-[320px] h-[250px] w-[160px] rounded-md bg-[#fafafa] gap-3 shadow-sm border">
            <div className="flex justify-center items-center p-1 ">
            <img className=" md:h-[400px] md:w-[320px] h-[180px] w-[150px] object-contain p-1" src={item.image[0]} alt={item.name} />
            </div>
            <div className='h-[60px]'>
            <h1 className="lg:font-semibold font-semibold  text-[12px] text-wrap p-2 lg:text-md">{item.name}</h1>
            </div>
        </div>
        </Link>
      )}
     {
        
     }
    </div>
  )
}

export default SubItems
