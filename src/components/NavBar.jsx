

const NavBar = () => {
  return (
    <div className="relative">
<nav class="flex justify-between items-center p-4 ">
<h1 class="text-3xl font-medium">Area</h1>
<div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 border border-white">
    <ul className="flex text-sm font-bold space-x-4">
        <li><a href="#" className="hover:text-lime-700">Benefits</a></li>
        <li><a href="#" className="hover:text-lime-700">Specifications</a></li>
        <li><a href="#" className="hover:text-lime-700">How-to</a></li>
        <li><a href="#" className="hover:text-lime-700">Contact Us</a></li>
    </ul>
</div>
<div>
    <button className="bg-lime-800 hover:bg-lime-600 text-white font-bold py-3 px-5 rounded-full text-sm cursor-pointer">Learn More <span class="ml-1  ">&rarr;</span></button>
</div>
        </nav> 
    </div>
  )
}

export default NavBar
