"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8', // utf-8 expected in the file and telling fs.readFileSync to return a string
        })
            .split('\n') // parsing the data
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
