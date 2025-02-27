/*import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";*/

import porcento25 from "../assets/img/25porcento.svg";
import porcento35 from "../assets/img/35porcento.svg";
import porcento30 from "../assets/img/30porcento.svg";
import porcento10 from "../assets/img/10porcento.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/*import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";*/
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>The skill evaluation metric is based on the time dedicated to each skill over the last 10 years. Therefore, the sum of the percentages must be equal to 100%.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={porcento35} alt="Image" />
                                <h5>Data Analyst</h5>
                            </div>
                            <div className="item">
                                <img src={porcento25} alt="Image" />
                                <h5>Risk Management</h5>
                            </div>
                            <div className="item">
                                <img src={porcento30} alt="Image" />
                                <h5>PowerBI/Python/SQL/Excel </h5>
                            </div>
                            <div className="item">
                                <img src={porcento10} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
