import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>123456789</span>
              </td>
              <td>
                <span className={styles.name}>Name Surname</span>
              </td>
              <td>
                <span className={styles.address}>
                  2 San Antoni, Torreblanca
                </span>
              </td>
              <td>
                <span className={styles.total}>£89</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              src="/images/icons/icons-payment.png"
              alt=""
              width={30}
              height={30}
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/icons/icons-check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/images/icons/bake.png" alt="" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/icons/icons-check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image
              src="/images/icons/icons-bicycle.png"
              alt=""
              width={30}
              height={30}
            />
            <span>On The Way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/images/icons/icons-check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image
              className={styles.checkedIcon}
              src="/images/icons/icons-delivered.png"
              alt=""
              width={30}
              height={30}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/icons/icons-check.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>£89
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>£0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>£89
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
