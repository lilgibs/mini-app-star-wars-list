import { useNavigate } from 'react-router-dom'

export default function useHomeViewModel() {
  const navigate = useNavigate()
  return {
    navigate
  }
}
