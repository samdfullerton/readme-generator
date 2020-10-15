// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  
  ## How to use the app
  ${data.usage}

  ## User contributions
  ${data.contributions}

  ## Testing
  ${```bash
  npm test
  ```}
`;
}

module.exports = generateMarkdown;
