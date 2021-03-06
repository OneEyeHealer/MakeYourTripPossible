import React, { useContext } from "react";
import important_links from "../../../data/important-links.json";
import Trip_Widget from "../../../data/trip-widget.json";
import latest_blogs from "../../../data/latest-blogs.json";
import { dataContext } from "../../context/data-context";
const FooterLinks = (props) => {
  const { allPlaces, contacts } = useContext(dataContext);
  if (props.ImpLinks) {
    return (
      <div className="kilimanjaro_part m-top-15">
        <h5>{props.Title}</h5>
        <ul className="kilimanjaro_links">
          {important_links.map((imp) => (
            <li key={imp.id}>
              <a href={imp.link}>
                <i className="fad fa-angle-right" aria-hidden="true"></i>
                {imp.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (props.TripWidget) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <ul className=" kilimanjaro_widget">
          {Trip_Widget.map((tag) => (
            <li key={tag.id}>
              <a href={tag.links}>{tag.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (props.LatestBlogs) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        {latest_blogs
          .filter((e) => e.isPopular)
          .map((blog) => (
            <div key={blog.id} className="kilimanjaro_blog_area">
              <div className="kilimanjaro_thumb">
                <img className="img-fluid" src={blog.img} alt={blog.alt} />
              </div>
              <a href={blog.links}>{blog.title}</a>
              <p className="kilimanjaro_date">{blog.postDate}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.description.substring(0, 59) + "...",
                }}
              />
            </div>
          ))}
      </div>
    );
  }

  if (props.SocialLinks) {
    return (
      <div className="kilimanjaro_part m-top-15">
        <h5>{props.Title}</h5>
        <ul className="kilimanjaro_social_links">
          <li>
            <a href={contacts.cl_facebook}>
              <i className="fab fa-facebook" aria-hidden="true"></i> Facebook
            </a>
          </li>
          <li>
            <a href={contacts.cl_twitter}>
              <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
            </a>
          </li>
          <li>
            <a href={contacts.cl_youtube}>
              <i className="fab fa-youtube" aria-hidden="true"></i> YouTube
            </a>
          </li>
          <li>
            <a href={contacts.cl_linkedin}>
              <i className="fab fa-linkedin" aria-hidden="true"></i> Linkedin
            </a>
          </li>
        </ul>
      </div>
    );
  }

  if (props.AboutUs) {
    return (
      <div className="kilimanjaro_part">
        <h5>About Us</h5>
        <p>
          <b>Makeyourtrippossible</b> is an Indian online travel industry
          founded by Shubham Maheshwari. MYTP provide their travellers a
          convenient way to arrange their stay from the comfort of their home.
          <br />
          <br />
          With <b>Makeyourtrippossible</b> you book your choices instantly with
          just a few clicks.In MYTP we assure you a wonderful ambience
          throughout your journey
        </p>
      </div>
    );
  }

  if (props.ContactLinks) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <div className="kilimanjaro_single_contact_info">
          <h5>Phone:</h5>
          <ul className="top-right-info">
            <li className="my-1 pb-2">
              <a href={`tell:${contacts.cl_call}`} className="text-white">
                <i className="fad fa-phone-plus top-nav-icon"></i>
                &nbsp;{contacts.cl_call}&nbsp;
              </a>
            </li>
            <br />
            <li className="pb-2 mobile-view">
              <a
                href={`https://wa.me/${contacts.cl_whatsapp}?text=Hey! MakeYourTripPossible, I am interested in your trips`}
                className="text-white"
              >
                <i className="fab fa-whatsapp top-nav-icon"></i>
                &nbsp;{contacts.cl_whatsapp}
              </a>
            </li>
          </ul>
        </div>
        <div className="kilimanjaro_single_contact_info mt-5">
          <h5>Email:</h5>
          <ul className="top-right-info">
            <li className="pb-2">
              <a href={`mailto:${contacts.cl_email}`} className="text-white">
                <i className="fad fa-envelope top-nav-icon"></i>
                &nbsp;{contacts.cl_email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (props.LatestTrips) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <div className="kilimanjaro_works">
          {allPlaces
            .filter((place) => place.topWeekendTrip)
            .map((place, i) => (
              <span key={"latest-trip" + i} className="kilimanjaro_works_img">
                <img src={place.img} alt="" />
              </span>
            ))}
        </div>
      </div>
    );
  }
  return null;
};

export default FooterLinks;
