const { Application, genesisBlockDevnet, configDevnet } = require('lisk-sdk');
const HelloTransaction = require('./hello_transaction');

configDevnet.app.label = 'hello-world-blockchain-app';

configDevnet.components.storage.user = 'lisk';
configDevnet.components.storage.password = 'password';

const app = new Application(genesisBlockDevnet, configDevnet);
app.registerTransaction(HelloTransaction);

app
  .run()
  .then(() => app.logger.info('App started...'))
  .catch(error => {
    console.error('Faced error in application', error);
    process.exit(1);
  });
