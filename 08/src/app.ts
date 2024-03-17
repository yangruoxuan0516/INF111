let tab: string[] = ["pomme", "kiwi", "banane", "cerise", "orange", "poire", "fraise", "prune", "ananas", "pêche"];
console.log("[des fruits] " + tab);

let tab2: string[] = tab.map((s:string)=>s.toUpperCase());
console.log("[fruits écrits en majuscules] " + tab2);

let tab3: string[] = tab.filter((s:string):boolean=>{if(s[0]==='p') return true; else return false;})
console.log("[fruits commançant par 'p'] "+tab3);

let tab4: string = tab.reduce((a:string,b:string)=>a+','+b);
console.log("[fruits séparés par des virgules] "+tab4);

let tab5: string = tab.find((s:string)=>{if(s.length>5)return true; else return false;});
console.log("[le premier fruit de plus de 5 lettres] "+tab5);