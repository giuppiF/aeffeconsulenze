export const SEO = () => {
  const siteTitle = "AeFFe consulenze";
  const image = "/small_logo.png";
  const description =
    "Offriamo una soluzione completa per la gestione amministrativa del lavoro domestico.";

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="type" property="og:type" content="site" />
      <meta name="title" property="og:title" content={siteTitle} />
      <meta name="image" property="og:image" content={image} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="AeFFEe consulenze" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
    </>
  );
};
