"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var saber_redux = __importStar(require("../core/saber-redux"));
function test_saber_redux() {
    typeof alert === 'undefined' ? console.log(saber_redux) : alert(saber_redux);
}
exports.test_saber_redux = test_saber_redux;
