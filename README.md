# Luke's Toolbox 🛠

This repo is a collection of functions that I was using again and again inmy projects and got tired of typing out over and over. For now there are two files for functions related to DOM manipulation (`dom-utils.js`) and related to math (`math-utils.js`). In the future I might be adding more functions and maybe even tests...

## Documentation

These are the functions in the files and what they each do.

### DOM Manipulation `dom-utils.js`

- `select(query)`: this is basically just a shorthand for `document.querySelector(query)`. Pass it a valid selector as `query` and it will return the DOM object.

- `selectAll(query)`: you guessed it. This is a shorthand for `document.querySelectorAll(query)`. Pass it a valid selector as `query` and it will return a NodeList of the selected objects.

### Math utilities `math-utils.js`

- `degFromRad(rad)`: converts `rad` radians into degrees

- `radFromDeg(deg)`: converts `deg` degrees into radians

- `random(min = 1, max = 0)`: draws a random number from a given range. It has three possible use cases:
    - `random()` without parameters works just like `Math.random()` and returns a random number from `[0,1[`
    - If you give it just one number it will draw a value from the range between 0 and that number. Example: `random(5)` will give you a value from `[0,5[`. 
    - With two arguments it will use the first as minimum and the second as maximum. Example: `random(5, 10)` will give you a value from `[5,10[`.

- `limit(n, low, high)`: limits a number `n` between the given lower bound `low` and higher bound `high`. If the number is lower than `low` it will return the lower bound. If it's higher than `high` it will return the upper bound.

- `map(n, start1, end1, start2, end2, limited = false)`: maps a given number `n` that comes from the range between `start1` and `end1` to the new range from `start2` to `end2`. `limited` controls if the result will be clamped to the new range or not. It's `false` by default.
    - Example: you want to know how many percent of a given distance you have travelled. Just use `map(travelled, 0, distance, 0, 100)` 

- `norm(n, start1, end1, limited = false)`: normalizes a number from a given range to a floating point number between 0 and 1. Basically just a shorthand for `map(n, start1, end1, 0, 1)`
    - Example: normalize a color value `norm(color, 0, 255)` 