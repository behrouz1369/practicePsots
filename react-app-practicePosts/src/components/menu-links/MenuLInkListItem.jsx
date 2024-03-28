

export default function MenuLinkListItem({linkItem,statusDone}) {

    return(
        <>
            <li className="group relative">
                <a onClick={()=>statusDone(linkItem)} className={`inline-block text-gray-900 px-5 py-1 rounded-t border-b border-transparent hover:text-mainColorBlue-200 transition-all ${linkItem.linkStatus ? 'text-mainColorBlue-200':''}`} href="#">{linkItem.linkTitle}</a>
                <span className={`lineB absolute top-full bg-mainColorBlue-200 rounded-full h-1 ${linkItem.linkStatus ? 'w-full left-0':'w-0 left-1/2'} group-hover:w-full group-hover:left-0 transition-all`}></span>
            </li>
        </>
    )
}
