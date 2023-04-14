import React from "react";
import BreadCrumb from "../components/BreadCrum";
import Color from "../components/Color";
import Meta from "../components/Meta";
import Container from "../components/container";
import condom2 from "../images/condom2 .webp"
import condom1 from "../images/durex.jpg"
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={condom2}             
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
               <img src={condom2}
                width={250}
                height={260}                  
                alt="condom2" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  flavored Condoms
                </h5>
                <h6 className="price mb-3 mt-3">Rs 500</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:Trustex</h5>
                    <p></p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Condom</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:Multiple</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={condom1}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={condom1}
                 width={250}
                 height={250}
                 alt="condom1" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  None Flavored Condoms
                </h5>
                <h6 className="price mb-3 mt-3">Rs 400</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Durex</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Condom</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:None</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div> 
                 </div> 
              </div> 
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;