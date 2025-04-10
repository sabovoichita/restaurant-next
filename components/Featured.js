"use client";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/menu/burger.jpg",
    "/images/menu/ciorba.jpg",
    "/images/menu/ciuletavita.jpg",
    "/images/menu/cozonac.jpg",
    "/images/menu/crochete.jpg",
    "/images/menu/peste.jpg",
    "/images/menu/pizza.jpg",
    "/images/menu/pui.jpg",
    "/images/menu/rabo.jpg",
    "/images/menu/scoici.jpg",
    "/images/menu/toast.jpg",
    "/images/menu/aperitiv.jpg",
    "/images/menu/baby.jpg",
    "/images/menu/biscuitcake.jpg",
    "/images/menu/burger1.jpg",
    "/images/menu/ciorba1.jpg",
    "/images/menu/clafoitois.jpg",
    "/images/menu/fasole.jpg",
    "/images/menu/gambas.jpg",
    "/images/menu/paella.jpg",
    "/images/menu/patatas.jpg",
    "/images/menu/salatacapra.jpg",
    "/images/menu/saratele.jpg",
    "/images/menu/sepia.jpg",
    "/images/menu/tunasalad.jpg",
    "/images/menu/tavalita.jpg",
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
