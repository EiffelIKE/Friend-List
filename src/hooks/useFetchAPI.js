import axios from 'axios'
import { setUserList } from '../store/slices/user/userSlice'

export const useFetchAPI = (url) => (dispatch) => {
  axios.get(url).then(
    (response) => {
      dispatch(setUserList(response.data.data))
    }
  ).catch((error) => alert(error))
}
