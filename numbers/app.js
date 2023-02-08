let baseURL = "http://numbersapi.com";
let number = 5;
const numbers = [7, 11, 22];

async function part1() {
  let data = await $.getJSON(`${baseURL}/${number}?json`);
  console.log(data);
}
part1();

async function part2() {
  let data = await $.getJSON(`${baseURL}/${numbers}?json`);
  console.log(data);
}
part2();

async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${number}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();