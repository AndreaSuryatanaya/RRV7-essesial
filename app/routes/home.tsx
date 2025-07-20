import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [{ title: "RESTExplorer" }, { name: "Check out country data!", content: "Welcome to RESTExplore" }];
}

export default function Home() {
    return (
        <div className="p-8">
            <div>
                <div>
                    <div>
                        <div>
                            <h1>
                                <span>Explore Countries with </span>
                                <span> Real-Time Data</span>
                            </h1>

                            <p>Discover details about every country around the world - from capitals to regions !</p>
                            <div className="mt-8">
                                <Link
                                    to="/countries"
                                    className="flex mb-2 gap-2 items-center border-1 border-gray-100 w-fit rounded-full px-3 py-1"
                                >
                                    {" "}
                                    Explore Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-arrow-right-icon lucide-arrow-right"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link to="/about" className="border-1 border-gray-100 w-fit rounded-full px-3 py-1">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
