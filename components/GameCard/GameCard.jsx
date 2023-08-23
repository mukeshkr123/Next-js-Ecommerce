import Link from "next/link";
import React from "react";
import gameCardClassNames from "./gameCardClassName";
import Image from "next/image";

const GameCard = (props) => {
  const { gameName, imageUrl, slug, price } = props;
  return (
    <Link href={`/games/${slug}`} className={gameCardClassNames.container}>
      <h3 className={gameCardClassNames.price}>{price} $</h3>
      <Image
        className={gameCardClassNames.image}
        src={imageUrl}
        alt={gameName}
        width={200}
        height={200}
      />
      <div className={gameCardClassNames.gameName}>{gameName}</div>
    </Link>
  );
};

export default GameCard;
