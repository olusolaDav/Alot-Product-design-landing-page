"use client"

import React, { useState, useEffect } from "react"
import { IconButton } from "@chakra-ui/react"
import { ArrowUpIcon } from "@chakra-ui/icons"


function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <IconButton
      icon={<ArrowUpIcon />}
      color="yellow.500"
      bg="rgba(255, 255, 255, 0.7)"
      position="fixed"
      bottom="20px"
      borderRadius={0}
      borderColor="rgba(255, 255, 255, 0.7)"
      border="2px"
      size={"md"}
      _hover={{ bg: "rgb(255, 255, 255)", borderColor: "primary" }}
      right="20px"
      display={isVisible ? "block" : "none"}
      onClick={scrollToTop}
    />
  )
}

export default ScrollToTopButton
