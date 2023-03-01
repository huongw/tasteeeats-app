import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (favorites.length >= 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  useEffect(() => {
    const favoriteItems = localStorage.getItem("favorites");

    if (favoriteItems) {
      setFavorites(JSON.parse(favoriteItems));
    }
  }, []);

  const addToFavorites = (id, title, image, heart) => {
    setFavorites((prev) => [...prev, { id, title, image, heart }]);
  };

  const removeFavorite = (id) => {
    const filtered = favorites.filter((item) => item.id !== id);
    setFavorites(filtered);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
