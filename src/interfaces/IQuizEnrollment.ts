import IUserAnswer from "./IUserAnswer";

export default interface IQuizEnrollment{
    userAnswers: IUserAnswer[],
    quizId : string,
    userId : string | null // null because user may be not log in
}