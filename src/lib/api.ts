import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTopAnime = async (page = 1, limit = 20) => {
  try {
    const response = await api.get(`/top/anime`, {
      params: { page, limit },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching top anime:", error);
    throw error;
  }
};

export const searchAnime = async (query: string, page = 1, limit = 20) => {
  try {
    const response = await api.get(`/anime`, {
      params: { q: query, page, limit },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error searching anime:", error);
    throw error;
  }
};

export const getAnimeDetails = async (id: number) => {
  try {
    const response = await api.get(`/anime/${id}/full`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching anime details:", error);
    throw error;
  }
};

export const getSeasonalAnime = async (
  year: number,
  season: string,
  page = 1,
  limit = 20
) => {
  try {
    const response = await api.get(`/seasons/${year}/${season}`, {
      params: { page, limit },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching seasonal anime:", error);
    throw error;
  }
};

export const getAnimeGenres = async () => {
  try {
    const response = await api.get("/genres/anime");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching anime genres:", error);
    throw error;
  }
};
