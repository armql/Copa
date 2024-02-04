import { Fragment } from "react";
import ArticleDefault from "../features/Home/Article/ArticleDefault";
import ArticleMobile from "../features/Home/Article/ArticleMobile";
import useResizer from "../hooks/useResizer";

export default function ArticleSection() {
  const { size: mobile } = useResizer(768);

  return (
    <Fragment>{!mobile ? <ArticleDefault /> : <ArticleMobile />}</Fragment>
  );
}
