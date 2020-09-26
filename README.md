# gist-it-cli

A CLI for managing your GitHub gists.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gist-it-cli.svg)](https://npmjs.org/package/gist-it-cli)
[![Downloads/week](https://img.shields.io/npm/dw/gist-it-cli.svg)](https://npmjs.org/package/gist-it-cli)
[![License](https://img.shields.io/npm/l/gist-it-cli.svg)](https://github.com/cli/gist-it-cli/blob/master/package.json)

<!-- toc -->

- [gist-it-cli](#gist-it-cli)
- [Usage](#usage)
- [Commands](#commands)
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

- [`gist-it create`](#gist-it-create)
- [`gist-it help [COMMAND]`](#gist-it-help-command)
- [`gist-it list`](#gist-it-list)

## `gist-it create`

Create a GitHub gist from files in your current working directory.

```
USAGE
  $ gist-it create

DESCRIPTION
  ...
  Use this command in your working directory to create a gist with one or many files.
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

Lists all gists created by authorized GitHub user.

```
USAGE
  $ gist-it list

OPTIONS
  -u, --public  return public gists
  -r, --private  return private gists
  -q, --per_page=100  return a specific number of results per page (defaults to 100 if ommitted)
  -p, --page=1  return a specific page (defaults to 1 if ommitted)


DESCRIPTION
  ...
  Use this command to view a list of your current gists.

  The information returned for each gist includes:
  - owner (string)
  - description (string)
  - files (array)
  - public (boolean)
  - comments (integer)
  - html_url (string)
  - created_at (string:date time)
  - updated_at (string:date time)
```

_See code: [src/commands/list.js](https://github.com/cli/gist-it-cli/blob/v0.0.0/src/commands/list.js)_

<!-- commandsstop -->
