export function Footer(){
    return(
        <div className="h-[355px] w-[full] bg-[#18181B] flex flex-col justify-around">
            <img className="mt-2" src="headerContainer.png"/>

            <div className="flex items-start gap-5 pl-5">
                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-[46px] h-[37.29px]" src="headerLogo.png"/>
                    <div>
                        <div className="flex">
                            <p className="text-[#FAFAFA] text-xl font-semibold">Nom</p>
                            <p className="text-red-600 text-xl font-semibold">Nom</p>
                        </div>
                        <p className="text-[#F4F4F5] text-sm">Swift Delivery</p>   
                    </div>
                </div>

                <div className="flex gap-3">

                    <div className="text-white flex flex-col gap-1">
                        <p className="text-[#71717A]">NOMNOM</p>
                        <p>Home</p>
                        <p>Contact us</p>
                        <p>Delivery zone</p>
                    </div>

                    <div className="text-white flex gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-[#71717A]">MENU</p>
                            <p>Appetizers</p>
                            <p>Salads</p>
                            <p>Pizzas</p>
                            <p>Main dishes</p>
                            <p>Desserts</p>
                        </div>
                        <div className="flex flex-col gap-1 mt-7">
                            <p>Side dish</p>
                            <p>Brunch</p>
                            <p>Desserts</p>
                            <p>Beverages</p>
                            <p>Fish & Sea foods</p>
                        </div>
                    </div>
                </div>  
            </div>

                    <div className="flex items-center pl-5">
                        <p className="text-[#71717A]">FOLLOW US</p>
                        <div className="flex gap-1 ml-1">
                            <img className="w-[28px] h-[28px]" src="fblogo.png"/>
                            <img className="w-[28px] h-[28px]" src="iglogo.png"/>
                        </div>
                    </div>

              
            <div className="pl-5 text-[#71717A] text-sm flex items-center gap-5">
                <p>Copy right 2024 Nomnom LLC</p>
                <p>Privacy policy</p>
                <p>Terms and condition</p>
                <p>Cookie policy</p>
            </div>

        </div>
    )
};