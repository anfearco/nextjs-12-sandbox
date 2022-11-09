import React, { ReactNode } from "react"
import Head from "next/head"
import { Container, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = "anfear.co | nextjs12 sandbox"
}: LayoutProps) => {
  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Next.js 12 fun!" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main>
        <Container my={10} centerContent>
          {children}
        </Container>
      </main>

      {/* Footer */}
      <Flex direction="column" align="center" justify="center" py={10}>
        <Text fontSize={10}>
          Copyright © {new Date().getFullYear()} anfear.co | made with a 💚 by
          me
        </Text>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </Flex>
    </>
  )
}

export default Layout