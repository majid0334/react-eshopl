import React, { useState } from "react";
import styles from "./Main.module.scss";
import Navbar from "./Navbar";

function Main({ cartItems, increment, decrement }) {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  //för lightbox
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div className={styles.main}>
      {openModal && (
        <div className={styles.wrapper}>
          <p>
            <img src="./mainImages/Left.png" className={styles.btnLeft} />
          </p>
          <div className={styles.imgWidth}>
            <p>
              <img
                src="./mainImages/Close.jpg"
                className={styles.btnClose}
                onClick={handleCloseModal}
              />
            </p>
            <h2>
              <img src="./mainImages/Rectangle.png" />
            </h2>
            <ul>
              <li>
                <p>
                  <img src="./mainImages/Rectangle1.png" />
                </p>
              </li>
              <li>
                <p>
                  <img src="./mainImages/Rectangle2.png" />
                </p>
              </li>
              <li>
                <p>
                  <img src="./mainImages/Rectangle3.png" />
                </p>
              </li>
              <li>
                <p>
                  <img src="./mainImages/Rectangle4.png" />
                </p>
              </li>
            </ul>
          </div>
          <p>
            <img src="./mainImages/Right.png" className={styles.btnRight} />
          </p>
        </div>
      )}
      <div className={styles.imageContainer} onClick={handleOpenModal}>
        <h2>
          <img src="./mainImages/Rectangle.png" />
        </h2>
        <ul>
          <li>
            <p>
              <img src="./mainImages/Rectangle1.png" />
            </p>
          </li>
          <li>
            <p>
              <img src="./mainImages/Rectangle2.png" />
            </p>
          </li>
          <li>
            <p>
              <img src="./mainImages/Rectangle3.png" />
            </p>
          </li>
          <li>
            <p>
              <img src="./mainImages/Rectangle4.png" />
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.textCont}>
        <div className={styles.text}>
          <h6>Sneacker company</h6>
          <h1>Fall Limited Editon Sneakers</h1>
          <h5>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they all withstand everything
            the weather can offer.
          </h5>
        </div>
        <div>
          <div className={styles.newPrice}>
            <h2>$125.00</h2>
            <p>50%</p>
          </div>
          <div className={styles.oldPrice}>
            <h5>$250.00</h5>
          </div>
        </div>
        <div className={styles.buying}>
          <div className={styles.button}>
            <button onClick={decrement}>-</button>
            <p>{cartItems}</p>
            <button onClick={increment}>+</button>
          </div>
          <div>
            <button onClick={increment} className={styles.cart}>
              <img src="./mainImages/Cart.png" />
              <h5>Add to Cart</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
