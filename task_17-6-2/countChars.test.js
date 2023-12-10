import {countChars} from "./countChars.js"
import * as matchers from 'jest-extended';
expect.extend(matchers);

describe ("тест функции countChars", () => {
    it ("успешное выполнение", () => {                                                     
        const word = "Параллелипипед";
        const result = {"д": 1, "а": 2, "е": 2, "и": 2, "л": 3, "п": 3, "р": 1};
        expect(countChars(word)).toEqual(result);                                    // toEqual может сравнивать Объекты игнорируя порядок элементов
    }),
    it ("НЕ успешное выполнение", () => {                                                     
        const word = "Параллелипипед %%";
        expect(countChars(word)).not.toEqual({"а": 2, "д": 1, "е": 2, "и": 2, "л": 3, "п": 3, "р": 1});
    }),
    it ("не правильный формат аргумента функции", () => {                                                     
        const word = 123;
        expect(countChars(word)).toBe("error type of argument");
    })
})