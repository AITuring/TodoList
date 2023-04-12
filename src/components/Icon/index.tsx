import { createFromIconfontCN } from "@ant-design/icons";

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_1733772_lbmmkx86e6.js",
});

type Props = {
  name: string;
};

const Icon: React.FC<Props> = (props) => {
  return <MyIcon type={`vision-${props.name}`} />;
};

export default Icon;
