import { useFestivalContext } from "../context/FestivalContext";

import trash from "../assets/trash.svg";

const ButtonDeleteFav = ({ fest }) => {
  const { deleteFavorite } = useFestivalContext();
  const handleFavorites = (id, e) => {
    e.stopPropagation();
    deleteFavorite(id);
  };

  return (
    <div onClick={(e) => handleFavorites(fest.id, e)}>
      <img src={trash} alt="trash" className="cursor-pointer" />
    </div>
  );
};

export default ButtonDeleteFav;
