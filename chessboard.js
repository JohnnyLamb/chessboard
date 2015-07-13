// console.log("test");



for (var row = 0; row < 8; row++) {
 var line = " ";

for (var column =0;column <8; column++) {

  if (column % 2 ===0) {
      line += " ";

  } else {
    line += "#";
  }

}

console.log(line);
}
