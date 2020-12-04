import React from 'react'
import { HabitsProvider } from './src/components/HabitsContext'
// import Layout from './src/components/Layout'

// export function wrapPageElement({ element, props }) {
//   return <Layout {...props}>{element}</Layout>
// }

export function wrapRootElement({ element }) {
  return <HabitsProvider>{element}</HabitsProvider>
}
