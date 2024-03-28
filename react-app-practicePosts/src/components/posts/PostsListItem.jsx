

export default function PostsListItem({post}) {


    return(
        <>
            <div>
                <article className="group flex flex-col bg-white text-sm text-gray-600 p-3 border-2 border-gray-200 rounded cursor-pointer shadow-lg hover:shadow-mainColorBlue-50 hover:-translate-y-1 transition-all duration-500">
                    <div className="relative w-full h-[200px] rounded-t overflow-hidden">
                        <a href="#"><img className="w-full h-full object-cover m-0 group-hover:scale-150 group-hover:rotate-12 transition-all duration-700" src={post.img} alt="company.ir" /></a>
                        <div className="absolute top-0 right-0 w-full h-full bg-black opacity-20 group-hover:opacity-30"></div>
                    </div>
                    <div className="flex justify-start pt-3">
                        <h4 className="truncate"><a className="text-[16px] font-semibold group-hover:text-mainColorBlue-100 transition-all" href="#">{post.title}</a></h4>
                    </div>
                </article>
            </div>
        </>
    )
}
