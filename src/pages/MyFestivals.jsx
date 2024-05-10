import { useEffect } from "react";

import CardFestival from "../components/CardFestival";
import { useFestivalContext } from "../context/FestivalContext";
import NotFoundFestival from "../components/NotFoundFestival";
import ButtonComeBack from "../components/ButtonComeBack";

const MyFestivals = () => {
  const showButtonDeleteFavorite = true;
  const { getFavorites, favorites } = useFestivalContext();

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="min-h-[800px] w-[80%] max-w-[1440px] mx-auto">
      <div className="flex items-center justify-end mt-7">
        <ButtonComeBack />
      </div>

      <div className="flex flex-wrap gap-6 justify-center m-10">
        {favorites.length <= 0 ? (
          <NotFoundFestival />
        ) : (
          favorites.map((fest) => {
            return (
              <CardFestival
                key={fest.id}
                fest={fest}
                showButtonDeleteFavorite={showButtonDeleteFavorite}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyFestivals;
