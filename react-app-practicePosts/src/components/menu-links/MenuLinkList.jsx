import { useContext } from "react";
import MenuLinkListItem from "./MenuLInkListItem";
import { MenuLinksContext } from "../../contexts/MenuLinksContext";


export default function MenuLinkList() {

    const {menuLinks} = useContext(MenuLinksContext)

    return(
        <>
            {/* <!-- Menu --> */}
           <ul className="order-1 md:order-2 flex flex-col md:flex-row space-y-3 md:space-y-0 text-lg text-center md:text-right font-semibold">
                {
                    menuLinks.map((linkItem , index) => <MenuLinkListItem key={index} linkItem={linkItem} />)
                }
            </ul>
        </>
    )
}
