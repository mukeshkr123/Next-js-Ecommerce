import Link from "next/link";
import Image from "next/image";
import NextImage from "next/image"; // Import the NextImage component

const GameCategoryCard = ({ categoryImage, categoryName, slug, name }) => {
  return (
    <Link
      href={`categories/${slug}`}
      className={gameCategoryCardClassNames.container}
    >
      <Image
        src={categoryImage}
        alt={name}
        width={200}
        height={200}
        className={gameCategoryCardClassNames.image}
      />
      <h3 className={gameCategoryCardClassNames.name}>{categoryName}</h3>
      <NextImage // Use NextImage for the arrow SVG
        src="/images/arrow.svg"
        alt="view"
        width={20}
        height={20}
        className={`rounded-full mx-auto ${gameCategoryCardClassNames.arrow}`} // Add the 'rounded-full' class
      />
    </Link>
  );
};

const gameCategoryCardClassNames = {
  container: "max-w-xs mx-auto lg:max-w-none lg:w-56 xl:w-64",
  image:
    "w-full hover:scale-110 rounded-full h-20 w-20 transition-all duration-150 mx-auto ",
  name: "text-white mb-2 mt-3 text-center text-sm lg:text-base",
  arrow: "mx-auto",
};

export default GameCategoryCard;
