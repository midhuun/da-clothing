type Description = {
    name:string;
    image:string;
}
const Card = (props:Description) => {
  return (
    <div  className="flex justify-center py-3 flex-col items-center md:h-[300px] rounded-md md:w-[250px] h-[210px] w-[150px] border shadow-sm">
            <div className="flex justify-center items-center p-1 ">
            <img className=" md:h-[230px] md:w-[250px] h-[140px] w-[160px] object-contain p-1" src={props.image} alt={props.name} />
            </div>
            <div className="h-[70px] flex w-full justify-center items-center">
            <h1 className="lg:font-semibold card  h-[60px] text-[12px] text-wrap p-2 lg:text-md">{props.name}</h1>
            </div>
        </div>
  )
}

export default Card
