import { FastifyPluginAsync } from 'fastify';

import { sayHi } from '../controller/say-hi.controller';
import { sendApiResponse } from '@/utils/web-response';

type sayHiQuery = {
  name: string;
};

export const SayHiRoute: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<{ Querystring: sayHiQuery }>('/hi', (request, reply) => {
    const { name } = request.query;
    const result = sayHi(name);
    sendApiResponse(reply, 'success', 200, result, null);
  });
};
