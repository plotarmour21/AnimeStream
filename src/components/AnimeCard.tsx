"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AnimeCardProps {
  anime: {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    genres: Array<{ name: string }>;
  };
}

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{anime.title}</h3>
            <p className="text-sm text-gray-500">
              {anime.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
