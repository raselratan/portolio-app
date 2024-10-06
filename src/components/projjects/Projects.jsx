import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets";

const Projects = () => {
    return (
        <section id="projects" className="w-full py-20 border-b-[1px" border-b-black>
            <div className="flex justify-center items-center text-center">
                <Title title="Visit my portfolio" description="My Projects" />
            </div>
            <div className="grid grid-cols-3 gap-14">
                <ProjectCard title="Account ERP" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem modi velit aperiam alias rem asperiores adipisci minima vel, amet impedit labore. Modi laborum blanditiis minima sapiente commodi nostrum consequatur." src={projectOne} />
                <ProjectCard title="Account ERP" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem modi velit aperiam alias rem asperiores adipisci minima vel, amet impedit labore. Modi laborum blanditiis minima sapiente commodi nostrum consequatur." src={projectTwo} />
                <ProjectCard title="Account ERP" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem modi velit aperiam alias rem asperiores adipisci minima vel, amet impedit labore. Modi laborum blanditiis minima sapiente commodi nostrum consequatur." src={projectThree} />
                <ProjectCard title="Account ERP" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem modi velit aperiam alias rem asperiores adipisci minima vel, amet impedit labore. Modi laborum blanditiis minima sapiente commodi nostrum consequatur." src={projectOne} />
                <ProjectCard title="Account ERP" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem modi velit aperiam alias rem asperiores adipisci minima vel, amet impedit labore. Modi laborum blanditiis minima sapiente commodi nostrum consequatur." src={projectTwo} />
                <ProjectCard title="Account ERP" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error autem modi velit aperiam alias rem asperiores adipisci minima vel, amet impedit labore. Modi laborum blanditiis minima sapiente commodi nostrum consequatur." src={projectThree} />
            </div>
        </section>
    );

}

export default Projects;