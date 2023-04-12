import { createFromIconfontCN } from "@ant-design/icons";

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_1733772_coqpwqn2s3m.js",
});

type Props = {
  name: string;
  onClick?: () => void;
};

const Icon: React.FC<Props> = (props) => {
  return <MyIcon type={`vision-${props.name}`} />;
};

export default Icon;
