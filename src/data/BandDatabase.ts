import { BaseDatabase } from "./BaseDatabase"
import { BandData } from "../model/Band"

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "lama_bands"

  public async createBand(id: string, name: string, musicGenre: string, responsible: string): Promise<void> {
      await BaseDatabase.connection(BandDatabase.TABLE_NAME)
        .insert({
          id,
          name,
          music_genre: musicGenre,
          responsible
        })
  }

  public async getBandByNameOrID(input: string): Promise<BandData[]> {
    const result = await BandDatabase.connection(BandDatabase.TABLE_NAME)
      .select('*')
      .where('name', 'like', `%${input}%`)
      .orWhere({ id: input })

    return result
  }
}