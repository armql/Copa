import { Fragment } from "react";
import useResizer from "../../hooks/useResizer";
import ProcessDefault from "../../features/Home/Process/ProcessDefault";
import ProcessMobile from "../../features/Home/Process/ProcessMobile";

export default function ProcessSection() {
  const { size: mobile } = useResizer(768);

  return (
    <Fragment>{!mobile ? <ProcessDefault /> : <ProcessMobile />}</Fragment>
  );
}
