import { GrocerGridCard } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";
export default function GroceryOptions(){
return(
    <div className="mt-20 w-[80%] container mx-auto">
        <h1 className="text-2xl font-bold">Shop Grocerries on Instamart</h1>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto gap-4 mt-5">
            {
                GrocerGridCard.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
            }
        </div>
    </div>
)
}