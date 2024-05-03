const additionner = (a, b) => a + b;
const soustraire = (a, b) => a - b;
const multiplier = (a, b) => a * b;
const diviser = (a, b) => a / b;
const calculatrice = (a, b, operation) => {
    switch (operation) {
        case "additionner":
            console.log("la somme est:", additionner(a, b));
            break;
        case "soustraire":
            console.log("la différence est:", soustraire(a, b));
            break;
        case "multiplier":
            console.log("le produit est:", multiplier(a, b));
            break;
        case "diviser":
            console.log("le quotient est:", diviser(a, b));
            break;
        default:
            throw new Error("Opération non reconnue");
    }
};
calculatrice(5, 3, "additionner");
//# sourceMappingURL=app.js.map