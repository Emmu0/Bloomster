import React from "react";
import * as image from "../../resources/images";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Topbar from "./Topbar";
import WebLayout from "../layout/WebLayout";

const Whyholisticgrowth = () => {
  return (
    <WebLayout className="outerPagesHeader">
    <div className="providerF">
      
      <div className="WhyHolistic">
        <section className="wHbanner">
          <div className="container">
            <div className="flex">
              <div className="bannerleft w-50">
                <h2 className="mb-3">Why Holistic Growth?</h2>
                <h5 className="mb-2">
                  <a href="#"> Intellectual,</a>
                  <a href="#"> Physical,</a>
                  <a href="#"> Social,</a>
                  <a href="#"> Emotional,</a>
                  <a href="#"> Spiritual,</a>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
              </div>
              <div className="bannerright w-50">
                <div className="whyholosticbaaner">
                  <img src={image.WHolisticgbnr} />
                </div>
              </div>
            </div>
            <div className="impoDesc mt-5">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas{" "}
                <span>molestias excepturi sint occaecati cupiditate </span> non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga.{" "}
              </p>
            </div>
            <div className="AllDiemesionmerged mt-5  text-center">
              <img src={image.AllDiemensions} alt="..." className="mb-5" />
              <p className="text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur.
              </p>
            </div>
            <div className="flex">
              <div className="WHDieList">
                <ul>
                  <li> Intellectual Development Process</li>
                  <li>Social Development</li>
                  <li>Physical Development</li>
                  <li>Emotional Development</li>
                  <li>Spiritual Development</li>
                </ul>
              </div>
              <div className="DListimage">
                <img src={image.WHolisticone} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="HGprocess">
              <h4>Holistic Growth Development Process</h4>
              <div className="flex mt-3">
                <div className="imagePart w-40">
                  <img src={image.WHolistictwo} />
                </div>
                <div className="ProcessAccordian w-60" div id="accordion">
                  <div className="Processaccordianlist" id="headingOne">
                    <h4
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Procsess Step 1{" "}
                      <span className="AngleupDown">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </h4>
                    <div
                      className="ProcessStepDesc collapse show"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="Processaccordianlist" id="headingTwo">
                    <h4
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-controls="collapseTwo"
                    >
                      Procsess Step 1{" "}
                      <span className="AngleupDown">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </h4>
                    <div
                      className="ProcessStepDesc collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="Processaccordianlist" id="headingThree">
                    <h4
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-controls="collapseThree"
                    >
                      Procsess Step 1{" "}
                      <span className="AngleupDown">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </h4>
                    <div
                      className="ProcessStepDesc collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="WHDieList">
                <h4 className="mb-3">Intellectual development includes: </h4>
                <ul className="pl-3">
                  <li> Intellectual Development Process</li>
                  <li>Social Development</li>
                  <li>Physical Development</li>
                  <li>Emotional Development</li>
                  <li>Spiritual Development</li>
                </ul>
              </div>
              <div className="DListimage">
                <img src={image.WHolisticthree} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="implwmentPlanibg">
            <div className="container">
              <h4>Planning to Implement Holistic Growth?</h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <a href="">
                <button className="btn primary-btn">Talks to Expert</button>
              </a>
            </div>
          </div>
        </section>
      </div>
   
    </div>
    </WebLayout>
  );
};

export default Whyholisticgrowth;
