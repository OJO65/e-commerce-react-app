import React, { useState } from "react";
import productdata from "./ProductData";
import deskchair from "../Assets/img/desk chair.jpg";
import coffeetable from "../Assets/img/coffee table.jpg";
import receptionchair from "../Assets/img/reception chair.jpg";
import reclinersofa from "../Assets/img/recliner sofa.jpg";
import schooltable from "../Assets/img/school table.jpg";
import chair from "../Assets/img/chair.jpg";
import doublesofa from "../Assets/img/double sofa.avif";
import officetable from "../Assets/img/office table.jpg";
import singlesofa from "../Assets/img/single sofa.jpg";
import "./ProductDetail.css";
const ProductDetail = () => {
  const [deskChairCounter, setDeskChairCounter] = useState(0);
  const [coffeeTableCounter, setCoffeeTableCounter] = useState(0);
  const [receptionChairCounter, setReceptionChairCounter] = useState(0);
  const [reclinerSofaCounter, setReclinerSofaCounter] = useState(0);
  const [schoolTableCounter, setSchoolTableCounter] = useState(0);
  const [chairCounter, setChairCounter] = useState(0);
  const [doubleSofaCounter, setDoubleSofaCounter] = useState(0);
  const [officeTableCounter, setOfficeTableCounter] = useState(0);
  const [singleSofaCounter, setSingleSofaCounter] = useState(0);

  const updateCounter = (productId, counterValue) => {
    const counterElement = document.getElementById(productId);
    if (counterElement) {
      counterElement.textContent = counterValue;
    }
  };

  const increase = (counterSetter, productId) => {
    counterSetter((previousCounter) => {
      const newCounter = previousCounter + 1;
      updateCounter(productId, newCounter);
      return newCounter;
    });
  };

  const decrease = (counterSetter, productId) => {
    counterSetter((previousCounter) => {
      if (previousCounter > 0) {
        const newCounter = previousCounter - 1;
        updateCounter(productId, newCounter);
        return newCounter;
      }
      return previousCounter;
    });
  };
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={deskchair} />
              <div className="wrapper">
                <span
                  onClick={() =>
                    decrease(setDeskChairCounter, "deskChairCounter")
                  }
                  className="minus"
                >
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span
                  onClick={() =>
                    increase(setDeskChairCounter, "deskChairCounter")
                  }
                  className="plus"
                >
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Desk chair</h3>
                <h3>Kshs 2,500</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={coffeetable} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Coffee Table</h3>
                <h3>Kshs 1,500</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={receptionchair} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Reception Chair</h3>
                <h3>Kshs 5,500</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={reclinersofa} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Recliner Sofa</h3>
                <h3>Kshs 90,500</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={schooltable} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>School Table</h3>
                <h3>Kshs 2,600</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={chair} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Chair</h3>
                <h3>Kshs 2,500</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={doublesofa} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Double Sofa</h3>
                <h3>Kshs 30,000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={officetable} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Office Table</h3>
                <h3>Kshs 4,500</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-container">
            <div className="product">
              <img src={singlesofa} />
              <div className="wrapper">
                <span onClick={decrease} className="minus">
                  -
                </span>
                <span id="counter" className="num">
                  0
                </span>
                <span onClick={increase} className="plus">
                  +
                </span>
              </div>
              <div className="tag">
                <h3>Single Sofa</h3>
                <h3>Kshs 25,500</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
