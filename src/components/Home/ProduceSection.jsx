import { Fragment } from "react";
import ProduceDefault from "../../features/Home/Produce/ProduceDefault";
import ProduceMobile from "../../features/Home/Produce/ProduceMobile";
import useResizer from "../../hooks/useResizer";

export default function ProduceSection() {
  const { size: mobile } = useResizer(768);

  return (
    <Fragment>{!mobile ? <ProduceDefault /> : <ProduceMobile />}</Fragment>
  );
}
