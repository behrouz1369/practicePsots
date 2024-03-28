import { useContext } from "react"
import PostsListItem from "./PostsListItem"
import { PostsContext } from "../../contexts/PostsContext"


export default function PostsList() {

    const posts = useContext(PostsContext);

    return(
        <>
            {/* <!-- Content Section Posts --> */}
            <section className="contentSectionPosts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {
                    posts.map((post,index) => <PostsListItem key={index} post={post} />)
               }
            </section>
        </>
    )
}
