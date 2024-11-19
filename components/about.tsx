import Link from "next/link";
import IconSmiley from "./icons/smiley";
import SectionTitle from "./ui/section-title";
import IconExternalLink from "./icons/external-link";
import Section from "./ui/section";

const About = () => {
    return (
        <Section>
            <SectionTitle title="Meet With" icon={<IconSmiley />} />
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-8 py-6">
                <div className="bg-gray-350 shadow-md rounded-md flex-1 p-8">
                    <h2 className="text-xl font-medium underline pb-4">Short of me</h2>
                    <div className="flex flex-col gap-y-4 text-justify">
                        <p>
                            I’m a 3rd-year IT student based in Finland, crafting efficient and simple-to-enhance web & mobile applications.
                        </p>
                        <p>
                            With expertise across both front-end and back-end technologies, I write test-driven, clean, and maintainable code.
                        </p>
                        <p>
                            Outside of coding, I enjoy hiking, discovering new coffee spots, and experimenting with DIY tech projects.
                        </p>
                    </div>
                    <Link href="/about">
                        <div className="flex gap-x-2 justify-center lg:justify-start items-center  pt-12">
                            <h3 className="text-lg font-normal cursor-pointer">More of me here</h3>
                            <IconExternalLink />
                        </div>
                    </Link>
                </div>
                <div className="bg-gray-50 shadow-md rounded-md flex-1 p-8">
                    <h2 className="text-xl font-medium underline pb-4">Noteworthy Achievements</h2>
                    <div className="flex flex-col gap-y-4 text-justify">
                        <p>
                            Developed a customer database system featuring advanced undo/redo functionality for enhanced user experience.
                        </p>
                        <p>
                            Contributed to multiple full-stack projects, optimizing performance and scalability in production environments.
                        </p>
                        <p>
                            Achieved significant improvements in CI/CD pipelines, reducing deployment times by 40%.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-4 pt-12">
                        <h3>Worked with</h3>
                        <div className="flex gap-x-4">
                            <div>React</div>
                            <div>Node.js</div>
                            <div>Express</div>
                            <div>PostgreSQL</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
