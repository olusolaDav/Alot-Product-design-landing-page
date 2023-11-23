"use client";

import { Box } from "@/helpers/constants";

const Wrapper = ({children,  px = { base: "16px", sm: "32px", md: "64px", xl: "120px",  } }) => {
  return (
    <Box as="main"  px={px} maxWidth="100%">
      {children}
    </Box>
  );
};

export default Wrapper;
