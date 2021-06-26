const CommandExecutor = require("./commandExecutor");
const question = require("../models/question");
const Question = require("../models/question");

class AddAnswer extends CommandExecutor {
    constructor(quizService) {
        super(quizService);
    }

    validate() {
        return true;
    }

    execute(command) {
        super.execute(command.params);
        let params = command.params;
        this.quizService.addAnswer(params[0], params[1]);
        console.log("Answer added successfully!!");
    }
}

AddAnswer.command = 'add_answer';

module.exports = AddAnswer;