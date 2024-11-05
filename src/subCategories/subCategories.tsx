import { Link, useParams } from "react-router-dom";
import AllProducts from '../categories';

const SubCategories:React.FC = () => {
    const {category} = useParams(); 
    const current = AllProducts.find((cat)=>cat.id === category) || null;
  return (
    <div className="w-full">
        <div className="flex justify-center  w-full gap-3 md:gap-5 flex-wrap py-1">
            {current?.subCategories?.map((cat)=>
            <Link  key={cat.id} to={`/categories/${category}/${cat.id}`}> <div  className="flex  flex-col items-center md:h-[450px] rounded-md md:w-[350px] h-[250px] w-[150px] border ">
                <div className="flex justify-center items-center p-1 overflow-hidden ">
                <img className=" md:h-[300px] md:w-[300px] h-[140px] w-[130px] object-contain p-1" src={cat.image} alt={cat.name} />
                </div>
                <div>
                <h1 className="lg:font-semibold text-sm text-center text-wrap p-2 lg:text-md">{cat.name}</h1>
                <p className="text-[10px] p-2 mb-2 md:p-3 md:text-sm text-gray-500 line-clamp-3">{cat.description.split(" ").slice(0,9).join(" ")}</p>
                </div>
            </div>
            </Link>
            )}
            
        </div>
    </div>
  )
}

export default SubCategories;
