uniform float uTime;
uniform vec2 uResolution;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;

varying vec2 vUv;
varying vec3 vPosition;

float PI = 3.141592653589793238;

void main()	{
	vec2 st = gl_FragCoord.xy/uResolution;
	gl_FragColor = vec4(st,1.,1.);
}