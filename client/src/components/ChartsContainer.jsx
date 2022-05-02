import React from 'react'

import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useAppContext } from '../contexts/appContext'

const ChartsContainer = () => {
  const { monthlyApplications: data } = useAppContext()
  return (
    <>
      <h4>Monthly Applications</h4>
      <BarChart data={data} />
      <AreaChart data={data} />
    </>
  )
}

export default ChartsContainer