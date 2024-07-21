import { Link, useParams } from "react-router-dom";
import AllProducts from '../categories';
import Card from "./card";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './css/item.css';
import Shade from '../assets/shade.jpg';
const Item = () => {
  const {category,subcategory,item} = useParams(); 
  const current = AllProducts?.find((cat)=>cat.id === category) || null;
  const subCategories = current?.subCategories.find((item)=> item.id === subcategory);
  const products = subCategories?.Products;
  const product = subCategories?.Products?.find((product) => product.id == item)
  const similar = products?.filter((item)=> item.id !== product?.id )
 
  return (
    <>
    <div className=" flex justify-center md:pt-10 ">
      {
      <div className="md:flex md:w-[90%] w-full flex-wrap justify-center px-2 md:px-5">
        <div className="lg:w-[45%] flex items-center justify-center md:justify-end ">
        <Carousel 
         interval={2000} 
         useKeyboardArrows={true}
          showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay
        axis="horizontal"
        >
        <img
          className=" h-[300px] md:h-[350px] border object-contain lg:h-[550px]"
          src={product?.image}
          alt=""
        />
        <img
          className="object-contain h-[300px] md:h-[350px] border lg:h-[550px] "
          src={Shade}
          alt=""
        />
      </Carousel> 
        </div>
        <div className="lg:w-[55%] p-3  md:p-7 flex   flex-col md:items-start ">
          <h3 className="text-lg md:text-2xl py-2  font-bold text-black">{product?.name}</h3>
          <div className="flex md:justify-center h-[50px] items-start gap-3">
          <p className="md:py-1 text-md font-semibold mb-5"><span className="text-black">Color:</span>  {product?.color}</p>
          <div className="flex   md:py-2 justify-center items-center">
          {/* <div className="h-[17px] w-[17px] rounded-full bg-black border"></div> */}
          </div>
          </div>
          <p className="md:py-1 text-md"><span className="text-black">Type:  </span>{product?.type}</p>
          <p className="md:py-1 text-md"><span className="text-black">Blend Ratio:  </span>{product?.blendRatio}</p>
          <p className="md:py-1 text-md"><span className="text-black">GSM:  </span>{product?.gsm}</p>
          
        </div>
        
      </div>
}
    </div>
    <p className="p-4 font-semibold text-lg">Similar Products:</p>
    <div className="flex py-5 w-full overflow-scroll overflow-y-hidden scr">

        {similar?.map((product)=>
        <Link key={product.id} to={{
          pathname: `/categories/${category}/${subcategory}/${product.id}`
      }}><Card image ={product.image}  name={product.name} /></Link>
    )}
      </div>
    </>
  );
};

export default Item;
// const categoryMap: { [key: string]: Categories[] } = {
//   womens: AllProducts[1].subCategories,
//   mens: AllProducts[2].subCategories,
//   kids: AllProducts[3].subCategories,
//   organics: AllProducts[0].subCategories
// };
// const current:Categories[] = categoryMap[category] || null;
// const currentItem = current.filter((item)=>{
//  return item.id === subcategory
// })
// const product? = currentItem[0].Products.filter((product:any)=> product.id === item);