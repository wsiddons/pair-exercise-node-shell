process.stdout.write("prompt > ");

const pwdFunc = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(__dirname);
  }
  // process.stdout.write('You typed: ' + cmd)
  process.stdout.write("\nprompt > ");
});

module.exports.pwdFunc
