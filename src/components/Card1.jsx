export default function Card2() {
    return (
        <section className="bg-purpleBg bg-mod-violet bg-no-repeat bg-[top_right_24px] lg:bg-[top_right_80px] shadow-lg lg:col-span-2 px-8 py-6 mb-4 lg:mb-0 rounded-2xl">

            <div className="flex items-center gap-x-4 mb-4">
                <span className="w-10 rounded-full border-2 border-white/50 overflow-hidden">
                    <img src="/images/image-daniel.jpg" alt="daniel profile photo" />
                </span>
                <span className=''>
                    <h4 className='text-white mb-0 leading-tight'>Daniel Clifford</h4>
                    <p className='text-white opacity-50 font-normal text-sm'>Verified Graduate</p>
                </span>
            </div>

            <p className="mb-4 text-white text-xl lg:text-[21px] lg:font-semibold">
                I received a job offer mid-course, and the subjects I learned were current, if not more so,
                in the company I joined. I honestly feel I got every penny's worth.
            </p>
            <p className="text-white text-[15px] lg:text-[16px] opacity-70">
                “ I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. ”
            </p>
        </section>
    )
}