import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Buttons from "../components/Buttons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-xontainer">
      <div className="flex-1">
        <img src={offer} alt="offer-image"
          width={773}
          height={687}
          className="object-contain w-full" />
      </div>
      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable
          deals. From premier selections to incredible savings, we offer unparalleled value
          that sets us apart. 
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Navigate a realm of possibiities designed to fulfill your unique desires, surpassing
          the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex felx-wrap gap-4">
            <Buttons label="Shop now" iconURL={arrowRight}/>
            <Buttons 
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer