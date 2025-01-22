'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';
import { FoodType } from "@/constants/types";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Food() {

    const [foods, setFoods] = useState<FoodType[]>([]);
    const [value, setValue] = useState<any>()

    const addFood = async (value:any) => {
        const response = await fetch('http://localhost:8000/food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:value, price:value, category:value, ingredients:value})
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/food');
            const data = await response.json();
            setFoods(data);
        };
        fetchData();
    }, [value]);

    return( 
        <div className="w-[1171px] h-[582px] bg-white rounded-xl ml-[20px] mb-[20px] p-5 flex">
            <p className="text-xl font-semibold">Appetizers</p>
            <div>{foods.map((name, category) => (
                <div className="mt-4 p-3 w-[270.75px] h-[241px] bg-white border border-[#E4E4E7] rounded-xl flex flex-col justify-end items-center">
                    <img className="mb-5" src="appetizer.png" alt="appetizer"/>
                    <div className="w-[238.75px] h-[60px] text-xs flex flex-col justify-between">
                        <div className="flex justify-between">
                            <p className="text-red-500">Brie Crostini Appatizer</p>
                            <p>12$</p>
                        </div>
                    <div>
                        <p>Fluffy pancakes stacked with fruits, cream, syrup and powdered sugar.</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="w-[270.75px] h-[241px] border border-red-500 border-dashed rounded-xl">
                        <button className="bg-[#EF4444] w-[40px] h-[40px] rounded-full text-white text-3xl font-thin">+</button>
                    </div>
                </DialogTrigger>

                <DialogContent className="w-[460px] h-[592px] pt-6 py-6">
                    <DialogTitle className="text-lg font-semibold h-[38px]">Add new Dish to Appetizers</DialogTitle>
                    <div className="flex flex-col justify-between h-[500px]">
                        <div className="flex justify-between mt-3">
                        <div>
                            <DialogTitle className="text-sm font-medium">Food name</DialogTitle>
                            <input 
                                className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                                type="text"
                                placeholder="Enter food name..."
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <div>
                            <DialogTitle className="text-sm font-medium">Food price</DialogTitle>
                            <input 
                                className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                                type="text"
                                placeholder="Enter price..."
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        </div>
                        <div>
                            <DialogTitle className="text-sm font-medium">Ingredients</DialogTitle>
                            <input 
                                className="text-sm h-[90px] w-[412px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                                type="text"
                                placeholder="List ingredients..."
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <div>
                            <DialogTitle className="text-sm font-medium">Food image</DialogTitle>
                            <input 
                                className=" mt-1 border-dashed text-sm text-black h-[90px] w-[412px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                                type="file"
                                placeholder="Choose a file or drag & drop it here"
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-end">
                            <button 
                                onClick={()=>addFood(value)} 
                                className="bg-black p-2 rounded-md text-white w-[123px] h-[40px]">
                                Add Dish
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
};