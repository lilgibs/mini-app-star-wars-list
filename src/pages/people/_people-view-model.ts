import { api } from '@api/_api'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export interface TPeopleProps {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export default function usePeopleViewModel() {
  const [data, setData] = useState<TPeopleProps>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isSuccess, setIsSuccess] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(true)

  const { register, watch, setValue } = useForm({
    values: {
      page: 1,
      q: "",
    },
  });

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setIsSuccess(false)
      setIsError(false)
      const { data } = await api.get(`people`, {
        params: {
          search: watch(`q`),
          page: watch(`page`)
        }
      })
      setData(data)
      setIsSuccess(true)
    } catch (error) {
      setIsError(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData()
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [watch(`q`), watch(`page`)])

  return {
    data,
    fetchData,
    register, watch, setValue,
    isLoading,
    isSuccess,
    isError,
  }
}