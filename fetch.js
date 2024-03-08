
async function fetchQA() {
    try {
        const response = await fetch("https://db.chgk.info/xml")
        .then((response) => response.text())
        .then((text) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, "text/xml");
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
            arrQA.push({question: '', answer: ''});
            arrQA[i].question = questions[i];
            arrQA[i].answer = answers[i];
            console.log(arrQA);
          }
        });
        
        const arrQA = await response.json();
        return arrQA;
    } catch (error) {
        console.error(error);
    }
  }