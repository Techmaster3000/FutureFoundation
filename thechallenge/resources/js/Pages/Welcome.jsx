import NavbarLayout from "@/Layouts/NavbarLayout";
import { Link, Head } from "@inertiajs/react";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function Welcome({ auth }) {
    const [darkMode, setDarkMode] = useState(false);

    const handleClickScrollTop = () => {
        const element = document.getElementById("top");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Head title="Future Foundation" />
            <div id="top" />
            <NavbarLayout>
                <div className={darkMode ? "dark" : ""}>
                    <div className="bg-slate-800 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14 shadow-xl rounded-b-xl dark:rounded-none">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="mx-auto max-w-md px-6 sm:max-w-5xl">
                                <img
                                    className="float-right max-w-md transition duration-300 ease-in-out hover:scale-105"
                                    src="/img/illustration5.png"
                                />
                                <span className="float-left text-white text-4xl font-bold mt-20 mr-20">
                                    Welcome{" "}
                                    <span className="text-violet-400">To</span>
                                    <br />
                                    <span className="text-violet-400">
                                        Future{" "}
                                        <span className="text-white">
                                            Foundation
                                        </span>
                                    </span>
                                    <br />
                                    <br />
                                    <span className="text-xl mt-20">
                                        <span className="text-white">
                                            Future{" "}
                                        </span>
                                        <span className="text-violet-400">
                                            <TypeAnimation
                                                sequence={[
                                                    "Foundation",
                                                    3000,
                                                    "Education",
                                                    3000,
                                                    "Inspiration",
                                                    3000,
                                                    "Communication",
                                                    3000,
                                                ]}
                                                repeat={Infinity}
                                            />
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="float-right">
                        <button
                            type="button"
                            onClick={handleClickScrollTop}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="fixed bottom-7 right-7 inline-block rounded-full bg-danger p-2 uppercase leading-normal text-violet-400 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="dark:bg-slate-800">
                        <div
                            id="about"
                            className="p-4 container text-center dark:bg-slate-800"
                        >
                            <div className="text-4xl mb-2 font-bold text-gray-700 dark:text-white mt-10">
                                About us
                            </div>
                            <p className="mb-5 text-base text-gray-500 dark:text-gray-300 sm:text-lg py-3 px-20">
                                Future Foundation is een open world game die
                                leerlingen van de middelbare school verder helpt
                                door met een interactieve manier het leren
                                leuker maakt, waar we meerdere vakken leren
                                zoals rekenen, geschiedenis en Engels etc. Het
                                idee is dat we een wereld maken met meerdere
                                gebieden en in elk gebied leer je een vak en als
                                je het gehaald hebt krijg je een item die ervoor
                                zorgt dat je verder kan komen in het spel. Op
                                deze manier wordt leren leuk, want het behalen
                                van de game is het einddoel, en dit doel kan je
                                niet halen zonder alle items die je krijgt van
                                de verschillende gebieden(vakken) die je hebt
                                behaald.
                            </p>
                            <ol
                                role="list"
                                className="overflow-hidden py-2 lg:p-10"
                            >
                                <li className="pb-6 relative">
                                    <div
                                        className="absolute left-14 top-5 -ml-px mt-0.5 h-full w-0.5 bg-violet-400"
                                        aria-hidden="true"
                                    ></div>
                                    <div className="group relative flex items-start left-9">
                                        <span className="flex h-9 items-center">
                                            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xl font-medium text-white bg-violet-400">
                                                1
                                            </span>
                                            <div className="ml-4 flex min-w-0 flex-col">
                                                <div className="text-sm dark:text-white text-gray-700 font-medium">Download de game</div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="pb-6 relative">
                                    <div
                                        className="absolute left-14 top-5 -ml-px mt-0.5 h-full w-0.5 bg-violet-400"
                                        aria-hidden="true"
                                    ></div>
                                    <div className="group relative flex items-start left-9">
                                        <span className="flex h-9 items-center">
                                            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xl font-medium text-white bg-violet-400">
                                                2
                                            </span>
                                            <div className="ml-4 flex min-w-0 flex-col">
                                                <div className="text-sm dark:text-white text-gray-700 font-medium">Speel de game</div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                                <li className="pb-6 relative">
                                    <div className="group relative flex items-start left-9">
                                        <span className="flex h-9 items-center">
                                            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xl font-medium text-white bg-violet-400">
                                                3
                                            </span>
                                            <div className="ml-4 flex min-w-0 flex-col">
                                                <div className="text-sm dark:text-white text-gray-700 font-medium">Word beter in school</div>
                                            </div>
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        {/* <div id="contact">
                            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                                    Contact Us
                                </h2>
                                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                    Got a technical issue? Want to send feedback
                                    about a beta feature? Need details about our
                                    Business plan? Let us know.
                                </p>
                                <form action="#" class="space-y-8">
                                    <div>
                                        <label
                                            for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="jdoe@nrply.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            for="subject"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="Let us know how we can help you"
                                            required
                                        />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label
                                            for="message"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                        >
                                            Your message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="6"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Leave a comment..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    <footer className="bg-slate-800 rounded-t-xl dark:rounded-none">
                        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                            <div className="md:flex md:justify-between">
                                <div className="mb-6 md:mb-0">
                                    <a
                                        href="/"
                                        className="flex items-center mb-4 sm:mb-0"
                                    >
                                        <img
                                            src="/img/logo4.png"
                                            className="h-8 mr-3"
                                            alt="Flowbite Logo"
                                        />
                                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                            Future Foundation
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <span className="text-sm sm:text-center text-white">
                                    © 2023 Future Foundation. All Rights
                                    Reserved.
                                </span>

                                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-white">
                                    <a href="/">
                                        <AiOutlineHome />
                                    </a>
                                    {!darkMode ? (
                                        <BsMoonStars
                                            onClick={() =>
                                                setDarkMode(!darkMode)
                                            }
                                            className="cursor-pointer"
                                        />
                                    ) : (
                                        <BsSun
                                            onClick={() =>
                                                setDarkMode(!darkMode)
                                            }
                                            className="cursor-pointer"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </NavbarLayout>
        </>
    );
}
