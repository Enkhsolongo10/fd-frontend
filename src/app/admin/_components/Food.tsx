'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';

type FoodType = {
    foodName: string;
    foodCategory: string;
    foodPrice: number;
    foodImage: string;
    foodIngredients: string
};

export function Food() {
    const [foods, setFoods] = useState<FoodType[]>([]);

    const addFoods = async () => {
        const categoryName = prompt('enter your food')
        const response = await fetch('http://localhost:8000/food');
    }
    return(
        <div className="w-[1171px] h-[582px] bg-white rounded-xl ml-[20px] mb-[20px]">
            CARDS
        </div>
    )
};