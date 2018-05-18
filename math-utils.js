// function to convert from degree to radians and vice versa
const degFromRad = (rad) => (rad * 180 / Math.PI);
const radFromDeg = (deg) => (deg * Math.PI / 180);

// function to draw a random number from a range
const random = (min = 1, max = 0) => {
    const x = Math.random() * Math.abs(max - min);
    return max != 0 ? min + x : min - x;
}
