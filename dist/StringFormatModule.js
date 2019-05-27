"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PascalCaseFormater_1 = require("./PascalCaseFormater");
var StringFormatModule = (function () {
    function StringFormatModule() {
    }
    StringFormatModule.prototype.getDependencies = function () {
        return [];
    };
    StringFormatModule.prototype.register = function (container) {
        container.bind("StringFormater").to(PascalCaseFormater_1.PascalCaseFormater).inSingletonScope().whenTargetNamed("pascalCase");
    };
    StringFormatModule.prototype.boot = function (container) { };
    return StringFormatModule;
}());
exports.StringFormatModule = StringFormatModule;
//# sourceMappingURL=StringFormatModule.js.map