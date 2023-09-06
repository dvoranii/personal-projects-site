import "./styles.css";
import Wheel from "../Wheel";
import { ReactBasicScroll } from "react-basic-scroll";
import truckImage from "../../assets/images/truck-red.png";
import CloudCanvas from "../CloudCanvas";
import StarsCanvas from "../StarsCanvas";

// eslint-disable-next-line react/prop-types
const Truck = ({ isNight }) => {
  const config = {
    from: "top-bottom",
    to: "top-top",
    direct: true,
    props: {
      "--my-prop": {
        from: "-1000px",
        to: "400px",
      },
    },
  };
  return (
    <>
      <ReactBasicScroll config={config}>
        <div className="truck--bg__outer">
          {isNight ? <StarsCanvas /> : <CloudCanvas />}
          <div className="truck--bg__inner">
            <div className="truck--element">
              <img src={truckImage} alt="" />
              <div
                className={`truck--highBeamLight ${isNight ? "" : "hidden"}`}
              ></div>
              <Wheel position="wheel1" />
              <Wheel position="wheel2" />
              <Wheel position="wheel3" />
              <Wheel position="wheel4" />
              <Wheel position="wheel5" />
            </div>
          </div>
        </div>
      </ReactBasicScroll>
    </>
  );
};

export default Truck;
