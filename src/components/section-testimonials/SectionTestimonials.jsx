import Testimonial from "../testimonial/Testimonial";
import "./SectionTestimonials.scss";
import authorImage1 from "../../assets/images/customers/dave.jpg";
import authorImage2 from "../../assets/images/customers/ben.jpg";
import authorImage3 from "../../assets/images/customers/steve.jpg";
import authorImage4 from "../../assets/images/customers/hannah.jpg";
import Gallery from "../gallery/Gallery";

const SectionTestimonials = () => {
  return (
    <section className="section-testimonials">
      <div className="testimonials-container">
        <span className="sub-heading">testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <Testimonial
            imageUrl={authorImage1}
            text="Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical."
            author="Dave Bryson"
          />
          <Testimonial
            imageUrl={authorImage2}
            text="The AI algorithm is crazy good, it chooses the right meals for me
            every time. It's amazing not to worry about food anymore!"
            author="Ben Hadley"
          />
          <Testimonial
            imageUrl={authorImage3}
            text="Omnifood is a life saver! I just started a company, so there's no
            time for cooking. I couldn't live without my daily meals now!"
            author="Steve Miller"
          />
          <Testimonial
            imageUrl={authorImage4}
            text="I got Omnifood for the whole family, and it frees up so much time!
            Plus, everything is organic and vegan and without plastic."
            author="Hannah Smith"
          />
        </div>
      </div>

      <Gallery />
    </section>
  );
};

export default SectionTestimonials;
