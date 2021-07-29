import React from "react";
import { ContactInfo } from "../Services/ContactService";

function SectionContact({ Address, EamilId, PhoneOne, PhoneTwo }) {
  return (
    <>
      <section class="about mt-3">
        <div class="container">
          <div class="inner-sec-w3pvt">
            <h3 class="tittle text-center mb-lg-5 mb-3 px-lg-5">Contact Us.</h3>
            <div class="fetured-info">
              <div class="row fetured-sec mt-lg-5 my-3">
                <div class="col-lg-6 p-0">
                  <div class="img-effect">
                    <img
                      src="https://www.momkidcare.com/img/contact/Contact-Us.png"
                      alt=""
                      class="img-fluid image1"
                    />
                  </div>
                </div>
                <div class="col-lg-6 serv_bottom feature-grids pl-lg-5">
                  <div class="featured-left text-left">
                    <div className="contact" id="contact">
                      <div className="col-md-8">
                        <div className="info">
                          <div className="address">
                            <i className="fa fa-map-marker"></i>
                            <h4>Location:</h4>
                            <p>
                              <a href="/home">{ContactInfo.Address}</a>
                            </p>
                          </div>

                          <div className="email">
                            <i className="fa fa-envelope"></i>
                            <h4>Email:</h4>
                            <p>
                              <a href={`mailto:{EmailId}`}>
                                {ContactInfo.EmailId}
                              </a>
                            </p>
                          </div>

                          <div className="phone">
                            <i className="fa fa-phone"></i>
                            <h4>Call:</h4>
                            <p>
                              <a href={`tel:{ContactInfo.PhoneOne}`}>
                                +91-{ContactInfo.PhoneOne}
                              </a>
                              , &nbsp;&nbsp;
                              <a href={`tel:{ContactInfo.PhoneTwo}`}>
                                +91-{ContactInfo.PhoneTwo}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

SectionContact.defaultProps = {
  Address: "Address",
  EmailId: "EmailId",
  PhoneOne: "PhoneOne",
  PhoneTwo: "PhoneTwo",
};
export default SectionContact;