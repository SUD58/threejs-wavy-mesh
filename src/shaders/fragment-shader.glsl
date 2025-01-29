#include "/node_modules/lygia/generative/cnoise.glsl"

varying vec3 vPosition;

void main() {
    float color = cnoise(vPosition * 5.0);
    csm_DiffuseColor = vec4(vec3(color), 1.0);
}