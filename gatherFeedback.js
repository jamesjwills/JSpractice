function gatherFeedback(feedbackArray) {
    let pos = 0;
    let neg = 0;
    let neut = 0;
    for (let i = 0; i < feedbackArray.length; i++) {
        if (feedbackArray[i][1] > 6) {
            pos++;
        } else if (feedbackArray[i][1] < 4) {
            neg++;
        } else {
            neut++;
        }
    }


    return {
        positive: pos,
        negative: neg,
        neutral: neut
    }
    }

console.log(gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]));
// returns {positive: 1, negative: 1, neutral:1}

console.log(gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]));
// returns {positive: 3, negative: 0, neutral:0}

console.log(gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]));
// returns {positive: 2, negative: 1, neutral:0}