//first div-->logo of swiggy.
export default function Header() {
    return(
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className="text-base text-[#ffff] font-bold  flex gap-10 items-center">
                    <a target="blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="blank" href="https://partner.swiggy.com/food/#!/login">Partner With us</a>
                    <a className="border border-white rounded-2xl px-4 py-3" target="blank" href="https://partner.swiggy.com/food/#!/login">Get the app</a>
                    <a className="border border-black rounded-2xl bg-[#000000] px-5  py-3" target="blank" href="https://partner.swiggy.com/food/#!/login">Sign In</a>
                </div>
            </div>
            <div className="pt-16 pb-8 relative">
                <img className="absolute w-60 h-110 top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="absolute w-60 h-110  top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-white font-bold text-4xl max-w-[60%] container mx-auto text-center">
                    Order Food and groceries , Discover Best Restraurents. Swiggy It.
                </div>
                <div className="max-w-[55%] conatiner mx-auto flex gap-5 mt-10">
                    <input className="bg-white w-[40%] text-xl px-6 py-3 rounded-2xl" placeholder="Enter your Delievery Location"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-3 rounded-2xl" placeholder="Search for restraurent , item or more."></input>
                </div>
            </div>
            <div className=" max-w-[80%] container mx-auto flex">
                <a href="https://www.swiggy.com/restaurants">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"></img>
                </a>
               
            </div>
        </header>
    )
}