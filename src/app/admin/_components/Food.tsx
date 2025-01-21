'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';
import { FoodType } from "@/constants/types";

export function Food() {

    const [foods, setFoods] = useState<FoodType[]>([]);
    const [value, setValue] = useState<FoodType>()

    const addFood = async (value:FoodType) => {
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
        <div className="w-[1171px] h-[582px] bg-white rounded-xl ml-[20px] mb-[20px] p-5">
            <p className="text-xl font-semibold">Appetizers</p>
            <div>{foods.map(() => (
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
            ))}</div>
        </div>
    )
};