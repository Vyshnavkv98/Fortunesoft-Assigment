"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.configDotenv)();
class dbConnection {
    async connectDb() {
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL environment variable is not defined');
        }
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
            console.log(`Db connected successfully`);
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
    }
}
exports.dbConnection = dbConnection;
//# sourceMappingURL=connectDb.js.map