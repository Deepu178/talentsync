import ListItem from "./ListItem";

type DefaultProps = {
  title: string;
  className?: string;
  content: string[];
};

type ListProps = (
  | {
      listSize: "sm";
    }
  | ({
      listSize?: "lg";
    } & {
      listTitle: string;
    })
) &
  DefaultProps;

type Props =
  | ({
      list?: false;
    } & DefaultProps)
  | ({
      list?: true;
    } & ListProps);

const ProjectSection = (props: Props) => {
  const { title, content } = props;

  return (
    <div className={props?.className ?? ""}>
      <h1 className="heading-project">{title}</h1>
      <div className="space-y-5">
        {props.list && props.listSize !== "sm" && <p>{props.listTitle}</p>}
        {props.list ? (
          <ul
            className={`grid gap-2 w-full ${
              props.listSize === "sm"
                ? "grid-cols-fluid-sm max-w-lg"
                : "grid-cols-fluid-md md:grid-cols-fluid"
            }`}
          >
            {content.map((item) => (
              <ListItem key={item.slice(0, 5)}>{item}</ListItem>
            ))}
          </ul>
        ) : (
          <>
            {content?.map((para) => (
              <p key={para.slice(0, 5)} className="leading-relaxed">
                {para}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
