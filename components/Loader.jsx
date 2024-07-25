"use client";

const Loader = ({ progress }) => {
	return (
		<div
			className={[
				`fixed ${
					progress === "100" && "opacity-0 pointer-events-none"
				} bg-neutral-900 top-0 left-0 h-screen w-screen grid place-content-center place-items-center gap-4 z-50 transition-opacity duration-300`,
			]}
		>
			<img
				src="/assets/spinner.svg"
				alt="website loading"
			/>
			<p className="text-xl text-neutral-200">Loading ({progress}%)</p>
		</div>
	);
};

export default Loader;
