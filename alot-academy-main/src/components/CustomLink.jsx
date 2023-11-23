"use client";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

function CustomLink(props) {
  return (
    <Link as={NextLink} href={props.href} {...props}>
      {props.children}
    </Link>
  );
}

export default CustomLink;
