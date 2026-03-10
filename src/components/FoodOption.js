import { imageGridCards } from "../utils/FoodData"
import FoodCard from "./FoodCard"
export default function FoodOption(){
    return(
        <>
        <div>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-15">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} ></FoodCard>)
                }
            </div>
        </div>
        </>
    )
}