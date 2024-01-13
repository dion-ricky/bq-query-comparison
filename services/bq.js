const { BigQuery } = require("@google-cloud/bigquery");
const bigquery = new BigQuery();

function runQuery(q) {
  const options = {
    query: q,
    useQueryCache: false,
  };

  return new Promise(async (res, rej) => {
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    job.on("complete", (metadata) => {
      res(metadata);
    });
  });
}

module.exports = { runQuery };
