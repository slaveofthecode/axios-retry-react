import React from 'react'
import { ExampleUseMemo } from '../components/ExampleUseMemo'
import { ExampleUseCallback } from '../components/ExampleUseCallback'

export const Home = () => {
  return (
    <div className="d-flex gap-3">
          <div className="card w-50 p-3 mb-5 bg-body-tertiary rounded bg-dark">
            <div className="card-body">
              <ExampleUseCallback />
            </div>
          </div>
          <div className="card w-50 p-3 mb-5 bg-body-tertiary rounded bg-dark" >
            <div className="card-body">
              <ExampleUseMemo />
            </div>
          </div>
        </div>
  )
}
