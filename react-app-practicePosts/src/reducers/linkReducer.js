

export default function linksReducer(links,action) {

    switch (action.type) {
        case 'initialLinks':
            return action?.links

        case 'statusDone':
            return links.map((menuLink)=>{
                if(menuLink.id === action?.id){
                     menuLink.linkStatus = true
                }else{
                    menuLink.linkStatus = false
                }
                return menuLink;
            })

        default:
            return links
    }
}
