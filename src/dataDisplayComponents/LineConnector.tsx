import { theme } from "antd";
import { xarrowPropsType } from "react-xarrows";
import Xarrow from "react-xarrows";

export const LineConnector = (props: xarrowPropsType) => {
  const { token } = theme.useToken();
  return (
    <Xarrow
      headShape="circle"
      headSize={4}
      lineColor={token.colorPrimary}
      strokeWidth={2}
      tailSize={4}
      tailShape="circle"
      showTail
      tailColor={token.colorPrimary}
      headColor={token.colorPrimary}
      dashness
      {...props}
    />
  );
};

export default LineConnector;
