import { useContext, useEffect, useState } from "react";
import Header from "./components/layout/header/Header";
// import MainContent from "./components/layout/content/pages/MainContent";
import Footer from "./components/layout/footer/Footer";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContent from "./components/layout/content/pages/MainContent";
import AboutUs from "./components/layout/content/pages/AboutUs";
import PostsAll from "./components/layout/content/pages/PostsAll";
import { MenuLinksContext } from "./contexts/MenuLinksContext";


function App() {
    // Show And Close Menu Navigation
    const menuLinksContext = useContext(MenuLinksContext)

    const [showMenu , setShowMenu] = useState(false)
    const openMenuHandler = () => {
        if(! showMenu){
            document.body.classList.add('overflow-hidden')
            return setShowMenu(true)

        }else{
            document.body.classList.remove('overflow-hidden')
            return setShowMenu(false)

        }
    }

    useEffect(()=>{
        // close Menu Change Resize Window
       window.onresize = ()=>{
        document.body.classList.remove('overflow-hidden')
        setShowMenu(false)
       }
    },[])
    //////

  return (
    <>
        <MenuLinksContext.Provider value={{
            showMenu,
            openMenuHandler
        }}>
            <Header />
        </MenuLinksContext.Provider>


         {/* <!-- Content Web --> */}
        <main className="mt-[120px]">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="/" element={<MainContent />} />
                        <Route path="/postsall" element={<PostsAll />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                    </Route>

                </Routes>
            </BrowserRouter>

        </main>


        <Footer />

        {/* <!-- Ovelay --> */}
        <div id="Ovelay" onClick={openMenuHandler} className={`${showMenu ? '':'hidden'} fixed top-0 right-0 w-full h-full bg-black opacity-50 z-0 transition-all`}></div>
    </>
  )
}

export default App
