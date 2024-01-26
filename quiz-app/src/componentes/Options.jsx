import '../style/Options.css'

// icons use
import { CgMenu } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import { LuLineChart } from "react-icons/lu";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="Options">
       <div className="options-content">
        <div className="options-icons">
                <span className='buttonMenu'><Link to="/" className="Link"><CgMenu></CgMenu></Link></span>
                <span className='buttonAdd'><Link to="/Create" className="Link"><CgAdd></CgAdd></Link></span>
                <span className='buttonGrafico'><Link to="/Graph" className="Link"><LuLineChart ></LuLineChart></Link></span>
                <span className="buttonConfig"><Link to="/Config" className="Link"><BiCog></BiCog></Link></span>
            </div>
       </div>
    </div>
  )
}

export default Options