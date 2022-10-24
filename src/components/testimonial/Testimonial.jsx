import "./Testimonial.scss";

const Testimonial = ({ imageUrl, text, author }) => {
  return (
    <figure className="testimonial">
      <img className="testimonial-img" src={imageUrl} alt="" />
      <blockquote className="testimonial-text">{text}</blockquote>
      <p className="testimonial-name">&mdash; {author}</p>
    </figure>
  );
};

export default Testimonial;
