import { CheckRounded } from "@mui/icons-material";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { SecondaryButton } from "../dataEntryComponents/SecondaryButton";

export const PricingTier = (props: { data: any }) => {
  const { data } = props;

  const emphasized = data.emphasized;
  const actionHref = "https://stepworkflow.thecloudworlds.com";

  return (
    <div
      className="backdrop-blur-[5px] rounded-3xl p-10 !font-sora w-full gap-12 flex flex-col h-full border"
      style={{
        borderColor: "rgba(131, 104, 242, 0.3)",
        boxShadow: !emphasized
          ? "rgba(164, 143, 255, 0.12) 0px -7px 120px 0px inset"
          : "rgba(163, 143, 255, 0.47) 0px -7px 120px 0px inset",
      }}
    >
      <div className="flex flex-col h-full gap-12">
        <div className="text-center flex flex-col gap-2">
          <div className="text-[32px] font-medium text-white">{data.plan}</div>
          <div className="text-gradient text-base">{data.price}</div>
        </div>

        <div className="flex flex-col gap-12">
          {data.plus && (
            <div className="text-neutral-7 text-base">{data.plus}</div>
          )}

          <div className="flex flex-col gap-2">
            {data.features.map((feature: string, i: number) => (
              <div className="flex gap-[10px]" key={i}>
                <CheckRounded className="text-washed-purple-200" />
                <span className="text-neutral-7 text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {emphasized ? (
          <SecondaryButton href={actionHref}>
            Get started with {data.plan}
          </SecondaryButton>
        ) : (
          <ThemeButton href={actionHref}>
            Get started with {data.plan}
          </ThemeButton>
        )}

        {data.action && (
          <a
            className="text-washed-purple-200 hover:text-washed-purple-400 transition-all duration-300"
            href={data.contact}
          >
            {data.action}
          </a>
        )}
      </div>
    </div>
  );
};
