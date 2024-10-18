import Link from "next/link"

export default function Navigations(){
    return(
        <nav className="flex justify-between p-4 m-2">
            <div className="brand-name">
                <span className="font-semibold text-xl">
                    MakeIt
                    <span className="bg-teal-300">Easy</span>
                </span>
            </div>
            <div className="nav-home">
                <ul className="flex gap-5">
                    <li>
                        <Link
                        href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/pricing">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/aboutus">
                            About us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}