---
title: VScode+GCC配置轻量级C++开发环境
date: 2019-08-05 02:24:31
tags: 
category: 杂记
draft: true
---

今天晚上有空，看了一遍[VSCode](https://code.visualstudio.com/docs/cpp/config-mingw)的文档，配置了轻量级的C++开发环境。以后就能愉快的使用Vscode刷题了。

<!-- more -->
## 准备工具
- VSCcde
- TDM-GCC OR Mingw-w64
- Astyle (Code Format)

## 配置环境

*launch.json*

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "GCC Compile",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": true,
            "MIMode": "gdb",
            "miDebuggerPath": "C:\\TDM-GCC-64\\bin\\gdb.exe",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ],
            "preLaunchTask": "GCC Compile"
        }
    ]
}
```

*tasks.json*

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "shell",
            "label": "GCC Compile",
            "command": "g++",
            "args": [
                "-std=c++17",
                "-g",
                "${file}",
                "-o",
                "${fileDirname}\\${fileBasenameNoExtension}.exe"
            ],
            "options": {
                "cwd": "C:\\TDM-GCC-64\\bin"
            }
        },
    ],
}
```
*c_cpp_properties.json*

```json
{
    "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "compilerPath": "C:\\TDM-GCC-64\\bin\\gcc.exe",
            "cStandard": "c11",
            "cppStandard": "c++17"
        }
    ],
    "version": 4
}
```

*setting.json*

```json
{
    "editor.fontSize": 17,
    "terminal.external.windowsExec": "C:\\Program Files\\Git\\bin\\bash.exe",
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    "C_Cpp.updateChannel": "Insiders",
    "files.autoSave": "afterDelay",
    "[cpp]": {
        "editor.defaultFormatter": "chiehyu.vscode-astyle"
    },
    "C_Cpp.default.cppStandard": "c++17",
    "C_Cpp.default.intelliSenseMode": "gcc-x64",
    "editor.mouseWheelZoom": true, //鼠标放大的
    "astyle.additional_languages": [
        "c",
        "cpp",
    ],
    "astyle.cmd_options": [
        "--style=java", 
        "--indent=tab=2", 
        "--delete-empty-lines",
        "--align-pointer=name",
        "--align-reference=name",
        "--unpad-paren",
        "--keep-one-line-statements",
        "--pad-header",
        "--pad-oper", 
        "--break-blocks",
        "--indent-classes",
        "--indent-switches",
        "--indent-namespaces",
        "--indent-preprocessor",
    ],
    //"astyle.executable": "C:\\AStyle\\bin\\AStyle.exe",
    "astyle.executable": "C:\\Program Files (x86)\\Dev-Cpp\\AStyle\\AStyle.exe",
    "files.encoding": "utf8",
    "editor.formatOnPaste": true,
    "astyle.java.enable": true,
    "editor.fontLigatures": true,
    "editor.formatOnSave": true,
    "workbench.colorTheme": "One Dark Pro",
}
```