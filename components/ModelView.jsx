"use client";

import {
	Html,
	OrbitControls,
	PerspectiveCamera,
	useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, lazy, useEffect } from "react";
import Lights from "./Lights";
import * as THREE from "three";

const Model = lazy(() => import("./Model"));

const ModelView = () => {
	const controlRef = useRef();
	const [scale, setscale] = useState(0.011);
	const groupRef = useRef();
	const { progress } = useProgress();

	useEffect(() => {
		if (window.innerWidth > 800) {
			setscale(2);
		}
		window.addEventListener("resize", () => {
			if (window.innerWidth < 800) setscale(1.1);
			else setscale(2);
		});
	}, []);
	return (
		<Canvas
			className="w-full h-full"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: "hidden",
				zIndex: "10",
			}}
		>
			<PerspectiveCamera
				makeDefault
				position={[0, 0, 10]}
				near={0.01}
				far={1000}
			/>
			<Lights />
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.7}
				target={new THREE.Vector3(0, 0, 0)}
				minPolarAngle={Math.PI / 2.3}
				maxPolarAngle={Math.PI / 2.3}
			/>
			<group
				ref={groupRef}
				position={[0, 0, 0]}
			>
				<Suspense
					fallback={
						<Html center>
							<p className="text-neutral-400 whitespace-nowrap z-0">
								Loading {progress.toFixed(0)}%
							</p>
						</Html>
					}
				>
					<Model scale={scale} />
				</Suspense>
			</group>
		</Canvas>
	);
};

export default ModelView;
