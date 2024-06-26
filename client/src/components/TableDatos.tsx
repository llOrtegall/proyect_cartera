import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { ArrowDown, ArrowUp, DotsIcon } from './icons/ArrowIcons'
import { formatPesoColombia } from '../utils/funtions'
import { CarteraI } from '../types/cartera'

export const TableDatos = ({ data, funSort, valueOrder }: { data: CarteraI[], funSort: () => void, valueOrder: 'asc' | 'desc' | '' }) => {
  return (
    <Card decoration="top" decorationColor="rose" className='p-2 mt-0.5'>
      <Table className='xl:max-h-[80vh] 3xl:max-h-[82vh]'>
        <TableHead className='border-b-2 border-punch-300 sticky top-0 bg-white dark:bg-dark-tremor-brand-muted'>
          <TableRow className='text-xs'>
            <TableHeaderCell>Empresa</TableHeaderCell>
            <TableHeaderCell>N° Cédula</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Cargo</TableHeaderCell>
            <TableHeaderCell className='text-center'>Base</TableHeaderCell>
            <TableHeaderCell className='flex items-center gap-2 text-xs cursor-pointer hover:text-blue-400' onClick={funSort}>
              <span>Saldo Ant</span>
              { valueOrder === '' ? <ArrowUp /> : valueOrder === 'asc' ? <ArrowDown /> : <DotsIcon />}
            </TableHeaderCell >
            <TableHeaderCell className='text-center'>Débito</TableHeaderCell>
            <TableHeaderCell className='text-center'>Crédito</TableHeaderCell>
            <TableHeaderCell className='text-center'>Nuevo Saldo</TableHeaderCell>
            <TableHeaderCell className='flex items-center gap-2 text-xs cursor-pointer hover:text-blue-400'
              onClick={ev => console.log(ev)}>
              <span>Cartera</span>
            { valueOrder === '' ? <ArrowUp /> : valueOrder === 'asc' ? <ArrowDown /> : <DotsIcon />}
            </TableHeaderCell>
            <TableHeaderCell className='text-center'>Rechazados</TableHeaderCell>
            <TableHeaderCell className='text-center'>Aceptados</TableHeaderCell>
            <TableHeaderCell className='text-center'>Pendiente Conteo</TableHeaderCell>
            <TableHeaderCell className='text-center'>Digitados</TableHeaderCell>
            <TableHeaderCell className='text-center'>Venta Bnet</TableHeaderCell>
            <TableHeaderCell className='text-center'>Cuadre Web</TableHeaderCell>
            <TableHeaderCell className='text-center'>Anulados</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-xs'>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.Empresa}</TableCell>
              <TableCell>{item.Vinculado}</TableCell>
              <TableCell className='text-clip text-[0.7rem]'>{item.Nombres}</TableCell>
              <TableCell>{item.Cargo}</TableCell>
              <TableCell>{formatPesoColombia(item.Base)}</TableCell>
              <TableCell className={`${item.SaldoAnt > 0
                ? 'bg-punch-200 dark:bg-punch-950 font-medium text-gray-800 dark:text-gray-300'
                : 'bg-green-200 dark:bg-green-950 font-medium text-gray-800 dark:text-gray-300'}`}>
                {formatPesoColombia(item.SaldoAnt)}
              </TableCell>
              <TableCell className='text-center'>
                {formatPesoColombia(item.Debito)}
              </TableCell>
              <TableCell className='text-center'>
                {formatPesoColombia(item.Credito)}
              </TableCell>
              <TableCell className='text-center' id='nuevo saldo'>
                {formatPesoColombia(item.SaldoAnt - item.Credito - item.Debito)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300' id='cartera'>
                {formatPesoColombia(item.Cartera)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.Rechazados)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.Aceptados)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.PendientesCont)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.Digitados)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.Vtabnet)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.CuadreWeb)}
              </TableCell>
              <TableCell className='text-center font-semibold text-black dark:text-gray-300'>
                {formatPesoColombia(item.Anulados)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
