const CommandExecutor = require("./commandExecutor");
const Question = require("../models/question");

class ListQuiz extends CommandExecutor {
    constructor(quizService) {
        super(quizService);
    }

    validate() {
        return true;
    }

    execute(command) {
        super.execute(command.params);
        let res = this.quizService.listQuiz(command.params[0], parseInt(command.params[1]), parseInt(command.params[2]));
        console.log("Listing quiz as follows:");
        if (res && res.length) {
            console.log("res:", JSON.stringify(res));
        }
    }
}

ListQuiz.command = 'list_quiz';

module.exports = ListQuiz;