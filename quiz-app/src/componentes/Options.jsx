import '../style/Options.css'

// icons use
import { CgMenu } from "react-icons/cg";
import { CgAdd } from "react-icons/cg";
import { LuLineChart } from "react-icons/lu";
import { BiCog } from "react-icons/bi";

const Options = () => {
  return (
    <div className="Options">
       <div className="options-content">
        <div className="options-icons">
                {/* ainda falta as funcinalidades dos buttons */}
                <span className='buttonMenu'><CgMenu></CgMenu></span>
                <span className='buttonAdd'><CgAdd></CgAdd></span>
                <span className='buttonGrafico'><LuLineChart ></LuLineChart></span>
                <span className="buttonConfig"><BiCog></BiCog></span>
            </div>
       </div>
    </div>
  )
}

export default Options