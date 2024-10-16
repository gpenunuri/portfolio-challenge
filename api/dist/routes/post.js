"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
exports.router = express_1.default.Router();
exports.router.get("/posts", controllers_1.PostController.getPosts);
exports.router.get("/posts/:id", controllers_1.PostController.getPost);
