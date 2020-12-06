const utils = require("../lib/utils");
const calculateLib = require("../lib/calculate")

module.exports.handler = (event, context, callback) => {
    try {
        switch (`${event.httpMethod} ${event.resource}`) {
            case 'POST /calculate':
                const body = JSON.parse(event.body);
                const calculation = calculateLib.calculate(body)
                utils.successHandler(calculation, callback)
                break;
            default:
                utils.notFoundHandler(callback);
        }
    } catch (err) {
        utils.errorHandler(err, callback);
    }
};

