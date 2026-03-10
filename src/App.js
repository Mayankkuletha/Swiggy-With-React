import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOptions from "./components/GroceryOptions";
function App() {
    return (
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOptions></GroceryOptions>
        </>
       
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App></App>)