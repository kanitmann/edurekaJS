#! /usr/bin/env node
import chalk from "chalk";
import yargs from 'yargs';
import figlet from "figlet";
import fs from "fs";

console.log(
    chalk.yellow(
        figlet.textSync('Edureka', { horizontalLayout: 'full' })
    )
);

const y = yargs()
y.version('v1.0.1')


function createPath() {
    var path = "./Memos";
    fs.access(path, (error) => {
        if (error) {
          fs.mkdir(path, (error) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Created 'Memo' folder");
            }
          });
        } else {
          console.log("");
        }
      });
}

createPath();

const argv = process.argv.slice(2);

y.command({
    usage: 'Usage: edureka <command> [options]',
    command: 'command <> []',
    describe: 'sample description. \n',
    builder: {
        title: {
            describe: ' ',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: ' ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

y.command({
    command: '-update',
    describe: 'sample description\n',
    builder: {
        title: {
            describe: '   ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

y.command({
    command: '-animation',
    describe: 'Side fun animation in CLI (TBA)\n',
    builder: {
        title: {
            describe: '   ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// if (argv[0] == "-i") {
//     if (argv[1] == "-update") {
//         console.log("Update Working");
//         pathName = argv[2];
//         distName = argv[3];
//     }
//     else {
//         pathName = argv[1];
//         distName = argv[2];
//     }

// }
// else if (argv[0] == "-animation") {
//     animation1();
// }

y.parse(process.argv.slice(2))