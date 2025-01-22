import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export const Cat = ()=>{
    return (
        <div className="w-[1171px] h-[582px] bg-white rounded-xl ml-[20px] mb-[20px] p-5 flex">
        <p className="text-xl font-semibold">Appetizers</p>
        <div className="flex flex-wrap">{foods.map((food, index) => (
            <div key={food._id} className="mt-4 p-3 w-[270.75px] h-[241px] bg-white border border-[#E4E4E7] rounded-xl flex flex-col justify-end items-center">
                <div className="w-[238.75px] h-[60px] text-xs flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div>{food.image}</div>
                        <p className="text-red-500">{index + 1}{". "}{food.name}</p>
                        <p>{food.price}</p>
                    </div>
                    <div>
                        <p> {food.ingredients}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-[270.75px] h-[241px] border border-red-500 border-dashed rounded-xl flex flex-col justify-center items-center">
                    <button  onClick={()=>{
                        // setForm({
                        //     ...form,
                        //     category: ""
                        // })
                    }} className="bg-[#EF4444] w-[40px] h-[40px] rounded-full text-white text-3xl font-thin">+</button>
                    <p>Add new dish To Appetizers</p>
                </div>
            </DialogTrigger>

            <DialogContent className="w-[460px] h-[592px] pt-6 py-6">
                <DialogTitle className="text-lg font-semibold h-[38px]">Add new Dish to Appetizers</DialogTitle>
                <div className="flex flex-col justify-between h-[500px]">
                    <div className="flex justify-between mt-3">
                    <div>
                        <DialogTitle className="text-sm font-medium">Food name</DialogTitle>
                        <input 
                            name="name"
                            className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                            type="text"
                            placeholder="Enter food name..."
                            onChange={(e) => {
                                setValue(e.target.value)
                                handleInput(e)
                            }}
                        />
                    </div>
                    <div>
                        <DialogTitle className="text-sm font-medium">Food price</DialogTitle>
                        <input 
                            name="price"
                            className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                            type="number"
                            placeholder="Enter price..."
                            onChange={(e) => {setValue(e.target.value)
                                handleInput(e)
                            }}
                        />
                    </div>
                    </div>
                    <div>
                        <DialogTitle className="text-sm font-medium">Ingredients</DialogTitle>
                        <input 
                            name="ingredients"
                            className="text-sm h-[90px] w-[412px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                            type="text"
                            placeholder="List ingredients..."
                            onChange={(e) => {setValue(e.target.value);handleInput(e)}}
                        />
                    </div>
                    <div>
                        <DialogTitle className="text-sm font-medium">Food image</DialogTitle>
                        <input 
                            name="image"
                            className=" mt-1 border-dashed text-sm text-black h-[90px] w-[412px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                            type="file"
                            placeholder="Choose a file or drag & drop it here"
                            onChange={(e) => {setValue(e.target.value);handleInput(e)}}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button 
                            onClick={addFood} 
                            className="bg-black p-2 rounded-md text-white w-[123px] h-[40px]">
                            Add Dish
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
       
    </div>
    )
}