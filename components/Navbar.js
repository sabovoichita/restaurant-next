import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/truscai-logo.png"
            alt="logo"
            width="90"
            height="90"
          />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>PLACE ORDER!</div>
          <div className={styles.text}>123456789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/home">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/menu">Menu</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/events">Events</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <h2 className={styles.listItem}>Orders</h2>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
