export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let length = str.length;
    const accordance = [{romanNotation: 'I', arabicNotation: 1}, {romanNotation: 'V', arabicNotation: 5}, 
                        {romanNotation: 'X', arabicNotation: 10},  {romanNotation: 'L', arabicNotation: 50}, 
                        {romanNotation: 'C', arabicNotation: 100}, {romanNotation: 'D', arabicNotation: 500}, 
                        {romanNotation: 'M', arabicNotation: 1000}]
    for (let i = 0; i < length; i++) {
        let currentSymbol, nextSymbol;
        accordance.forEach(function(n){
            if ((n.romanNotation == str[i])) {currentSymbol = n.arabicNotation};
            if ((n.romanNotation == str[i+1])) {nextSymbol = n.arabicNotation};
        })
        if (nextSymbol  && currentSymbol < nextSymbol) {
            result += nextSymbol - currentSymbol;
            i++;
        }
        else {
            result += currentSymbol;
        }
    }
    if (! result) { result = "Некорректно введено число в римской записи" };
    return result;
}
