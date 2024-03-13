const additionner = (a: number, b: number): number => a + b;
const soustraire = (a: number, b: number): number => a - b;
const multiplier = (a: number, b: number): number => a * b;
const diviser = (a: number, b: number): number => a / b;
const calculatrice = (a: number, b: number, operation: string): void => {
  switch (operation) {
    case "additionner":
      console.log("la somme est:",additionner(a, b));
      break;
    case "soustraire":
      console.log("la différence est:",soustraire(a, b));
      break;
    case "multiplier":
      console.log("le produit est:",multiplier(a, b));
      break;
    case "diviser":
      console.log("le quotient est:",diviser(a, b));
      break;
    default:
      throw new Error("Opération non reconnue");
  }
} 
calculatrice(5, 3, "additionner");

