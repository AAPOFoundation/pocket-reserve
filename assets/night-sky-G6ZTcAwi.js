import{S as y,O as W,a as _,C as O,B as $,b as B,M as T,c as C,g as S,d as R,A as P,e as q,W as D,p as j,w as N,f as A,h as K,V as G}from"./main-Bk03JONm.js";import{P as H}from"./Points-DjB6JkSF.js";import"./preload-helper-PPVm8Dsz.js";/* empty css              */import"./layout-class-Bc4nua16.js";import"./chapters-QNn180h5.js";import"./lazy-r1hGDmmR.js";function J(v){const o=B,u=new y({uniforms:{uK:{value:0},uT:{value:0},uTw:{value:0}},vertexShader:"varying vec3 vD;void main(){vD=position;gl_Position=projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.);}",fragmentShader:`
uniform float uK,uT,uTw;varying vec3 vD;
const vec3 M=vec3(${o.x.toFixed(4)},${o.y.toFixed(4)},${o.z.toFixed(4)});
float H(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
void main(){
vec3 d=normalize(vD);
float e=d.y;
vec3 c=mix(vec3(.06,.11,.23),vec3(.003,.008,.034),smoothstep(0.,.75,e));
vec3 g=d*90.,id=floor(g);
float r=H(id),px=length(vec2(dFdx(g.x),dFdy(g.x)))+1e-4;
if(r>.88){
float s=(r-.88)*8.33,q=length(d-normalize(id+.5+(vec3(H(id+7.1),H(id+13.7),H(id+3.3))-.5)*.5))*90.,w=px*(1.1+1.3*s);
c+=vec3(.8,.88,1.)*exp(-q*q/(w*w))*(.7+1.2*s)*(1.-uTw*(.5+.5*sin(uT*(2.+5.*s)+r*400.)))*smoothstep(0.,.15,e);
}
float a=acos(clamp(dot(d,M),-1.,1.)),R=.034;
vec3 t=normalize(cross(M,vec3(0.,1.,0.))),b=cross(M,t),n=vec3(vec2(dot(d,t),dot(d,b))/R,0.);
float z=sqrt(max(0.,1.-dot(n.xy,n.xy)));
c+=vec3(.42,.56,.95)*(.5*exp(-a*16.)+.12*exp(-a*4.5));
float lit=.55+.45*dot(vec3(n.xy,z),normalize(vec3(-.45,.35,.8))),mare=.82+.18*sin(n.x*3.3+1.)*sin(n.y*4.1+.4);
c=mix(c,vec3(.93,.95,1.)*lit*mare*1.5,1.-smoothstep(.92,1.,length(n.xy)));
gl_FragColor=vec4(c,uK*smoothstep(0.,.2,e));
}`,side:$,transparent:!1,blending:O,blendSrc:_,blendDst:W,depthTest:!1,depthWrite:!1,toneMapped:!1,fog:!1}),r=new T(new C(100,24,12),u);r.name="civ7-night-sky",r.renderOrder=-19,r.frustumCulled=!1,r.visible=!1,r.onBeforeRender=()=>{u.uniforms.uT.value=S(),u.uniforms.uTw.value=R()>0?.35:0},v.add(r);const w=Math.hypot(o.x,o.z),M=new y({uniforms:{uK:{value:0},uTime:N,...j},vertexShader:"varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`
uniform float uK,uTime;varying vec3 vW;
${q}
${D}
const vec3 M=vec3(${o.x.toFixed(4)},${o.y.toFixed(4)},${o.z.toFixed(4)});
void main(){
vec2 p=vW.xz;float d=pondM(p);if(d<.03)discard;
float dN=smoothstep(0.,.55,d),dm=smoothstep(.01,.14,d)*mix(.16,1.,dN);
vec2 dh=waveMaps(p,uTime)*dm;
vec3 R=reflect(-normalize(cameraPosition-vW),normalize(vec3(-dh.x*1.2,1.,-dh.y*1.2)));
vec2 u=vec2(${(o.x/w).toFixed(4)},${(o.z/w).toFixed(4)}),r=normalize(R.xz+1e-4);
float az=atan(u.x*r.y-u.y*r.x,dot(u,r)),el=asin(clamp(R.y,-1.,1.))-asin(M.y);
float lobe=exp(-.5*(az*az/.15+el*el/.3));
vec2 q=vec2(dot(p,u)*1.5,dot(p,vec2(-u.y,u.x))*5.)+dh*4.+uTime*vec2(.3,.1);
float sp=smoothstep(.35,.9,n2(q))*.9+smoothstep(.5,.95,n2(q*2.3+4.1))*.2;
gl_FragColor=vec4(vec3(.5,.68,1.)*lobe*(.15+sp)*smoothstep(.03,.4,d)*uK*.32,1.);
}`,blending:P,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1,fog:!1}),a=new T(new A,M);a.name="civ7-night-glitter",a.renderOrder=3,a.frustumCulled=!1,a.raycast=()=>{},a.visible=!1;let f=null;const m=64,p=new Float32Array(m*3),s=new Float32Array(m*4);for(let t=0;t<m*4;t++)s[t]=(Math.sin(t*12.9898+1.7)*43758.5453%1+1)%1;const x=new A;x.setAttribute("position",new K(p,3)),x.setAttribute("aR",new K(s,4));const d=new y({uniforms:{uK:{value:0},uT:{value:0},uMo:{value:1},uPx:{value:1e3}},vertexShader:`
uniform float uK,uT,uMo,uPx;attribute vec4 aR;varying float vI;
void main(){
float t=uT*uMo;
vec3 p=position+uMo*vec3(.34*sin(t*(.17+.1*aR.y)+aR.x*6.28),.14*sin(t*.31+aR.z*6.28),.34*cos(t*(.13+.1*aR.z)+aR.y*6.28));
vec4 v=modelViewMatrix*vec4(p,1.);
vI=mix(.8,.2+.8*pow(.5+.5*sin(t*(.8+1.2*aR.w)+aR.x*40.),1.6),uMo)*uK;
gl_PointSize=clamp(.11*uPx/-v.z,6.,14.);
gl_Position=projectionMatrix*v;
}`,fragmentShader:"varying float vI;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vec3(.22,1.,.1)*exp(-d*d*5.)*(1.-smoothstep(.75,1.,d))*vI*3.2,1.);}",blending:P,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}),n=new H(x,d);n.name="civ7-night-flies",n.renderOrder=6,n.frustumCulled=!1,n.raycast=()=>{},n.visible=!1,v.add(n);let h="",z=0;const b=()=>{z=performance.now()+2500,f??=v.getObjectByName("civ7-water-surface")??null,f&&!a.parent&&(Object.defineProperty(a,"geometry",{get:()=>f.geometry}),f.add(a));const t=[],l=new G;v.traverse(e=>{const i=e.userData.terrain;if(i!=="meadow"&&i!=="wetland"&&i!=="woodland")return;const c=e.geometry;c&&(l.set(0,c.getAttribute("position").getY(0),0),e.localToWorld(l),t.push({x:l.x,y:l.y,z:l.z,w:i==="woodland"?1:0}))});const g=t.map(e=>e.x.toFixed(1)+e.z.toFixed(1)+e.w).join();if(!(g===h||!t.length)){h=g;for(let e=0;e<m;e++){const i=t[e%t.length],c=s[e*4]*6.2832*7.3,F=i.w?.55+.3*s[e*4+1]:.8*Math.sqrt(s[e*4+1]);p[e*3]=i.x+Math.cos(c)*F,p[e*3+1]=i.y+.2+s[e*4+2],p[e*3+2]=i.z+Math.sin(c)*F}x.getAttribute("position").needsUpdate=!0}};return n.onBeforeRender=(t,l,g)=>{const e=t.getRenderTarget();d.uniforms.uPx.value=(e?e.height:t.domElement.height)*.5*g.projectionMatrix.elements[5],d.uniforms.uT.value=S(),d.uniforms.uMo.value=R()>0?1:0,performance.now()>z&&b()},{set:t=>{u.uniforms.uK.value=t,M.uniforms.uK.value=t,d.uniforms.uK.value=t,r.visible=n.visible=a.visible=t>0,t>0&&!h&&b()}}}export{J as createNightSky};
