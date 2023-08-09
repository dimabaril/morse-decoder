const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    const result = [];
    const sliced = expr.match(/.{1,10}/g);
    sliced.forEach((element) => {
        if (element === "**********") {
            result.push(" ");
            return;
        }
        const charInNumArr = element.match(/.{1,2}/g);
        const charInMorse = charInNumArr
            .map((element) => {
                switch (element) {
                    case "00":
                        return "";
                    case "10":
                        return ".";
                    case "11":
                        return "-";
                }
            })
            .join("");
        const char = MORSE_TABLE[charInMorse];
        result.push(char);
    });
    return result.join("");
}

module.exports = {
    decode,
};

// console.log(
//     decode(
//         "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
//     )
// );
