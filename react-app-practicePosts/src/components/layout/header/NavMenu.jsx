import { useContext, useState } from "react";
import MenuLinks from "../../menu-links/MenuLinks";
import { MenuLinksContext } from "../../../contexts/MenuLinksContext";


export default function NavMenu() {
    const {showMenu , openMenuHandler} = useContext(MenuLinksContext)

    return(

        <>
            {/* <!-- Nav Right --> */}
            <div className="navRight flex flex-col justify-start gap-5">
                {/* <!-- Nav Top --> */}
                <div className="flex items-center gap-8 text-[13px] text-gray-500">
                    <div className="flex items-center gap-3 font-[500]">
                        {/* <!-- Section Language --> */}
                        <div>
                            <a href="#" className="text-gray-500"><img className="w-5 h-5 rounded m-0 object-cover" src="https://i.postimg.cc/m20Qf5q5/flag-iran.png" alt="lan-iran" /></a>
                        </div>

                        {/* <!-- Section Search --> */}
                        <div>
                            <span className="group cursor-pointer text-gray-700 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:scale-125 transition-all w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* <!-- Contact Support Navigation --> */}
                    <div className="hidden md:flex items-center gap-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                            </svg>
                        </span>
                        <span> (123) 456-789</span>
                    </div>


                </div>

                {/* <!-- Button Hamburger --> */}
                <div className="md:hidden relative flex flex-col justify-center items-center p-[5px] w-[35px] h-[35px] border rounded ring-mainColorBlue-100 active:ring-1">
                    <div onClick={openMenuHandler} id="btnHamburger" className={`
                        ${showMenu ? 'toggleHamburger' : ''}
                         bg-gray-300 rounded-full w-full h-1 transition-all
                         before:content-['']
                         before:absolute
                         before:w-9/12
                         before:h-1
                         before:bg-gray-300
                         before:rounded-full
                         before:-translate-y-2
                         before:transition-all
                         after:content-['']
                         after:absolute
                         after:w-9/12
                         after:h-1
                         after:bg-gray-300
                         after:rounded-full
                         after:translate-y-2
                         after:transition-all
                    `}>

                    </div>
                </div>

                {/* <!-- Nav Bottom --> */}
                <nav id="navBottom" className={`${showMenu ? 'flex':'hidden'} md:flex z-10 fixed md:static top-0 right-0 h-full md:h-auto flex-col md:flex-row bg-white px-16 md:px-0 pt-24 md:pt-0 items-center gap-16 md:gap-5 transition-all duration-700`}>
                    {/* <!-- Btn Close Menu --> */}
                    <span onClick={openMenuHandler} id="btnCloseMenu" className="md:hidden absolute top-5 left-5 flex justify-center items-center border border-gray-300 rounded ring-mainColorBlue-100 active:ring w-[35px] h-[35px] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </span>
                    {/* <!-- Button Login --> */}
                    <div className="order-2 md:order-1 w-full md:w-auto">
                        <button className="flex items-center gap-1 justify-center text-[16px] text-white text-center bg-mainColorGreen font-bold w-[150px] py-2 rounded shadow-lg hover:shadow-gray-400 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                            ورود کاربران
                        </button>
                    </div>
                    <MenuLinks />
                </nav>
            </div>
        </>
    )
}
