import { BandBusiness } from '../../src/business/BandBusiness'
import { BandDatabase } from '../../src/data/BandDatabase'
import { AuthenticatorMock } from '../mocks/AuthenticatorMock'
import { BandDatabaseMock } from '../mocks/BandDatabaseMock'
import { bandClassMock, bandFromDBMock } from '../mocks/bandMock'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'

const bandBusiness = new BandBusiness(
    new IdGeneratorMock(),
    new AuthenticatorMock(),
    new BandDatabaseMock() as BandDatabase
)

describe('Testing BandBusiness create band', () => {

    test('Testing creating a band with a missing input, like name', async () => {
        expect.assertions(2)
        try {
            await bandBusiness.createBand({ name: '', musicGenre: 'rock', responsible: 'João' }, 'valid_token')
        } catch (error: any) {
            expect(error.message).toEqual('Missing input')
            expect(error.statusCode).toBe(422)
        }
    })

    test('Testing creating a band with an invalid token', async () => {
        expect.assertions(2)
        try {
            await bandBusiness.createBand({ name: 'Balada Melosa', musicGenre: 'rock', responsible: 'João' }, 'invalid_token')
        } catch (error: any) {
            expect(error.message).toEqual('You must be an admin to add a band')
            expect(error.statusCode).toBe(403)
        }
    })

    test('Testing creating a band with valid inputs', async () => {
        try {
            const result = await bandBusiness.createBand({ 
                name: 'Balada Melosa', 
                musicGenre: 'rock', 
                responsible: 'João' 
            }, 'valid_token')
            
            expect(result).toBeUndefined
        } catch (error: any) {
            console.log(error)
        }
    })
})

describe('Testing BandBusiness get band details', () => {

    test('Testing with a valid name, empty id', async () => {
        try {
            const result = await bandBusiness.getBandByIdOrName('band1', '')
            expect(result).toEqual(bandClassMock)
        } catch (error: any) {
            console.log(error)
        }
    })

    test('Testing with a empty name, valid id', async () => {
        try {
            const result = await bandBusiness.getBandByIdOrName('', 'id_mock')
            expect(result).toEqual(bandClassMock)
        } catch (error: any) {
            console.log(error)
        }
    })

    test('Testing band not found', async () => {
        expect.assertions(2)
        try {
            await bandBusiness.getBandByIdOrName('', '123')
        } catch (error: any) {
            expect(error.message).toEqual('No band found')
            expect(error.statusCode).toBe(404)
        }
    })
})