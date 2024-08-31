import { initMongoCollection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMongoCollection();
  setupServer();
};

bootstrap();
