import { GrocerGridCard } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";
export default function GroceryOptions(){
return(
    <div className="mt-20 w-[80%] container mx-auto">
        <h1>Shop Grocerries on Instamart</h1>
        <div className="w-[80%] container mx-auto">
            {
                GrocerGridCard.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
            }
        </div>
    </div>
)
}