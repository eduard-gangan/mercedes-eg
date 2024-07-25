"use client";

import Loader from "@/components/Loader";
import ModelView from "@/components/ModelView";
import Nav from "@/components/Nav";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
	const main = useRef();
	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);
			let sections = gsap.utils.toArray(".section");
			sections.forEach((s) => {
				ScrollTrigger.create({
					trigger: s,
					start: () =>
						s.offsetHeight < window.innerHeight ? "0% 0%" : "100% 100%",
					pin: true,
					pinSpacing: false,
				});
			});
		},
		{ scope: main.current }
	);
	return (
		<main
			ref={main}
			className="bg-neutral-900 min-h-screen"
		>
			<Loader />
			<Nav />
			<section
				id="banner"
				className="section h-screen+ w-screen relative bg-[url('/assets/bamboo.svg')] [background-size:25px]"
			>
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_-10%,#171717)]" />
				<ModelView />
				<h1 className="absolute inset-x-0 bottom-24 text-xl sm:text-3xl lg:text-4xl text-neutral-400 font-bold text-center w-screen px-6">
					<div className="text-3xl sm:text-5xl lg:text-6xl text-neutral-200 mb-1 sm:mb-2 lg:mb-4">
						So Thrilling. So AMG.
					</div>
					Mercedes AMG GT
				</h1>
			</section>

			<section className="section min-h-screen bg-neutral-800 grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt1.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-neutral-900 via-black/30 to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-100 font-bold">
					As logical as it is impressive
				</h2>
				<p className="max-w-prose text-neutral-300 text-sm leading-6 sm:text-base mt-3 sm:mt-4 sm:leading-7">
					There’s no escaping the laws of physics. But you can skirt the limits
					in a controlled, high-performance vehicle that’s anything but ordinary
					– the Mercedes-AMG GT Coupé. Its 4.0-litre V8 biturbo engine boasts
					numerous motorsport materials and components, all built according to
					the "one man, one engine" principle. The powertrain thrills with
					explosive strength and impresses with ample power reserves in all
					aspects.
				</p>
			</section>

			<section className="section min-h-screen grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt3.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-black/30 to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-100 font-bold">
					As powerful as it is controlled
				</h2>
				<p className="max-w-prose text-neutral-300 text-sm leading-6 sm:text-base mt-3 sm:mt-4 sm:leading-7">
					AMG Performance 4MATIC+ all-wheel drive connects the constantly
					powered rear axle with the front axle – to ensure great dynamics and
					full variability. Welcome to the perfect balance of uncompromising
					control and a radically unyielding rear-wheel drive. At the same time,
					the AMG-specific electronic limited-slip differential on the rear axle
					optimally distributes power between the wheels when cornering,
					continually readapting to the driving situation at hand.
				</p>
			</section>

			<section className="section min-h-screen bg-neutral-800 grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt4.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-black/30 to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-100 font-bold">
					As light as it is punchy
				</h2>
				<p className="max-w-prose text-neutral-300 text-sm leading-6 sm:text-base mt-3 sm:mt-4 sm:leading-7">
					Borrowed from motorsport: multiple details profit from the material
					mix of aluminium, steel, magnesium and fibre composites for maximum
					rigidity, top performance and weight savings. Among other things, an
					aluminium frame, carbon-fibre bracing on the axle beams and glass
					mat-reinforced thermoplastics are used for the lock bridge. And
					numerous active aerodynamic measures redirect the smallest of airflows
					to optimise dynamics.
				</p>
			</section>

			<section className="section min-h-screen bg-neutral-800 grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt6.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-black/30 to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-100 font-bold">
					As luxurious as it is comfortable
				</h2>
				<p className="max-w-prose text-neutral-300 text-sm leading-6 sm:text-base mt-3 sm:mt-4 sm:leading-7">
					Make your own customisations to further augment the luxurious standard
					equipment and precise craftsmanship of the interior. Choose from
					radically sporty to indulgently comfortable options: for example, the
					AMG Performance seats with pronounced side bolsters and two different
					AMG Performance steering wheels are perfect accessories to optimise
					your driving pleasure. You can even transform your GT Coupé into an
					exquisite spa on wheels with massage functionality and in-seat climate
					control.
				</p>
			</section>

			<section className="bg-neutral-900 section px-6 md:px-10 pt-32 md:pt-44 pb-4 grid content-center justify-center">
				<div className="grid md:grid-cols-3 place-items-center gap-16 lg:gap-32">
					<p className="text-7xl lg:text-8xl font-semibold text-neutral-200 relative before:absolute before:content-['HP'] before:-top-4 before:-right-10 before:text-neutral-200 before:text-2xl before:font-normal">
						816
					</p>
					<div className="text-7xl lg:text-8xl font-semibold text-neutral-200 relative before:absolute before:content-['0-100'] before:-top-4 before:-right-10 before:text-neutral-200 before:text-2xl before:font-normal">
						<div className="absolute -left-16 top-0 w-1 h-full bg-orange-500 -skew-x-12 max-md:hidden"></div>
						<div className="absolute -right-16 top-0 w-1 h-full bg-orange-500 -skew-x-12 max-md:hidden"></div>
						2.8s
					</div>
					<p className="text-7xl lg:text-8xl font-semibold text-neutral-200 relative before:absolute before:content-['Nm'] before:-top-4 before:-right-10 before:text-neutral-200 before:text-2xl before:font-normal">
						1420
					</p>
				</div>

				<div className="grid md:grid-cols-2 justify-items-center gap-8 lg:gap-12 my-20 md:my-28 lg:my-36">
					<img
						src="/assets/amg.svg"
						width={500}
						height={200}
						className="max-w-full md:col-span-2"
					/>
					<div className="flex max-w-108 items-center gap-6">
						<div className="border-2 border-orange-500 min-w-12 h-12 rounded-full grid place-content-center">
							<img
								src="/assets/engine.svg"
								alt="engine"
								width={32}
								height={32}
							/>
						</div>
						<p className="text-neutral-400">
							Twin-turbocharged, 4.0 litres of pure freedom under the hood
						</p>
					</div>
					<div className="flex max-w-108 items-center gap-6">
						<div className="border-2 border-orange-500 min-w-12 h-12 rounded-full grid place-content-center">
							<img
								src="/assets/speed.svg"
								alt="speedometer"
								width={32}
								height={32}
							/>
						</div>
						<p className="text-neutral-400">
							Zoom on the highway at 315km/h (electronically limited)
						</p>
					</div>
					<div className="flex max-w-108 items-center gap-6 md:col-span-2">
						<div className="border-2 border-orange-500 min-w-12 h-12 rounded-full grid place-content-center">
							<img
								src="/assets/brake.svg"
								alt="brake"
								width={32}
								height={32}
							/>
						</div>
						<p className="text-neutral-400">
							Stop on a dime with lightweight, heat-resistant, carbon-ceramic
							brakes
						</p>
					</div>
				</div>
				<section className=" border-neutral-800 border-t-4 px-6 py-12 md:p-12 lg:p-16 grid sm:grid-cols-2">
					<div className="max-w-156">
						<h2 className="text-3xl md:text-4xl xl:text-5xl text-neutral-400 font-semibold">
							Customize your new AMG GT today
						</h2>
						<Link
							href="/"
							className="text-neutral-100 text-lg md:text-xl uppercase tracking-wider border-neutral-400 rounded-2xl border-2 px-8 py-4 inline-block mt-5"
						>
							Order Now
						</Link>
					</div>
					<ul className="grid sm:justify-items-end gap-4 max-sm:mt-6">
						<li className="text-neutral-300 text-xl">
							<Link href="/">Cool link</Link>
						</li>
						<li className="text-neutral-300 text-xl">
							<Link href="/">Cool link</Link>
						</li>
						<li className="text-neutral-300 text-xl">
							<Link href="/">Cool link</Link>
						</li>
						<li className="text-neutral-300 text-xl">
							<Link href="/">Cool link</Link>
						</li>
						<li className="text-neutral-300 text-xl">
							<Link href="/">Cool link</Link>
						</li>
					</ul>
				</section>
				<Link
					className="text-sm text-neutral-500 flex justify-center py-3"
					href="https://x.com/eduard_gangan"
					target="_blank"
				>
					@eduard_gangan
				</Link>
			</section>
		</main>
	);
}
