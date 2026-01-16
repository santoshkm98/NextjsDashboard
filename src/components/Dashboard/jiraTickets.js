import React from 'react'
import TicketsWrapper from '../Common/TicketsWrapper'
import { ticketLists } from '@/constants'

const Tickets = () => {
  return (
    <>
<TicketsWrapper title = 'Jira Tickets' tickets = {ticketLists}/>
</>
  )
}

export default Tickets