import React from "react";
import {
    Flex,
    Icon,
    Link,
    FlexProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import CustomLink from "./CustomLink";

interface NavItemProps extends FlexProps {
    icon: IconType;
    href?: string;
    children: string | number;
}

export default function NavItem({ icon, href = '/', children, ...rest }: NavItemProps) {
    return (
        <CustomLink
            href={href}
            color='brand.400'
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "brand.300",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </CustomLink>
    );
};