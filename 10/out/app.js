class User {
    constructor(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    getMaxScore() {
        return Math.max(...this.scores);
    }
    getAverageScore() {
        return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
    }
}
let User1 = new User(1, "Alice", 10, [1, 2, 3]);
let User2 = new User(2, "Bob", 11, [4, 5, 6]);
let User3 = new User(3, "Charlie", 12, [7, 8, 9]);
let Users = [User1, User2, User3];
function serializeUsers(UserList) {
    return JSON.stringify(UserList);
}
console.log(serializeUsers(Users));
function deserializeUsers(UserString) {
    return JSON.parse(UserString);
}
console.log(deserializeUsers(serializeUsers(Users)));
let deuxiemeUserData = deserializeUsers(serializeUsers(Users))[1];
let deuxiemeUser = new User(deuxiemeUserData.id, deuxiemeUserData.name, deuxiemeUserData.age, deuxiemeUserData.scores);
console.log(deuxiemeUser.name, deuxiemeUser.getMaxScore(), deuxiemeUser.getAverageScore());
/*
app.ts:47 Uncaught TypeError: deuxiemeUser.getMaxScore is not a function at app.ts:47:26
The error message is indicating that getMaxScore is not a function on the deuxiemeUser object. This is likely because deuxiemeUser is a plain JavaScript object, not an instance of the User class.
When you use JSON.parse in the deserializeUsers function, it creates plain JavaScript objects, not User instances.
The as User syntax in TypeScript is a type assertion, which tells the TypeScript compiler to treat deuxiemeUser as an instance of User. However, it doesn't actually convert deuxiemeUser to a User instance.
To fix this, you need to actually create a User instance.
*/
// // prof propose d'utiliser Object.assign()
// let deuxiemeUser2: User = Object.assign(new User(0,'',0,[0,0,0]), deserializeUsers(serializeUsers(Users))[1]);
// console.log(deuxiemeUser2.name, deuxiemeUser2.getMaxScore(), deuxiemeUser2.getAverageScore());
//# sourceMappingURL=app.js.map