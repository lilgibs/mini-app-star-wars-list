import { api } from "@api/_api";


export class PeopleApiRepository {
  async getData() {
    try {
      const { data } = await api.get(`people`)
      console.log(data)
      return data
    } catch (error) {
      throw error
    }
  }
}