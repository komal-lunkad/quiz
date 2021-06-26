const CommandExecutor = require("./commandExecutor");
const Question = require("../models/question");

class CreateQuiz extends CommandExecutor {
    constructor(quizService) {
        super(quizService);
    }

    validate() {
        return true;
    }

    execute(command) {
        super.execute(command.params);
        this.quizService.createQuiz(command.params[0], command.params[1]);
        console.log("Quiz created successfully");
    }
}

CreateQuiz.command = 'create_quiz';

module.exports = CreateQuiz;