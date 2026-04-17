type Props = {
  html: string;
};

/**
 * Démotion des éventuels <h1> présents dans le contenu WordPress
 * vers des <h2>, pour garantir un seul H1 par page (celui du hero).
 */
function demoteH1(html: string): string {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, "<h2$1>")
    .replace(/<\/h1>/gi, "</h2>");
}

/**
 * Rendu du contenu HTML provenant de WordPress.
 * Utilise la classe .wp-content pour le style prose.
 */
export default function GuideContent({ html }: Props) {
  const safeHtml = demoteH1(html);
  return (
    <div
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}
