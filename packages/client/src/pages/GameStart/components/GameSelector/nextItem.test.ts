import { nextItem } from './nextItem'

describe('get previous / next item with arguments: direction, size and current index', () => {
  describe('for size 3 ([a, b, c]) and current 2 (c)', () => {
    test('previous should be 1 (b)', () => {
      expect(nextItem(true, 3, 2)).toBe(1)
    })
    test('next should be 0 (a)', () => {
      expect(nextItem(false, 3, 2)).toBe(0)
    })
    describe('for size 2 ([a, b]) and current 0 (a)', () => {
      test('previous should be 1 (b)', () => {
        expect(nextItem(true, 2, 0)).toBe(1)
      })
      test('next should be 1 (b)', () => {
        expect(nextItem(false, 2, 0)).toBe(1)
      })
    }),
      describe('if size is one return 0', () => {
        test('for previous', () => {
          expect(nextItem(true, 1, 0)).toBe(0)
        })
        test('for next', () => {
          expect(nextItem(false, 1, 0)).toBe(0)
        })
      }),
      describe('if wrong arguments should throw Error', () => {
        test('wrong current index', () => {
          expect(() => {
            nextItem(true, 0, 3)
          }).toThrowError('wrong arguments were provided')
        })
        test('wrong size', () => {
          expect(() => {
            nextItem(false, -1, 2)
          }).toThrowError('wrong arguments were provided')
        })
      })
  })
})
