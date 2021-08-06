const string = "Hello my name is Matt and I can't wait to start learning about async!";
let counter = 50;

for (const char of string) {
  i = 0;
  counter += 50;
  
  setTimeout(() => {
    process.stdout.write(char);
    i++
    if (i === string.length) {
      console.log("\n")
    }
  }, 1000 + counter);
  
};

