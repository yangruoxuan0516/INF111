## comparez le fichier `hello.js` et `hello.ts` et déduisez l'étape de transpilation. 
- Transpilation is the process of converting source code from one high-level programming language to another. (cf [Compiling Vs. Transpiling](https://crystallize.com/answers/tech-dev/compiling-vs-transpiling))
- `hello.js`
    ```javascript
    const message1: string = "Hello World";
    console.log(message1);
    ```
- `hello.ts`
    ```typescript
    var message1 = "Hello World";
    console.log(message1);
    ```
- La seule différence est: "const message1: string" $\rightarrow$ "var message1", on voit la disparition de "const" et de "string", d'un côté, le remplacement de "const" par "var" est fait dans le but de la compatibilité, de l'autre côté, le typage a été ignoré.

## A quoi sert le typage fort dans typescript qui n'existe pas dans javascript ?
- En informatique, un langage de programmation est dit fortement typé lorsqu'il garantit que les types de données employés décrivent correctement les données manipulées. Par opposition, un langage sans typage fort peut être faiblement typé, ou pas du tout typé (mais en pratique ce n'est jamais le cas). (cf. [Typage fort](https://fr.wikipedia.org/wiki/Typage_fort))
  - La compilation ou l'exécution peuvent ***détecter des erreurs de typage***. Sinon, le langage est dit faiblement typé ;
  - Les ***conversions implicites de types sont formellement interdites***. Si de telles conversions sont possibles, le langage est faiblement typé. 
- Donc, le typage fort dans typescript sert à détecter les erreurs possibles,   
  - par exemple (où "obj.heigth" provoque une erreur dans typescript car "heigth" n'est pas propriété du type "obj"):
    ```typescript
    const obj = { width: 10, height: 15 };
    const area = obj.width * obj.heigth;
    ```
  - un autre exemple (où typescript ne permet pas la division d'un nombre par un tableau)
    ```typescript
    console.log(4 / []);
    ```
- Il faut noter qu'une fois que le compilateur de typescript a fini de vérifier le code, il ne conserve plus d'information de types, ce qui garantie la préservation du comportement à l'exécution de javascript par typescript.

