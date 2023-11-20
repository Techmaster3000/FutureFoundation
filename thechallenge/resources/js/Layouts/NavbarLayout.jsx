export default function NavbarLayout({ children }) {
    const handleClickScrollAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClickScrollContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <nav class="bg-slate-800 border-gray-800">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <img src="/img/logo4.png" class="h-8 mr-3 " />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Future Foundation
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white focus:hover:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        class="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-800 md:flex-row md:space-x-2 md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="/"
                                    class="block py-2 pl-3 pr-4 text-violet-400 hover:underline rounded md:hover:bg-transparent md:border-0"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={handleClickScrollAbout}
                                    class="block py-2 pl-3 pr-4 text-white hover:underline rounded md:hover:bg-transparent md:border-0"
                                >
                                    About
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>{children}</div>
        </>
    );
}
