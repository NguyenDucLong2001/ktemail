function kt(email) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(email)){
        document.write("Hợp lệ" + "<br>");
    }
    else {
        document.write("Không hợp lệ" + "<br>");
    }
}
var a = kt('ab@gmail.com');
var b = kt('abc@gamil.com');
var c = kt('@gmail.com');
var d = kt('abcgamil.com');