export function Header() {
    return(
        <div className="h-[68px] bg-[#18181B] p-3 flex justify-between">
            <div className="h-[44px] flex items-center gap-3">
                <img className="w-[46px] h-[37.29px]" src="headerLogo.png"/>
                <div>
                    <div className="flex">
                        <p className="text-[#FAFAFA] text-xl font-semibold">Nom</p>
                        <p className="text-red-600 text-xl font-semibold">Nom</p>
                    </div>
                    <p className="text-[#F4F4F5] text-sm">Swift Delivery</p>   
                </div>
            </div>
            <div className="flex items-center gap-3">
                <input 
                type="text"
                placeholder="Delivery address: Add Location >"
                className="pl-2 h-[36px] rounded-full"
                />
                <button className="w-[36px] h-[36px] bg-white rounded-full">+</button>
            </div>
        </div>
    )
};