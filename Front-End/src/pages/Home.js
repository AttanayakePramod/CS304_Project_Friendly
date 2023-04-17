import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import banner from "../images/main-banner-1.jpg";
import Container from "../components/container"
import catbanner1 from "../images/catbanner-01.jpg"
import catbanner2 from "../images/catbanner-02.jpg"
import catbanner3 from "../images/catbanner-03.jpg"
import catbanner4 from "../images/catbanner-04.jpg"
import brand1 from "../images/brand-01.png"
import brand2 from "../images/brand-02.png"
import brand3 from "../images/brand-03.png"
import brand4 from "../images/brand-04.png"
import brand5 from "../images/brand-05.png"

// import { services } from "../utils/Data";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className="home-wrapper-1 py-5">
        <div className="container-xxl">
        <div className="grid-container">
  <div className="column1">
  <div className="main-banner position-relative p-3">
                <img
                  src={banner} 
                  className="img rounded-3"
                  alt="main banner"
                  width={700}
                  height={300}
                  
                />
                <div className="main-banner-content position-absolute">
                  <h4>Your Youthfull Experience</h4>
                  <h5>Friendly</h5>   
                </div>
              </div>
  </div>
  <div className="column2">
    <div className="grid-item">
    <div className="d-flex flex-wrap gap-20 justify-content-between align-items-center">
                <div className=" position-relative">
                  <img
                    src={catbanner1}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                    width={100}
                    height={300}
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Experience</h4>
                    <h5>Royal</h5>
                    <p> Rs 500 </p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
              </div>
    </div>
    <div className="grid-item position-relative">
    <img
                  src={catbanner2}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="main banner"
                  width={100}
                  height={300}
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Phexxi</h5>
                  <p>
                    From Rs 25000 <br /> or Rs 80000 /mo.
                    <Link className="button">BUY NOW</Link>
                  </p>
                </div>

    </div>
    <div className="grid-item position-relative">
    <img
                  src={catbanner3}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="main banner"
                  width={100}
                  height={300}
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Today</h5>
                  <p>
                    From Rs 1000.00 <br /> or Rs 12000 /mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
    </div>
    <div className="grid-item position-relative">

    <img
                  src={catbanner4}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="main banner"
                  width={100}
                  height={300}
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Evra</h5>
                  <p>
                     RS 4000.00
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
    </div>
  </div>
</div>
           
        </div>
      </Container> 
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h2>Mens Contraceptives</h2>
                </div>
              </div>  
              <div className="d-flex gap align-items-center">
                <div>
                  <h2>Channel a Doctor</h2>
                </div>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h2>Womens Contraceptives</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1}
                       width={100}
                       height={100}
                       alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2}
                       width={100}
                       height={100}
                       alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3}
                       width={100}
                       height={100}
                       alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4}
                       width={100}
                       height={100}
                       alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5}
                    width={100}
                    height={100}
                    alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container> 
      
      
         {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>   */}


    </>
  );
};
export default Home;

