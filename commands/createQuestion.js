const CommandExecutor = require("./commandExecutor");
const question = require("../models/question");
const Question = require("../models/question");

class CreateQuestion extends CommandExecutor {
    constructor(quizService) {
        super(quizService);
    }

    validate() {
        return true;
    }

    execute(command) {
        super.execute(command.params);
        let question = new Question(command.params[0], command.params[1]);
        this.quizService.createQuestion(question);
        console.log("Question created successfully");
    }
}

CreateQuestion.command = 'create_question';

module.exports = CreateQuestion;