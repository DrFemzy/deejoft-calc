import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import InputField from '@/components/InputField'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [firstValue, setFirstValue] = useState("")
  const [secondValue, setSecondValue] = useState("")

  const multiply = () => {
    return firstValue * secondValue
  }
  return (
    <>
      <Head>
        <title>DeeJoft</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/deejoft-favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            DeeJoft Calculator
          </p>
          <div>
            <a
              href="https://deejoft.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/img/deejoft-favicon.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={24}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.calculatorContainer}>
            <div className={styles.inputContainer}>
              <InputField label={"The First Digit"} value={firstValue} setValue={(e)=>setFirstValue(e.target.value)} />
              <div>

              ✖

              </div>
              <InputField label={"The Second Digit"} value={secondValue} setValue={(e)=>setSecondValue(e.target.value)} />

            </div>
            <div className={styles.resultContainer}>
              <h3>{multiply(firstValue, secondValue)}</h3>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deejoft <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Information Technology
            </p>
          </a>


          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              By, Emmanuel<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Dev Femzy
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
