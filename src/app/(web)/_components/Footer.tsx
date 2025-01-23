export function Footer(){
    return(
        <div className="h-[655px] bg-[#18181B] flex flex-col justify-around items-center">

            <div className="h-[228px] w-[1264px] flex justify-between items-start">

                <div className="flex flex-col justify-center items-center gap-3">
                    <img className="w-[46px] h-[37.29px]" src="headerLogo.png"/>
                    <div>
                        <div className="flex">
                            <p className="text-[#FAFAFA] text-xl font-semibold">Nom</p>
                            <p className="text-red-600 text-xl font-semibold">Nom</p>
                        </div>
                        <p className="text-[#F4F4F5] text-sm">Swift Delivery</p>   
                    </div>
                </div>

                <div className="w-[788px] h-[228px] flex justify-around">

                    <div className="-ml-11 text-white w-[122px] h-[148px] flex flex-col gap-4">
                        <p className="text-[#71717A]">NOMNOM</p>
                        <p>Home</p>
                        <p>Contact us</p>
                        <p>Delivery zone</p>
                    </div>

                    <div>
                        <div className="w-[320px] text-white flex justify-between">
                            <div className="flex flex-col gap-4">
                                <p className="text-[#71717A]">MENU</p>
                                <p>Appetizers</p>
                                <p>Salads</p>
                                <p>Pizzas</p>
                                <p>Main dishes</p>
                                <p>Desserts</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-10">
                                <p>Side dish</p>
                                <p>Brunch</p>
                                <p>Desserts</p>
                                <p>Beverages</p>
                                <p>Fish & Sea foods</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[122px] h-[82px] flex flex-col justify-between">
                        <p className="text-[#71717A]">FOLLOW US</p>
                        <div className="flex gap-3">
                            <img className="w-[28px] h-[28px]" src="fblogo.png"/>
                            <img className="w-[28px] h-[28px]" src="iglogo.png"/>
                        </div>
                    </div>
                </div>

            </div>  
              
            <div className="w-[1264px] h-[84px] text-[#71717A] text-sm flex items-center gap-12">
                <p>Copy right 2024 Nomnom LLC</p>
                <p>Privacy policy</p>
                <p>Terms and condition</p>
                <p>Cookie policy</p>
            </div>

        </div>
    )
};