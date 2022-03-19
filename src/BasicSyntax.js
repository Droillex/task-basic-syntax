export function romanToInteger(str) {
    let result = 0;
    const romToDec = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < str.length - 1; i++) {
        const currentDigit = romToDec[str[i]];
        if (currentDigit >= romToDec[str[i + 1]]) result += currentDigit;
        else result -= currentDigit;
    }
    result += romToDec[str[str.length - 1]];
    return result;
}
