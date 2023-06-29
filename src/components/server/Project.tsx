import type { ReactNode } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import IMAGE1 from "../../../public/temp/STRIPE_OPEN_AI_DATA_FLOW.png";
import Image from "next/image";

const MD = ({ children, alt, base, className, ...props }: { children: ReactNode, alt?: any | null, base?: any | null, className?: string }) => (
    <span className={`markdown ${base && "text-base"} ${alt && "text-purple-800 dark:text-purple-500 ring-purple-50"} ${className}`} {...props} >{children}</span>
)

const Concept = ({children}: { children: ReactNode }) => (
    <MD alt base className="text-blue-700 dark:text-blue-600">{children}</MD>
)

const builtWith = ["Next.js", "Node.js", "Express", "TypeScript", "Prisma", "tRPC", "Redis", "PostgreSQL", "Docker", "Tailwind CSS"];
const concepts = ["Session-based Authentication", "Middleware", "OpenAI", "WebSockets", "SSR", "SSG", "ISR", "Caching", "RPC", "ORM", "MVC", "Unit Testing", "Integration Testing", "React Components"];

export default function Project ({}) {
    return (
        <section className="p-10">
            <header className="lg:grid grid-cols-2 place-items-center" >
                <div className="lg:pr-10 lg:border-r-2 lg:border-">
                    <h2 className="lg:mb-4 mb-2 w-fit pb-2 border-b-[1px] border-stone-300">Team-Based Image Generation</h2>
                    <h4 className="lg:mb-4 mb-2">Full-stack web application for AI generating images in a team setting.</h4>

                    <p className="lg:pr-16">
                        While anyone who navigates to the site can browser image generations, users who are signed up can enter the <MD>game room.</MD> Where they can connect with other members waiting to generate images. 
                        Once connected, the <MD>admin</MD> will start the game and users can chat and answer questions together to progress the match.
                        The match will end with a <MD>AI generated image</MD> that members can then post to the <MD>explore page.</MD>
                    </p>
                </div>

                <Carousel emulateTouch={true} infiniteLoop={true} autoPlay={true} showThumbs={false} showArrows={false} showStatus={false}>
                    <div>
                        <Image src={IMAGE1} alt="" fill/>
                    </div>

                    <div>
                        <img className="max-w-[100%] h-auto" src="http://placehold.it/800x500" alt="image" />
                    </div>
                </Carousel>
            </header>

            <ul>
                <h6>Technical Details</h6>
                
                <li>
                    <p>Built with:</p>
                    <ul>
                        { concepts?.map((concept: string, key: number) => <MD key={key} base>{concept}</MD>) }
                    </ul>
                </li>

                <li>
                    <p>Concepts demonstrated:</p>
                    <ul>
                        { concepts.map((concept: string, key: number) => <MD key={key} className="text-blue-700 dark:text-blue-500 ring-blue-300/10 dark:ring-blue-300/10" base>{concept}</MD>) }
                    </ul>
                </li>

                <li>
                    <p>Notable Achievements:</p>
                    <ul className="list-disc list-outside pl-6">
                        <li>Designed a split <MD base>MVC & Client-Sever</MD> architecture to isolate social media and realtime connection subcomponents of web app and maintain industry best practices.</li>
                        <li>Developed unit tested <MD base>session-based middleware</MD> in both web application and socket server to securely handle malicious requests.</li>
                        <li>Architected <MD base>Redis</MD> and <MD base>Socket.io</MD> caching on socket server to maintain, manage and serve subsets of sensitive data to the right clients. </li>
                    </ul>
                </li>

            </ul>
        </section>
    );
}