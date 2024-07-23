import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-neutral-900 min-h-screen">
			<Nav />
			<section
				id="banner"
				className="min-h-screen grid lg:gap-24 justify-center justify-items-center content-end px-6 py-12 lg:py-24 2xl:py-32 relative"
			>
				<Image
					width={800}
					height={300}
					src="/assets/amg-gt.webp"
					alt="mercedes amg gt"
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
				<h1 className="text-3xl sm:text-5xl lg:text-6xl text-neutral-200 font-bold text-center">
					Mercedes AMG GT
				</h1>
			</section>

			<section className="min-h-screen bg-neutral-800 grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt1.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-transparent to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-200 font-bold">
					Awesome benefit of the AMG GT
				</h2>
				<p className="max-w-prose text-neutral-400 text-lg mt-6 leading-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					quos voluptatum quia. Quia ex eaque architecto ab dolorem eius nam
					ducimus repudiandae officia repellendus, excepturi quaerat tenetur
					accusamus possimus magnam expedita sequi laborum libero rem!
				</p>
			</section>

			<section className="min-h-screen grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt3.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-transparent to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-200 font-bold">
					Awesome benefit of the AMG GT
				</h2>
				<p className="max-w-prose text-neutral-400 text-lg mt-6 leading-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					quos voluptatum quia. Quia ex eaque architecto ab dolorem eius nam
					ducimus repudiandae officia repellendus, excepturi quaerat tenetur
					accusamus possimus magnam expedita sequi laborum libero rem!
				</p>
			</section>

			<section className="min-h-screen bg-neutral-800 grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt4.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-transparent to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-200 font-bold">
					Awesome benefit of the AMG GT
				</h2>
				<p className="max-w-prose text-neutral-400 text-lg mt-6 leading-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					quos voluptatum quia. Quia ex eaque architecto ab dolorem eius nam
					ducimus repudiandae officia repellendus, excepturi quaerat tenetur
					accusamus possimus magnam expedita sequi laborum libero rem!
				</p>
			</section>

			<section className="min-h-screen bg-neutral-800 grid content-end p-6 lg:p-20 bg-[url('/assets/amg-gt6.webp')] bg-cover bg-center relative z-0">
				<div className="absolute w-full h-full bg-gradient-to-b from-black/100 via-transparent to-black/100 top-0 left-0 -z-10" />
				<h2 className="text-3xl lg:text-4xl text-neutral-200 font-bold">
					Awesome benefit of the AMG GT
				</h2>
				<p className="max-w-prose text-neutral-400 text-lg mt-6 leading-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					quos voluptatum quia. Quia ex eaque architecto ab dolorem eius nam
					ducimus repudiandae officia repellendus, excepturi quaerat tenetur
					accusamus possimus magnam expedita sequi laborum libero rem!
				</p>
			</section>

			<section className="px-6 md:px-10 py-32 md:py-44 grid content-center justify-center">
				<div className="grid md:grid-cols-3 place-items-center gap-16 lg:gap-32">
					<p className="text-7xl lg:text-8xl font-semibold text-neutral-200 relative before:absolute before:content-['XX'] before:-top-4 before:-right-10 before:text-neutral-200 before:text-2xl before:font-normal">
						999
					</p>
					<div className="text-7xl lg:text-8xl font-semibold text-neutral-200 relative before:absolute before:content-['XX'] before:-top-4 before:-right-10 before:text-neutral-200 before:text-2xl before:font-normal">
						<div className="absolute -left-16 top-0 w-1 h-full bg-orange-500 -skew-x-12 max-md:hidden"></div>
						<div className="absolute -right-16 top-0 w-1 h-full bg-orange-500 -skew-x-12 max-md:hidden"></div>
						999
					</div>
					<p className="text-7xl lg:text-8xl font-semibold text-neutral-200 relative before:absolute before:content-['XX'] before:-top-4 before:-right-10 before:text-neutral-200 before:text-2xl before:font-normal">
						999
					</p>
				</div>

				<div className="grid md:grid-cols-2 justify-items-center gap-8 lg:gap-12 mt-20 md:mt-28 lg:mt-36">
					<img
						src="/assets/amg.svg"
						width={500}
						height={200}
						className="max-w-full md:col-span-2"
					/>
					<div className="flex max-w-108 items-center gap-6">
						<div className="bg-orange-500 min-w-12 h-12 rounded-full"></div>
						<p className="text-neutral-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
							corporis?
						</p>
					</div>
					<div className="flex max-w-108 items-center gap-6">
						<div className="bg-orange-500 min-w-12 h-12 rounded-full"></div>
						<p className="text-neutral-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
							corporis?
						</p>
					</div>
					<div className="flex max-w-108 items-center gap-6 md:col-span-2">
						<div className="bg-orange-500 min-w-12 h-12 rounded-full"></div>
						<p className="text-neutral-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
							corporis?
						</p>
					</div>
				</div>
			</section>

			<section className=" border-neutral-800 border-t-4 px-6 py-12 md:p-12 lg:p-16 grid sm:grid-cols-2">
				<div className="max-w-156">
					<h2 className="text-3xl md:text-4xl xl:text-5xl text-neutral-400 font-semibold">
						Awesome footer-header encouraging action
					</h2>
					<Link
						href="/"
						className="text-neutral-100 text-lg md:text-xl uppercase tracking-wider border-neutral-400 rounded-2xl border-2 px-8 py-4 inline-block mt-5"
					>
						Call to action
					</Link>
				</div>
				<ul className="grid justify-items-end gap-4 max-sm:mt-4">
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
		</main>
	);
}
