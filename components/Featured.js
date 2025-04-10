"use client";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/menu/1.png",
    "/images/menu/2.png",
    "/images/menu/3.png",
    "/images/menu/4.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/testimonial/arrow-left.svg"
          layout="fill"
          objectFit="contain"
          alt="arrow-left"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              width={600}
              height={400}
              objectFit="contain"
              alt={`image-${i}`}
              id={`${i}`}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/images/testimonial/arrow-right.svg"
          layout="fill"
          objectFit="contain"
          alt="arrow-right"
        />
      </div>
    </div>
  );
};
export default Featured;
