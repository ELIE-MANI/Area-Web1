import React from 'react'

const NavBar = () => {
  return (
    <div>
          <nav class="flex justify-between items-center p-4 ">
<h1 class="text-3xl font-medium">Area</h1>
<div>
    <ul className="flex text-sm font-bold space-x-4">
        <li><a href="#">Benefits</a></li>
        <li><a hrf="#">Specifications</a></li>
        <li>How-to</li>
        <li>Contact Us</li>
    </ul>
</div>
<div>
    <button className="bg-lime-800 hover:bg-lime-600 text-white font-bold py-3 px-5 rounded-full text-sm">Learn More <span class="ml-1  ">&rarr;</span></button>
</div>
        </nav> 
    </div>
  )
}

export default NavBar
