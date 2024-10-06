import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
    return (
        <section id='home' className="w-full pt-10 pb-20 flex items-center border-b-[1px] border-b-black">
            <BannerLeft />
            <BannerRight />
        </section>
    );
};

export default Banner;