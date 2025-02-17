import Buttons from "../components/Buttons"


const Subscribe = () => {
  return (
    <section className="mx-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact -us"
    >
    <h3 className="font-bold font-palanquin text-4xl leading-[68px] lg:max-w-md ">Sign Up for 
      <span className="text-coral-red"> Updates </span>& Newsletter
    </h3>
    
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
      <input type="text" placeholder="subscribe@nike.com"
        className="input"
      />
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Buttons label="Sign Up" />
      </div>
      
    </div>
    </section>
  )
}

export default Subscribe