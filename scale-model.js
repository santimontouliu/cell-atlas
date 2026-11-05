// All biological lengths are micrometres. Values are representative model choices.
export const CELL_UM=20, CELL_UNITS=8.4, WHOLE_UM_PER_UNIT=CELL_UM/CELL_UNITS;
export const SCALE={
 nucleus:{um:5,units:3.3,label:'5 µm diameter',note:'Representative nucleus diameter.'},
 mito:{um:2,units:4.8,label:'2 µm long × 0.8 µm wide',note:'Mitochondrial shape and length vary greatly.'},
 er:{um:8,units:3.9,label:'≈8 µm network span',note:'Chosen network extent, not a universal organelle size.'},
 golgi:{um:3,units:3.28,label:'3 µm stack span',note:'Chosen stack extent; Golgi size varies with cell type.'},
 ribo:{um:.025,units:2.28,label:'25 nm diameter',note:'Representative ribosome body; mRNA is excluded from this dimension.'},
 lyso:{um:.5,units:2.9,label:'500 nm diameter',note:'One representative lysosome; sizes vary widely.'},
 vesicle:{um:.1,units:2.2,label:'100 nm diameter',note:'Chosen transport vesicle size; cargo and coats vary.'},
 membrane:{um:.007,units:.98,label:'7 nm bilayer thickness',note:'Representative thickness; channels and individual lipids are schematic.'},
 cyto:{um:1,units:4,label:'1 µm track segment · 25 nm diameter',note:'A chosen microtubule segment, not the size of the entire cytoskeleton.'}
};
export function unitsPerPixel(distance,fov,height){return 2*distance*Math.tan(fov*Math.PI/360)/height}
export function niceBar(umPerPixel,target=90){const desired=umPerPixel*target,pow=10**Math.floor(Math.log10(desired));return [1,2,5,10].map(v=>v*pow).reduce((a,b)=>Math.abs(a-desired)<Math.abs(b-desired)?a:b)}
export function formatLength(um){return um<1?`${Number((um*1000).toPrecision(3))} nm`:`${Number(um.toPrecision(3))} µm`}
