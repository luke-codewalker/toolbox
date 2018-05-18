// function to convert from degree to radians and vice versa
const degFromRad = (rad) => (rad * 180 / Math.PI);
const radFromDeg = (deg) => (deg * Math.PI / 180);

// function to draw a random number from a range
const random = (min = 1, max = 0) => {
    const x = Math.random() * Math.abs(max - min);
    return max != 0 ? min + x : min - x;
}

// function to limit a number between lower and higher bound
const limit = (n, low, high) => {
    if(n > low && n < high) {
        return n;
    } else if (n < low ) {
        return low;
    } else if (n > high) {
        return high;
    }
}

// function to map a number from one range into another
const map = (n, start1, end1, start2, end2, limited = false) => {
    const newVal = ((n - start1)/ (end1 -start1)) * (end2 - start2) + start2;

    if(!limited) {
        return newVal;
    } else if (start2 < end2) {
        return limit(newVal, start2, end2);
    } else {
        return limit(newVal, end2, start2);
    }
}

// function to normalize a number from a range to a floating point number between 0 and 1
// just a shorthand for map(n, low, high, 0, 1)
const norm = (n, low, high, limited = false) => map(n, low, high, 0, 1, limited)