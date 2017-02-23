"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = require("./Field");
class Text extends Field_1.default {
    getValue(row) {
        return super.extractValue(row);
    }
    getType() {
        return "CHAR(" + this.length + ")";
    }
}
exports.default = Text;