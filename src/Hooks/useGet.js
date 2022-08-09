import { useEffect, useState } from 'react'

import axios from 'axios'

const URLBASE = 'https://strapiecommerce-production-2d55.up.railway.app/api/'

const useGet = (url) => {
  const [data, setData] = useState()
  const [isloading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [meta, setMeta] = useState()
  const [title, setTitle] = useState('')
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(3000)
  const [stock, setStock] = useState('')

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        `${URLBASE}${url}&pagination[page]=${page}&pagination[pageSize]=3&filters[title][$containsi]=${title}&filters[$and][0][price][$gte]=${priceMin}&filters[$and][0][price][$lte]=${priceMax}${stock}`
      )
      setData(response.data)
      setIsLoading(false)
      setMeta(response.data.meta.pagination)
    }
    getInfo()
  }, [page, title, priceMin, priceMax, stock])
  return {
    data,
    isloading,
    page,
    setPage,
    meta,
    title,
    setTitle,
    setPriceMax,
    setPriceMin,
    setStock,
  }
}
export { useGet }
