import { Link } from "react-router-dom";
import Card from "./card";
import categories from "../categories";

const products = categories.map((category)=>{
  const subCategory = category.subCategories;
  return subCategory;
});

const Items = () => {

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="flex flex-wrap justify-center items-center py-4 gap-3 md:gap-9">
       {products.map((product)=>{
        return ( product.map((item)=>{
              return(
                <Link key={item.id} to={{
                  pathname: `/categories/${item.categoryId}/${item.id}`
    
              }}>
                <Card description={item.description}  image={item.image} name={item.name} /> 
                </Link>
              )
          })
        )
       })}
      </div>
    </div>
  );
};

export default Items;
