// const question = require()
const Quiz = require("../models/quiz");

class QuizService {
    constructor() {
        this.questionList = new  Map();
        this.quizList = new Map();
    }

    createQuestion(question) {
        if (this.questionList.has(question.id)) {
            throw new Error("Question already exists with this id");
        }
        this.questionList.set(question.id, question);
    }

    addAnswer(questionId, answer) {
        if (!this.questionList.has(questionId)) {
            throw new Error("Please create question first");
        }
        let question = this.questionList.get(questionId);
        question.addAnswer(questionId, answer);
    }

    createQuiz(id, questionList) {
        if (this.quizList.has(id)) {
            throw new Error("Quiz with this id already created");
        }
        questionList = questionList.split(" ");
        for (let i = 0; i < questionList; i++) {
            if (!this.questionList.has(questionList[i])) {
                throw new Error("Current question is not present in the list");
            }
        }
        let quiz = new Quiz(id, questionList);
        this.quizList.set(id, quiz);
    }

    listQuiz(quizId, offset, limit) {
        if (!this.quizList.has(quizId)) {
            throw new Error("Incorrect quiz id");
        }
        let questions = this.quizList.get(quizId).questionList;
        let startingOffset =  offset+1;
        if (startingOffset + limit > questions.length) {
            throw new Error("Either value of offset or limit incoorect");
        }
        let res = [];
        for (let i = startingOffset; i <= startingOffset + limit; i++) {
            let q = this.questionList.get(questions[i]);
            res.push(q);
        }
        return res;
    }
}

module.exports = QuizService;