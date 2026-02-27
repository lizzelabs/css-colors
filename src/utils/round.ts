

export const round = (value: number, places: number = 0) => {
    const round = +`1${'0'.repeat(places)}`;
    return places <= 0 ? Math.round(value) : Math.round(value * round) / round;
}