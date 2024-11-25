import { FaStar } from "react-icons/fa6"






const MovieCard =()=>{

  const  image="https://www.wallsnapy.com/img_gallery/latest-amaran-sk-movie-wallpaper-1200px-548339.jpg"
  const  movieName="Amaran"
  const certificate="UA"
  const languages="Tamil" 
  const ratings ="9.2/10"
  const views ="12.3k" 

    return(
<div className={`w-[250px] h-[430px] relative shadow-md shadow-gray-800 rounded-lg`}>
<img className={`w-[250px] h-[430px] rounded-lg absolute top-0`}
 src={image}
  alt="" />
<div className={`w-full h-[120px] absolute bottom-0 opacity-90 flex items-start justify-evenly px-2 flex-col bg-[#181921] rounded-b-lg`}>
</div>
<div className={`w-full h-[120px] absolute bottom-0 flex items-start justify-evenly px-2 flex-col rounded-b-lg`}>   
<h2 className={`font-semibold text-white`}>{movieName}</h2>
<h4 className={`font-medium text-gray-200`}>{certificate}</h4>
<h4 className={`font-medium text-sm text-gray-200`}>{languages}</h4>
<div className={` w-full flex justify-between items-center text-white`}>
<span className={`w-full flex justify-start items-center gap-1`}>
    <FaStar className={`text-yellow-500`} />
    {ratings}</span>
<span className={`w-full flex justify-end gap-1 items-center`}>
    <span className={`font-medium text-gray-200`}>Views</span>
    {views}</span>
</div>
</div>
</div>

    )


}



export default MovieCard;