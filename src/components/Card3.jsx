import Image1 from "../images/Image.png"

export default function Card3() {
  return (
      <div class="mt-10 p-7  flex justify-between ">
        <div>
            <h2 class="text-3xl">See the Big Picture</h2>
            <p class="text-sm text-gray-500 mt-10">Area turns your data into clear, vibrant visuals that show you exactly <br/>
                 what's happening in each region.</p>
                 <hr class=" mt-5" />
                 <p className="mt-5 text-sm"><span class="font-medium text-gray-500 mx-10">01</span>Spot Trends in Seconds: No more digging through numbers </p>
                 <hr class=" mt-5" />
                 <p className="mt-5 text-sm"><span class="font-medium text-gray-500 mx-10">02</span>Get Everyone on the Same Page: Share easy-to-understand reports with your team.  </p>
                 <hr class=" mt-5" />
                 <p className   ="mt-5 text-sm"><span class="font-medium text-gray-500 mx-10">03</span>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged. </p>
                 <hr class=" mt-5" />
                 <p className="mt-5 text-sm"><span class="font-medium text-gray-500 mx-10">04</span>Your Global Snapshot: Get a quick, clear overview of your entire operation. </p>

                 <button className="bg-gray-200 hover:bg-gray-700 text-black m-5 font-medium py-2 px-4 rounded-full mt-20">Discover More</button>
                
                </div>
<div>
  <img src={Image1} alt="image" className=" " />  
</div>
    </div>
  )
}
