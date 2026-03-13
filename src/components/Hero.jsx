import HeroImg from "../images/Hero.jpg"
import Logo1 from "../images/Logo 1.jpg"
import Logo2 from "../images/Logo 2.jpg"
import Logo3 from "../images/Logo 3.jpg"
import Logo4 from "../images/Logo 4.jpg"
import Logo5 from "../images/Logo 5.jpg"
import Logo6 from "../images/Logo 6.jpg"

export default function Hero() {
  return (
    <div>
           <h1 class="mt-20 text-8xl font-medium text-center">Browse everything.</h1>
    <div>
        <img src={HeroImg} alt="hero image" class="mx-auto mt-10 w-3/4 h-1/2 object-cover rounded-lg" />
    </div>

        <div>
        <h2 class="mt-10 p-7 text-gray-500 text-sm font-medium">Trusted by:</h2>
    </div>
    <div class="flex justify-center items-center space-x-10 mt-2">
        <img src={Logo1} alt="Logo1" />
        <img src={Logo2} alt="Logo2" />
        <img src={Logo3} alt="Logo3" />
        <img src={Logo4} alt="Logo4" />
        <img src={Logo5} alt="Logo5" />
        <img src={Logo6} alt="Logo6" />
    </div>
    </div>
  )
}
