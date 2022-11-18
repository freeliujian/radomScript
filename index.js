#!/usr/bin/env node

const argv = require('yargs-parser')(process.argv.slice(2))

function translateList(onLeaveColleagues) {
  let colleagues = [
    "文旺",
    "张一行",
    "张基琳",
    "刘坚",
    "李浩",
    "闫磊刚",
    "王海飞",
  ];

  if (!!onLeaveColleagues && onLeaveColleagues.length !== 0 && onLeaveColleagues.length < 4) {
    colleagues = colleagues.filter((name) => !onLeaveColleagues.includes(name));
  }

  const arr = JSON.parse(JSON.stringify(colleagues));

  const randomArray = [];

  colleagues.forEach(() => {
    let index = Math.floor(Math.random() * arr.length);

    randomArray.push(arr[index]);

    arr.splice(index, 1);
  });
  
  let str = "";
  str += "-----------------------------\n";
  str += new Date().toLocaleDateString();
  str +="翻译者： 被翻译者\n";

  randomArray.forEach((item, i) =>
    str +=`${item}： ${randomArray[i + 1] || randomArray[0]}\n`
  );
  str += "-----------------------------";
  console.log(str);
}

translateList(argv.l);
