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
    <div>
      {categories.map((category) => (
        <Badge key={category?._id}>{category?.categoryName}</Badge>
      ))}
      <button className="bg-red-300 p-2 rounded-lg" onClick={addCategory}>Add Category</button>
    </div>
  )
}