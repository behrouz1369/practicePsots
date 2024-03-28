

export default function AboutUs() {


    return(
        <>
            {/* <!-- Main Header --> */}
            <section className="bg-gray-200 py-24 border-b-2 border-gray-300">
                <div className="container mx-auto px-8">
                    <article className="flex justify-center items-center">
                        <h2 className="text-3xl md:text-5xl text-gray-600 font-bold m-0">درباره ما</h2>
                    </article>
                </div>
            </section>

            {/* <!-- Section Content About US --> */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-8">
                    {/* <!-- Section Address --> */}
                    <div className="grid grid-cols-2 items-center w-full gap-16 md:gap-0">
                        <div className="col-span-2 md:col-span-1 md:w-3/4">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-5">آیا پروژه ای در ذهن دارید؟ در تماس باشید!</h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-9">هرزمان خواستید با ما تماس بگیرید ما سعی می کنیم در روزهای کاری ظرف 24 ساعت به همه سوالات پاسخ دهیم.</p>
                            </div>
                            <div className="flex flex-col justify-center md:justify-start gap-5 items-center">
                                <div>
                                    <span className="flex justify-center items-center w-[95px] h-[95px] bg-mainColorYellow rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="text-sm md:text-lg text-gray-500 font-semibold leading-7">
                                    <p>به تیم در حال رشد ما بپیوندید؟</p>
                                    <a className="text-lg md:text-xl text-gray-600 underline" href="#">exampleLink@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <div className="grid grid-cols-2 gap-8">
                                {/* <!-- Box About Us --> */}
                                <article className="col-span-2 lg:col-span-1 flex flex-col bg-gray-200 shadow-xl shadow-mainColorBlue-50 rounded p-8">
                                    <div className="w-full overflow-hidden rounded">
                                        <img className="w-full h-full object-cover m-0" src="https://i.postimg.cc/wMPpfNHF/aboutus-5.jpg" title="posts.ir" alt="aboutUs img" />
                                    </div>

                                    <div className="flex flex-col pt-8 text-[13px] text-gray-500">
                                        <div className="text-lg pb-5">
                                            <h4 className="text-gray-700 font-semibold">مقاله ها - تهران</h4>
                                            <p>استان تهران، تهران، بلوار ابوذر - آهنگ، بسیج، بقایی</p>
                                        </div>

                                        <div className="">
                                            <p className="text-gray-700 font-semibold">تلفن : <span className="text-sm text-gray-500">123 456 7894</span></p>
                                            <p className="text-gray-700 font-semibold">ایمیل : <span className="text-sm text-gray-500 underline">info@example.com</span></p>
                                        </div>
                                    </div>
                                </article>

                                {/* <!-- Box About Us --> */}
                                <article className="col-span-2 lg:col-span-1 flex flex-col bg-gray-200 shadow-xl shadow-mainColorBlue-50 rounded p-8">
                                    <div className="w-full overflow-hidden rounded">
                                        <img className="w-full h-full object-cover m-0" src="https://i.postimg.cc/RFKDztCk/aboutus-2.jpg" title="posts.ir" alt="aboutUs img" />
                                    </div>

                                    <div className="flex flex-col pt-8 text-[13px] text-gray-500">
                                        <div className="text-lg pb-5">
                                            <h4 className="text-gray-700 font-semibold">مقاله ها - نیشابور</h4>
                                            <p>استان  خراسان رضوی، بلوار جانبازان شهرک بسیج، بقایی</p>
                                        </div>

                                        <div className="">
                                            <p className="text-gray-700 font-semibold">تلفن : <span className="text-sm text-gray-500">123 456 7894</span></p>
                                            <p className="text-gray-700 font-semibold">ایمیل : <span className="text-sm text-gray-500 underline">info@example.com</span></p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
