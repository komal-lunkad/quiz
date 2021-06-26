class CommandExecutor {

    constructor(quizService) {
        this.quizService = quizService;
    }
    validate() {
        return true;
    }

    execute(command) {
        
    }
}

module.exports = CommandExecutor;