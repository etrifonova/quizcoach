
async function myFunction() {
  const myPromise = new Promise((resolve, reject) => {
    // Your asynchronous operation here
    const array = [];
    const data = fetch("https://db.chgk.info/xml")
      .then((response) => response.text())
      .then((text) => {
        parser = new DOMParser();
        doc = parser.parseFromString(text, "text/xml");
        console.log(doc.documentElement);
        const nodesQ = doc.querySelectorAll("Question");
        const nodesA = doc.querySelectorAll("Answer");
        let questions = [];
        for (const nodeQ of nodesQ) {
          const question = nodeQ.innerHTML;
          questions.push(question);
        }
        let answers = [];
        for (const nodeA of nodesA) {
          const answer = nodeA.innerHTML;
          answers.push(answer);
        }
        console.log(questions.length);
        console.log(answers.length);

        for (let i = 0; i < 50; i++) {
          array.push({ question: "", answer: "" });
          array[i].question = questions[i];
          array[i].answer = answers[i];
          console.log(array);
        }
      });
    resolve(array);
  });

  const myVariable = await myPromise;
  console.log(myVariable); // "Promise resolved!"
}

myFunction();

module.exports = myFunction();