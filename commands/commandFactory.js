const CreateQuestion = require("./createQuestion");
const AddAnswer = require("./addAnswer");
const CreateQuiz = require("./createQuiz");
const ListQuiz = require("./listQuiz");

class CommandFactory {
    constructor(quizService) {
        this.commandList = new Map();
        this.commandList.set(CreateQuestion.command, new CreateQuestion(quizService));
        this.commandList.set(AddAnswer.command, new AddAnswer(quizService));
        this.commandList.set(CreateQuiz.command, new CreateQuiz(quizService));
        this.commandList.set(ListQuiz.command, new ListQuiz(quizService));
    }

    getExecutor(command) {
        if (!this.commandList.has(command.name)) {
            throw new Error("Invalid command");
        }
        return this.commandList.get(command.name);
    }
}

module.exports = CommandFactory;