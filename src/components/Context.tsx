import React, { ReactNode, useState } from 'react'

/**
 * Type definitions.
 */
type Props = {
  children: ReactNode
}

type Context = {
  hits: number
  setHits: (error: number) => void
  errors: number
  setErrors: (hit: number) => void
}

/**
 * Context.
 */
export const ScoreContext = React.createContext<Context>({
  hits: 0,
  errors: 0,
  setHits: () => {},
  setErrors: () => {}
})

/**
 * Component.
 */
export function GeneratorContext({ children }: Props) {
  /**
   * States.
   */
  const [hits, setHitsValue] = useState(0)
  const [errors, setErrorsValue] = useState(0)

  /**
   * Component functions.
   */
  const setErrors = (error: number) => setErrorsValue(error)

  const setHits = (hit: number) => setHitsValue(hit)

  return (
    <ScoreContext.Provider
      value={{
        hits,
        setHits,
        errors,
        setErrors
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}
