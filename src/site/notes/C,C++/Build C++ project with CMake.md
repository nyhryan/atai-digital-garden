---
{"dg-publish":true,"permalink":"/c-c/build-c-project-with-c-make/","metatags":{"og:title":"Build C++ project with CMake","og:description":"Simple CMake tutorial"}}
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

![[diagram-export-2024.-8.-14.-오후-7_10_24.png \| 700]]

Basically, **CMake** helps generating build script, platform independantly. CMake will generate a build script based on `CMakeLists.txt`, for example `$ cmake -G "Visual Studio 17 2022" -B build` will create Visual Studio 2022 project inside `build/` directory, including all the source code files you made.

# Using in Windows 10 Environment

>[!note] Make sure you have all the prequisites mentioned above.

![[Pasted image 20240814192154.png \| 300]]
![[Pasted image 20240814192357.png \| 300]]
First, create an empty directory and `cd` into that directory through `Developer Powershell for VS 2022`.

Then type `code .` to open Visual Studio Code from that directory. This should work if you have installed VS Code properly. We need to open VS Code from VS Developer shell because we are going to use Microsoft C++ toolset for CMake's generator environment.

In VS Code, create a new file named `CMakeLists.txt` in current folder's root. Then enter the following two lines.

```cmake
cmake_minimum_required(VERSION 3.30)
project("My First Project")
```

`cmake_minimum_required(...)` sets the minimum required version of cmake for a project. Second line is giving a name that you want for the project.

![[Pasted image 20240814193126.png \| 300]]

After creating `CMakeLists.txt`, check the sidebar. If you don't see CMake extension icon, please close VS Code and reopen it. (Don't forget to reopen VS Code inside VS Developer Powershell!)

![Pasted image 20240814193332.png|300](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814193332.png)
![[Pasted image 20240814193309.png \| 600]]

Clicking `Configure - [No Kit Selected]` will show list of tookits in your pc. For me, I have `gcc, clang, cl`