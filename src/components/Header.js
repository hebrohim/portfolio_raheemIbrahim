import{ React,useState }from "react";
// import logo from "./images/icons8-source-code-100.png"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "./images/icons8-developer-80.png";
import { HiMenuAlt3, HiMail,HiX } from "react-icons/hi";

const Header = () => {

    const menuItems = ["Home","About","Projects","Contact"];


  const [showMenuList, setShowMenuList] = useState(false)

  const showMenu = () =>{
    setShowMenuList(!showMenuList)
  }
 
  return (
    <>

   
    <nav className=" px-2 h-[10vh] w-screen bg-slate-100 shadow-md shadow-gray-500 flex justify-between items-center md:px-5 ">
      <div className="flex items-center">
        <img src={logo} className="w-14 "></img>

        <h1 className="font-logoFont -tracking-tighter text-xl text-amber-600 font-">
          Ibrahim
        </h1>
      </div>



    
      <ul className="flex justify-evenly invisible  md:visible">
        <li className="px-5">
          <FaWhatsapp className="text-amber-500 text-2xl" />
        </li>
        <li className="px-5">
          <HiMail className="text-amber-500 text-2xl" />
        </li>
        <li className="px-5">
          <FaLinkedin className="text-amber-500 text-2xl" />
        </li>
        <li className="px-5">
          <FaGithub className="text-amber-500 text-2xl" />
        </li>
      </ul>
<span className="text-amber-500 text-3xl " >
     {showMenuList?<HiX onClick={showMenu}/>: <HiMenuAlt3 onClick={showMenu}/>}

     </span>
    </nav>
    {showMenuList?
    <ul className=" top-[20vh]  w-1/2 mx-auto py-10 flex flex-col items-center bg-[#dfdddd21] rounded-b-lg shadow-md shadow-black">
        {menuItems.map((menuItem)=>{
            return<li className="my-3 font-bold hover:border-b-2 border-amber-500 text-slate-900 md:mb-10 "  >{menuItem}</li>
        })}
    </ul>
    :null
    }
    </>
  );
};

export default Header;
