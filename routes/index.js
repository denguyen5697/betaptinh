var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var path = __dirname + '/views/';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('1512109', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var num1 = req.body.num_1;
    var num2 = req.body.num_2;
    var announce1 = '';
    var announce2 = '';
    var operator = req.body.radioButton;
    var kq = null;
    if (!isNumber(num1) && isNumber(num2)) {
        announce1 = 'Giá trị ở ô Số thứ nhất không phải là số.';
    } else {
        if (isNumber(num1) && !isNumber(num2)) {
            announce1 = 'Giá trị ở ô Số thứ hai không phải là số.';
        } else {
            if (!isNumber(num1) && !isNumber(num2)) {
                announce1 = 'Giá trị ở ô Số thứ nhất và ô Số thứ hai không phải là số.';
            } else {
                if (operator == null) {
                    announce2 = 'Chưa chọn phép tính';
                } else {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    switch (operator) {
                        case 'add':
                            kq = num1 + num2;
                            break;
                        case 'substract':
                            kq = num1 - num2;
                            break;
                        case 'multiply':
                            kq = num1 * num2;
                            break;
                        case 'divide':
                            kq = num1 / num2;
                            break;
                    }
                }
            }
        }
    }

    res.render('1512109', { value1: num1, value2: num2, result: kq, noti1: announce1, noti2: announce2 });
});


function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

module.exports = router;