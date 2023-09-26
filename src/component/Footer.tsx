import { Typography } from "@material-tailwind/react";

export default function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer className="p-10 flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">

            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="/about"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        About Us
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        License
                    </Typography>
                </li>

                <li>
                    <Typography
                        as="a"
                        href="/contact"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
            <Typography color="blue-gray" className="font-normal">
                &copy; {year}
            </Typography>
        </footer>
    );
}