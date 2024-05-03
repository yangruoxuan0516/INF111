var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Exercice 1
function calculateSumAsync(a, b) {
    return new Promise((resolve) => { setTimeout(() => { resolve(a + b); }, 3000); });
}
function printSum(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`On calcule de la somme de ${a} et ${b} ^^`);
        console.log("Calcul en cours...");
        const result = yield calculateSumAsync(a, b);
        console.log("Fin du calcul");
        return `resultat: ${result}`;
    });
}
printSum(1, 1).then((result) => console.log(result)).catch((error) => console.error(error));
// Exercice 2
let dic = { 'nom': 'motDePasse' };
function verifyUser(nom, motDePasse) {
    return new Promise((resolve, reject) => {
        if (dic[nom] === motDePasse) {
            resolve('mot de passe correct, bienvenue');
        }
        else {
            reject('mot de passe incorrect, veuillez réessayer');
        }
    });
}
verifyUser('nom', 'motDePasse').then((result) => console.log(result)).catch((error) => console.error(error));
// Exercice 3 - Part 1
class Calculator {
    calculateSumAsync(a, b) {
        return new Promise((resolve) => { setTimeout(() => { resolve(a + b); }, 3000); });
    }
    printSum(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`On calcule de la somme de ${a} et ${b} ^^`);
            console.log("Calcul en cours...");
            const result = yield this.calculateSumAsync(a, b);
            console.log("Fin du calcul");
            return `resultat: ${result}`;
        });
    }
    sum_2_2() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.printSum(2, 2);
                console.log(result);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
const Calculator_i = new Calculator();
Calculator_i.sum_2_2();
// Exercice 3 - Part 2
class User {
    constructor() {
        this.dic = { 'nom': 'motDePasse' };
    }
    verifyUser(nom, motDePasse) {
        return new Promise((resolve, reject) => {
            if (dic[nom] === motDePasse) {
                resolve('mot de passe correct, bienvenue');
            }
            else {
                reject('mot de passe incorrect, veuillez réessayer');
            }
        });
    }
    verify_User_MotDePasse() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.verifyUser('nom', 'motDePasse');
                console.log(result);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
const User_i = new User();
User_i.verify_User_MotDePasse();
//# sourceMappingURL=app.js.map