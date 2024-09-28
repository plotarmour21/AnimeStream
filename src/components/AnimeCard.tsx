"use client"; // Ensure this line is at the top of your file

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"; // Import the Image component

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
          <Image
            src={anime.images.jpg.image_url}
            alt={anime.title}
            width={300} // Specify the width
            height={200} // Specify the height
            className="w-full h-48 object-cover"
            priority // Optional: load the image with high priority
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
