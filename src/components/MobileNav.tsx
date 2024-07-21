import { useState } from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";
import categories from "../categories";
import { Link } from "react-router-dom";
import { Product,Category } from "../type";
const MobileNav = () => {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const products:Product[] = [];
 const [value,setValue] = useState<string | null>(null);
 const [results,setResults] = useState<Product[]>([]);
 const [searchClicked,setSearchClicked] = useState(false);
 const subCategories = categories.map((sub)=> sub.subCategories);
 const items = subCategories.map(item=> item.map((product)=>product.Products));
//  const Products:Product[] = [];
 items.map((item)=>item.map((product)=>product?.map((single)=>products.push(single))))
 function SearchProduct(e:React.MouseEvent<HTMLElement>){
   e.preventDefault();
   const searchValue = products.filter((prod)=> value && prod?.id.includes(value));
   setSearchClicked(!searchClicked);
   setResults(searchValue)
 }
 console.log(results);
  return (
    <>
    {isNavOpen ? <div className="w-[50%] min-h-screen shadow-md fixed top-0 bg-white z-[1001]">
        <div className="relative border  pt-[60px] px-3">
        <Link to='/'>
        <img className="h-8 w-8 rounded-full border absolute top-2 left-2" src={Logo} alt="" />
        </Link>
        <svg onClick={()=>setIsNavOpen(false)} className="cursor-pointer absolute right-2 top-2 z-[1001]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        <div className=" categories md:pl-[80px] font-semibold items-center gap-5">
        {categories.map((val:Category)=> 
        <Link onClick={()=>setIsNavOpen(!isNavOpen)} key={val.id} to={`/categories/${val.id}`}><h2 className="py-2 border-b" key={val.id}>{val.name}</h2></Link>
        )}
      </div>
        </div>  
    </div>:""}
    <div className='h-[60px] fixed z-[1000] top-0 w-full bg-[#FAFAFA] px-1'>
        <div className="flex h-[60px] justify-between items-center p-2 ">
        <div className='flex justify-center items-center'>
        <div onClick={()=>setIsNavOpen(true)}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000000" viewBox="0 0 256 256">
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
        </div>
        <Link to="/">
        <img className="h-8 w-8 rounded-full border mx-5" src={Logo} alt="" />
        </Link>
        </div>
        <div className="search relative flex items-center gap-3">
              <input
                className="  text-[12px]  lg:text-sm placeholder:text-gray-400 border border-gray-400 rounded-sm p-1 sm:p-2 focus:outline-none outline-none md:w-[250px] lg:max-w-[250px] w-[150px] sm:w-[250px] "
                type="text"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
                name=""
                placeholder="Search"
                id=""
              />
              {results?.length>0 && searchClicked?
              <div className="absolute top-10  rounded-md border left-[-30px] bg-white w-[180px] min-h-[100px]">
                <div className="flex flex-col">
                {results.map((result:Product)=>
                <Link onClick={()=>setSearchClicked(!searchClicked)} to={`/categories/${result.categoryId}/${result.subCategoryId}/${result.id}`}>
                <div className="flex justify-start py-1 gap-1">
                  <div className="w-[60px] flex ">
                  <img src={result.image} className="h-[70px] w-[60px] object-contain" alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                  <h2 className=" text-[12px] font-semibold">{result.name}</h2>
                  <h2 className="text-[10px]">{result.blendRatio}</h2>
                  </div>
                </div>
                <hr />
                </Link>
                )}
                </div>
              </div>
              :""}
              <a onClick={(e:React.MouseEvent<HTMLElement>)=>SearchProduct(e)} className="absolute right-2" href="">
                <img className="h-4" src={Search} alt="" />
              </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default MobileNav;
