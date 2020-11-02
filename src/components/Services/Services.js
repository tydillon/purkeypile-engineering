import React from 'react'
import { PageWrap } from '../_common'
import Colors from '../../config/colors'

const services = [
  {
    service: 'Hydrology/ Hydraulic Bridge Study Services',
    description:
      'We provide Hydrology and Hydraulic studies to determine the most efficient bridge size according to the Dept. of Transportation guidelines and policies.',
  },
  {
    service: 'Bridge Designs Services',
    description:
      'We provide efficient bridge designs for Urban & Rural bridges and provide construction plans, construction specifications, and detailing according to the current AASHTO Specifications. Our experience consists of Prestressed and Post-Tensioned Concrete, Simple and Continuous Steel, Cast-in-Place Reinforced Concrete, and Prefabricated Corrugated and Concrete Shapes over stream crossings and grade crossings, including interchanges.',
  },
  {
    service: 'Retaining Wall Services',
    description:
      'We provide Retaining Wall designs and details. Our experience includes Cast-in-Place Concrete, Mechanically Stabilized Earth, Soil Nail Walls, Sheet Piling, and Secant Walls.',
  },
  {
    service: 'Critical Bridge Inspections & Assessment Services',
    description:
      'We provide bridge assessment reports complete with photo documentation of existing conditions, proposed improvements, and tabulated construction cost estimates along with bridge ratings before and after completion.',
  },
  {
    service: 'Bridge Repair/ Rehabilitations Services',
    description:
      'We provide design plans and construction specifications for bridge repairs and rehabilitation projects.',
  },
  {
    service: '203(k) Consulting Services',
    description:
      'We provide consulting and inspection services for HUD and FHA Mortgage Loans.',
  },
]

const Services = () => {
  return (
    <PageWrap title='Services'>
      <ul>
        {services.map((service) => (
          <li key={service.service} style={styles.li}>
            <strong style={{ color: Colors.ORANGE.mid }}>
              {service.service}:{' '}
            </strong>
            {service.description}
          </li>
        ))}
      </ul>
      <section className='hero is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              "Tim is very skilled in his profession, trustworthy in his work
              ethics and has a very good relationship with those he works with.
              I strongly recommend him for any Bridge/Structural Engineering
              project."
            </h1>
            <h2 className='subtitle'>
              E. Gene McCollom, PE (Retired) ODOT Assistant Bridge Engineer
            </h2>
          </div>
        </div>
      </section>
    </PageWrap>
  )
}

const styles = {
  li: {
    marginBottom: '1rem',
  },
}

export default Services
