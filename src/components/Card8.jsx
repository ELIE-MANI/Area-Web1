import HeroImg from "../images/Hero image 2.png"


export default function Card8() {
  return (
    <div>
       <div>
        <img src={HeroImg} alt="Hero image" class="w-full h-dvh mt-10 p-7"/>
    </div>
    <div class="flex flex-col items-center mt-10">
        <h2 class="text-6xl font-medium mb-10">Connect with us</h2>
        <p class="mb-10 text-gray-500 ">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
         <button class="mb-10 w-162.5 bg-lime-800 hover:bg-lime-600 text-white font-bold py-4 px-4 rounded-full text-sm">Learn More <span class="ml-1  ">&rarr;</span></button>
    </div>
    </div>
  )
}
