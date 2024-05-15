import {
  Button,
  Divider,
  Flex,
  Form,
  InputNumber,
  Select,
  SelectProps,
  Typography,
} from "antd";
import { useState } from "react";
import { Span } from "../config/layoutConfig";

const plans: SelectProps["options"] = [
  { label: "Free Tier", value: "free" },
  { label: "Startup Tier", value: "startup" },
  { label: "Scaleup Tier", value: "scaleup" },
];

const price = {
  free: 0.000025,
  startup: 0.00005,
  scaleup: 0.00015,
};

const discount = 5000;

export const PriceCalculator = () => {
  const [form] = Form.useForm();

  const [estimate, setEstimate] = useState<number>(0);
  const [transitions, setTransitions] = useState<number>(0);

  const handleValuesChange = (_: any, values: any) => {
    form.setFieldsValue(values);
  };

  const handleCalculate = () => {
    const numOfWorkflows = form.getFieldValue("numOfWorkflows");
    const numOfRequests = form.getFieldValue("numOfRequests");
    const numOfStates = form.getFieldValue("numOfStates") + 2;
    const tier = form.getFieldValue("tier");

    const totalStates = numOfWorkflows * numOfStates;
    const totalTransitions = totalStates * numOfRequests * numOfWorkflows;
    setTransitions(totalTransitions);
    setEstimate(
      Math.max(
        (totalTransitions - discount) * price[tier as keyof typeof price],
        0
      )
    );
  };

  return (
    <div>
      <Form
        form={form}
        colon={false}
        labelCol={Span[1]}
        wrapperCol={Span[1]}
        onValuesChange={handleValuesChange}
      >
        <Form.Item label="Choose your pricing plan" name="tier">
          <Select options={plans} />
        </Form.Item>
        <Form.Item
          name="numOfWorkflows"
          label="How many workflows are your team planning to use in a month?"
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="numOfStates"
          label="How many states are in a workflow in average (Excluding start and end state)?"
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="numOfRequests"
          label="How many requests of a workflow are there in a month in average?"
        >
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleCalculate}>
            Estimate
          </Button>
        </Form.Item>
      </Form>

      <Flex vertical gap={8}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          Quote
        </Typography.Title>

        <Typography.Text className="flex justify-between">
          Estimated total transitions used per month:{" "}
          <Typography.Text strong>
            {transitions.toLocaleString()}
          </Typography.Text>
        </Typography.Text>
        <Typography.Text className="flex justify-between">
          Free tier usage deduction per month:{" "}
          <Typography.Text strong>-{discount.toLocaleString()}</Typography.Text>
        </Typography.Text>
        <Typography.Text className="flex justify-between">
          Price per unit:{" "}
          <Typography.Text strong>
            ${price[form.getFieldValue("tier") as keyof typeof price] || 0}
          </Typography.Text>
        </Typography.Text>

        <Divider style={{ margin: 0 }} />
        <Typography.Text className="flex justify-between">
          Your estimate per month:{" "}
          <Typography.Text strong>${estimate.toFixed(2)}</Typography.Text>
        </Typography.Text>
      </Flex>
    </div>
  );
};
