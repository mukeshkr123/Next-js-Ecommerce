import React from "react";
import heroClassNames from "./heroClassName";
import Link from "next/link";
import Image from "next/image";

const HeroSection = (props) => {
  const { showLink } = props;
  return (
    <section className={heroClassNames.content}>
      <div className={heroClassNames.grid}>
        <div className={heroClassNames.content}>
          <h1 className={heroClassNames.heading}>Gaming</h1>
          <h1 className={heroClassNames.ctaText}>
            Unlock Your Gaming Potential
          </h1>
          <p className={heroClassNames.paragraph}>
            Discover , Learn , and Compare with Our Extensive Collection of
            Games
          </p>
          {showLink && (
            <div className="mt-8 sm:m-10 rounded">
              <Link href="#recent-games" className={heroClassNames.button}>
                Find Games
              </Link>
            </div>
          )}
        </div>
        <div className={heroClassNames.imageContainer}>
          <Image
            src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.webp?b=1&s=170667a&w=0&k=20&c=dH42Vp7tUc2es74czikFCrQPNJ4rjIaLalfO26KrpfI="
            alt="3D Game Development"
            width="400"
            height="400"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
