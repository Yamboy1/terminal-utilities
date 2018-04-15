# terminal-utilities

[![Travis](https://img.shields.io/travis/yamboy1/terminal-utilities.svg)](https://travis-ci.org/yamboy1/terminal-utilities)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/terminal-utilities.svg)](https://npmjs.com/terminal-utilities)
[![David](https://img.shields.io/david/yamboy1/terminal-utilities.svg)](https://npmjs.com/terminal-utilities)

An easy to use synchronous node.js library for using the terminal.

## Installation

```
npm install terminal-utilities
```

## Usage

```js
const terminal = require('terminal-utilities')
```

## Docs

### *setCursor(cols, rows)*

This positions the cursor based on `cols` and `rows`.

### *clear()*

This clears the terminal screen.

### *clearLine(line)*

This clears a specific line.

### *write(text)*

This prints `text` to the terminal.

### *writeLine(text)*

This prints `text` to the terminal, followed by a `\n`.

### *readLine()*

This reads one line of input and returns it.

### *error(message)*

This prints an error to the terminal in the form: `ERR: message`
