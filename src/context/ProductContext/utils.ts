import { api } from '@/lib/axios'

export async function fetchDataProduct(id: string) {
  let data
  try {
    await api.get(`/pr/products/${id}`).then((response) => {
      data = response.data

      console.log(response)
    })
    return data
  } catch (err) {
    console.log(err)

    return null
  }
}
