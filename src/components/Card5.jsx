export default function Card5() {
    return (
        <section className="bg-white shadow-lg px-8 py-6 mb-6 lg:col-span-1 lg:mb-0 rounded-2xl">

            <div className="flex items-center gap-x-4 mb-4">
                <span className="w-10 rounded-full border-2 border-dark-grayblue/50 border-dark-grayblue overflow-hidden">
                    <img src="/images/image-kira.jpg" alt="profile photo" />
                </span>
                <span className=''>
                    <h4 className='text-dark-grayblue mb-0 leading-tight'>Kira Whittle</h4>
                    <p className='text-dark-grayblue opacity-50 font-normal text-sm'>Verified Graduate</p>
                </span>
            </div>

            <p className="mb-4 text-dark-grayblue font-semibold text-xl lg:text-[21px] lg:font-semibold">
                Such a life-changing experience. Highly recommended!
            </p>

            <p className="text-dark-grayblue text-[15px] lg:text-[16px] opacity-70">
                “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
            </p>
        </section>
    )
}