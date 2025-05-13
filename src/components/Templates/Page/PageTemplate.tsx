import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import styles from "./PageTemplate.module.css";
import { PageQuery } from "./PageQuery";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });


  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{page?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
    </div>
  );
}
