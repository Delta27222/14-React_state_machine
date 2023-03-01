import { BaseLayouts } from "@/Container/BaseLayout"
import Head from "next/head"

function Layouts({ children }) {
  return(
    <>
      <Head>
        <title> Booking React State Machine</title>
      </Head>
      <div className="w-screen h-screen bg-img-moderno flex flex-col justify-center text-center place-content-center bg-cover bg-center ">
        { children }
      </div>
    </>
  )
}

export default function Home() {
  return (
    <Layouts>
      <BaseLayouts/>
    </Layouts>
  )
}