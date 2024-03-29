import { useContext, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MenuLinkList from "./MenuLinkList";
import useFetch from "../../hooks/useFetch";
import linksReducer from "../../reducers/linkReducer";
import { MenuLinksContext } from "../../contexts/MenuLinksContext";

export default function MenuLinks() {
    // const [menuLinks , setMenuLinks] = useState([])

    const[menuLinks , linksDispacher] = useReducer(linksReducer , []);
    const menuContext = useContext(MenuLinksContext)


    let getLinks = async () => {
        let res = await fetch("https://6604ec192ca9478ea17eca2e.mockapi.io/menuLinks",{
            method:"get",
            headers: {'content-type':'application/json'},
        })
        if(res.ok){
            linksDispacher({
                type:'initialLinks',
                links: await res.json()
            })
        }
    }

    useEffect(()=>{
        getLinks()

    },[])

    return(
        <>
            <MenuLinksContext.Provider value={{
                menuLinks,
                linksDispacher
            }}>
                <MenuLinkList />
            </MenuLinksContext.Provider>

        </>
    )
}
