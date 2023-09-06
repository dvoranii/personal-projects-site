import wheelImage from "../../assets/images/wheel.png";
import { ReactBasicScroll } from "react-basic-scroll";

// eslint-disable-next-line react/prop-types
const Wheel = ({ position }) => {
  const wheelConfig = {
    from: "top-bottom",
    to: "top-top",
    direct: true,
    props: {
      "--rotation": {
        from: "0",
        to: "6turn",
      },
    },
  };

  return (
    <ReactBasicScroll config={wheelConfig}>
      <div className={`wheel ${position}`}>
        <div className={`${position}-wrapper`}>
          <img src={wheelImage} alt="wheel" />
        </div>
      </div>
    </ReactBasicScroll>
  );
};

export default Wheel;
