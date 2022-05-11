"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const process_1 = __importDefault(require("process"));
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: process_1.default.env.DB_TYPE,
    host: process_1.default.env.DB_HOST,
    port: process_1.default.env.DB_PORT,
    username: process_1.default.env.DB_USERNAME,
    password: process_1.default.env.DB_PASSWORD,
    database: process_1.default.env.DB_DATABASE,
    logging: false,
    entities: []
});
