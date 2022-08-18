const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(
//       `https://dog.ceo/api/breed/${data}/images/random
//   `
//     )
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);

//         console.log('Random dog image saved');
//       });
//     });
// });

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('i could not find any file');

      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write file');

      resolve('Success');
    });
  });
};
const getDogPic = async () => {
  try {
    const result = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`This ${result}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${result}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('Random dog image saved');
  } catch (err) {
    console.log(err);
  }
};
getDogPic();
/*
readFilePro(`${__dirname}/dog.txt`)
  .then((result) => {
    console.log(`This ${result}`);
    return superagent.get(`https://dog.ceo/api/breed/${result}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);

    //     fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //       if (err) return console.log(err.message);
    //       console.log('Random dog image saved');
  })
  .then(() => {
    console.log('Random dog image saved');
  })
  .catch((err) => {
    console.log(err.message);
  });
*/
