import NavMenu from "./NavMenu";

export default function Header() {

    return(

        <>
            {/* <!-- Header Web --> */}
            <header className="fixed top-0 bg-white w-full h-[120px] z-10">
                {/* <!-- Navigation --> */}
                <div className="navigation shadow-lg">
                    <div className="container mx-auto px-8">
                        <div className="flex justify-between items-center py-5">
                            <NavMenu />

                            {/* <!-- Nav Left --> */}
                            <div className="navLeft">
                                <div className="logo flex items-center gap-2">
                                    <a href="#"><img className="w-16 h-16 object-cover" src="https://i.postimg.cc/25D3TFZM/logo-6.png" alt="companyCow" title="companyCow.ir" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--  --> */}
            </header>
        </>
    )
}
