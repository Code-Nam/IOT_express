import { changeMesh } from "./sphere.js";

const wss = new WebSocket("ws://172.20.10.3:8080/");

wss.addEventListener("connection", function connection() {
    console.log("connected");
});

wss.addEventListener("error", console.error);

wss.addEventListener("open", function open() {
    wss.send("ready");
});

wss.addEventListener("message", function message(event) {
    const data = event.data;
    changeMesh(data);
});

