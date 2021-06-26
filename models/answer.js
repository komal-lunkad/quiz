class Answer {
    constructor() {
        this.answers = new Map();
    }

    addAnswer(question_id, answer) {
        if (!this.answers.has(question_id)) {
            this.answers.set(question_id, []);
        }
        this.answers.get(question_id).push(answer);
    }
}

module.exports = Answer;