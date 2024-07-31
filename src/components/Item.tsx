import { Link, useParams } from "react-router-dom";
import AllProducts from '../categories';
import Card from "./card";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './css/item.css';
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
         interval={2500}
         useKeyboardArrows={true}
          showArrows={false}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
        axis="horizontal"
        >
        {product?.image?.map((img,index)=>
          <img key={index}
          className=" h-[300px] md:h-[350px] border object-contain lg:h-[550px]"
          src={img}
          alt=""
        />
        )}
      </Carousel> 
        </div>
        <div className="lg:w-[55%] p-3  md:p-7 flex   flex-col md:items-start ">
          <h3 className="text-xl md:text-2xl py-2  font-bold text-black">{product?.name}</h3>
          <div className="flex md:justify-center h-[50px] items-start gap-3">
          <div className="flex   md:py-2 justify-center items-center">
          {/* <div className="h-[17px] w-[17px] rounded-full bg-black border"></div> */}
          </div>
          </div>
          <p className="md:py-1 text-md font-semibold mb-5"><span className="text-black">Color:</span>  {product?.color}</p>
          <p className="md:py-1 md:text-md text-sm"><span className="text-black">Type:  </span>{product?.type}</p>
          <p className="md:py-1 md:text-md text-sm"><span className="text-black">Blend Ratio:  </span>{product?.blendRatio}</p>
          <p className="md:py-1 md:text-md text-sm"><span className="text-black">GSM:  </span>{product?.gsm}</p>
          {product?.wash && (<p className="md:py-1 md:text-md text-sm"><span className="text-black">Wash:  </span>{product?.wash}</p>)}
          {product?.fabric && (<p className="md:py-1 md:text-md text-sm"><span className="text-black">Fabric:  </span>{product?.fabric} </p>)}
          
        </div>
        
      </div>
}
    </div>
    
    {similar?(similar?.length>0?<p className="p-4 font-semibold text-lg">Similar Products:</p>:""):""}
    <div className="flex scroll gap-3 py-5 w-full overflow-scroll overflow-y-hidden scr">

        {similar?.map((product)=>
        <Link className="px-4" key={product.id} to={{
          pathname: `/categories/${category}/${subcategory}/${product.id}`
      }}><Card image ={product.image[0]}  name={product.name} /></Link>
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
