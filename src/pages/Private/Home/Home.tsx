import { fetchNotes } from "@/redux/states/notes"
import { getNotes } from "@/services"
import { useEffect } from "react"
import { useDispatch } from "react-redux"


function Home() {
  const dispatch = useDispatch()

  const getNotesFromApi = async () => {
    try {
      const result = await getNotes()
      dispatch(fetchNotes(result))
    } catch (error) { }
  }
  useEffect(() => {
    getNotesFromApi()
  }, [])


  return (
    <main>
      <h1 className="text-white">Home</h1>
    </main>
  )
}

export default Home