export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let length = str.length;
    const romanNotation = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
        arabicNotation = [1, 5, 10, 50, 100, 500, 1000];
    for (let i = 0; i < length; i++) {
        let idCurrentSymbol = romanNotation.indexOf(str[i]),
            idNextSymbol = romanNotation.indexOf(str[i + 1]);
        if (arabicNotation[idCurrentSymbol] < arabicNotation[idNextSymbol]) {
            result += arabicNotation[idNextSymbol] - arabicNotation[idCurrentSymbol];
            i++;
        } else {
            result += arabicNotation[idCurrentSymbol];
        }
    }
    return result;
}
