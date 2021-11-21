const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        let result = shuffleArray(['fjldsf', 'jfeiof', 'hfuehf', 'huegfywf'])
        expect(Array.isArray(result)).toBe(true)
    })

    test('return an array that is the length of the the argument sent', () => {
        let arr = [1, 2, 3, 4, 5, 6]
        let result = shuffleArray(arr)
        expect(result).not.toBe(arr)
    })
})