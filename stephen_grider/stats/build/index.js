"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Load and Parse
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8', // utf-8 expected in the file and telling fs.readFileSync to return a string
})
    .split('\n') // parsing the data
    .map((row) => {
    return row.split(',');
});
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games.`);
