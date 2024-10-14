const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 5.0 * vDisplacement * u_intensity * sin(vUv.y * 0.5 + u_time);
    vec3 color = vec3(abs(vUv - 0.5) * 1.0  * (1.4 - distort), 0.5);
    gl_FragColor = vec4(color, 0.5);
}

`;

export default fragmentShader;