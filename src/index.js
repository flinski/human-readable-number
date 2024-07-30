module.exports = function toReadable(number) {
    const map = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);

    const digits = String(number).split("");
    const numDigits = digits.length;

    if (numDigits === 1) {
        return map.get(number);
    }

    if (numDigits === 2) {
        if (digits[1] === "0" || number < 20) {
            return map.get(number);
        }

        return `${map.get(Number(digits[0] * 10))} ${map.get(
            Number(digits[1])
        )}`;
    }

    if (digits[1] === "0" && digits[2] === "0") {
        return `${map.get(Number(digits[0]))} hundred`;
    }

    if (digits[1] === "0") {
        return `${map.get(Number(digits[0]))} hundred ${map.get(
            Number(digits[2])
        )}`;
    }

    if (digits[2] === "0") {
        return `${map.get(Number(digits[0]))} hundred ${map.get(number % 100)}`;
    }

    if (digits[1] * 10 + Number(digits[2]) < 20) {
        return `${map.get(Number(digits[0]))} hundred ${map.get(number % 100)}`;
    }

    return `${map.get(Number(digits[0]))} hundred ${map.get(
        (number % 100) - (number % 10)
    )} ${map.get(number % 10)}`;
};
