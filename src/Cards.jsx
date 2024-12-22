import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";

export default function Cards() {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="product-card">
            <div className="product-image">
              <img src={p1} alt="Realme 13+ 5G" />
            </div>
            <div className="new-badge">NEW</div>
            <div className="product-title">realme 13+ 5G</div>
            <div className="product-tagline">Speed to Victory</div>
            <div className="product-price">Rs.89,999</div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={p2} alt="Realme 13+ 5G" />
          </div>
          <div className="new-badge">NEW</div>
          <div className="product-title">realme 13+ 5G</div>
          <div className="product-tagline">Speed to Victory</div>
          <div className="product-price">Rs.89,999</div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={p3} alt="Realme 13+ 5G" />
          </div>
          <div className="new-badge">NEW</div>
          <div className="product-title">realme 13+ 5G</div>
          <div className="product-tagline">Speed to Victory</div>
          <div className="product-price">Rs.89,999</div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={p4} alt="Realme 13+ 5G" />
          </div>
          <div className="new-badge">NEW</div>
          <div className="product-title">realme 13+ 5G</div>
          <div className="product-tagline">Speed to Victory</div>
          <div className="product-price">Rs.89,999</div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={p5} alt="Realme 13+ 5G" />
          </div>
          <div className="new-badge">NEW</div>
          <div className="product-title">realme 13+ 5G</div>
          <div className="product-tagline">Speed to Victory</div>
          <div className="product-price">Rs.89,999</div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={p1} alt="Realme 13+ 5G" />
          </div>
          <div className="new-badge">NEW</div>
          <div className="product-title">realme 13+ 5G</div>
          <div className="product-tagline">Speed to Victory</div>
          <div className="product-price">Rs.89,999</div>
        </div>
      </div>
    </>
  );
}
