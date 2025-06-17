"use client";

import { FoodType } from "@/constants/types";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { Uploader } from "../_components/Uploader";
import { useUser } from "@clerk/nextjs";

export function AdminMenuPage() {
  const { user, isLoaded } = useUser();
  const searchParam = useSearchParams();
  const category = searchParam.get("category") || "";
  const id = searchParam.get("id");
  console.log({ id });

  const [foods, setFoods] = useState<FoodType[]>([]);
  const [value, setValue] = useState<any>([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    ingredients: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/food");
      const data = await response.json();
      setFoods(data);
    };
    fetchData();
  }, [value]);

  useEffect(() => {
    setForm({
      name: "",
      price: "",
      ingredients: "",
      image: "",
      category: "",
    });
  }, []);

  const addFood = async (value: any) => {
    await fetch("http://localhost:8000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form: value }),
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const field = e.target.name;
    setForm({ ...form, [field]: value });
    console.log({ form });
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="w-[1430px] h-[582px] bg-white rounded-xl ml-[20px] mb-[20px] p-5 flex flex-col">
      <div>{user?.fullName}</div>
      <p className="text-lg font-semibold">Pizzas</p>
      <div className="flex flex-wrap gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-[270.75px] h-[241px] border border-[#EF4444] border-dashed rounded-xl flex flex-col justify-center items-center">
              <button
                onClick={() => {}}
                className="bg-[#EF4444] w-[40px] h-[40px] rounded-full text-white text-3xl font-thin"
              >
                +
              </button>
              <p>Add new dish To</p>
            </div>
          </DialogTrigger>

          <DialogContent className="w-[460px] h-[592px] pt-6 py-6">
            <DialogTitle className="text-lg font-semibold h-[38px]">
              Add new Dish to Appetizers
            </DialogTitle>
            <div className="flex flex-col justify-between h-[500px]">
              <div className="flex justify-between mt-3">
                <div>
                  <DialogTitle className="text-sm font-medium">
                    Food name
                  </DialogTitle>
                  <input
                    name="name"
                    className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-[#E4E4E7] rounded-md hover:border-black"
                    type="text"
                    placeholder="Enter food name..."
                    onChange={(e) => {
                      setValue(e.target.value);
                      handleInput(e);
                    }}
                  />
                </div>
                <div>
                  <DialogTitle className="text-sm font-medium">
                    Food price
                  </DialogTitle>
                  <input
                    name="price"
                    className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-[#E4E4E7] rounded-md hover:border hover:border-black"
                    type="number"
                    placeholder="Enter price..."
                    onChange={(e) => {
                      setValue(e.target.value);
                      handleInput(e);
                    }}
                  />
                </div>
              </div>
              <div>
                <DialogTitle className="text-sm font-medium">
                  Ingredients
                </DialogTitle>
                <input
                  name="ingredients"
                  className="text-sm h-[90px] w-[412px] p-1 border border-[#E4E4E7] rounded-md hover:border hover:border-black"
                  type="text"
                  placeholder="List ingredients..."
                  onChange={(e) => {
                    setValue(value);
                    handleInput(e);
                  }}
                />
              </div>
              <div>
                <DialogTitle className="text-sm font-medium">
                  Food image
                </DialogTitle>
                <Uploader />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => addFood(value)}
                  className="bg-black p-2 rounded-md text-white w-[123px] h-[40px]"
                >
                  Add Dish
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex flex-wrap">
          {foods.map((food, index) => (
            <div
              key={food?._id}
              className="p-3 w-[271px] h-[241px] bg-white border border-[#E4E4E7] rounded-xl flex flex-col"
            >
              <div className="flex flex-col justify-start">
                <img
                  className="w-[238.75px] h-[129px] rounded-lg"
                  src={food?.image}
                />
                <div className="flex justify-between mt-5">
                  <p className="text-red-500">{food?.name}</p>
                  {/* <p className="text-red-500">{index + 1}{". "}{food.category}</p> */}
                  <p>{food?.price}</p>
                </div>
                <p className="mt-2"> {food?.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
