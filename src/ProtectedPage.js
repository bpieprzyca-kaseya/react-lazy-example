import React from 'react'
import AuthStatus from './AuthStatus'

export default function ProtectedPage() {
  return (
  <>
      <AuthStatus />
      <h3>Protected</h3>
  </>
  )
}
