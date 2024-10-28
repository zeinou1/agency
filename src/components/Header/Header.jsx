import logo from "../../assets/img/logo.png"
import {useEffect, useRef} from "react";


const navLinks = [
    {
        path: "#home",
        display: "Home",
    },
    {
        path: "#feature",
        display: "Features",
    },
    {
        path: "#about",
        display: "About",
    },
    {
        path: "#portfolio",
        display: "Portfolio",
    },
];

const Header = () => {
    //  function display menu
    const headerRef = useRef(null)
    const  menuRef = useRef(null)

    const handleShowMenu = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("menu__sticky");
            } else {
                headerRef.current.classList.remove("menu__sticky");
            }
        });

    }
    useEffect(() => {
        handleShowMenu()
        return () => {
            window.removeEventListener("scroll", handleShowMenu)
        }
    }, []);
    // menu toggle
    const displayMenu = () => {
        menuRef.current.classList.toggle("show__menu");
    }

    //  redirection function
    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute("href");
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 80,
        });
        const a = document.querySelectorAll("a")
        console.log(a)
        a.classList.add('active');
    };


    return (
        <header className="  bg-[url('../../assets/img/acc.jpg')] bg-no-repeat bg-cover " ref={headerRef}>
            <div  >


                    <nav
                        className=" flex items-center justify-between p-3 lg:flex lg:items-center lg:justify-between  ">
                        <div>
                            <img src={logo} alt="" className="w-34 h-34"/>
                        </div>

                        <div className="navigation" onClick={displayMenu} ref={menuRef}>

                            <ul className="menu flex flex-col justify-around" >
                                <div className="lg:flex lg:items-center lg:justify-center lg:gap-8 ">
                                    {navLinks.map((item) => (
                                        <li key={item.display}
                                            className="text-primaryColor text-[16px] leading-7 font-[600]  duration-300"
                                        >
                                            {" "}
                                            <a onClick={handleClick} href={item.path}>
                                                {item.display}
                                            </a>
                                        </li>
                                    ))}
                                </div>

                                <div className=" w-full px-3 pt-4 lg:hidden self-end ">
                                    <div className="lg:flex lg:gap-4 flex gap-2">
                                        <button
                                            className=" w-full p-3 px-6 bg-blue-500 rounded-sm text-white hover:bg-blue-600 transition-colors duration-75">Log
                                            in
                                        </button>
                                        <button className="w-full p-3 px-6 bg-blue-900  rounded-sm text-white ">Sign in</button>
                                    </div>
                                </div>
                            </ul>


                        </div>
                        <div className="lg:flex lg:items-center  lg:gap-2 md:p-3 ">
                            <div className="lg:flex lg:gap-4 hidden" >
                                <button
                                    className="p-3 px-6 bg-blue-500 rounded-sm text-white hover:bg-blue-600 transition-colors duration-75">Log
                                    in
                                </button>
                                <button className="p-3 px-6 bg-gray-900  rounded-sm text-white ">Login</button>
                            </div>
                            <div>
                                <span className="cursor-pointer mr-2"> 🌙</span>
                                <span className="text-white lg:hidden " onClick={displayMenu}> <i
                                    className="ri-menu-3-line"></i></span>

                            </div>
                        </div>
                    </nav>

            </div>

        </header>
    );
};

export default Header;