export default function Card2() {
    return (
        <section className="bg-dark-grayblue shadow-lg px-8 py-6 mb-6 lg:mb-0 rounded-2xl">

            <div className="flex items-center gap-x-4 mb-4">
                <span className="w-10 rounded-full border-2 border-white/50 overflow-hidden">
                    <img src="/images/image-jonathan.jpg" alt="daniel profile photo" />
                </span>
                <span className=''>
                    <h4 className='text-white mb-0 leading-tight'>Jonathan Walters</h4>
                    <p className='text-white opacity-50 font-normal text-sm'>Verified Graduate</p>
                </span>
            </div>

            <p className="mb-4 text-white text-xl lg:text-[21px] lg:font-semibold">The team was very supportive and kept me motivated</p>

            <p className="text-white text-[15px] lg:text-[16px] opacity-70">
                “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”
            </p>
        </section>
    )
}