import React from "react";
import ReactDom from "react-dom/client";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import RestaurantMenu from "./components/RestaurantMenu";
import {BrowserRouter ,Routes , Route } from "react-router";
import SearchFood from "./components/SearchFood";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./stores/stores";
import {Provider} from "react-redux";
import Checkout from "./components/Checkout";
function App() {
    return (
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>

        </BrowserRouter>
        </Provider>
        </>
       
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App></App>)

//Proxy server --> "https://cors-anywhere.herokuapp.com/"