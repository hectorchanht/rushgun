import { Box } from "@chakra-ui/react";
import React from "react";

const AlertMsg = ({ msg, setMsg }) => {
  React.useEffect(() => {
    if (msg && msg.length) {
      setTimeout(() => setMsg(''), 3000);
    }
  }, [msg]);

  if (!msg) return null;

  return <Box alignItems='center' justifyContent='center' bg={'#AB47BC'}
    borderRadius={8} boxShadow="lg"
    textAlign='center' status="error">
    {msg}
  </Box>;
};

export default AlertMsg;