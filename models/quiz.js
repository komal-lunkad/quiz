class Quiz {
    constructor(id, questionList) {
        this.id = id;
        this.questionList = questionList.length ? questionList : [];
    }

    addQuestion(question) {
        if (this.questionList.indexOf(question.id)) {
            throw new Error("This question is already added in the quiz");
        }
        this.questionList.push(question.id);
    }
}

module.exports = Quiz;