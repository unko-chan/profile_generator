const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question('What do you listen to while doing that?', (listen) => {
      rl.question(
        'Which meal is your favourite (eg: dinner, brunch, etc.)',
        (meal) => {
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (eat) => {
              rl.question(
                'Which sport is your absolute favourite?',
                (sport) => {
                  rl.question(
                    'What is your superpower? In a few words, tell us what you are amazing at!',
                    (superpower) => {
                      console.log(
                        `Thank you for your valuable feedback: ${name}! I will now create your personal profile.`
                      );
                      setTimeout(() => {
                        console.log(
                          `Hello! My name is ${name}, and I like to ${activity} while listening to ${listen}. My favourite meal of the day is ${meal}. Specifically, ${eat}. Also!, my favourite sport is ${sport}. Can't forget that! One last thing... ${superpower}.`
                        );
                      }, 3000);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
