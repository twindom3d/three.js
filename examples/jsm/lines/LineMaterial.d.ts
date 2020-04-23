import {
	Color,
	MaterialParameters,
	ShaderMaterial,
	Vector2
} from '../../../src/Three';

export interface LineMaterialParameters extends MaterialParameters {
	color?: number;
	dashed?: boolean;
	dashScale?: number;
	dashSize?: number;
	gapSize?: number;
	opacity?: boolean;
	linewidth?: number;
	resolution?: Vector2;
}

export class LineMaterial extends ShaderMaterial {

	constructor( parameters?: LineMaterialParameters );
	color: Color;
	dashed: boolean;
	dashScale: number;
	dashSize: number;
	gapSize: number;
	opacity: boolean;
	readonly isLineMaterial: true;
	linewidth: number;
	resolution: Vector2;

}
