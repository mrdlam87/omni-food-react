import "./Gallery.scss";
import galleryImage1 from "../../assets/images/gallery/gallery-1.jpg";
import galleryImage2 from "../../assets/images/gallery/gallery-2.jpg";
import galleryImage3 from "../../assets/images/gallery/gallery-3.jpg";
import galleryImage4 from "../../assets/images/gallery/gallery-4.jpg";
import galleryImage5 from "../../assets/images/gallery/gallery-5.jpg";
import galleryImage6 from "../../assets/images/gallery/gallery-6.jpg";
import galleryImage7 from "../../assets/images/gallery/gallery-7.jpg";
import galleryImage8 from "../../assets/images/gallery/gallery-8.jpg";
import galleryImage9 from "../../assets/images/gallery/gallery-9.jpg";
import galleryImage10 from "../../assets/images/gallery/gallery-10.jpg";
import galleryImage11 from "../../assets/images/gallery/gallery-11.jpg";
import galleryImage12 from "../../assets/images/gallery/gallery-12.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <figure className="gallery-item">
        <img src={galleryImage1} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage2} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage3} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage4} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage5} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage6} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage7} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage8} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage9} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage10} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage11} alt="gallery" />
      </figure>
      <figure className="gallery-item">
        <img src={galleryImage12} alt="gallery" />
      </figure>
    </div>
  );
};

export default Gallery;
