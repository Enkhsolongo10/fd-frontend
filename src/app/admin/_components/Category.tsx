'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';
import {Badge} from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogTitle} from "@/components/ui/dialog";



type CategoryType = {
  categoryName: string;
  _id: string;
};

type InputType = {
    value: string[];
}



export function Category() {

  const [categories, setCategories] = useState<any[]>([]);
  const [value,setValue]=useState<any>()

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/food-category');
      const data = await response.json();
      setCategories(data);
    };
    fetchData(); 
   
  }, [value]);
  
  const addCategory = async (value:any) => {
    await fetch('http://localhost:8000/food-category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({categoryName:value}),
    });
    
   
   
  };
  console.log(value)

 ``

  return(
    <div className="m-[80px] bg-white h-[176px] w-[1171px] rounded-xl flex flex-col justify-center items-center gap-4">
      <p className="text-lg font-semibold h-[28px] w-[1123px]">Dishes Category</p>

      <div className="w-[1123px] h-[84px] text-sm font-medium">
        {categories.map((category) => (
          <Badge className="w-[145px] h-[36px] rounded-full bg-white border-[1px] border-[#E4E4E7] text-black" key={category?._id}>{category?.categoryName}</Badge>
        ))}
        <Dialog>
            <DialogTrigger asChild>
              <button className="bg-red-300 p-2 rounded-full">ADD</button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Add new category</DialogTitle>
              <input 
              type="text" 
              placeholder="Type category name..."
             
              onChange={(e) => setValue(e.target.value)}
              />
             
              <button onClick={()=>addCategory(value)} className="bg-black p-2 rounded-xl text-white">Add category</button>
            </DialogContent>
        </Dialog>
      </div>

    </div>
  )
}