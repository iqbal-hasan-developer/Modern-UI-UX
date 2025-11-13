import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Client = () => (
  <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-48 min-w-30`}>
            <img src={client.logo} alt="client logo" className='sm:w-48 w-[100px] object-contain hover:scale-105 transition-all duration-200' />
          </div>
        ))}
      </div>
  </section>
)

export default Client