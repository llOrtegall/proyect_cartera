import { Navigate, Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

interface ProtectedRouteProps {
  redirectTo?: string
  isAllowed: boolean
}

export const Root = ({ isAllowed, redirectTo = '/' }: ProtectedRouteProps) => {
  if (isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      <section className='fixed top-0 z-50 w-full bg-punch-400 dark:bg-dark-tremor-brand-muted h-14'>
        <NavBar />
      </section>
      <section className='h-[93vh] xl:h-[92vh] overflow-auto mt-14'>
        <Outlet />
      </section>
    </>
  )
}
