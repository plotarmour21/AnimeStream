"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { AnimeGrid } from "@/components/AnimeGrid";
import { SearchBar } from "@/components/SearchBar";
import { FilterMenu } from "@/components/FilterMenu";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <SearchBar onSearch={setSearchTerm} />
          <FilterMenu onFilter={setFilter} />
        </div>
        <AnimeGrid searchTerm={searchTerm} filter={filter} />
      </div>
    </main>
  );
}
