import { useContext, useEffect } from "react"
import { MenuLinksContext } from "../../contexts/MenuLinksContext"


export default function MenuLinkListItem({linkItem}) {
    const {linksDispacher} = useContext(MenuLinksContext)

    const  statusDone = async (linkItem) =>{
        // let res = await fetch(`https://6604ec192ca9478ea17eca2e.mockapi.io/menuLinks/${linkItem.id}`,{
        //     method:"put",
        //     headers: {'content-type':'application/json'},
        //     body:JSON.stringify({
        //         linkStatus : true
        //     })
        // })

        // if(res.ok){
        //     linksDispacher({
        //         type:'statusDone',
        //         id: linkItem.id
        //     })
        // }
        linksDispacher({
            type:'statusDone',
            id: linkItem.id
        })
    }

    useEffect(()=>{

    },[])
    return(
        <>
            <li className="group relative">
                <a onClick={()=>statusDone(linkItem)} className={`inline-block text-gray-900 px-5 py-1 rounded-t border-b border-transparent hover:text-mainColorBlue-200 transition-all ${linkItem.linkStatus ? 'text-mainColorBlue-200':''}`} href="#">{linkItem.linkTitle}</a>
                <span className={`lineB absolute top-full bg-mainColorBlue-200 rounded-full h-1 ${linkItem.linkStatus ? 'w-full left-0':'w-0 left-1/2'} group-hover:w-full group-hover:left-0 transition-all`}></span>
            </li>
        </>
    )
}
