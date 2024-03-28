import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PostsList from "./PostsList";
import useFetch from "../../hooks/useFetch";
import postsReducer from "../../reducers/postsReducer";
import { PostsContext } from "../../contexts/PostsContext";


export default function Posts() {

    // const [posts , setPosts]= useState([]);
    const [posts , postsDispacher] = useReducer(postsReducer , [])

    // const []

    let getFetch = async () => {
        let res = await fetch("https://6604ec192ca9478ea17eca2e.mockapi.io/posts",{
            method:"get",
            headers: {'content-type':'application/json'}
        })
        if(res.ok){
            postsDispacher({
                type:'initialPosts',
                posts: await res.json()
            })
        }

    }

    useEffect(()=>{

        getFetch()

    },[])

    return(

        <>
            {/* <!-- Section Posts --> */}
            {/* <section className="sectionPosts bg-white py-32">
                <div className="container mx-auto px-8"> */}
                    {/* <!-- Title Section Posts --> */}
                    {/* <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full pb-5 mb-5">
                        <div className="flex flex-col justify-between gap-3">
                            <h2 className="text-xl text-center md:text-right md:text-2xl font-bold">آخرین مقالات</h2>
                            <div className="bg-mainColorYellow rounded-lg w-full h-2"></div>
                        </div>

                        <div>
                            <button className="flex justify-center items-center text-sm font-semibold border-2 border-mainColorYellow text-mainColorYellow rounded py-2 px-5 hover:bg-mainColorYellow hover:text-white transition-all">نمایش همه</button>
                        </div>
                    </div> */}

                    <PostsContext.Provider value={posts}>
                    <PostsList />
                    </PostsContext.Provider>

                {/* </div>
            </section> */}
        </>
    )
}
