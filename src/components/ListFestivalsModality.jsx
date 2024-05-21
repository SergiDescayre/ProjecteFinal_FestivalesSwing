import React, { useRef, useState, useEffect } from "react";
import CardFestival from "./CardFestival";
import { useFestivalContext } from "../context/FestivalContext";

import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import Loading from "./Loading";
import NotMatchesFestival from "./NotMatchesFestival";

const ListFestivalsModality = ({ title, modality }) => {
  const { isFoundFestival } = useFestivalContext();
  const showButtonAddFavorite = true;
  const [scrollable, setScrollable] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setScrollable(container.scrollWidth > container.clientWidth);
      // Verificar si debe mostrar u ocultar las flechas al inicio
      setShowLeftArrow(container.scrollLeft > 0);
      // Verificar si debe mostrar u ocultar las flechas al final
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  }, [modality]);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollDistance = window.innerWidth / 2; // Ajusta el valor para controlar la cantidad de desplazamiento
      if (direction === "left") {
        container.scrollTo({
          left: container.scrollLeft - scrollDistance,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        container.scrollTo({
          left: container.scrollLeft + scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  modality.sort((a, b) => new Date(a.data_start) - new Date(b.data_start));

  return (
    <div className="relative pb-2 pt-6">
      <div className="flex items-center justify-between border-t-2 border-b-2 py-3 border-orange-200 w-[80%] max-w-[1400px] mx-auto">
        <span className="text-1xl text-secondary">{title}</span>
        {scrollable && (
          <div className="flex gap-2">
            {showLeftArrow && (
              <div
                className="cursor-pointer text-zinc-900"
                onClick={() => handleScroll("left")}
              >
                <img className="w-6" src={arrowLeft} alt="left" />
              </div>
            )}
            {showRightArrow && (
              <div
                className="cursor-pointer text-zinc-900"
                onClick={() => handleScroll("right")}
              >
                <img className="w-6" src={arrowRight} alt="right" />
              </div>
            )}
          </div>
        )}
      </div>
      {modality.length === 0 && isFoundFestival ? (
        <Loading title="Cargando..." />
      ) : (
        <div
          className="relative overflow-hidden overflow-x-auto white-space-no-wrap  flex  gap-10 m-5 w-[80%] max-w-[1400px] mx-auto"
          ref={containerRef}
          onScroll={() => {
            const container = containerRef.current;
            // Verificar si debe mostrar u ocultar las flechas al inicio
            setShowLeftArrow(container.scrollLeft > 0);
            // Verificar si debe mostrar u ocultar las flechas al final
            setShowRightArrow(
              container.scrollLeft <
                container.scrollWidth - container.clientWidth - 1
            );
          }}
        >
          {modality.length === 0 && <NotMatchesFestival />}
          {modality.map((fest) => (
            <CardFestival
              key={fest.id}
              fest={fest}
              showButtonAddFavorite={showButtonAddFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListFestivalsModality;
