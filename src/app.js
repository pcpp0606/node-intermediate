import express from "express";

const app = express();

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});