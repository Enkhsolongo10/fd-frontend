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
        <div>j</div>
    )
};