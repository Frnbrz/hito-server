import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/'
const noteUrl = baseUrl + 'posts/'

export const getNotes = () => {
  return axios.get(noteUrl)
}

export const getNotesError = () => {
  return axios.get(noteUrl + 'error')
}

export const getNote = (noteId: number) => {
  return axios.get(noteUrl + noteId)
}
