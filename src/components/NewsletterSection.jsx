import { Fragment } from "react";
import useResizer from "../hooks/useResizer";
import NewsletterDefault from "../features/Home/Newsletter/NewsletterDefault";
import NewsletterMobile from "../features/Home/Newsletter/NewsletterMobile";

export default function NewsletterSection() {
  const { size: mobile } = useResizer(1280);
  return (
    <Fragment>
      {!mobile ? <NewsletterDefault /> : <NewsletterMobile />}
    </Fragment>
  );
}
