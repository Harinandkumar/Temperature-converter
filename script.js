let cel = document.getElementById("cel"); //cel
let fah = document.getElementById("fah"); //fah input
let kel = document.getElementById("kel"); ///kel input

cel.addEventListener("input", function () {
  let c = this.value; //input from user in c
  let f = (c * 9) / 5 + 32; //farenhite give the o/p
  let k = c * 1 + 273.15; //give the output in kelvin
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah.value = f; //ferenhite value assign
  if (!Number.isInteger(k)) {
    k = k.toFixed(4);
  }

  kel.value = k; //kelvin value assign
});

fah.addEventListener("input", function () {
  let f = this.value;
  let c = ((f - 32) * 5) / 9; //calcius calculated;
  let k = ((f - 32) * 5) / 9 + 273.15; //kelvin calculated
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel.value = c;
  if (!Number.isInteger(k));
  {
    k = k.toFixed(4);
  }

  kel.value = k;
});

kel.addEventListener("input", function () {
  let k = this.value;
  let c = k - 273.15;
  let f = 1.8 * (k - 273.15) + 32;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel.value = c;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }

  fah.value = f;
});
