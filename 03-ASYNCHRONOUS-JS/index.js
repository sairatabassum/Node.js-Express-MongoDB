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

    // const res = await superagent.get(
    //   `https://dog.ceo/api/breed/${result}/images/random`
    // );

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${result}/images/random`
    );

    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${result}/images/random`
    );

    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${result}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    // console.log(all);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2. Ready';
};

(async () => {
  try {
    console.log('1. Will get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('3. Done getting dogs pic');
  } catch (err) {
    console.log('ERROR!');
  }
})();

/*
console.log('1. Will get dog pics');
getDogPic()
  .then((x) => {
    console.log(x);
    console.log('3. Done getting dogs pic');
  })
  .catch((err) => {
    console.log('ERROR!');
  });
  */
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
