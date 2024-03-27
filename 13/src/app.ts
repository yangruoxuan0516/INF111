// Exercice 1
function calculateSumAsync(a:number,b:number):Promise<number>{
  return new Promise<number>((resolve)=>{setTimeout(()=>{resolve(a+b)},3000)})
}

async function printSum(a:number,b:number):Promise<string>{
  console.log(`On calcule de la somme de ${a} et ${b} ^^`);
  console.log("Calcul en cours...");
  const result = await calculateSumAsync(a,b);
  console.log("Fin du calcul");
  return `resultat: ${result}`;
}

printSum(1,1).then((result)=>console.log(result)).catch((error)=>console.error(error));


// Exercice 2
let dic = {'nom':'motDePasse'};
function verifyUser(nom:string,motDePasse:string):Promise<string>{
  return new Promise<string>((resolve,reject)=>{
    if (dic[nom] === motDePasse){
      resolve('mot de passe correct, bienvenue');
    }
      else{
        reject('mot de passe incorrect, veuillez réessayer');
      }
    }
  )
}

verifyUser('nom','motDePasse').then((result)=>console.log(result)).catch((error)=>console.error(error));


// Exercice 3 - Part 1
class Calculator{
  calculateSumAsync(a:number,b:number):Promise<number>{
    return new Promise<number>((resolve)=>{setTimeout(()=>{resolve(a+b)},3000)})
  }

  async printSum(a:number,b:number):Promise<string>{
    console.log(`On calcule de la somme de ${a} et ${b} ^^`);
    console.log("Calcul en cours...");
    const result = await this.calculateSumAsync(a,b);
    console.log("Fin du calcul");
    return `resultat: ${result}`;
  }

  async sum_2_2(){
    try{
      const result = await this.printSum(2,2);
      console.log(result);
    }catch(error){
      console.error(error);
    }
  }
}

const Calculator_i = new Calculator();
Calculator_i.sum_2_2();


// Exercice 3 - Part 2
class User{
  dic = {'nom':'motDePasse'};
  verifyUser(nom:string,motDePasse:string):Promise<string>{
    return new Promise<string>((resolve,reject)=>{
      if (dic[nom] === motDePasse){
        resolve('mot de passe correct, bienvenue');
      }
        else{
          reject('mot de passe incorrect, veuillez réessayer');
        }
      }
    )
  }

  async verify_User_MotDePasse(){
    try{
      const result = await this.verifyUser('nom','motDePasse');
      console.log(result);
    } catch(error){
      console.error(error);
    }
  }
}

const User_i = new User();
User_i.verify_User_MotDePasse();