const stringify = (object: any) => {
  return JSON.stringify(object);
};

const getTemplateHtml = (htmlBody: string, context: any) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${htmlBody}
    </div>
</body>
</html>
<script>window.context = ${stringify(context)}</script>
<script type="module" src="entry-client.js"></script>
`;
};

export { getTemplateHtml };
