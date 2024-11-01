"use strict";const e=require("electron"),t="liteloader-wrapper-template",n={configUpdate(r){e.ipcRenderer.send(`${t}:update`,r)}};e.contextBridge.exposeInMainWorld(t,n);
