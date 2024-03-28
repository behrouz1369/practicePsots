

export default function Footer() {
    const ScrollTopHandler = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <>
            {/* <!-- Footer --> */}
            <footer className="border-t pt-20 bg-gray-100">
                <div className="container mx-auto px-8">
                    {/* <!-- Logo Footer --> */}
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                        <div>
                            <a href="#"><img className="w-16 h-16 object-cover m-0" src="https://i.postimg.cc/25D3TFZM/logo-6.png" /></a>
                            <div className="flex text-sm text-gray-500 font-semibold gap-5 divide-x-2 mt-3">
                                <span>تلفن پشتیبانی</span>
                                <span>021-43244444</span>
                            </div>
                        </div>

                        <div>
                            <button id="btnTop" onClick={ScrollTopHandler} className="group flex justify-center items-center gap-1 text-sm font-semibold text-gray-600 w-[150px] h-[45px] border-2 border-gray-200 rounded">
                                بازگشت به بالا
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Footer Links --> */}
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-10 md:gap-3 pt-10 mt-10 border-t-2">
                        {/* <!-- Descriptions Website --> */}
                        <div className="flex-1 text-center">
                            <h2 className="text-xl text-gray-700 font-bold mb-5">عنوان اصلی شماره یک</h2>
                            <p className="text-sm text-gray-500 font-[500] mb-5">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                            </p>
                        </div>
                        <div className="flex-1 text-center">
                            <h2 className="text-xl text-gray-700 font-bold mb-5">سرویس ها</h2>
                            <ul className="flex flex-col gap-3 text-[14px] text-gray-500 font-[500]">
                                <li><a className="hover:text-mainColorBlue-200 transition-all" href="#">صفحه اصلی</a></li>
                                <li><a className="hover:text-mainColorBlue-200 transition-all" href="#">مقالات</a></li>
                                <li><a className="hover:text-mainColorBlue-200 transition-all" href="#">درباره ما</a></li>
                            </ul>
                        </div>
                        <div className="flex-1 text-center">
                            <h2 className="text-xl text-gray-700 font-bold mb-5">نیاز به کمک دارید؟</h2>
                            <div className="flex flex-col text-sm font-[600] mb-5">
                                {/* <!-- <p className="text-gray-700 mb-1">نیاز به کمک دارید؟</p> --> */}
                                <p className="text-[13px] text-gray-500 mb-3">مستقیما با ما تماس بگیرید؟</p>
                                <span className="text-mainColor-100 font-semibold underline">021-4235854</span>
                            </div>

                            <div className="flex flex-col text-sm font-[600] mb-5">
                                <p className="text-gray-700 mb-1">نیاز به پشتیبانی دارید؟</p>
                                {/* <!-- <p className="text-[13px] text-gray-500 mb-3">با شماره زیر تماس بگیرید.</p> --> */}
                                <span className="text-mainColor-100 font-semibold underline">example@yahoo.com</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer Bottom --> */}
                    <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5 border-t-2 mt-5">
                        <div>
                            <p className="text-[12px] text-gray-400 font-semibold">تمامی حقوق این وبسایت برای شرکت مقاله ها محفوظ است و استفاده از مطالب این سایت تنها با ذکر منبع مجاز است.</p>
                        </div>

                        {/* <!-- Network Social --> */}
                        <div>
                            <ul className="flex gap-5">
                                <li><a className="text-gray-500 hover:text-gray-900 transition-all duration-500" href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                    </span>
                                </a></li>
                                <li><a className="text-gray-500 hover:text-gray-900 transition-all duration-500" href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                    </span>
                                </a></li>
                                <li><a className="text-gray-500 hover:text-gray-900 transition-all duration-500" href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                    </span>
                                </a></li>
                                <li><a className="text-gray-500 hover:text-gray-900 transition-all duration-500" href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                    </span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
