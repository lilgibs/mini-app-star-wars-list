import { api } from "@api/_api";


export class PeopleApiRepository {

  async getData() {
    try {
      const { data } = await api.get(`people`)
      console.log(data)
    } catch (error) {
      throw error
    }
  }
}