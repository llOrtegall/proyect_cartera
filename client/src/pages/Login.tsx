import { UserIcon, LockIcon } from '../components/icons'
import { Input, Button, Label } from '../components/ui'
import { useLogin } from '../hooks/useLogin'
import { toast, Toaster } from 'sonner'

function LoginPage (): JSX.Element {
  const { user, setUser, password, setPassword, errorString, handleSubmit } = useLogin()

  return (
    <section className="w-screen h-screen flex bg-gradient-to-t from-punch-200 to-gray-100">
      <figure className='w-full'>
        <img src="logo.webp" alt="logo para cartera" className='h-full' />
      </figure>

      <section className='w-full grid place-content-center'>
        <form className='min-w-96 flex flex-col gap-8' onSubmit={handleSubmit}>
          <figure className='flex items-center justify-center'>
            <img src="/gane.webp" alt="logo de gane" className='w-[220px] ' />
          </figure>
          <article className='flex flex-col gap-1 text-md lg:text-lg 2xl:text-2xl'>
            <Label>Usuario: </Label>
            <div className='flex items-center gap-2 w-full justify-around px-2'>
              <UserIcon />
              <Input name='username' type='text' placeholder='CP1118342523' required
                autoComplete='username' value={user}
                onChange={(ev) => { setUser(ev.target.value) }} />
            </div>
          </article>

          <article className='flex flex-col gap-1 text-md lg:text-lg 2xl:text-2xl'>
            <Label>Contraseña:</Label>
            <div className='flex items-center gap-2 w-full justify-around px-2'>
              <LockIcon />
              <Input name='contraseña' type='password' placeholder='***********' required
                autoComplete='contraseña' value={password}
                onChange={(ev) => { setPassword(ev.target.value) }} />
            </div>
          </article>

          <Button>Iniciar Sesión</Button>

        </form >
      </section>

      {errorString && toast.error(errorString)}

      <Toaster />

    </section >
  )
}

export default LoginPage
