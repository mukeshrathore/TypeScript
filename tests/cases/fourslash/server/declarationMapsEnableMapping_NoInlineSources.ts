/// <reference path="../fourslash.ts" />

// @Filename: /tsconfig.json
////{
////    "compilerOptions": {
////        "outDir": "./dist",
////        "inlineSourceMap": true,
////        "inlineSources": true,
////        "declaration": true,
////        "declarationMap": true,
////        "newLine": "lf",
////    },
////    "files": ["/index.ts"],
////}

// @Filename: /index.ts
// @emitThisFile: true
////export class Foo {
////    member: string;
////    /*2*/methodName(propName: SomeType): void {}
////    otherMethod() {
////        if (Math.random() > 0.5) {
////            return {x: 42};
////        }
////        return {y: "yes"};
////    }
////}
////
////export interface SomeType {
////    member: number;
////}

// @Filename: /mymodule.ts
////import * as mod from "/dist/index";
////const instance = new mod.Foo();
////instance.[|/*1*/methodName|]({member: 12});

// @Filename: /dist/index.js
////"use strict";
////exports.__esModule = true;
////var Foo = /** @class */ (function () {
////    function Foo() {
////    }
////    Foo.prototype.methodName = function (propName) { };
////    Foo.prototype.otherMethod = function () {
////        if (Math.random() > 0.5) {
////            return { x: 42 };
////        }
////        return { y: "yes" };
////    };
////    return Foo;
////}());
////exports.Foo = Foo;
//////# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFTQSxDQUFDO0lBUEcsd0JBQVUsR0FBVixVQUFXLFFBQWtCLElBQVMsQ0FBQztJQUN2Qyx5QkFBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUM7U0FDbEI7UUFDRCxPQUFPLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxrQkFBRyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGb28ge1xuICAgIG1lbWJlcjogc3RyaW5nO1xuICAgIG1ldGhvZE5hbWUocHJvcE5hbWU6IFNvbWVUeXBlKTogdm9pZCB7fVxuICAgIG90aGVyTWV0aG9kKCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgcmV0dXJuIHt4OiA0Mn07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt5OiBcInllc1wifTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29tZVR5cGUge1xuICAgIG1lbWJlcjogbnVtYmVyO1xufSJdfQ==

// @Filename: /dist/index.d.ts.map
////{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../index.ts"],"names":[],"mappings":"AAAA,qBAAa,GAAG;IACZ,MAAM,EAAE,MAAM,CAAC;IACf,UAAU,CAAC,QAAQ,EAAE,QAAQ,GAAG,IAAI;IACpC,WAAW;;;;;;;CAMd;AAED,MAAM,WAAW,QAAQ;IACrB,MAAM,EAAE,MAAM,CAAC;CAClB"}

// @Filename: /dist/index.d.ts
////export declare class Foo {
////    member: string;
////    methodName(propName: SomeType): void;
////    otherMethod(): {
////        x: number;
////        y?: undefined;
////    } | {
////        y: string;
////        x?: undefined;
////    };
////}
////export interface SomeType {
////    member: number;
////}
//////# sourceMappingURL=index.d.ts.map

goTo.file("/index.ts");
verify.getEmitOutput(["/dist/index.js", "/dist/index.d.ts.map", "/dist/index.d.ts"]);

verify.goToDefinition("1", "2"); // getDefinitionAndBoundSpan
verify.goToType("1", "2"); // getTypeDefinitionAtPosition
goTo.marker("1");
verify.goToDefinitionIs("2"); // getDefinitionAtPosition
goTo.implementation(); // getImplementationAtPosition
verify.caretAtMarker("2");
