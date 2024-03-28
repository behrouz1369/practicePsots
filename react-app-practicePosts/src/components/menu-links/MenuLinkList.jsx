import MenuLinkListItem from "./MenuLInkListItem";


export default function MenuLinkList({menuLinks,statusDone}) {


    return(
        <>
            {/* <!-- Menu --> */}
           <ul className="order-1 md:order-2 flex flex-col md:flex-row space-y-3 md:space-y-0 text-lg text-center md:text-right font-semibold">
                {
                    menuLinks.map((linkItem , index) => <MenuLinkListItem key={index} linkItem={linkItem} statusDone={statusDone} />)
                }
            </ul>
        </>
    )
}
