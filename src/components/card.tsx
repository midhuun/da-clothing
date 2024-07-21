type Description = {
    name:string;
    image:string;
}
const Card = (props:Description) => {
  return (
    <div  className="flex justify-center py-3 flex-col items-center md:h-[350px] rounded-md md:w-[250px] h-[200px] w-[130px]  shadow-md">
            <div className="flex justify-center items-center p-1 ">
            <img className=" md:h-[300px] md:w-[200px] h-[130px] w-[130px] object-contain p-1" src={props.image} alt={props.name} />
            </div>
            <div className="h-[60px]">
            <h1 className="lg:font-semibold h-[50px] text-[12px] text-wrap p-2 lg:text-md">{props.name}</h1>
            </div>
        </div>
  )
}

export default Card
