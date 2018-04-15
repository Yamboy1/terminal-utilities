'use strict'

var readlineSync = require('readline-sync')

class Terminal {
  constructor () {
    if (process.stdout.isTTY && process.stderr.isTTY && process.stdin.isTTY) {
      this.stdin = process.stdin
      this.stdout = process.stdout
      this.stderr = process.stderr

      // process.on('exit', code => {
        // this.clear()
        // this.setCursor(0, 0)
        // process.exit()
      // })
    } else {
      throw Error('terminal-utilities needs to be run in the terminal and not through a pipe or a redirection command\n')
    }
  }

  setCursor (cols, rows) {
    if ((cols === undefined || rows === undefined)) {
      throw Error('The setCursor takes exactly two arguments')
    } else if (cols < 0 || rows < 0 || isNaN(cols) || isNaN(rows)) {
      throw TypeError('The arguments to setCursor have to be positive integers')
    }
    this.stdout.cursorTo(cols, rows)
  }

  clear () {
    for (var i = 0; i < this.stdout.rows; i++) {
      this.setCursor(0, i)
      this.write(' '.repeat(this.stdout.columns))
    }
    this.setCursor(0, 0)
  }

  clearLine (line) {
    if (!line && line !== 0) {
      throw Error('The clearLine method takes exactly one argument')
    }
    this.setCursor(0, line)
    this.write(' '.repeat(this.stdout.columns))
  }

  writeLine (text) {
    this.write(text + '\n')
  }

  write (text) {
    if (text === undefined) {
      this.stdout.write('')
    } else {
      if (Buffer.isBuffer(text)) {
        this.stdout.write(text.slice(text.length / 2)
)
      }
      this.stdout.write(text.toString())
    }
  }

  readLine (question) {
    return readlineSync.question(question)
  }

  error (message) {
    if (message) {
      this.writeLine('ERR: ' + message)
    } else {
      throw Error('The error method takes exactly one argument')
    }
  }
}

module.exports = new Terminal()
