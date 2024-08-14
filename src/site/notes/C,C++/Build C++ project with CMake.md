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

![Pasted image 20240814193920.png|700](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814193920.png)

Basically, **CMake** helps generating build script, platform independantly. CMake will generate a build script based on `CMakeLists.txt`, for example `$ cmake -G "Visual Studio 17 2022" -B build` will create Visual Studio 2022 project inside `build/` directory, including all the source code files you made.

# VS Code + CMake + MSVC

>[!note] Make sure you have all the prequisites mentioned above.

## 1. Open Developer Powershell for VS

![Pasted image 20240814192154.png|300](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814192154.png)
![Pasted image 20240814192357.png|300](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814192357.png)


First, create an empty directory and `cd` into that directory through `Developer Powershell for VS 2022`.

Then type `code .` to open Visual Studio Code from that directory. This should work if you have installed VS Code properly. We need to open VS Code from VS Developer shell because we are going to use Microsoft C++ toolset for CMake's generator environment. (Specifically, we are going to use `cl` for compiler, `Ninja` for build system)

## 1.5 Configure CMake Extension

![Pasted image 20240814200545.png|500](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814200545.png)

In VS Code settings, search `generator` and use `Ninja` for `Cmake:Generator`. We are going to generate Ninja build script for our C++ project. You can use other build systems if you want. 

> [List of cmake-generators](https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html)

## 2. CMakeLists.txt and CMake configuration

Create a new file named `CMakeLists.txt` in current folder's root. Then enter the following two lines.

```cmake
cmake_minimum_required(VERSION 3.30)
project("My First Project")
```

`cmake_minimum_required(...)` sets the minimum required version of cmake for a project. `project()` gives a name for the project.

![Pasted image 20240814193126.png|300](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814193126.png)

After creating `CMakeLists.txt`, check the sidebar. If you don't see CMake extension icon, please close VS Code and reopen it. (Don't forget to reopen VS Code inside VS Developer Powershell!)

![Pasted image 20240814193332.png|300](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814193332.png)
![Pasted image 20240814193309.png|600](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814193309.png)

Clicking ✏ Icon next to `Configure - [No Kit Selected]` will show list of tookits in your pc. For me, I have `gcc, clang, cl`. We are going to choose `Visual Studio Community 2022 Release - amd64`. This one is for `from: x64 PC - compile for: x64 PC`.

![Pasted image 20240814193731.png|700](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814193731.png)

Configuration log will appear at Output window. By default, build scripts will be generated in `build/` directory. You can configure this in VS Code's CMake extension setting.

## 3. Our `main.cpp`

```cpp
// main.cpp
#include <iostream>

int main()
{
	std::cout << "Hello World!" << std::endl;
}
```

Now we can write our source code. Then we need to add `main.cpp` to our CMake project. Append a following line into your `CMakeLists.txt`

```cmake
// CMakeLists.txt
cmake_minimum_required(VERSION 3.30)
project("My First Project")

add_executable(main main.cpp)
```

`add_executable(<executable_name> source_codes ...)` adds executable to the project using specified source codes, this case `main.cpp`. Therefore our binary output file will be named `main.exe`.

When you hit save, VS Code will automatically re-configure the CMake project.

## 4. 🚀 Let's build!

![Pasted image 20240814201525.png|400](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814201525.png)
Then you can either launch or build by pressing those buttons in CMake sidebar.

![Pasted image 20240814201612.png|400](/img/user/000%20Internal/Attachments/Pasted%20image%2020240814201612.png)
There you go! You have successfully made CMake project!

>[!tip] Using commandline for building
>```console
>$ cmake --build build 
>```
>If you type the command above from project's root, you can build the project.