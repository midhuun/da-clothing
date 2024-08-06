import { Link, useParams } from "react-router-dom";
import AllProducts from '../categories';

const SubCategories:React.FC = () => {
    const {category} = useParams(); 
    const current = AllProducts.find((cat)=>cat.id === category) || null;
  return (
    <div className="w-full">
        <div className="flex justify-center  w-full gap-3 md:gap-5 flex-wrap py-1">
            {current?.subCategories?.map((cat)=>
            <Link  key={cat.id} to={`/categories/${category}/${cat.id}`}> <div  className="flex justify-center flex-col items-center md:h-[350px] rounded-md md:w-[350px] h-[210px] w-[150px] border ">
                <div className="flex justify-center items-center p-1 ">
                <img className=" md:h-[270px] md:w-[300px] h-[150px] w-[130px] object-contain p-1" src={cat.image} alt={cat.name} />
                </div>
                <h1 className="lg:font-semibold text-sm text-center h-[70px] text-wrap p-2 lg:text-md">{cat.name}</h1>
            </div>
            </Link>
            )}
            
        </div>
    </div>
  )
}

export default SubCategories;
