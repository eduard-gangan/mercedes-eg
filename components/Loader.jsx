"use client";

import { useEffect, useState } from "react";

const Loader = () => {
	const [state, setState] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setState(true);
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);
	return (
		<div
			className={[
				`fixed ${
					state && "opacity-0 pointer-events-none"
				} bg-neutral-900 top-0 left-0 h-screen w-screen grid place-content-center place-items-center gap-4 z-50 transition-opacity duration-300`,
			]}
		>
			<img
				src="/assets/spinner.svg"
				alt="website loading"
			/>
			<p className="text-xl text-neutral-200">One second...</p>
		</div>
	);
};

export default Loader;
