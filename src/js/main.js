"use strict";
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return age > 18 || confirm('Родители разрешили?');
}

function min(a,b) {
    return (a<b) ? a : b;
}

function pow(x,n) {
    if (n<=1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

function sumTo(n) {
    var res = 0;
    while (n>0) {
        res += n--;
    };
    return res;
}

function sumToRec(n) {
    if (n!=0) {
        return n + sumToRec(n-1);
    }
    else return n;
}

function sumToAp(n) {
    return (n*(n+1))/2;
}

function factorial(n) {
    if (n > 0) {
        return n * factorial(n-1);
    }
    else return 1;
}

function fib(n) {
    return Math.ceil((Math.pow(((1 + Math.sqrt(5))/2),n))/Math.sqrt(5));
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function sumreturn(a,b) {
    if (isNumeric(a) && isNumeric(b)) {return +a + +b;}
    else return "Неверное значение";
}

function getDecimal(n) {
    n = Math.abs(n);
    return (n * 1000000 - parseInt(n) * 1000000)/1000000;
}

function rand(max) {
    return Math.random()*max;
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function ucFirst(str) {
    str = str.charAt(0).toUpperCase()+str.slice(1);
    return str;
}

function checkSpam(str) {
    if ((~str.toLowerCase().indexOf("viagra")) || (~str.toLowerCase().indexOf("xxx"))){
        return true;
    } else return false;
}

function truncate(str, maxLength) {
    if (str.length<maxLength) {
        return str;
    } else {
        return str.slice(0,maxLength-3)+"...";
    }
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}

function lastElem(array) {
    return array[array.length-1];
}

function addLastElem(array, value) {
    //return array[array.length] = value;
    return array.push(value);
}

function find(arr, value) {
    return arr.indexOf(value);
}

function filterRange(arr,a,b) {
    var tempArr = [];
    for (var i=0; i<arr.length; i++) {
        if ((arr[i] >= a) && (arr[i] <= b)) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

function checkArr(arr, p) {
    for (var i=arr.length; i>1; i--) {
        for (var j=i; j<arr.length;j++) {
            if (arr[j] == arr[i] * p) {
                arr[j] = "X";
                break;
            }
        }

    }
}

function plusP(arr, p) {
    for (var i=p; i<=arr.length; i++) {
        if (arr[i]>p && arr[i] != "X") {
            return arr[i];
        }
    }

}
function printRes(arr) {
    var sum = 0;
    for (var i=2; i<arr.length; i++) {
        if (arr[i] != "X") {
            sum = sum + +arr[i];
        }
    }
    alert (sum);
}
