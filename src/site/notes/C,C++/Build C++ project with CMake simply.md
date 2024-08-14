---
{"dg-publish":true,"permalink":"/c-c/build-c-project-with-c-make-simply/","metatags":{"og:title":"CMake - Meta Build System","og:description":"Simple introduction to CMake"}}
---


> [!note] Prequisites
> - Install [CMake](https://cmake.org/download/)
> - Install [Visual Studio](https://visualstudio.microsoft.com/) for Windows
> 	- Needed# Microsoft C++ toolset. We can compile and link C/C++ codes with it.
> - Install [Ninja](https://ninja-build.org/)
> - Install [Visual Studio Code](https://code.visualstudio.com/Download)
> 	- Install [C/C++ Extension Pack for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack). We can easily configure/generate CMake project.

# What is CMake?

> CMake is a tool to manage building of source code. Originally, CMake was designed as a generator for various dialects of `Makefile`, today CMake generates modern buildsystems such as `Ninja` as well as project files for IDEs such as Visual Studio and Xcode.

![[diagram-export-2024.-8.-14.-오후-7_10_24.png \| 700px]]

Basically, **CMake** helps generating build script, platform independantly. CMake will generate a build script based on `CMakeLists.txt`, for example `$ cmake -G "Visual Studio 17 2022" -B build` will create Visual Studio 2022 project inside `build/` directory, including all the source code files you made.