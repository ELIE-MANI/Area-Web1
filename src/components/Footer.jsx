import Logo from "../images/Logo.jpg"

export default function Footer() {
  return (
    <div className="p-7 mt-16">
      <div className='flex items-center gap-6 font-bold text-lg'>
        <p>Benefits</p>
        <p>Specifications</p>
        <p>How-to</p>
      </div>
     <div className="mt-16 flex items-end-safe gap-6">
        <img src={Logo} alt="Logo" className="w-11 h-30 mt-10"/>
        <p className="text-[#485C11]">© Area.</p>
        <p className="text-[#485C11]">2025</p>
        <p className="text-[#485C11] ml-auto">All rights reserved.</p>
     </div>
    </div>
  )
}
