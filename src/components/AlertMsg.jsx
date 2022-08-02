import { Alert } from "@chakra-ui/react";
import React from "react";

const AlertMsg = ({ msg, setMsg }) => {
  React.useEffect(() => {
    if (msg && msg.length) {
      setTimeout(() => setMsg(''), 3000);
    }
  }, [msg]);

  if (!msg) return null;

  return <Alert alignItems='center' justifyContent='center' bg={'#AB47BC'}
    borderRadius={8} AlertShadow="lg" position={'fixed'} top={'89.64vh'} left={'0'} //width={'90vw'}
    textAlign='center' status="error">
    {msg}
  </Alert>;
};

export default AlertMsg;