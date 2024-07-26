import { Ubuntu } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
});

export const metadata = {
	title: "Mercedes AMG GT",
	metadataBase: "https://mercedes-eg.netlify.app",
	description:
		"There’s no escaping the laws of physics. But you can skirt the limits in a controlled, high-performance vehicle that’s anything but ordinary – the Mercedes-AMG GT Coupé.",
	openGraph: {
		title: "Mercedes AMG GT",
		description:
			"There’s no escaping the laws of physics. But you can skirt the limits in a controlled, high-performance vehicle that’s anything but ordinary – the Mercedes-AMG GT Coupé.",
		images: "/assets/amg-gt4.webp",
	},
	twitter: {
		card: "summary_large_image",
		title: "Mercedes AMG GT",
		description:
			"There’s no escaping the laws of physics. But you can skirt the limits in a controlled, high-performance vehicle that’s anything but ordinary – the Mercedes-AMG GT Coupé.",
		image: "/assets/amg-gt4.webp",
	},
	// icons: {
	// 	shortcut: { url: "/favicon.ico", type: "image/x-icon" },
	// 	icon: [
	// 		{ url: "/favicon.ico", type: "image/x-icon" },
	// 		{ url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
	// 		{ url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
	// 	],
	// 	apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
	// 	manifest: "/site.webmanifest",
	// },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ubuntu.className}>
				<SmoothScroller>{children}</SmoothScroller>
			</body>
		</html>
	);
}
