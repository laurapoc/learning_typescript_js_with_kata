import { isIsogram } from "./isongram";

describe('isogram', () => {
    it('returns true, when all the letters in a string are unique', () => {
        const result = isIsogram("Dermatoglyphics")

        expect(result).toBeTruthy()
    })

    it('returns false, when not all the letters in a string are unique', () => {
        const result = isIsogram('validation')

        expect(result).toBeFalsy()
    })
})