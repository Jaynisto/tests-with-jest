# Tests With Jest
Jest is a popular Javascript testing framework developed and maintained by Facebook,primarly used for
testing Javascript and TypeScript applications.
It is known for its **simplicity**, **speed**, and **ease** of use.

## How does it work?

Well first you must create a **package.json** file:

- `npm init`

Check if the file is install successfully :

- `npm -v`

This command should give you the version of your npm, such as 9.5.1 etc.

If your npm version is outdated, consider upgrading npm using:

- `npm install -g npm`

Now you can generate a **Jest Configuration File** (Optional):

- `npx jest --init`

To check if you have installed Jest successfully check its version :

- `npx jest --version`

If jest give's you problems, install Jest as a Development Dependency:

- `npm install --save-dev jest`

### Test Status

[![Tests](https://github.com/Jaynisto/tests-with-jest/actions/workflows/test.yml/badge.svg)](https://github.com/Jaynisto/tests-with-jest/actions/workflows/test.yml)