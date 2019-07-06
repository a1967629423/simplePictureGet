"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const myApp = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello');
});
myApp.listen(9996, 'localhost');
//# sourceMappingURL=index.js.map