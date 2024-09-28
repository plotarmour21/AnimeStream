"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimeCard } from "./AnimeCard";
import { getTopAnime, searchAnime } from "@/lib/api";

interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  genres: Array<{ name: string }>;
}

export function AnimeGrid({
  searchTerm,
  filter,
}: {
  searchTerm: string;
  filter: string;
}) {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await searchAnime(searchTerm);
        } else {
          data = await getTopAnime();
        }
        setAnimeList(data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      }
      setLoading(false);
    };

    fetchAnime();
  }, [searchTerm]);

  const filteredAnime = animeList.filter(
    (anime) =>
      filter === "all" ||
      anime.genres.some(
        (genre) => genre.name.toLowerCase() === filter.toLowerCase()
      )
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {filteredAnime.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </motion.div>
  );
}
