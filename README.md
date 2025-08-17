# Hello Node.js

Simple native [Node.js](https://nodejs.org/) extension for testing purposes.

## Description

This module is a simple yet comprehensive native Node.js extension designed specifically for testing and educational purposes. It serves as an excellent starting point for developers who want to understand how to create, build, and distribute native Node.js modules.

The core functionality is intentionally minimal - it exports a single function that returns the string "world" - making it perfect for learning the fundamentals of native module development without getting overwhelmed by complex logic. This simplicity allows developers to focus on understanding the build process, native bindings, and module structure.

Built with C++ and leveraging the powerful V8 JavaScript engine APIs, this module demonstrates the seamless integration between JavaScript and native code. It showcases how to expose native functions to the Node.js runtime, handle data conversion between C++ and JavaScript, and properly manage memory in a native extension context.

The project uses [Node-gyp](https://github.com/nodejs/node-gyp), the de facto standard build tool for native Node.js modules, ensuring compatibility across different platforms and Node.js versions. This makes it an ideal reference implementation for developers looking to create their own native extensions.

### Key Features

* **Cross-platform compatibility**: Works seamlessly on Windows, macOS, and Linux
* **Modern C++ standards**: Utilizes contemporary C++ practices and Node.js N-API
* **Educational focus**: Extensively commented code for learning purposes
* **Production-ready structure**: Follows industry best practices for module organization
* **Comprehensive testing**: Includes unit tests to validate functionality
* **CI/CD integration**: Automated builds and testing across multiple environments

### Technical Architecture

The module consists of several key components working together:

- **Native C++ code** (`src/hello.cc`): Contains the core implementation using V8 and Node.js APIs
- **JavaScript wrapper** (`lib/index.js`): Provides a clean interface for the native functionality
- **Build configuration** (`binding.gyp`): Defines compilation settings and dependencies
- **Test suite** (`test/hello.js`): Ensures reliability and correctness of the module

This architecture demonstrates the typical pattern for native Node.js modules, where performance-critical operations are implemented in C++ while maintaining a familiar JavaScript API for end users.

## Usage

```bash
npm install joamag-hello-node
```

```js
const hello = require("joamag-hello-node");
console.log(hello.hello());
```

## License

Hello Node.js is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://github.com/joamag/hello-node/workflows/Main%20Workflow/badge.svg)](https://github.com/joamag/hello-node/actions)
[![npm Status](https://img.shields.io/npm/v/joamag-hello-node.svg)](https://www.npmjs.com/package/joamag-hello-node)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
