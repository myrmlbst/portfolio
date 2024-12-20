import Header from "./Header.tsx";

function Overview() {
    return (
        <div>
            <Header></Header>

            <div className="h-dvh w-dvw p-8 bg-midnight">
                <div className="items-center justify-center">
                    <div className="text-zinc">
                        <p className="font-black">
                            Overview:
                        </p>
                        <p className="pt-4">
                            I am a software engineer that follows systems throughout the entire application life-cycle— from the birth of the idea all the way to the designing, development, and testing phases and deployment to the web.
                        </p>
                    </div>


                    {/*
                    FIRST TERMINAL VIEWPORT: CYBERSECURITY
                    */}
                    <div className="text-zinc">
                        <p className="pt-4">
                            I have extensive experience, training, and certifications in various software principles,
                            namely:
                        </p>

                        <div className="card">
                            <div className="wrap">
                                <div className="terminal">
                                    <hgroup className="head">
                                        <p className="title">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                                ></path>
                                            </svg>
                                            Terminal
                                        </p>

                                        <button className="copy_toggle" tabIndex="-1" type="button">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                                                ></path>
                                                <path
                                                    d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </hgroup>

                                    <div className="body">
                                        <pre className="pre">          <code>-&nbsp;</code>
                                          <code>npx&nbsp;</code>
                                          <code className="cmd" data-cmd="cybersecurity"></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*
                        SECOND TERMINAL VIEWPORT: FRONTEND DEVELOPMENT
                        */}
                        <div className="card">
                            <div className="wrap">
                                <div className="terminal">
                                    <hgroup className="head">
                                        <p className="title">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                                ></path>
                                            </svg>
                                            Terminal
                                        </p>

                                        <button className="copy_toggle" tabIndex="-1" type="button">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                                                ></path>
                                                <path
                                                    d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </hgroup>

                                    <div className="body">
                                        <pre className="pre">          <code>-&nbsp;</code>
                                          <code>npx&nbsp;</code>
                                          <code className="cmd" data-cmd="frontend development"></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*
                        THIRD TERMINAL VIEWPORT: UI/UX DESIGN
                        */}
                        <div className="card">
                            <div className="wrap">
                                <div className="terminal">
                                    <hgroup className="head">
                                        <p className="title">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                                ></path>
                                            </svg>
                                            Terminal
                                        </p>

                                        <button className="copy_toggle" tabIndex="-1" type="button">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                                                ></path>
                                                <path
                                                    d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </hgroup>

                                    <div className="body">
                                        <pre className="pre">          <code>-&nbsp;</code>
                                          <code>npx&nbsp;</code>
                                          <code className="cmd" data-cmd="UI/UX design"></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*
                        FOURTH TERMINAL VIEWPORT: BACKEND
                        */}
                        <div className="card">
                            <div className="wrap">
                                <div className="terminal">
                                    <hgroup className="head">
                                        <p className="title">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                                ></path>
                                            </svg>
                                            Terminal
                                        </p>

                                        <button className="copy_toggle" tabIndex="-1" type="button">
                                            <svg
                                                width="16px"
                                                height="16px"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                                                ></path>
                                                <path
                                                    d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </hgroup>

                                    <div className="body">
                                        <pre className="pre">          <code>-&nbsp;</code>
                                          <code>npx&nbsp;</code>
                                          <code className="cmd" data-cmd="backends/databases/api"></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview