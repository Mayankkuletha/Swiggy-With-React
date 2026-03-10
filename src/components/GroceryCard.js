
export default function GroceryCard({groceryData}){
    return(
       <div className="mt-15 flex flex-col">
        <a href={groceryData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId}></img>
        </a>
        </div>
    )
}