import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-dvh w-dvw bg-midnight text-zinc">
            <p className="p-2">
                404 Not Found!
            </p>
            <Link to="/" className="p-2 hover:text-darkblue">
                Return home?
            </Link>
        </div>
    )
}