/**Status Codes And Their Meanings
 * 0: Failure
 * 1: Success
 * 2: Validation Error
 * 3: Unauthorized 
 * 4: Social Media Signup Error
*/

exports.successResponse = function (res, msg) {
    var data = {
        status: 1,
        message: msg
    };
    return res.status(200).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
    var resData = {
        status: 1,
        message: msg,
        data: data
    };
    return res.status(200).json(resData);
};

exports.errorResponse = function (res, msg) {
    var data = {
        status: 0,
        message: msg,
    };
    return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
    var data = {
        status: 0,
        message: msg,
    };
    return res.status(404).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
    var resData = {
        status: 2,
        message: msg,
        data: data
    };
    return res.status(400).json(resData);
};

exports.socialMediaSignUpValidationError = function (res, msg, data) {
    var resData = {
        status: 4,
        message: msg,
        data: data
    };
    return res.status(400).json(resData);
}

exports.unauthorizedResponse = function (res, msg) {
    var data = {
        status: 3,
        message: msg,
    };
    return res.status(401).json(data);
};