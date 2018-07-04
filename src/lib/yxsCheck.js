
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['./yxs.js'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(
            require('./yxs.js')
        );
    } else {
        root.$checkVariable = factory(root.$yxs);
    }
})(this, function ($yxs) {
    function checkPhone(phone){
        console.log($yxs.isNumber);
        return (/^1[3|4|5|7|8]\d{9}$/.test(phone)) ? true: false;
    };
    function checkEmail(email){
        if(email==null) return;
        var reg=new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
        return reg.test(email)
    };

    window.$checkVariable = {
        checkPhone:checkPhone,
        checkEmail:checkEmail
    };
    return $checkVariable;
});