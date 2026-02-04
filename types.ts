import React from 'react';

export interface FoodItem {
  id: string;
  title: string;
  shop: string;
  price: number;
  imageUrl: string;
  category: string;
  tag?: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
}