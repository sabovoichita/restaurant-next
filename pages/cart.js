import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu/1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="cake"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Carrot Cake</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double chocolate, Extra fruits
              </span>
            </td>
            <td>
              <span className={styles.price}>30</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>60</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu/biscuitcake.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Biscuit Cake</span>
            </td>
            <td>
              <span className={styles.extras}>
                Extra chocolate, Extra Candles{" "}
              </span>
            </td>
            <td>
              <span className={styles.price}>20</span>
            </td>
            <td>
              <span className={styles.quantity}>1</span>
            </td>
            <td>
              <span className={styles.total}>20</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>80
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>80
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
