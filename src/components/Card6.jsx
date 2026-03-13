import Image2 from "../images/Image 2.jpg"

export default function Card6() {
  return (
    <div>
       <div className="grid grid-cols-2 gap-10 items-center mt-16 p-7">
        <div>
            <img src={Image2} alt="image" className=" h-172.5 object-cover rounded-lg"/>
        </div>
        <div>
            <h3 className="text-4xl [word-spacing-0.5em]">“I was skeptical, but Area has <br />
                 completely transformed the way I <br />
                  manage my business. The data <br />
                   visualizations are so clear <br />
                    and intuitive, and the platform is so easy  <br />
                    to use. I can't imagine running my <br /> company without it.”</h3>
                    <p className="text-lg mt-16">John Smith</p>
                    <p className="text-[#485C11] mt-5">Head of Data</p>
        </div>
    </div>
    </div>
  )
}
