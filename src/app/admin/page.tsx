'use client';

import { Category } from './_components/Category';
import {useEffect, useState} from 'react';
import { Food } from './_components/Food';
import { useSearchParams } from 'next/navigation';
import { CategoryType } from '@/constants/types';


export default function Admin() {
    // const searchParams = useSearchParams()
    // const id = searchParams.get("id")
    // console.log(id)
    
    // const [category, setCategory] = useState<CategoryType>()
    // const [categoryId, setCategoryId] = useState({

    // });
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const response = await fetch(`http://localhost:8000/food-category/${id}`, {
    //             method: "GET"
    //         })
    //         const data = await response.json()
    //         setCategory(data)
    //     }
    //     fetchData()
    // }, [])
    return(
        <div className='flex flex-col'>
            <Category/>
            {/* {category && category.name}
            <button onClick={()=>{
                console.log(category?.categoryName)
            }}>click</button> */}
           
            <Food/>

        </div>
    )
}
