import Link from "next/link";

const Nav = () => {
	return (
		<nav className="fixed top-0 w-screen flex items-center p-4 md:p-6 z-30">
			<Link
				href="/"
				className="bg-orange-600 text-lg md:text-xl text-neutral-50 px-8 py-2 md:px-10 md:py-3 rounded-2xl inline-block ml-auto font-bold shadow-xl"
			>
				Order Now
			</Link>
		</nav>
	);
};

export default Nav;
