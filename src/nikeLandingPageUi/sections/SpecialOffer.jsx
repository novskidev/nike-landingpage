import { arrowRight } from "../../assets/assetsNikeLandingPageUI/icons";
import { offer } from "../../assets/assetsNikeLandingPageUI/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div className="padding">
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img src={offer} alt="" width={773} height={687} />
        </div>

        <div className="flex-1">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red inline-block mt-3">Special</span>{" "}
            Offer
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              border="border-slate-gray"
              textColo="text-slate-gray"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOffer;
