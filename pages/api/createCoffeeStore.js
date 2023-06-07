const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);
const table = base("coffee-stores");
console.log("table here", table);

const createCoffeeStore = async (req, res) => {
  console.log("req method here", req.method);
  if (req.method === "POST") {
    //find a record

    const findCoffeeStoreRecords = await table
      .select({
        filterByFormula: `id="0"`,
      })
      .firstPage();
    if (findCoffeeStoreRecords) {
      res.json(findCoffeeStoreRecords);
    } else {
      //create a record
    }
  }
};

export default createCoffeeStore;
