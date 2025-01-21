'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';

type FoodType = {
    name: string;
    category: string;
    price: number;
    image: string;
    ingredients: string;
};

export function Food() {
    const [foods, setFoods] = useState<FoodType[]>([]);


    // const addFood = async () => {
    //     const food: any = [foodName, foodPrice, foodIngredients];
    //     const response = await fetch('http://localhost:8000/food', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({food}),
    //     });

    //     const data = await response.json();
    //     setFoodName([...foodName, data.newItem]);
    // };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/food');
            const data = await response.json();
            setFoods(data);
        };
        fetchData();
    }, []);

    return(
        <div className="w-[1171px] h-[582px] bg-white rounded-xl ml-[20px] mb-[20px]">
            <p className="text-lg font-semibold">Salads</p>
            <div>
                {foods.map((food) => (
                    <div>{food?.name}</div>
                ))}
            </div>
        </div>
    )
};