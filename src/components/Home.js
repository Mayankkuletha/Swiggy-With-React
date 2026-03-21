import Header from "./Header";
import FoodOption from "./FoodOption"
import GroceryOptions from "./GroceryOptions"
import DineOption from "./DineOption"
export default function Home(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOptions></GroceryOptions>
        <DineOption></DineOption>
        </>
    )
}