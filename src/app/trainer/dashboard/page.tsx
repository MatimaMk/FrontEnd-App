"use client"
import { useFoodItemsActions, useFoodItemState } from '@/providers/foodItemProvider';
import { Alert, Card, Spin } from 'antd';
import React, { useEffect } from 'react'

export const Dashboard = () => {
  const { foodItems, isPending, isError } = useFoodItemState();
  const { getFoodItems } = useFoodItemsActions();

  useEffect(() => {
    getFoodItems();
  }, []);

  if (isPending) {
    return <div> <Spin tip="Loading..." size="large" >
    <Alert
      message="fetching all the Food Items"
      description="please wait this fetching all the items."
      type="info"
    />
  </Spin>
</div>;

  
   
  }

  if (isError) {
    return <div>Error loading products!</div>;
  }

  if (!foodItems || foodItems.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    }}>
      {foodItems.map((item) => (
        <Card key={item.category} cover={
          <img alt={item.name} src={'/path/to/food-image.jpg'} 
            style={{ height: 200, objectFit: 'cover' }} />
        }>
          <div>
            <h3>{item.name}</h3>
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
            <p>Energy: {item.energy}kcal</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;