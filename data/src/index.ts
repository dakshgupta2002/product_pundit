// import reviews from "../../reviews.json" assert { type: "json" };

// const prods = async () => {
//   for (let index = 0; index < products.length; index++) {
//     const element = products[index];
//     const data = {
//       name: element.product_title,
//       price: 0,
//       currency: "INR",
//       positive_count: element.positive,
//       negative_count: element.negative,
//       neutral_count: element.neutral,
//     };
//     console.log(data);

//     const record = await pb.collection("products").create(data);
//     console.log(record);
//   }
// };

// await prods();

// const revs = async () => {
//   for (let index = 0; index < reviews.length; index++) {
//     const element = reviews[index];
//     const data = {
//       text: element.review,
//       sentiment: element.sentiment,
//       source: "test",
//       summary: element.reviews_processed,
//       review_date: new Date(new Date() - Math.random() * 1e12),
//       product_id: element.product_id,
//     };

//     console.log(data);

//     if (element.review) {
//       const record = await pb.collection("reviews").create(data);
//       console.log(record);
//     }
//   }
// };

// await revs();
