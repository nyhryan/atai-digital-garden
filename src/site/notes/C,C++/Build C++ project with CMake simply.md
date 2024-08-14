---
{"dg-publish":true,"permalink":"/c-c/build-c-project-with-c-make-simply/","metatags":{"og:title":"CMake - Meta Build System","og:description":"Simple introduction to CMake"}}
---


> [!note] Prequisites
> - Install [CMake](https://cmake.org/download/)
> - Install [Visual Studio](https://visualstudio.microsoft.com/) for Windows
> 	- It will install `cl.exe` compiler. We can compile C/C++ codes with it.
> - Install [Visual Studio Code](https://code.visualstudio.com/Download)
> 	- Install [C/C++ Extension Pack for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack). We can easily configure/generate CMake project.

# What is CMake?

> CMake is a tool to manage building of source code. Originally, CMake was designed as a generator for various dialects of `Makefile`, today CMake generates modern buildsystems such as `Ninja` as well as project files for IDEs such as Visual Studio and Xcode.

Basically, CMake helps generating build script, platform independantly.

```md
CMakeLists.txt -> [CMake] -> [Visual Studio 2022 Project]
					   or -> [Ninja build system script]
					   or -> [GNU Makefile]
					   and so on...
```