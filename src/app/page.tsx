import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import Product from "@/components/Home/Product";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Creativa",
};

export default function Home() {
  return (
    <main className="bg-gradient-custom">
      <Expert />
      <Product />  
      <Hero />
      <Features />
      <Cook />
      <Gallery />
      <Newsletter />
    </main>
  );
}
