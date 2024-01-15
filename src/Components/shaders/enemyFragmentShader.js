const enemyFs = `
#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform sampler2D u_image;



void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;

    vec4 color=texture2D(u_image,position);
    
  
    gl_FragColor=vec4(color);

}`;
export default enemyFs;
