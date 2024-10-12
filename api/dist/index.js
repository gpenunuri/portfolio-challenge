"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
// configures dotenv to work in your application
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", routes_1.router);
app
    .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
