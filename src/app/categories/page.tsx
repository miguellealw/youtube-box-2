"use client"
import { useState } from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  const [categories, setCategories] = useState([
    {
      name: 'Technology',
      channels: 42,
      image: '/tech.jpg'
    },
    {
      name: 'Gaming',
      channels: 28,
      image: '/gaming.jpg'  
    },
    {
      name: 'Education',
      channels: 35,
      image: '/education.jpg'
    }
  ])

  return (
    <div className="p-10">
      <h1 className="mb-8 text-2xl">Categories</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {categories.map(category => (
          <Card key={category.name}>
            <CardContent className="p-6">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={category.image}
                  alt={`${category.name} category`}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <CardHeader className="p-0">
                <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {category.channels} channels
                </p>
              </CardHeader>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}