import { FoodItem, Category } from './types';
import { Fish, Sandwich, Pizza, Coffee, Leaf, Flame } from 'lucide-react';
import React from 'react';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All', icon: <Flame size={18} /> },
  { id: 'sushi', name: 'Sushi', icon: <Fish size={18} /> },
  { id: 'burger', name: 'Burger', icon: <Sandwich size={18} /> },
  { id: 'pizza', name: 'Pizza', icon: <Pizza size={18} /> },
  { id: 'vegan', name: 'Vegan', icon: <Leaf size={18} /> },
  { id: 'sweet', name: 'Sweet', icon: <Coffee size={18} /> },
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    title: 'Spicy Tonkotsu',
    shop: 'Ramen Lord',
    price: 450.00,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop',
    category: 'sushi',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Neon Tacos',
    shop: 'Loco Chino',
    price: 280.00,
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=960&auto=format&fit=crop',
    category: 'vegan',
    tag: 'Trending',
    rating: 4.5
  },
  {
    id: '3',
    title: 'Double Smash',
    shop: 'Burger Joint',
    price: 380.00,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop',
    category: 'burger',
    rating: 4.9
  },
  {
    id: '4',
    title: 'Salmon Poke',
    shop: 'Aloha Bowl',
    price: 520.00,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
    category: 'sushi',
    rating: 4.7
  },
  {
    id: '5',
    title: 'Glazed Pop',
    shop: 'Dough & Co.',
    price: 150.00,
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop',
    category: 'sweet',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Truffle Pasta',
    shop: 'Nonna\'s',
    price: 650.00,
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000&auto=format&fit=crop',
    category: 'vegan',
    rating: 4.8
  },
  {
    id: '7',
    title: 'Lobster Roll',
    shop: 'Seaside Grill',
    price: 750.00,
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=948&auto=format&fit=crop',
    category: 'sushi',
    rating: 4.9
  }
];