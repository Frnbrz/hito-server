import { FallBackComponent } from '@/components/FallBackComponent'
import { TestComponent } from '@/components/Test'
import { ErrorBoundary } from '@/utilities'
import { useEffect, useState } from 'react'

function Test() {

  const [name, setName] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setName('Error disappear')
    }
      , 2000)

  }, [])




  return (
    <ErrorBoundary fallbackComponent={<FallBackComponent />}
      resetCondition={name}>
      <div className="container">

        <h2>Test Page</h2>
        <TestComponent name={name} />
      </div>
    </ErrorBoundary>
  )
}
export default Test
