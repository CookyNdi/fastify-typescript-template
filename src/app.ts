import fastify from 'fastify';
import { SayHiRoute } from './v1/route/say-hi.route';

const PORT = process.env.PORT ?? '5000';
const server = fastify({ logger: true });

server.register(SayHiRoute);

server.listen({ port: parseInt(PORT) }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at http://localhost:${PORT}`);
});
