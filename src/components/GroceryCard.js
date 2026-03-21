
export default function GroceryCard({groceryData}){
    return(
       <div className="flex-none">
        <a href={groceryData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId}></img>
        </a>
        <h1 className="text-center font-bold">{groceryData?.action?.text}</h1>
        </div>
    )
}