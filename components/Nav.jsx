import Link from "next/link";

const Nav = () => {
	return (
		<nav className="fixed top-0 w-screen flex items-center p-4 md:p-6 z-30">
			<Link
				href="/"
				className="bg-orange-500 text-lg md:text-xl text-neutral-900 px-8 py-2 md:px-10 md:py-3 rounded-2xl inline-block ml-auto font-bold"
			>
				Order Now
			</Link>
		</nav>
	);
};

export default Nav;
