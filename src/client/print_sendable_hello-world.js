const transactions = require('@liskhq/lisk-transactions');
const { EPOCH_TIME } = require('@liskhq/lisk-constants');
const HelloTransaction = require('../hello_transaction');

const getTimestamp = () => {
  // check config file or curl localhost:4000/api/node/constants to verify your epoc time
  const millisSinceEpoc = Date.now() - Date.parse(EPOCH_TIME);
  const inSeconds = (millisSinceEpoc / 1000).toFixed(0);
  return parseInt(inSeconds, 10);
};

const tx = new HelloTransaction({
  asset: {
    hello: 'world',
  },
  fee: `${transactions.utils.convertLSKToBeddows('1')}`,
  recipientId: '10881167371402274308L',
  timestamp: getTimestamp(),
});

tx.sign(
  'wagon stock borrow episode laundry kitten salute link globe zero feed marble',
);

console.log(tx.stringify());
process.exit(0);
