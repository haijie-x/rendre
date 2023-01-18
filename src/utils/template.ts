const getTemplateHtml = (htmlBody: string) => `<!DOCTYPE html>
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
<script type="module" src="index.umd.js"></script>
`;

export { getTemplateHtml };
