import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVuejs, FaLaravel, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const BannerLeft = () => {

    const [text] = useTypewriter({
        words: ['Fullstack Developer.', 'Laravel Developer.', 'Vue Developer.', 'Nuxt Developer.', 'React Developer.'],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 15,
        delaySpeed: 2000
    });

    return (
        <div className="w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-lg font-normal">WELCOME TO TEQNOGEN</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hello
                </h1>
                <h1 className="text-6xl font-bold text-white">
                    I'm {" "}
                    <span className="text-designColor capitalize">
                        RASEL MAHMUD RATAN
                    </span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor 
                     cursorBlinking="false"
                     cursorStyle="|"
                     cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam a asperiores officia, deserunt necessitatibus vel deleniti sit ipsam. Voluptatem eius molestiae molestias, laborum voluptate praesentium sapiente quod quaerat similique at.
                </p>
            </div>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find Me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                        <span className="bannerIcon">
                            <FaTwitter />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Best Skills
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaLaravel />
                        </span>
                        <span className="bannerIcon">
                            <FaVuejs />
                        </span>
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiBootstrap />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerLeft;