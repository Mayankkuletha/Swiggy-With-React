import { useEffect, useState } from "react"
import RestCard from "./RestCard"
import Shrimmer from "./Shrimmer"
export default function Restaurant(){
    const [RestData,setRestData]=useState([])
    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyApi = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.9834&lng=77.706&carousel=true";
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
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[])

    //shrimmer effect 
    if(RestData.length==0){
        return <Shrimmer></Shrimmer>
    }
    // console.log(RestData);

    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
            }
        </div>
    )
}