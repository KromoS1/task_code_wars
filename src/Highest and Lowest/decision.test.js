
function highAndLow(numbers){
   const array = numbers.split(" ");
    const max = Math.max.apply(null,array);
    const min = Math.min.apply(null,array);
    return [max,min].join(" ");
}

test("high and low men", () => {
    const result = highAndLow("1 5 9 -5 3 7");
    expect(result).toBe("9 -5");
})