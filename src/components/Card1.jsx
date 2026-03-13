import CableIcon1 from "../images/Cable-icon.jpg"
import VectorIcon from "../images/Vector.jpg"
import AccountIcon from "../images/Account-icon.jpg"
import Vector2Icon from "../images/Vector-2.jpg"


export default function Card1() {
  return (
    <div>
       <div>
        <h2 className="text-sm font-medium p-7 text-gray-500 mt-10">Benefits</h2>
    <h3 className="text-5xl p-7 mt-2">We’ve cracked the code.</h3>
    <p className="text-sm p-7 mt-2 text-gray-500">Area provides real insights, without the data overload.</p>
    <div className="flex justify-between">
    <div className="p-7">
        <img src={CableIcon1} alt="cable icon" />
        <h4 className="text-xl font-medium mt-5">Amplify Insights</h4>
        <p className="mt-5 text-gray-500">Unlock data-driven decisions with <br />comprehensive analytics,<br />
             revealing key opportunities for <br /> strategic regional growth.</p>
    </div>
     <div className="p-7">
        <img src={VectorIcon} alt="vector icon" />
        <h4 className="text-xl font-medium mt-5">Control Your Global Presence</h4>
        <p className="mt-5 text-gray-500">Manage and track satellite offices,<br /> ensuring consistent performance and <br />
            streamlined operations everywhere.</p>
    </div>
      <div className="p-7">
        <img src={AccountIcon} alt="account icon" />
        <h4 className="text-xl font-medium mt-5">Remove Language Barriers</h4>
        <p className="mt-5 text-gray-500">Adapt to diverse markets with <br /> built-in localization for clear <br />
             communication and enhanced user <br /> experience.</p>
    </div>
        <div className="p-7">
        <img src={Vector2Icon} alt="vector 2 icon" />
        <h4 className="text-xl font-medium mt-5">Visualize Growth</h4>
        <p className="mt-5 text-gray-500">Generate precise, visually <br />compelling reports that illustrate <br />
            your growth trajectories across <br />all regions.</p>
    </div>
    </div>
    </div>
    </div>
  )
}
