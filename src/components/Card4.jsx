export default function Card4() {
    return (
        <section className="bg-dark-blackblue shadow-lg lg:col-span-2 px-8 py-6 mb-6 lg:mb-0 rounded-2xl">

            <div className="flex items-center gap-x-4 mb-4">
                <span className="w-10 rounded-full border-2 border-mod-violet overflow-hidden">
                    <img src="/images/image-patrick.jpg" alt="daniel profile photo" />
                </span>
                <span className=''>
                    <h4 className='text-white mb-0 leading-tight'>Patrick Abrams</h4>
                    <p className='text-white opacity-50 font-normal text-sm'>Verified Graduate</p>
                </span>
            </div>

            <p className="mb-4 text-white font-semibold text-xl lg:text-[21px] lg:font-semibold">
                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
            </p>

            <p className="text-white text-[15px] lg:text-[16px] opacity-70">
                “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
            </p>
        </section>
    )
}