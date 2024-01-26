import { useEffect } from 'react'
import { sharingInformationService } from "services"

const Pageone = () => {
  const suscription$ = sharingInformationService.getSubject()
  useEffect(() => {
    suscription$.subscribe((data: any) => {
      console.log(data)
    })
  }, [])

  return (
    <div>Pageone</div>
  )
}

export default Pageone