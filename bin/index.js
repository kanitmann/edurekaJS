#! /usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import yargs from 'yargs';
import figlet from "figlet";
import fs from "fs";
import CliFrames from 'cli-frames';

var today = new Date();
var memo_num = "memo" + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes();
var body = "";

console.log(
    chalk.yellow(
        figlet.textSync('Theory-js', { horizontalLayout: 'full' })
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
                    console.log(chalk.blueBright("- Created 'Memo' folder for future use 😊"));
                }
            });
        }
    });
}

function createMemo(memo_num, body) {
    var path = "./Memos/" + memo_num + ".txt";
    fs.access(path, (error) => {
        if (error) {
            fs.writeFile(path, body, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(chalk.blueBright("- Memo Created 📕"));
                }
            });
        }
    });
}

const argv = process.argv.slice(2);

// Animation Function
function animation1() {
    const frames = [
        "╔════╤╤╤╤════╗\n" +
        "║    │││ \\   ║\n" +
        "║    │││  O  ║\n" +
        "║    OOO     ║",

        "╔════╤╤╤╤════╗\n" +
        "║    ││││    ║\n" +
        "║    ││││    ║\n" +
        "║    OOOO    ║",

        "╔════╤╤╤╤════╗\n" +
        "║   / │││    ║\n" +
        "║  O  │││    ║\n" +
        "║     OOO    ║",

        "╔════╤╤╤╤════╗\n" +
        "║    ││││    ║\n" +
        "║    ││││    ║\n" +
        "║    OOOO    ║"
    ];


    new CliFrames({
        frames: ["Thinking time: 3", "Thinking time: 2", "Thinking time: 1"]
        , autostart: {
            delay: 1000
            , end: function (err, data) {
                var animation = new CliFrames();
                animation.load(frames);
                animation.start({
                    repeat: true
                    , delay: 250
                });
            }
        }
    });
}


y.command({
    usage: 'Usage: theory <flag> [options]',
    command: '<command> [options]',
    describe: 'theory flag usage \n',
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
    command: '-m <Thought>',
    describe: 'Save your thoughts real-time\n',
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
    describe: 'Calm Animation to let you put your thought together\n',
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

if (argv[0] == "-m") {
    for (let j = 3; j < process.argv.length; j++) {
        body = body + process.argv[j] + " ";
    }
    // console.log(chalk.green("\nMemo: ") + chalk.yellow(body));
    {
        console.log("\n" + boxen(chalk.yellow("\n" + chalk.green("\nMemo: ") + chalk.yellow(body) + "\n"
        ), { padding: 1, borderColor: 'green', dimBorder: true }) + "\n");
    };
    createPath();
    createMemo(memo_num, body);
}
else if (argv[0] == "-animation") {
    animation1();
}

y.parse(process.argv.slice(2))