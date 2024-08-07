import { useState } from "react";
import Logo from "../assets/logo.png";
import Phone from "../assets/phone-call.svg";
import Message from "../assets/message-square.svg"
import Search from "../assets/search.svg";
import Menu from "../assets/align-left.svg";
import './css/header.css';
import { Link } from "react-router-dom";
import Categories from '../categories';
import MobileNav from './MobileNav';
import categories from "../categories";
import { Product,Category } from "../type";
const Header = () => {
 const products:Product[] = [];
 const [value,setValue] = useState<string | null>(null);
 const [results,setResults] = useState<Product[]>([]);
 const [searchClicked,setSearchClicked] = useState(false);
 const subCategories = categories.map((sub)=> sub.subCategories);
 const items = subCategories.map(item=> item.map((product)=>product.Products));
//  const Products:Product[] = [];
 items.map((item)=>item.map((product)=>product?.map((single)=>products.push(single))))
 function SearchProduct(event:any){
   event.preventDefault();
   const searchValue = products.filter((prod)=> value && prod?.id.includes(value));
   setSearchClicked(!searchClicked);
   setResults(searchValue)
 }
 console.log(results);
 
  return (
    <>
     <div className="lg:hidden">
       <MobileNav />
     </div>
     <div className="lg:flex hidden p-3 md:p-10 justify-between items-center w-full top-0 fixed z-[999] h-[80px] bg-[#FAFAFA]">
    <div className="flex items-center w-[33%] ">
      <Link to='/'>
      <img src={Logo} alt="" className="h-[45px] hidden md:block  w-[45px] border rounded-full object-cover" />
      </Link>
      <img src={Menu} alt="" className="h-[30px] md:hidden   w-[30px]  object-cover" />
      <div className="lg:flex hidden categories md:pl-[80px] font-semibold items-center gap-5">
        {Categories.map((val:Category)=> 
        <Link key={val.id} to={`/categories/${val.id}`}><h3  key={val.id}>{val.name}</h3></Link>
        )}
      </div>
    </div>
    <div className=" flex justify-center"><h5 className="uppercase font-semibold text-sm md:text-xl logo pl-5 ">🇩‌🇦‌ 🇨‌🇱‌🇴‌🇹‌🇭‌🇮‌🇳‌🇬‌ 🇲‌🇦‌🇳‌🇺‌🇫‌🇦‌🇨‌🇹‌🇺‌🇷‌🇪‌🇷‌</h5></div>
    <div>
    <div className="hidden lg:flex items-center gap-6 lg:gap-[50px]">
            <form onSubmit={(e)=>SearchProduct(e)} className="search relative flex items-center gap-3">
              <input
                className=" placeholder:text-gray-400 rounded-lg  text-[12px]  lg:text-sm  border-gray-400  border p-1 sm:p-2 focus:outline-none outline-none md:w-[250px] lg:max-w-[250px] w-[150px] sm:w-[250px] "
                type="text"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
                name=""
                placeholder="Search"
                id=""
              />
              {results?.length>0 && searchClicked?
              <div className="absolute top-10  rounded-md border right-[-3] bg-white min-w-[350px] min-h-[100px]">
                <div className="flex flex-col">
                {results.map((result:Product)=>
                <Link onClick={()=>setSearchClicked(!searchClicked)} to={`/categories/${result.categoryId}/${result.subCategoryId}/${result.id}`}>
                <div className="flex justify-start py-3 gap-3">
                  <div className="w-[100px] flex ">
                  <img src={result.image[0]} className="h-[120px] w-[100px] object-contain" alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                  <h2 className=" text-md font-semibold w-[180px]">{result.name}</h2>
                  <h2 className="text-sm">{result.blendRatio}</h2>
                  </div>
                </div>
                <hr />
                </Link>
                )}
                </div>
              </div>
              : results.length === 0 && searchClicked ? (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-full z-10">
                  <div className="flex items-center justify-center p-4">
                    <h2 className="text-sm font-semibold">No Results Found..</h2>
                  </div>
                </div>
              ) : null}
              <button className="absolute cursor-pointer  z-[1000] right-2" >
                <img  className="h-4" src={Search} alt="" />
              </button>
            </form>
            <div className="call flex items-center gap-2">
              <a className="items-center flex " href="tel:+917010121851">
                {" "}
                <img className="h-4 px-2" src={Phone} alt="" />
                <h3 className="hidden lg:block">Call</h3>
              </a>
            </div>
            <div className="call flex items-center gap-2">
              <a className="flex items-center " href="https://wa.me/7010121851">
                <img className="h-4 px-2" src={Message} alt="" />
                <h3 className="hidden lg:block">Text</h3>
              </a>
            </div>
          </div>
    </div>
     </div>
     <hr />
    </>
  );
};

export default Header;





 {/* <div className="w-full  flex justify-between  py-3 ">
        <div
          className={`${
            isNavOpen ? "fixed top-0" : "hidden"
          } w-full z-[1000] bg-white h-screen `}
        >
         <div className="w-full h-screen bg-white shadow-md relative ">
          <button onClick={()=>setIsNavOpen(!isNavOpen)} className="absolute top-5 right-5"><img src={Close} alt="" /></button>
          <div className="pt-20 px-5  flex flex-col  gap-10">
            <div onClick={()=>setIsDropOpen((prev)=>({...prev,organic:!prev.organic}))} className=" cursor-pointer px-3">
            <div className="flex  w-full justify-between">
            <h3 className="text-md">Organic Cotton and dying</h3>
            <img className={` ${isDropOpen.organic?"hidden":"block"}`}  src={Down} alt="" />
            <img className={` ${isDropOpen.organic?"block":"hidden"}`}  src={Up} alt="" />   
            </div>
            <div className={` pl-5 py-2 text-sm ${isDropOpen.organic?"block":"hidden"}`}>
                {organics.map((item)=>(
                  <p>{item}</p>
                ))}
            </div>
           
            </div>
            <div onClick={()=>setIsDropOpen((prev)=>({...prev,women:!prev.women}))} className=" cursor-pointer px-3">
              <div className="flex justify-between w-full">
            <h3 className="text-md">Women</h3>
            <img className={` ${isDropOpen.women?"hidden":"block"}`} src={Down} alt="" />
            <img className={` ${isDropOpen.women?"block":"hidden"}`}  src={Up} alt="" />
            </div>
            <div className={` pl-5  py-2 text-sm ${isDropOpen.women?"block":"hidden"}`}>
                {organics.map((item)=>(
                  <p>{item}</p>
                ))}
            </div>
            </div>
            <div onClick={()=>setIsDropOpen((prev)=>({...prev,men:!prev.men}))} className=" cursor-pointer px-3">
            <div className="flex justify-between w-full">
            <h3 className="text-md">Men</h3>
            <img className={` ${isDropOpen.men?"hidden":"block"}`} src={Down} alt="" />
            <img className={` ${isDropOpen.men?"block":"hidden"}`}  src={Up} alt="" />
            </div>
            <div className={`pl-5  py-2 text-sm ${isDropOpen.men?"block":"hidden"}`}>
                {organics.map((item)=>(
                  <p>{item}</p>
                ))}
            </div>
            </div>
            <div onClick={()=>setIsDropOpen((prev)=>({...prev,kids:!prev.kids}))} className=" cursor-pointer px-3">
            <div className="flex justify-between w-full">
            <h3 className="text-md">Kids</h3>
            <img className={` ${isDropOpen.kids?"hidden":"block"}`} src={Down} alt="" />
            <img className={` ${isDropOpen.kids?"block":"hidden"}`}  src={Up} alt="" />
            </div>
            <div className={`pl-5  py-2 text-sm ${isDropOpen.kids?"block":"hidden"}`}>
                {organics.map((item)=>(
                  <p>{item}</p>
                ))}
            </div>
            </div>
            <div onClick={()=>setIsDropOpen((prev)=>({...prev,active:!prev.active}))} className=" cursor-pointer px-3">
            <div className="flex justify-between w-full">
            <h3 className="text-md">Active Wear</h3>
            <img className={` ${isDropOpen.active?"hidden":"block"}`} src={Down} alt="" />
            <img className={` ${isDropOpen.active?"block":"hidden"}`}  src={Up} alt="" />
            </div>
            <div className={`pl-5  py-2 text-sm ${isDropOpen.active?"block":"hidden"}`}>
                {organics.map((item)=>(
                  <p>{item}</p>
                ))}
            </div>
            </div>
            
          </div>
         </div>

        </div>
        <div className=" text-sm uppercase w-full  px-2 md:px-6 md:pt-[20px]  items-center justify-between  font-semibold flex ">
          <div className="flex items-center gap-5 lg:gap-10">
            <h3
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden flex"
            >
              <img src={Menu} alt="" />
            </h3>

            <h3>
              <Link to="/">
              <img
                className="h-6 w-6 md:h-10 md:w-10 object-contain rounded-full border-2"
                src={Logo}
                alt=""
              />
              </Link>
            </h3>
          </div>

          <div onMouseEnter={() => setShowInnerDiv(true)}  className="lg:flex relative cursor-pointer categories hidden whitespace-nowrap items-center gap-[50px]">
            <h3>Women</h3>
            <h3>Men</h3>
            <h3>Kids</h3>
            <h3>Organics</h3>
            
            <div className={`absolute ${showInnerDiv ? '' : 'hidden'} z-[5] top-[41px] left-[-10px] border min-h-[300px] min-w-[600px] bg-white`} onMouseEnter={() => setShowInnerDiv(true)} onMouseLeave={() => setShowInnerDiv(false)}>
            <div className="flex p-2">
            <div className="p-3 lg:px-5 ">
              <h2 className="text-center text-grey-500 py-[20px] ">Women</h2>
            {men.map((item)=><p className="capitalize leading-[35px]">{item}</p>)}
            </div>
            <div className="p-3 lg:px-5  ">
              <h2 className="text-center text-grey-500 py-[20px]">Men</h2>
            {women.map((item)=><p className="capitalize leading-[35px]">{item}</p>)}
            </div>
            <div className="p-2 lg:px-5   ">
              <h2 className="text-center text-grey-500 py-[20px]">Kids</h2>
            {kids.map((item)=><p className="capitalize leading-[35px]">{item}</p>)}
            </div>
            </div>

          </div>

          </div>
          <div className="flex items-center gap-6 lg:gap-[50px]">
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
            <div className="call flex items-center gap-2">
              <a className="items-center flex " href="tel:+917010121851">
                {" "}
                <img className="h-4 px-2" src={Phone} alt="" />
                <h3 className="hidden lg:block">Call</h3>
              </a>
            </div>
            <div className="call flex items-center gap-2">
              <a className="flex items-center " href="https://wa.me/7010121851">
                <img className="h-4 px-2" src={Message} alt="" />

                <h3 className="hidden lg:block">Text</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr /> */}