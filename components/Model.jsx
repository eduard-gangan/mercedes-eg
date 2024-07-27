"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

function Model(props) {
	const { nodes, materials } = useGLTF("/models/scene.glb");
	const model = useRef();
	const animate = () => {
		requestAnimationFrame(animate);

		let time = Date.now() * 0.0003;
		model.current.rotation.y = time;
	};
	useEffect(() => {
		animate();
	}, []);
	return (
		<group
			scale={props.scale}
			rotation={[0, -Math.PI / 8, 0]}
			position={[0, 0, 0]}
			ref={model}
			{...props}
			dispose={null}
		>
			<mesh
				castShadow
				geometry={nodes.M_CarPaint_Max_M_CarPaint_Max_0.geometry}
				material={materials.M_CarPaint_Max}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M__Carbon_Gloss_Carbon_0.geometry}
				material={materials.Gloss_Carbon}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Opaque_PaintSolidBlack_Max_M_Swatch_0.geometry}
				material={materials.M_Swatch}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Engine_Max003_Engine_0.geometry}
				material={materials.Engine}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_LBucket_Max001_Light_Max_0.geometry}
				material={materials.Light_Max}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Badge_Max_Badge_0.geometry}
				material={materials.Badge}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_LGlass_InnerClear_Max001_Glass_0.geometry}
				material={materials.Glass}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Rim_Main_Max_Rim_0.geometry}
				material={materials.material}
				position={[0.838, 0.203, 1.313]}
				rotation={[2.371, 0.19, 0.181]}
			/>
			<mesh
				castShadow
				geometry={
					nodes.M_Tire_Max_Kumho_Ecsta_V710_Small_Material006_0.geometry
				}
				material={materials["Material.006"]}
				position={[0.838, 0.203, 1.313]}
				rotation={[2.371, 0.19, 0.181]}
				scale={1.103}
			/>
			<mesh
				castShadow
				geometry={nodes.M_GrilleC_Max_Grille_C_0.geometry}
				material={materials.Grille_C}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_LicensePlate_Max_Material011_0.geometry}
				material={materials["Material.011"]}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_GrilleA_Max_Grilleb_0.geometry}
				material={materials.Grilleb}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Chassis_Max021_M_Chassis_0.geometry}
				material={materials.M_Chassis}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Interior_Max002_Interior_0.geometry}
				material={materials.Interior}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_GlassOpaque_Mirror_Max_Mirror_0.geometry}
				material={materials.Mirror}
				position={[0, 0.002, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_RimBadge_Max_Material003_0.geometry}
				material={materials["Material.003"]}
				position={[0.838, 0.203, 1.313]}
				rotation={[2.371, 0.19, 0.181]}
			/>
			<mesh
				castShadow
				geometry={nodes.etk_caliper_R_ttsport_etk_calipers_ttsport_0.geometry}
				material={materials.etk_calipers_ttsport}
				position={[0.844, 0.212, -1.3]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				castShadow
				geometry={
					nodes.etk_brakedisc_R_carbon_etk_brakedisc_carbon_ttsport_0.geometry
				}
				material={materials.etk_brakedisc_carbon_ttsport}
				position={[0.844, 0.212, -1.3]}
				rotation={[-1.948, 0, 0]}
			/>
			<mesh
				castShadow
				geometry={nodes.M_Glass_WindowFront_Max002_Window_0.geometry}
				material={materials.Window}
				position={[0, 0.002, 0]}
			/>
		</group>
	);
}

useGLTF.preload("/models/scene.glb");

export default Model;
