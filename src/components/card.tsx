type Description = {
    name:string;
    image:string;
    description:string
}
const Card = (props:Description) => {
  return (
    <div className="flex flex-col items-center overflow-hidden  md:p-4 p-1 bg-white rounded-md shadow-md md:h-[450px] md:w-[350px] h-[250px] w-[150px] border border-gray-200">
    {/* Image Section */}
    <div className="flex justify-center items-center p-1 md:p-2">
        <img 
            className="object-contain h-[140px] md:h-[280px] w-[160px] md:w-[330px]" 
            src={props.image} 
            alt={props.name} 
        />
    </div>
    
    {/* Name Section */}
    <div className="flex flex-col  items-center  mt-2 md:mt-4">
        <h1 className="font-semibold text-[12px] md:text-lg text-gray-800">{props.name}</h1>
    </div>
    
    {/* Description Section */}
    <div className="flex  items-center  mt-1 md:mt-2">
        <p className="text-[10px] md:text-sm text-gray-600 px-3 line-clamp-3">{props.description.split(" ").slice(0,9).join(" ")}</p>
    </div>
</div>

  )
}

export default Card
