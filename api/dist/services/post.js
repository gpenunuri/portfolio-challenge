"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postServices = exports.postService = void 0;
const mocks_1 = require("../mocks/");
class postService {
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = mocks_1.postsData;
                console.log(posts);
                return posts;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = mocks_1.postsData.find((el) => el.id === id);
                return post;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.postService = postService;
exports.postServices = new postService();
