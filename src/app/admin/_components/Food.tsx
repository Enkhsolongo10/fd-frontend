'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';
import { CategoryType, FoodType } from "@/constants/types";
import { Menu } from "../menu/page";

export function Food() {

    const [category, setCategory] = useState<CategoryType>();
    const [food, setFood] = useState<FoodType[]>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/food');
            const data = await response.json();
        };
        fetchData();
    }, []);

    return( 
        <div>
            <Menu/>
        </div>
    )
};

