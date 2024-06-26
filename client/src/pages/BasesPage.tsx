import { Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { formatPesoColombia } from '../utils/funtions'
import { Input, Label } from '../components/ui'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { RiLockLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { BasesI } from '../types/Bases'
import { HOST } from '../App'
import axios from 'axios'

export const BasesPage = () => {
  const [data, setData] = useState<BasesI[]>([])
  const { user } = useAuth()
  const navigate = useNavigate()

  const [vinculado, setVinculado] = useState<string>('')

  useEffect(() => {
    axios.get(`${HOST}/getAllBases`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [])

  const handleClick = (id: string) => {
    return () => navigate(`/baseDetalle/${id}`)
  }

  const handleCreateBase = () => {
    return navigate('/asignarNuevaBase')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVinculado(e.target.value)
  }

  const filterVinculado = (data: BasesI[]) => {
    if (!vinculado) return data
    return data.filter(item => item.VINCULADO.toLowerCase().includes(vinculado.toLowerCase()))
  }

  const filteredData = filterVinculado(data)

  return (
    <section className=''>
      <section className='flex justify-around py-2 absolute w-full top-14'>
        <div className='flex items-center gap-2 w-96'>
          <Label>Vinculado: </Label>
          <Input type="text" placeholder="Buscar por cédula" onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md" value={vinculado} />
        </div>
        {
          user.rol === 'Administrador'
            ? <Button color='red' onClick={handleCreateBase}>Asignar Nueva Base</Button>
            : <Button variant="secondary" color='red' size="sm" icon={RiLockLine}></Button>
        }
      </section>
        <Table className='mt-14 xl:max-h-[82vh] 3xl:max-h-[85vh]'>
          <TableHead>
            <TableRow className='border-b-2 border-punch-300 sticky top-0 bg-punch-200'>
              <TableHeaderCell className='text-center'>#</TableHeaderCell>
              <TableHeaderCell className='text-center'>Nombres</TableHeaderCell>
              <TableHeaderCell className='text-center'>N° Cedula</TableHeaderCell>
              <TableHeaderCell className='text-center'>Base Asignada</TableHeaderCell>
              <TableHeaderCell className='text-center'>Opciones</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={item.VINCULADO}>
                <TableCell className='text-center'>{index + 1}</TableCell>
                <TableCell >{item.Seller.NOMBRES}</TableCell>
                <TableCell className='text-center'>
                  {item.VINCULADO}
                </TableCell>
                <TableCell className='text-center'>
                  {formatPesoColombia(item.BASE)}
                </TableCell>
                <TableCell className='text-center'>
                  {
                    user.rol === 'Administrador'
                      ? <Button variant="secondary" color='yellow' size="sm" onClick={handleClick(item.VINCULADO)}>Actualizar</Button>
                      : <Button variant="secondary" color='red' size="sm" icon={RiLockLine}></Button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </section>
  )
}
