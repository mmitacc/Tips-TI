const problemGrigorevMidudev = (string) => {
    const result = [];
    let letter = string[0];
    let count = 1;
    for (let i = 1; i < string.length; i++) {
        if (letter === string[i]) {
            count++;
        } else {
            result.push(`("${letter}",${count})`);
            letter = string[i];
            count = 1;
        }
        (i === string.length - 1) && (result.push(`("${letter}",${count})`));
    }
    return "(" + result.toString() + "]";
}

const str = "aaaabbbcca";
console.log(problemGrigorevMidudev(str));
