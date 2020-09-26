# gist-it-cli

A CLI for managing your GitHub gists.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gist-it-cli.svg)](https://npmjs.org/package/gist-it-cli)
[![Downloads/week](https://img.shields.io/npm/dw/gist-it-cli.svg)](https://npmjs.org/package/gist-it-cli)
[![License](https://img.shields.io/npm/l/gist-it-cli.svg)](https://github.com/cli/gist-it-cli/blob/master/package.json)

<!-- toc -->
* [gist-it-cli](#gist-it-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g gist-it-cli
$ gist-it COMMAND
running command...
$ gist-it (-v|--version|version)
gist-it-cli/0.0.0 darwin-x64 node-v12.18.3
$ gist-it --help [COMMAND]
USAGE
  $ gist-it COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`gist-it create`](#gist-it-create)
* [`gist-it help [COMMAND]`](#gist-it-help-command)
* [`gist-it list`](#gist-it-list)

## `gist-it create`

Create a GitHub gist from files in your current working directory.

```
USAGE
  $ gist-it create

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/create.js](https://github.com/cli/gist-it-cli/blob/v0.0.0/src/commands/create.js)_

## `gist-it help [COMMAND]`

display help for gist-it

```
USAGE
  $ gist-it help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `gist-it list`

Describe the command here

```
USAGE
  $ gist-it list

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/list.js](https://github.com/cli/gist-it-cli/blob/v0.0.0/src/commands/list.js)_
<!-- commandsstop -->
