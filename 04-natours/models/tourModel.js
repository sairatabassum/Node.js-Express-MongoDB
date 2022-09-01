const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
        name: {
          type: String,
          required: [true, 'A tour must have a name'],
          unique: true,
        },
        rating: {
          type: Number,
          default: 4.5,
        },
        price: {
          type: Number,
          required: [true, 'A tour must have a price'],
        },
      });
const Tour=mongoose.model('Tour',tourSchema);

module.exports=Tour;
  // const testTour=new Tour({
  //   name:"The forest kiker",
  //   rating:4.7,
  //   price:497
  // });
  
  // testTour.save().then(doc=>{
  //   console.log(doc);
  // }).catch(err=>{
  //   console.log("ERROR");
  // })