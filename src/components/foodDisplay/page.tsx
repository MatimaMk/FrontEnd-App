"use client";

import React, { useEffect } from "react";
import {
  useFoodItemsActions,
  useFoodItemState,
} from "@/providers/foodItemProvider";
import { useStyles } from "./styles/style";
import { IFood } from "@/providers/foodItemProvider/context";

const FoodItemsDisplay: React.FC = () => {
  const { styles } = useStyles(); // Custom styles
  const { foodItems, isPending, isError } = useFoodItemState(); // State from context
  const { getFoodItems } = useFoodItemsActions();

  // Fetch food items on component mount
  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <div>
      {foodItems && foodItems.length > 0 ? (
        foodItems.map((item: IFood) => (
          <div className={styles.card} key={item.id}>
            <h2 className={styles.title}>{item.name}</h2>
            <p className={styles.text}>
              <strong>Category:</strong> {item.category}
            </p>
            <p className={styles.text}>
              <strong>Serving Size:</strong> {item.servingsize}g
            </p>
            <p className={styles.text}>
              <strong>Protein:</strong> {item.protein}g
            </p>
            <p className={styles.text}>
              <strong>Carbs:</strong> {item.carbs}g
            </p>
            <p className={styles.text}>
              <strong>Sugar:</strong> {item.sugar}g
            </p>
            <p className={styles.text}>
              <strong>Fat:</strong> {item.fat}g
            </p>
            <p className={styles.text}>
              <strong>Fiber:</strong> {item.fiber}g
            </p>
            <p className={styles.text}>
              <strong>Sodium:</strong> {item.sodium}mg
            </p>
            <p className={styles.text}>
              <strong>Potassium:</strong> {item.potassium}mg
            </p>
            <p className={styles.text}>
              <strong>Cholesterol:</strong> {item.cholesterol}mg
            </p>
            <p className={styles.text}>
              <strong>Energy:</strong> {item.energy}kcal
            </p>
          </div>
        ))
      ) : (
        <p className={styles.noItemsMessage}>No food items found.</p>
      )}
    </div>
  );
};

export default FoodItemsDisplay;
