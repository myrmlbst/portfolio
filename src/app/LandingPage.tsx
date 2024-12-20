import {Link} from "react-router-dom";
import Header from "./Header.tsx";

function LandingPage() {
    return (
        <div>
        <Header></Header>
        <div className="h-dvh w-dvw bg-gradient-to-r from-color1 via-color2 to-color3 pt-28 pl-20 pr-20">
            <div className="items-center bg-black bg-opacity-75 shadow-zinc shadow-xl pb-24">

            {/*
                <div className="border-2 border-yellow flex flex-row-reverse text-zinc">

                    <p className="p-2 hover:text-darkblue">
                        <Link to="overview">Overview</Link>
                    </p>
                    <p className="p-2 hover:text-darkblue">
                        <Link to="experience">Experience</Link>
                    </p>
                    <p className="p-2 hover:text-darkblue">
                        <Link to="stack">Stack</Link>
                    </p>
                    <p className="p-2 hover:text-darkblue">Contact</p>
                </div>
            */}



                <div className="text-zinc pt-32 pb-32">
                    <div className="flex items-center justify-center p-2">
                        HI, I'M
                    </div>
                    <div className="flex items-center justify-center text-5xl font-bold">
                        MYRMLBST
                    </div>
                    <div className="flex items-center justify-center text-center pt-4">
                        <p>SOFTWARE ENGINEER </p>
                        <p>CRAFTING BUSINESS SOLUTIONS THROUGH SCRIPTS AND CODE</p>
                    </div>
                </div>

            </div>

        </div>
        </div>

    )
}

export default LandingPage