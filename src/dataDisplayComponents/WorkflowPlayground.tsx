import { Flex } from "antd";
import { BubbleWrap } from "../layoutComponents/BubbleWrap";
import { DotScreen } from "./DotScreen";
import { WorkflowItem } from "./WorkflowItem";
import LineConnector from "./LineConnector";

const mainSteps = [
  {
    name: "Start",
  },
  {
    id: "runSubWorkflow1",
    name: "RunSubWorkflow1",
  },
  {
    id: "runSubWorkflow2",
    name: "RunSubWorkflow2",
  },
  {
    name: "End",
  },
];

const steps = ["Start", "..."];

const subWorkflows = [1, 2];

export const WorkflowPlayground = (props: {
  bubble?: "left" | "right";
  className?: string;
}) => {
  const { bubble = "left" } = props;

  return (
    <BubbleWrap position={bubble} className={props.className}>
      <DotScreen>
        <Flex gap={32} className="w-full" align="center">
          <DotScreen title="Main" size="small">
            {mainSteps.map((step, i) => (
              <WorkflowItem size="small" step={step} key={i} />
            ))}
          </DotScreen>

          <Flex vertical className="w-full" gap={16}>
            {subWorkflows.map((subId, i) => (
              <div id={`subWorkflow${subId}`} key={`subWorkflow${i + 1}`}>
                <DotScreen title={`Sub-workflow ${subId}`} size="small">
                  {steps.map((step, i) => (
                    <WorkflowItem size="small" step={step} key={i} />
                  ))}
                </DotScreen>
              </div>
            ))}
          </Flex>
        </Flex>
      </DotScreen>

      {mainSteps
        .filter((step) => step.id)
        .map((step, i) => (
          <LineConnector
            key={i}
            start={step.id as string}
            end={`subWorkflow${i + 1}`}
          />
        ))}
    </BubbleWrap>
  );
};
