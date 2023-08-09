import { api } from '@/lib/axios'

export async function fetchDataProduct(id: string) {
  let data
  try {
    await api
      .get(`/pr/products/${id}`)
      .then((response) => {
        data = response.data
      })
      .catch((err) => {
        console.log(err)
        data = {
          id: 'null',
          version: 'v.AA/AA',
          productName: 'Não Encontrado',
          productLine: 'Não Encontrado',
          productImage: '',
          composition: '',
          Stamps: [],
          Instructions: [],
        }
      })
    return data
  } catch (err) {
    return {
      id: 'null',
      version: 'v.AA/AA',
      productName: 'Não Encontrado',
      productLine: 'Não Encontrado',
      productImage: '',
      composition: '',
      Stamps: [],
      Instructions: [],
    }
  }
}
