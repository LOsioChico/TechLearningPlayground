# Tech Learning Playground 🚀

This is a monorepo project that contains multiple subprojects. The subfolders in `projects` will be initialized with various tools such as Next.js, tRPC, Prisma, etc. 🛠️

## Project Structure 📁

### Global Configuration Files ⚙️

- `.eslintignore`: Specifies the files and directories to ignore when running ESLint. 🚫
- `.eslintrc.json`: Configuration file for ESLint. ⚙️
- `.prettierignore`: Specifies the files and directories to ignore when running Prettier. 🧹
- `.prettierrc`: Configuration file for Prettier. 🖌️
- `.gitignore`: Specifies the files and directories to ignore when committing to Git. 🙈
- `package.json`: Configuration file for npm. 📦

### VS Code Configuration Files ⚙️

- `.vscode/settings.json`: Configuration file for VS Code's settings. ⚙️
- `.vscode/extensions.json`: Configuration file for VS Code's extensions. ⚙️

### GitHub Actions 🚀

- `.github/workflows`: Configuration file for GitHub Actions. 🤖

### Subprojects 📂

- `projects/next-app/*`: Directory for initializing Next.js app with various tools like tRPC, Prisma, etc. 🛠️
- `projects/next-pages/*`: Directory for creating Next.js pages with various tools like tRPC, Prisma, etc. 🛠️

### Documentation 📖

- `README.md`: Documentation for the project. ℹ️

## Initialization 🚀

To initialize a subproject, navigate to the corresponding directory in the `projects` folder and use the appropriate tool, such as `create-next-app` for initializing a Next.js app. 🛠️🏗️

- When you create a new project, I recommend using the `yarn create next-app` or `yarn create t3-app` command to initialize a Next.js. 🛠️🏗️
<!-- Configure Eslint -->
- After initializing the project, you need to configurate ESLint adding on the root folder the `.eslintrc.cjs` file with the following content:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

- Then, your need to add to the tsconfig.json file the following content:

```json
{
  // ...
  "include": [
    // ...,
    ".eslintrc.cjs"
  ]
  // ...
}
```

# Author

<!-- 👤 **Luis Osio Chico** -->
