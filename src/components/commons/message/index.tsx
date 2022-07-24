import { Button, message } from "antd";
import React from "react";

const success = () => {
  message.success({
    content: "This is a prompt message with custom className and style",
    className: "custom-class",
    style: {
      marginTop: "20vh",
      fontSize: "100px",
    },
  });
};

const App: React.FC = () => <Button onClick={success}>Customized style</Button>;

export default App;
