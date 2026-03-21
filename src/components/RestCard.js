import { Link } from "react-router"
export default function RestCard({restInfo}){

    return(
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        
        <div className="max-w-70 mb-2 transform transition duration-200 hover:scale-95">
         <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
         <div className="w-[95%] mx-auto mt-3">
         <div className="font-bold">{restInfo?.info?.name}</div>
         <div className="flex items-center gap-2">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="green"
        className="w-4 h-4 mr-1"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
         <span className="text-lg">{restInfo?.info?.avgRating}</span>
         <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
           </div>
           <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
         </div>
        </div>
        </Link>
    )
}