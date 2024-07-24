import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Model(props) {
	const { nodes, materials } = useLoader(GLTFLoader, "/models/scene.gltf");
	return (
		<group dispose={null}>
			<group
				scale={props.scale}
				rotation={[0, -Math.PI / 8, 0]}
				position={[0, -0.3, 0]}
			>
				<mesh
					geometry={nodes.M_CarPaint_Max_M_CarPaint_Max_0.geometry}
					material={materials.M_CarPaint_Max}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M__Carbon_Gloss_Carbon_0.geometry}
					material={materials.Gloss_Carbon}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Opaque_PaintSolidBlack_Max_M_Swatch_0.geometry}
					material={materials.M_Swatch}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_CarPaintNormal_Max_M_CarPaint_Max_0.geometry}
					material={materials.M_CarPaint_Max}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Engine_Max003_Engine_0.geometry}
					material={materials.Engine}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Engine_Max_Engine_0.geometry}
					material={materials.Engine}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_LBucket_Max001_Light_Max_0.geometry}
					material={materials.Light_Max}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Badge_Max_Badge_0.geometry}
					material={materials.Badge}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_LGlass_InnerClear_Max001_Glass_0.geometry}
					material={materials.Glass}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Rim_Main_Max_Rim_0.geometry}
					material={materials.material}
					position={[83.842, 20.285, 131.279]}
					rotation={[2.371, 0.19, 0.181]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Rim_Main_Max005_Rim_0.geometry}
					material={materials.material}
					position={[85.783, 21.156, -129.957]}
					rotation={[-0.378, 0, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Rim_Main_Max001_Rim_0.geometry}
					material={materials.material}
					position={[-85.783, 21.156, -129.957]}
					rotation={[-2.658, 0, Math.PI]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Rim_Main_Max002_Rim_0.geometry}
					material={materials.material}
					position={[-83.842, 20.285, 131.279]}
					rotation={[1.652, 0.022, -2.881]}
					scale={100}
				/>
				<mesh
					geometry={
						nodes.M_Tire_Max_Kumho_Ecsta_V710_Small_Material006_0.geometry
					}
					material={materials["Material.006"]}
					position={[83.842, 20.285, 131.279]}
					rotation={[2.371, 0.19, 0.181]}
					scale={[110.289, 110.303, 110.303]}
				/>
				<mesh
					geometry={
						nodes.M_Tire_Max_Kumho_Ecsta_V710_Small001_Material006_0.geometry
					}
					material={materials["Material.006"]}
					position={[85.783, 21.156, -129.957]}
					rotation={[-0.378, 0, 0]}
					scale={[127.915, 112.651, 112.651]}
				/>
				<mesh
					geometry={
						nodes.M_Tire_Max_Kumho_Ecsta_V710_Small002_Material006_0.geometry
					}
					material={materials["Material.006"]}
					position={[-85.783, 21.156, -129.957]}
					rotation={[-2.658, 0, -Math.PI]}
					scale={[127.915, 112.651, 112.651]}
				/>
				<mesh
					geometry={
						nodes.M_Tire_Max_Kumho_Ecsta_V710_Small003_Material006_0.geometry
					}
					material={materials["Material.006"]}
					position={[-83.842, 20.285, 131.279]}
					rotation={[1.652, 0.022, -2.881]}
					scale={[110.289, 110.303, 110.303]}
				/>
				<mesh
					geometry={nodes.M_GrilleC_Max_Grille_C_0.geometry}
					material={materials.Grille_C}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_LicensePlate_Max_Material011_0.geometry}
					material={materials["Material.011"]}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GrilleA_Max_Grilleb_0.geometry}
					material={materials.Grilleb}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GrilleA_Max004_Grilleb_0.geometry}
					material={materials.Grilleb}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GrilleA_Max008_Grilleb_0.geometry}
					material={materials.Grilleb}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GrilleB_Max_Grilleb_0.geometry}
					material={materials.Grilleb}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Chassis_Max021_M_Chassis_0.geometry}
					material={materials.M_Chassis}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GrilleB_Max005_Grilleb_0.geometry}
					material={materials.Grilleb}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_InteriorTiled_Common_Max001_Gloss_Carbon_0.geometry}
					material={materials.Gloss_Carbon}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_Interior_Max002_Interior_0.geometry}
					material={materials.Interior}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GlassOpaque_Mirror_Max_Mirror_0.geometry}
					material={materials.Mirror}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_GlassOpaque_Mirror_Max004_Mirror_0.geometry}
					material={materials.Mirror}
					position={[0, 0.186, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_RimBadge_Max_Material003_0.geometry}
					material={materials["Material.003"]}
					position={[83.842, 20.285, 131.279]}
					rotation={[2.371, 0.19, 0.181]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_RimBadge_Max003_Material003_0.geometry}
					material={materials["Material.003"]}
					position={[85.783, 21.156, -129.957]}
					rotation={[-0.378, 0, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_RimBadge_Max001_Material003_0.geometry}
					material={materials["Material.003"]}
					position={[-85.783, 21.156, -129.957]}
					rotation={[-2.658, 0, Math.PI]}
					scale={100}
				/>
				<mesh
					geometry={nodes.M_RimBadge_Max002_Material003_0.geometry}
					material={materials["Material.003"]}
					position={[-83.842, 20.285, 131.279]}
					rotation={[1.652, 0.022, -2.881]}
					scale={100}
				/>
				<mesh
					geometry={nodes.etk_caliper_R_ttsport_etk_calipers_ttsport_0.geometry}
					material={materials.etk_calipers_ttsport}
					position={[84.444, 21.156, -129.957]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
				/>
				<mesh
					geometry={nodes.etk_caliper_F_ttsport_etk_calipers_ttsport_0.geometry}
					material={materials.etk_calipers_ttsport}
					position={[83.842, 20.285, 131.279]}
					rotation={[-Math.PI / 2, 0, -0.262]}
					scale={106.298}
				/>
				<mesh
					geometry={
						nodes.etk_brakedisc_R_carbon_etk_brakedisc_carbon_ttsport_0.geometry
					}
					material={materials.etk_brakedisc_carbon_ttsport}
					position={[84.444, 21.156, -129.957]}
					rotation={[-1.948, 0, 0]}
					scale={100}
				/>
				<mesh
					geometry={
						nodes.etk_brakedisc_F_carbon_etk_brakedisc_carbon_ttsport_0.geometry
					}
					material={materials.etk_brakedisc_carbon_ttsport}
					position={[83.842, 20.285, 131.279]}
					rotation={[0.834, -0.178, 0.193]}
					scale={[100, 107.048, 107.048]}
				/>
				<mesh
					geometry={
						nodes.etk_caliper_R_ttsport001_etk_calipers_ttsport_0.geometry
					}
					material={materials.etk_calipers_ttsport}
					position={[-87.122, 21.156, -129.957]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={100}
				/>
				<mesh
					geometry={
						nodes.etk_brakedisc_R_carbon001_etk_brakedisc_carbon_ttsport_0
							.geometry
					}
					material={materials.etk_brakedisc_carbon_ttsport}
					position={[-87.122, 21.156, -129.957]}
					rotation={[-1.087, 0, 0]}
					scale={100}
				/>
				<mesh
					geometry={
						nodes.etk_caliper_F_ttsport001_etk_calipers_ttsport_0.geometry
					}
					material={materials.etk_calipers_ttsport}
					position={[-83.842, 20.285, 131.279]}
					rotation={[-Math.PI / 2, 0, -0.262]}
					scale={106.298}
				/>
				<mesh
					geometry={
						nodes.etk_brakedisc_F_carbon001_etk_brakedisc_carbon_ttsport_0
							.geometry
					}
					material={materials.etk_brakedisc_carbon_ttsport}
					position={[-83.842, 20.285, 131.279]}
					rotation={[-3.054, 0.261, -0.023]}
					scale={[100, 107.048, 107.048]}
				/>
				<mesh
					geometry={nodes.M_Glass_WindowFront_Max002_Window_0.geometry}
					material={materials.Window}
					position={[0, 0.186, 0]}
					scale={100}
				/>
			</group>
		</group>
	);
}

export default Model;
