#include "/node_modules/lygia/generative/cnoise.glsl"

uniform float uNoiseScale;
uniform float uTime;

varying vec3 vPosition;
varying float vNoise;

void main() {
    float noise = cnoise(position * uNoiseScale + uTime);
    vNoise = noise;

    vec3 displacedPosition = position + normal * noise;

    vPosition = displacedPosition;

    csm_Position = displacedPosition;
}
