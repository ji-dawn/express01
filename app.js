// require() : 모듈 호출 함수
const express = require("express");
// express()를 사용할 수 있는 객체가 됨
const app = express();

const PORT = 3000;

// app에 view engine을 ejs로 사용
app.set("view engine", "ejs");
// views 폴더에 ejs 파일들을 모아둘 것
app.set("/views", "views");
// static 이라는 경로를 사용할 것임
app.use("/static", express.static(__dirname + "/static"));

// request : 클라이언트가 서버에 보내는 요청
// response : 서버가 클라이언트에게 보내는 응답
// send() : 응답 함수로 간단한 응답만 가능. 페이지 렌더링은 불가.
app.get("/", function (request, response) {
  response.render("test");
  // response.send("hello express, this is response");
  // response.send("<h1>안녕하세요 from response.send()</h1>");
});

app.get("/login", (req, res) => {
  res.redner("login");
});

app.get("/login/register", (req, res) => {
  res.render("register");
});

app.listen(PORT, () => {
  console.log(PORT + " is open");
});
