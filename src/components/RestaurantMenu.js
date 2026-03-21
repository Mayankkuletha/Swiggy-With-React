import { useEffect, useState } from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router";

export default function RestaurantMenu(){
    let {id} = useParams();
    const[selected,setSelected]=useState(null);
    console.log(id);
    const[RestData,setRestData]=useState([]);
   useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            const response = await fetch(proxyServer + swiggyApi, {
                headers:{
                    "X-Requested-With":"XMLHttpRequest"
                }
            });
            if (!response.ok) {
                console.log("Error",response.status);
                return;
            }
            const data =  await response.json();
            const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData=tempData.filter((items=>'title' in items?.card?.card));
            setRestData(filterData);
        }
        fetchData();
    },[])

    console.log(setRestData);

     if(RestData.length==0){
            return <Shrimmer></Shrimmer>
        }
    return(
        <>
        <div>
            <Link to={`/city/delhi/${id}/search`}>
           
            <div className="w-[80%] mt-20 mx-auto mb-20">
                <p className="w-full text-center py-4 rounded-3xl bg-gray-200 text-2xl">Search for Dishes</p>
            </div>
            </Link>
        <div className="w-[80%] mt-20 mx-auto mb-20">
            <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl cursor-pointer ${selected==="veg"?"bg-green-600":"bg-gray-300"} `} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl cursor-pointer ${selected==="nonveg"?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
        </div>
        <div className="w-[80%] mx-auto mt-20">
            {
                RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
            }
        </div>
        </div>
        </>
    )
}