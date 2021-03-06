"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = function (context, req) {
    if (req.query.first && req.query.second) {
        var first = Number(req.query.first);
        var second = Number(req.query.second);
        var third = Number(req.query.third);
        var result = first + second + third;
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "" + result
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};
//# sourceMappingURL=index.js.map