import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  console.log("Development mode:", process.env.VITE_DEV_SERVER);

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.VITE_DEV_SERVER === "true") {
    console.log("Loading development URL");
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  } else {
    console.log("Loading production URL");
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
