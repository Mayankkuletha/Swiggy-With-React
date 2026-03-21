export default function RestInfo ({restData}){
    return(
        <>
        
        <div className="w-full flex justify-between mb-2 pb-2">
            <div className="w-[70%]">
            <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
            <p className="text-xl">{"₹"+("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <span className="text-green-700">{restData?.rating?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.rating?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>
                {restData.description}
            </p>
            </div>
            <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
            <button className="absolute bottom-1 left-20 rounded-xl text-xl  text-green-600 px-6 py-2 shadow-md border border-white bg-white">ADD</button>
            </div>
        </div>
        <hr className="mb-6 mt-2 "></hr>
        </>
    )
}