function lastSurvivor(letters, coords) {
    let letter = letters.split("");
    for(let i = 0; i< coords.length;i++){
        for (let k = 0;k<letter.length;k++){
            if (k === coords[i]){
                letter.splice(coords[i],1);
            }
        }
    }
return letter[0];
}

test("lastSurvivor", () => {
    const lett = 'kbc';
    const arr = [0,1];
    const result = lastSurvivor(lett,arr);

    expect(result).toBe('b');
})