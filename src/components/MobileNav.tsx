import { useState } from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";
import Categories from "../categories";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const [isNavOpen,setIsNavOpen] = useState(false);
  type categories ={
    id:string,
    name:string,
    image:string
  }
  return (
    <>
    {isNavOpen ? <div className="w-[50%] min-h-screen shadow-md fixed top-0 bg-white z-10">
        <div className="relative border  pt-[60px] px-3">
        <Link to='/'>
        <img className="h-8 w-8 rounded-full border absolute top-2 left-2" src={Logo} alt="" />
        </Link>
        <svg onClick={()=>setIsNavOpen(false)} className="cursor-pointer absolute right-2 top-2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        <div className=" categories md:pl-[80px] font-semibold items-center gap-5">
        {Categories.map((val:categories)=> 
        <Link onClick={()=>setIsNavOpen(!isNavOpen)} key={val.id} to={`/categories/${val.id}`}><h2 className="py-2 border-b" key={val.id}>{val.name}</h2></Link>
        )}
      </div>
        </div>  
    </div>:""}
    <div className='h-[60px] fixed top-0 w-full bg-[#FAFAFA] px-1'>
        <div className="flex h-[60px] justify-between items-center p-2 ">
        <div className='flex justify-center items-center'>
        <div onClick={()=>setIsNavOpen(true)}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
        </div>
        <Link to="/">
        <img className="h-8 w-8 rounded-full border mx-5" src={Logo} alt="" />
        </Link>
        </div>
        <div className="search relative flex items-center gap-3">
              <input
                className="  text-[12px]  lg:text-sm placeholder:text-black border border-black p-1 sm:p-2 focus:outline-none outline-none md:w-[250px] lg:max-w-[250px] w-[150px] sm:w-[250px] "
                type="text"
                name=""
                placeholder="Search"
                id=""
              />
              <a className="absolute right-2" href="">
                <img className="h-4" src={Search} alt="" />
              </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default MobileNav;
