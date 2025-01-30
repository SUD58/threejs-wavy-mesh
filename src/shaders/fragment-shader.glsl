varying float vNoise;

void main() {
    vec3 fdx = dFdx(vViewPosition);
    vec3 fdy = dFdy(vViewPosition);
    vec3 newNormal = normalize(cross(fdx, fdy));

    vec3 color = vec3(vNoise, 1.0 - vNoise, 1.0 - vNoise);

    csm_DiffuseColor = vec4(color, 1.0);
    csm_FragNormal = newNormal;
}
