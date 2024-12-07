import {Link} from "react-router-dom";

function Header() {
    return (
        /*
        flex items-center justify-center
        */

        /*
        <div className="h-dvh w-dvw bg-gradient-to-r from-color1 via-color2 to-color3">
            <div className="flex items-center justify-center">
                <div className="bg-black text-zinc mt-20 pl-10 pr-10">
                    <div className="border-0">
                        link1, link2, link3
                    </div>
                    <p className="text-2xl font-bold">
                        myrmlbstn
                    </p>
                    <p>
                        Crafting business solutions with software tools
                    </p>
                </div>
            </div>
        </div>

       */
        <div className="h-dvh w-dvw bg-gradient-to-r from-color1 via-color2 to-color3 pt-20 pl-20 pr-20">
            <div className="items-center bg-black bg-opacity-75 shadow-zinc shadow-xl pb-28">
                <div className="flex flex-row-reverse text-zinc">
                    <p className="p-2">
                        <Link to="overview">Overview</Link>
                    </p>
                    <p className="p-2">Work Experience</p>
                    <p className="p-2">Tech Stack</p>
                    <p className="p-2">Contact</p>
                </div>
                <div className="text-zinc pt-32 pb-32">
                    <div className="flex items-center justify-center p-2">
                        Hey there, I'm
                    </div>
                    <div className="flex items-center justify-center text-5xl font-bold">
                        MYRIAM BOUSTANY
                    </div>
                    <div className="flex items-center justify-center pt-2">
                        Software engineer crafting business solutions through scripts and code
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Header