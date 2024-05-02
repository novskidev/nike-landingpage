import { shoe8 } from "../../assets/assetsNikeLandingPageUI/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <>
      <div className="padding">
        <section
          id="about-us"
          className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
          <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
              We Provice You
              <span className="text-coral-red inline-block mt-3">
                Super Quality
              </span>{" "}
              Shoes
            </h2>

            <p className="mt-4 lg:max-w-lg info-text">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance
            </p>

            <p className="mt-6 lg:max-w-lg info-text">
              Our dedication to detail and excellence ensures your statisfaction
            </p>

            <div className="mt-11">
              <Button label="View Details" />
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <img
              src={shoe8}
              alt="shoe 8"
              width={570}
              height={522}
              className="object-contain"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SuperQuality;
