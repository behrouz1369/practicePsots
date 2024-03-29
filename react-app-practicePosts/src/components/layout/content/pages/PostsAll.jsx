import Posts from "../../../posts/posts";


export default function PostsAll() {

    return(

        <>
            {/* <!-- Main Header --> */}
            <section className="bg-gray-200 py-24 border-b-2 border-gray-300">
                <div className="container mx-auto px-8">
                    <article className="flex justify-center items-center">
                        <h2 className="text-3xl md:text-5xl text-gray-600 font-bold m-0">مقالات</h2>
                    </article>
                </div>
            </section>

            {/* <!-- Section Posts --> */}
            <section className="sectionPosts bg-white py-32">
                <div className="container mx-auto px-8">

                    {/* Posts */}
                    <Posts />

                </div>
            </section>
        </>
    )
}
