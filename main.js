console.log("siemanko 👋🏿");
const name = "Łukasz";
const age = 29;
console.log(name);
console.log(age);
console.log(`${name}
${age}`);
console.log(`Nazywam się ${name} 
i mam ${age} lat`);

console.log("Nazywam się " + name + " i mam " + age + " lat");

const about = document.querySelector(".about__paragraph--js");
console.log(about.innerHTML);

about.innerHTML = `<strong>Nazywam się</strong> ${name} i mam ${age} lat`;

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
console.log(paragraphs[3]);
