import {
	Environment,
	EnvironmentCube,
	Lightformer,
	Float,
} from "@react-three/drei";

const Lights = () => {
	return (
		<group name="lights">
			<Environment
				resolution={256}
				files="/environment.hdr"
				frames={Infinity}
			>
				<group>
					{/* <Lightformer
						form="rect"
						intensity={1}
						position={[5, 0, -10]}
						scale={10}
						color={"#dbeafe"}
					/> */}
					<Lightformer
						form="rect"
						intensity={1}
						position={[-10, 2, -3]}
						scale={10}
						rotation-y={Math.PI / 2}
						color={"#e0f2fe"}
					/>
					{/* <Lightformer
            form="rect"
            intensity={5}
            position={[10, -2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
            color={"#cbd5e1"}
          /> */}
					{/* <Float speed={3} floatIntensity={2} rotationIntensity={2}>
            <Lightformer form="circle" color="#e0f2fe" intensity={0.5} scale={10} position={[5, 3, -5]} target={[0, 3, -15]} />
          </Float> */}
				</group>
			</Environment>
		</group>
	);
};

export default Lights;
