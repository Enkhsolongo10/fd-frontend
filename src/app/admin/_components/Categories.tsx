'use client';

import Image from "next/image";
import {useEffect, useState} from 'react';
import {Badge} from '@/components/ui/badge'


type CategoryType = {
  categoryName: string;
  _id: string;
};

export function Category() {

  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const categoryName = prompt('Enter your category!');
    const response = await fetch('http://localhost:8000/food-category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ categoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/food-category');
      const data = await response.json();
      setCategories(data);
    };
    fetchData(); 
  }, []);

  console.log(categories)
  return(
    <div className="m-[80px] bg-white h-[176px] w-[1171px] rounded-xl flex flex-col justify-center items-center gap-4">
      <p className="text-lg font-semibold h-[28px] w-[1123px]">Dishes Category</p>

      <div className="w-[1123px] h-[84px] text-sm font-medium">
        {categories.map((category) => (
          <Badge className="w-[145px] h-[36px] rounded-full bg-white border-[1px] border-[#E4E4E7] text-black" key={category?._id}>{category?.categoryName}</Badge>
        ))}
        <button className="bg-red-300 p-2 rounded-full" onClick={addCategory}>Add Category</button>
      </div>

    </div>
  )
}