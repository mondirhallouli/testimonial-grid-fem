export default function Card3() {
    return (
        <section className="bg-white shadow-lg px-8 py-6 mb-6 lg:col-span-1 lg:mb-0 rounded-2xl">

            <div className="flex items-center gap-x-4 mb-4">
                <span className="w-10 rounded-full border-2 border-dark-grayblue/50 border-dark-grayblue overflow-hidden">
                    <img src="/images/image-jeanette.jpg" alt="daniel profile photo" />
                </span>
                <span className=''>
                    <h4 className='text-dark-grayblue mb-0 leading-tight'>Jeanette Harmon</h4>
                    <p className='text-dark-grayblue opacity-50 font-normal text-sm'>Verified Graduate</p>
                </span>
            </div>

            <p className="mb-4 text-dark-grayblue font-semibold text-xl lg:text-[21px] lg:font-semibold">An overall wonderful and rewarding experience</p>

            <p className="text-dark-grayblue text-[15px] lg:text-[16px] opacity-70">
                “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
            </p>
        </section>
    )
}