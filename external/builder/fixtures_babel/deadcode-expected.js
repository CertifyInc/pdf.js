function f1() {}
<<<<<<< HEAD
function f2() {
  return 1;
}
=======
f1();
function f2() {
  return 1;
}
f2();
>>>>>>> upstream/master
function f3() {
  var i = 0;
  throw "test";
}
<<<<<<< HEAD
function f4() {
  var i = 0;
}
=======
f3();
function f4() {
  var i = 0;
}
f4();
>>>>>>> upstream/master
var obj = {
  method1() {},
  method2() {}
};
class C {
  method1() {}
  method2() {}
}
var arrow1 = () => {};
var arrow2 = () => {};
