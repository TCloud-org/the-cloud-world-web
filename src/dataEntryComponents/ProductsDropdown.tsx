import { Dropdown, Flex, Typography } from "antd";
import { ProductMenu } from "../navigationComponents/ProductMenu";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

export const ProductsDropdown = (props: { isFlipColor?: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dropdown
      placement="bottom"
      open={open}
      menu={{ items: [] }}
      onOpenChange={(value) => setOpen(value)}
      dropdownRender={() => <ProductMenu onOpen={setOpen} />}
    >
      <Flex
        align="center"
        gap={6}
        style={{ cursor: "pointer" }}
        className="rotate-trigger"
      >
        <Typography.Text
          className="link"
          style={{ color: !props.isFlipColor ? undefined : "white" }}
        >
          Products
        </Typography.Text>
        <DownOutlined
          style={{
            fontSize: "8px",
            color: !props.isFlipColor ? undefined : "white",
          }}
          className="link rotate"
        />
      </Flex>
    </Dropdown>
  );
};