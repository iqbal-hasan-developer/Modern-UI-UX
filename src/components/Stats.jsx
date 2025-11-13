import { stats } from "../constants"
import styles from "../style"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {inView ? (
              <CountUp
                start={0}
                end={Number(stat.value)}
                duration={2.5}
                separator=","
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                decimals={0}
              />
            ) : (
              `${stat.prefix || ""}0${stat.suffix || ""}`
            )}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats