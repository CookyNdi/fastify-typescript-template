import { FastifyReply } from 'fastify';

type ApiResponse<T> = {
  status: 'success' | 'error';
  code: number;
  data: T | null;
  message: string | null;
};

export const sendApiResponse = <T>(
  reply: FastifyReply,
  status: 'success' | 'error',
  code: number,
  data: T | null,
  message: string | null,
): void => {
  const apiResponse: ApiResponse<T> = {
    status,
    code,
    data,
    message,
  };
  reply.status(code).send(apiResponse);
};
