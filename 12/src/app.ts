class Rectangle{
  longueur: number;
  largeur: number;
  constructor(longueur: number, largeur: number){
    this.longueur = longueur;
    this.largeur = largeur; 
  }
  calculerSurface(): number{
    if(this.longueur<=0 || this.largeur<=0){
      throw new Error("Les dimensions du rectangle doivent être strictement positives");
    }
    return this.longueur * this.largeur;
  }
  essayerCalculSurface(): void {
    try{
      console.log(this.calculerSurface());
    }
    catch(e){
      console.error(e.message);
    }
    finally{
      console.log("Fin de la tentative de calcul de la surface.");
    }
  }
}

const Rect1 = new Rectangle(5, 10);
const Rect2 = new Rectangle(-5,10);
const Rect3 = new Rectangle(5,0);
Rect1.essayerCalculSurface();
Rect2.essayerCalculSurface();
Rect3.essayerCalculSurface();