"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterMenuProps {
  onFilter: (filter: string) => void
}

export function FilterMenu({ onFilter }: FilterMenuProps) {
  return (
    <Select onValueChange={onFilter} defaultValue="all">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Genres</SelectItem>
        <SelectItem value="action">Action</SelectItem>
        <SelectItem value="comedy">Comedy</SelectItem>
        <SelectItem value="drama">Drama</SelectItem>
        <SelectItem value="fantasy">Fantasy</SelectItem>
        <SelectItem value="sci-fi">Sci-Fi</SelectItem>
      </SelectContent>
    </Select>
  )
}