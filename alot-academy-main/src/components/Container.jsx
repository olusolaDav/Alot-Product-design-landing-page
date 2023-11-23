"use client";

import { Box } from "@/helpers/constants";


const Conatainer = ({ children, mt= { base: 16, md: 20 } }) => {
  return (
    <Box  mt={mt} maxWidth="100%">
      {children}
    </Box>
  );
};

export default Conatainer;
