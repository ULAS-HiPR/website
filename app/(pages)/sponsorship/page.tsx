import { Button } from "@/components/ui/button";

export default function Sponsorship() {
    return (
        <>
            <div className="px-5">
                {/* Gold Sponsorship */}
                <div className="text-4xl font-bold text-center my-8">
                    Gold Sponsorship
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4 px-4">
                    {/* Images adjusted for responsive design */}
                    <a href="https://www.analog.com/en/index.html" target="_blank">
                        <img
                            className="max-w-4xl sm:max-w-sm md:max-w-2xl rounded-lg object-contain"
                            src={"/ADI_Logo__Blue_Transparent.png"}
                            alt="Analog Devices Logo"
                        />
                    </a>
                    <a href="https://www.ul.ie/engineering/" target="_blank">
                        <img
                            className="h-auto max-w-xl rounded-lg"
                            src={"/ul_eng.png"}
                            alt="UL School of Engineering Logo"
                        />
                    </a>
                
                </div>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                {/* Silver Sponsorship */}
                
                <div className="text-4xl font-bold text-center my-8">
                    Intrested in becoming a sponsor?
                </div>
                <div className="flex justify-center pb-20">
                    <a href="mailto:ulas-hipr@gmail.com">
                        <Button className="text-lg font-bold ailign-center text-center items-center" variant={"outline"} >
                            Get in touch
                        </Button>
                    </a>
                </div>
            </div>
        </>
    );
}
