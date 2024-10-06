import Title from "../layouts/Title";
import Card from "./Card";

import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
    return (
        <section
            id='features'
            className="w-full pb-20 py-20 border-b-[1px] border-b-black"
        >
            <Title title="Features" description="What I do" />
            <div className="grid grid-cols-3 gap-20">
                <Card
                    title="Business Stratagy"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
                />
                <Card
                    title="App Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
                    icon= {<AiFillAppstore />}
                />
                <Card
                    title="SEO Optimisation"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
                    icon= {<SiProgress />}
                />
                <Card
                    title="Mobile Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
                    icon= {<FaMobile />}
                />
                <Card
                    title="UX Design"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
                    icon= {<SiAntdesign />}
                />
                <Card
                    title="Hosting Websites"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
                    icon= {<FaGlobe />}
                />
            </div>
        </section>
    );
}

export default Features;