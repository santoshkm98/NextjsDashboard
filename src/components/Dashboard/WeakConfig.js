import React from 'react'
import TicketsWrapper from '../Common/TicketsWrapper'
import { weakConfigurations } from '@/constants'

const WeakConfig = () => {
  return (
    <>
    <TicketsWrapper title="Weak Configurations" tickets={weakConfigurations}/>
    </>
  )
}

export default WeakConfig