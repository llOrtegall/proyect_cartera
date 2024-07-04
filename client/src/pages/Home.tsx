import { HeaderCompCartera } from '../components/HeaderCompCartera'
import { TableDatos } from '../components/TableDatos'
import { useCartera } from '../hooks/useCartera'

export const Detallado = () => {
  const { filterVinculado, handleChange, setAbs, setEmpresa, vinculado, handleClick } = useCartera()

  return (
    filterVinculado && (
      <section className='relative px-1'>
        <HeaderCompCartera data={filterVinculado} funFilter={handleChange} funEmpresa={setEmpresa} funABS={setAbs} vin={vinculado} />
        <TableDatos data={filterVinculado} funClick={handleClick}/>
      </section>
    )
  )
}
