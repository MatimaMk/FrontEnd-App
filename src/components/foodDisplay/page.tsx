"use client";

import React, { useEffect } from "react";
import {
  useFoodItemsActions,
  useFoodItemState,
} from "@/providers/foodItemProvider";

import { IFood } from "@/providers/foodItemProvider/context";

const FoodItemsDisplay: React.FC = () => {
  const { foodItems, isError, isPending } = useFoodItemState(); // State from context
  const { getFoodItems } = useFoodItemsActions();

  useEffect(() => {
    getFoodItems(); // Fetch food items when the component mounts
  }, []);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>No Food Items</p>;
  }

  // Ensure foodItems is not empty
  if (!foodItems || foodItems.length === 0) {
    return <p>No Food Items Available</p>;
  }

  if (!Array.isArray(foodItems) || foodItems.length === 0) {
    return <p>No Food Items Available</p>;
  }

  return (
    <div>
      <h1>Food Items</h1>
      {foodItems.map((item: IFood) => (
        <div key={item.id}>
          {" "}
          {/* Use 'id' instead of '_id' for consistency */}
          <h2>{item.name}</h2>
          <p>Category: {item.category}</p>
          <p>Serving Size: {item.servingsize}g</p>
          <p>Protein: {item.protein}g</p>
          <p>Carbs: {item.carbs}g</p>
          <p>Sugar: {item.sugar}g</p>
          <p>Fat: {item.fat}g</p>
          <p>Fiber: {item.fiber}g</p>
          <p>Sodium: {item.sodium}mg</p>
          <p>Potassium: {item.potassium}mg</p>
          <p>Cholesterol: {item.cholesterol}mg</p>
          <p>Energy: {item.energy} kcal</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FoodItemsDisplay;
