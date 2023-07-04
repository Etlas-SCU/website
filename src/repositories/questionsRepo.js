import { GET, Put } from "../helpers/apiService";

export async function getQuestionsByTitle(title) {
    const result = await GET(`questions/${title.toLowerCase()}/`);
    return result;
}

export async function getBestScoreByTitle(title) {
    const result = await GET(`users/best-score-${title.toLowerCase()}/`);
    return result;
}

export async function setBestScoreByTitle(title, newScore) {
    var body = { new_score: newScore }
    const result = await Put(`users/best-score-${title.toLowerCase()}/`, JSON.stringify(body));
    return result;
}