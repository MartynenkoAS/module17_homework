import {revertString} from "./reverseStrFunction";

describe("тут название сюита", () => {
    it ("тут название теста 1", () => {                 // этот тест должен отработать правильно
        const str = "Hello";
        expect(revertString(str)).toBe("olleH");
        });

    it ("тут название теста 2", () => {                 // этот тест должен отработать правильно тоже т.к. примелили .not
        const str = "Hello";
        expect(revertString(str)).not.toBe("--olleH");
        });
})