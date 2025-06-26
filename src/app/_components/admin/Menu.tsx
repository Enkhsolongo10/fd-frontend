"use client";

import { FoodType, FormType } from "@/constants/types";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Uploader } from "./ImageUploader";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AdminMenu() {
  const { user, isLoaded } = useUser();
  const searchParam = useSearchParams();
  const category = searchParam.get("category") || "Appetizers";
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [form, setForm] = useState<FormType>({
    name: "",
    price: "",
    ingredients: "",
    image: "",
    category: category,
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/admin/food");
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error("Failed to fetch foods", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addFood = async () => {
    try {
      await fetch("http://localhost:8000/admin/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      await fetchData();

      setForm({
        name: "",
        price: "",
        ingredients: "",
        image: "",
        category: category,
      });
    } catch (error) {
      console.error("Failed to add food", error);
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  if (!isLoaded) return null;

  return (
    <div className="w-[1260px] h-[582px] bg-white rounded-xl mb-[20px] p-5 flex flex-col">
      <p className="text-lg font-semibold">{category}</p>
      <div className="flex flex-wrap gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-[270.75px] h-[241px] border border-[#EF4444] border-dashed rounded-xl flex flex-col justify-center items-center cursor-pointer">
              <div className="bg-[#EF4444] w-[40px] h-[40px] rounded-full text-white text-3xl font-thin flex justify-center items-center">
                +
              </div>
              <p>Add new dish</p>
            </div>
          </DialogTrigger>

          <DialogContent className="w-[460px] h-[592px] pt-6 py-6">
            <DialogTitle className="text-lg font-semibold h-[38px]">
              Add new Dish to {category}
            </DialogTitle>

            <div className="flex flex-col justify-between h-[500px]">
              <div className="flex justify-between mt-3">
                <div>
                  <DialogTitle className="text-sm font-medium">
                    Food name
                  </DialogTitle>
                  <input
                    name="name"
                    value={form.name}
                    className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-[#E4E4E7] rounded-md hover:border-black"
                    type="text"
                    placeholder="Enter food name..."
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <DialogTitle className="text-sm font-medium">
                    Food price
                  </DialogTitle>
                  <input
                    name="price"
                    value={form.price}
                    className="mt-1 text-sm h-[38px] w-[194px] p-1 border border-[#E4E4E7] rounded-md hover:border-black"
                    type="number"
                    placeholder="Enter price..."
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div>
                <DialogTitle className="text-sm font-medium">
                  Ingredients
                </DialogTitle>
                <textarea
                  name="ingredients"
                  value={form.ingredients}
                  className="mt-1 text-sm w-[412px] p-1 border border-[#E4E4E7] rounded-md hover:border-black"
                  rows={4}
                  placeholder="List ingredients..."
                  onChange={handleInput}
                />
              </div>

              <div>
                <DialogTitle className="text-sm font-medium">
                  Food image
                </DialogTitle>
                <Uploader
                  onUpload={(url) =>
                    setForm((prev) => ({ ...prev, image: url }))
                  }
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={addFood}
                  className="bg-black p-2 rounded-md text-white w-[123px] h-[40px]"
                  disabled={
                    !form.name ||
                    !form.price ||
                    !form.ingredients ||
                    !form.image
                  }
                >
                  Add Dish
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex flex-wrap">
          {foods.map((food) => (
            <div
              key={food._id}
              className="p-3 w-[271px] h-[241px] bg-white border border-[#E4E4E7] rounded-xl flex flex-col"
            >
              <div className="flex flex-col justify-start">
                <img
                  className="w-[238.75px] h-[129px] rounded-lg object-cover"
                  src={food.image}
                  alt={food.name}
                />
                <div className="flex justify-between mt-5">
                  <p className="text-red-500">{food.name}</p>
                  <p>{food.price}</p>
                </div>
                <p className="mt-2">{food.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}