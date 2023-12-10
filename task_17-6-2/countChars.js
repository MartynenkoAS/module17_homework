export const countChars = str => {
	const chars = {};
    
    if (typeof(str) == "string") {
        str.split('').forEach(char => {
              const lowerChar = char.toLowerCase();
          
            if (chars[lowerChar] === undefined) {
                chars[lowerChar] = 0;
            }
            ++chars[lowerChar];
        })
        return chars;
    } else {
        return "error type of argument";
    }
}

console.log( countChars('Арарат') )