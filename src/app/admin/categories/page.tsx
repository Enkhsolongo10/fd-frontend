'use client';
import Image from "next/image";
import {useEffect, useState} from 'react';
import {Badge} from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogTitle} from "@/components/ui/dialog";
import { CategoryType } from "@/constants/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Category() {

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [value, setValue]=useState<any>()

  const pathname = usePathname();
  const searchParam = useSearchParams();
  const chosenCategory = searchParam.get("category");
  const router = useRouter();
  
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
  
  return(
    <div className="mt-[30px] ml-[20px] mb-[20px] bg-white h-[176px] w-[1430px] rounded-xl flex flex-col justify-center items-start pl-5 gap-4">
      <p className="text-lg font-semibold h-[28px]">Dishes Category</p>

      <div className="text-sm font-medium flex flex-wrap gap-4">
        {categories.map((category) => (
          <Badge className="hover:bg-[#EF4444] hover:border-black hover:text-white w-[145px] h-[36px] rounded-full bg-white border-[1px] border-[#E4E4E7] text-black" 
                 key={category?._id}>
                 {category?.categoryName}
          </Badge>
        ))}

        <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#EF4444] w-[40px] h-[40px] text-white rounded-full text-3xl">+</button>
            </DialogTrigger>
            <DialogContent className="w-[460px] h-[272px] p-8 rounded-xl">
              <DialogTitle className="font-semibold">Add new category</DialogTitle>
            
              <DialogTitle className="text-sm font-medium">Category name</DialogTitle>
              <input 
                className="text-sm -mt-10 h-[38px] p-1 border border-1 border-[#E4E4E7] rounded-md hover:border hover:border-black"
                type="text" 
                placeholder="Type category name..."
                onChange={(e) => setValue(e.target.value)}
              />
  
              <div className="flex justify-end">
                <button 
                  onClick={()=>addCategory(value)} 
                  className="-mb-9 bg-black p-2 rounded-xl text-white w-[123px] h-[40px]">
                  Add category
                </button>
              </div>
            </DialogContent>
        </Dialog>
      </div>

    </div>
  )
};