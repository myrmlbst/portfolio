export default function Stack() {
    return (
        <div className="h-dvh w-dvw bg-midnight text-zinc p-5">
            <div className="border-2 border-yellow p-2">
                <p>Tech Stack</p>
                <p>My current tech stack consists of...</p>

                <div className="flex content-start border-green border-2">
                    <div className="border-red border-2 p-2">
                        <div className="card1">
                            <div className="card2 flex items-center justify-center">
                                <p className="hover:text-darkblue">
                                    TypeScript
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-red border-2 p-2">
                        <div className="card1">
                            <div className="card2 flex items-center justify-center">
                                <p className="hover:text-darkblue">
                                    React.js
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-red border-2 p-2">
                        <div className="card1">
                            <div className="card2 flex items-center justify-center">
                                <p className="hover:text-darkblue">
                                    TailwindCSS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}