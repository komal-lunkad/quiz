const QuizService = require("./service/quizService");
const CommandFactory = require("./commands/commandFactory");
const fs = require("fs");
const USER_HOME = process.env.HOME;
const path = require("path");
const PARENT_PATH = path.resolve(__dirname);
const Command = require("./models/command");

async function main() {
    let quizService = new QuizService();
    let commandFactory = new CommandFactory(quizService);
    let file_path = PARENT_PATH + '/input';
    let data = await readFile(file_path);
    let i = 0;

    while (i < data.length) {
        let command = new Command(data[i]);
        let executor = commandFactory.getExecutor(command);
        if (executor.validate()) {
            executor.execute(command);
        }  else {
            throw new Error("Incorrect command specified");
        }
        i++;
    }
}

function readFile(file_path) {
    return new Promise((resolve, reject) => {
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if (err) {
                console.log("Failed to read the file");
                return reject(err);
            }
            data = data.trim();
            data = data.split(/\r?\n/);
            resolve(data);
        })
    });
}
main();