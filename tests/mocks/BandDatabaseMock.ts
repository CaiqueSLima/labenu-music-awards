import { BandData } from "../../src/model/Band";
import { bandFromDBMock } from "./bandMock";

export class BandDatabaseMock {
    public async createBand(id: string, name: string, musicGenre: string, responsible: string): Promise<void> { }

    public async getBandByNameOrID(input: string): Promise<BandData[]> {
        if (input === 'band1' || input === 'id_mock') {
            return [bandFromDBMock]
        } else {
            return []
        }
    }
}