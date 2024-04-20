"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const movieRouter_1 = __importDefault(require("../interfaces/routes/movieRouter"));
const connectDb_1 = require("../infrastructure/dataAccess/dbConfig/connectDb");
class AppServer {
    static async run(port) {
        const app = (0, express_1.default)();
        const DBConnection = new connectDb_1.dbConnection();
        DBConnection.connectDb();
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use('/movies', movieRouter_1.default);
        app.use('/', movieRouter_1.default);
        app.listen(port, () => {
            console.log(`server is running on the port ${port}`);
        });
    }
}
exports.AppServer = AppServer;
//# sourceMappingURL=appServer.js.map