class Question {
    constructor(id, question_text) {
        this.id = id;
        this.question_text = question_text; 
        this.answers = [];
    }

    addAnswer(answer) {
        this.answers.push(answer);
    }
}

module.exports = Question;