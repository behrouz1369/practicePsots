import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MenuLinkList from "./MenuLinkList";
import useFetch from "../../hooks/useFetch";
import linksReducer from "../../reducers/linkReducer";

export default function MenuLinks() {
    // const [menuLinks , setMenuLinks] = useState([])

    const[menuLinks , linksDispacher] = useReducer(linksReducer , []);


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


    const  statusDone = async (linkItem) =>{
        let res = await fetch(`https://6604ec192ca9478ea17eca2e.mockapi.io/menuLinks/${linkItem.id}`,{
            method:"put",
            headers: {'content-type':'application/json'},
            body:JSON.stringify({
                linkStatus: ! linkItem.linkStatus
            })
        })

        if(res.ok){
            linksDispacher({
                type:'statusDone',
                id: linkItem.id
            })
        }
    }

    useEffect(()=>{
        getLinks()

    },[])

    return(
        <>
           <MenuLinkList menuLinks={menuLinks} statusDone={statusDone} />
        </>
    )
}
