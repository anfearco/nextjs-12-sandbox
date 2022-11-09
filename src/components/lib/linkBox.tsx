import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

type LinkBoxProps = {
  children?: ReactNode
  href: string
}

const LinkBox = ({ children, href }: LinkBoxProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      borderRadius={10}
      p={4}
      my={2}
      mr={2}
      boxShadow="5px 7px 20px rgba(0,0,0,0.1)"
      _hover={{ shadow: "0px 7px 20px rgba(0,0,0,0.2)" }}
    >
      <Link href={href}>{children}</Link>
    </Flex>
  )
}

export default LinkBox
