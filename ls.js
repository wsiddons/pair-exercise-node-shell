const fs = require('fs')

const lsFunc = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let path = __dirname
  if (cmd === "ls") {
    //process.stdout.write(path)
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err
        } else {
            process.stdout.write(files.join('\n'))
            process.stdout.write('\nprompt > ')
        }
    });
  }
  // process.stdout.write('You typed: ' + cmd)
  //process.stdout.write("\nprompt > ");
});

module.exports.lsFunc