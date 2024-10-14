const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 4.0 * vDisplacement * u_intensity * sin(vUv.y * 0.5 + u_time);
    vec3 color = vec3(abs(vUv - 0.5) * 1.3  * (1.0 - distort), 0.4);
    gl_FragColor = vec4(color, 0.4);
}

`;

export default fragmentShader;