import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-midnight text-zinc flex flex-row text-ls">
            <p className="p-2 font-extrabold bg-midnight border-2">
                <Link to="landingpage">myrmlbstn</Link>
            </p>
            <div className="border-yellow flex flex-row flex-auto border-2">
                <p className="p-2 border-red border-2 hover:text-darkblue">
                    <Link to="overview">Overview</Link>
                </p>
                <p className="p-2 border-red border-2 hover:text-darkblue">
                    <Link to="experience">Experience</Link>
                </p>
                <p className="p-2 border-red border-2 hover:text-darkblue">Contact</p>
                </div>
        </div>
    )
}