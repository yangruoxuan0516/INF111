let tab = ["pomme", "kiwi", "banane", "cerise", "orange", "poire", "fraise", "prune", "ananas", "pêche"];
console.log("[des fruits] " + tab);
let tab2 = tab.map((s) => s.toUpperCase());
console.log("[fruits écrits en majuscules] " + tab2);
let tab3 = tab.filter((s) => { if (s[0] === 'p')
    return true;
else
    return false; });
console.log("[fruits commançant par 'p'] " + tab3);
let tab4 = tab.reduce((a, b) => a + ',' + b);
console.log("[fruits séparés par des virgules] " + tab4);
let tab5 = tab.find((s) => { if (s.length > 5)
    return true;
else
    return false; });
console.log("[le premier fruit de plus de 5 lettres] " + tab5);
//# sourceMappingURL=app.js.map