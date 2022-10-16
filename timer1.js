const args = process.argv.splice(2);
for (let arg of args) {
  if (Number(arg) < 0) {
    continue
  } else if (isNaN(Number(arg)) === true) {
    continue
  } else {
    arg += "000"
    Number(arg) 
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg)
  }
}