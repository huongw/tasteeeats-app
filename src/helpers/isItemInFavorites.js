export default function isItemInFavorites(id, favorites) {
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === id) {
      return true;
    }
  }
  return false;
}
