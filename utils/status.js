// Ideia do Marcello de concentrar todos os status com as respectivas mensagens em uma file

// PORTS
const PORT = '3000';

// HTTP response status codes
const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_CONTENT_STATUS = 204;
const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_NOT_FOUND_STATUS = 404;

// Messages
const MSG_TALKER_NOT_FOUND = { message: 'Pessoa palestrante não encontrada' };
const MSG_EMAIL_NOT_FOUND = { message: 'O campo "email" é obrigatório' };
const MSG_EMAIL_NOT_VALID = { message: 'O "email" deve ter o formato "email@email.com"' };
const MSG_PASSWORD_NOT_FOUND = { message: 'O campo "password" é obrigatório' };
const MSG_PASSWORD_NOT_VALID = { message: 'O "password" deve ter pelo menos 6 caracteres' };
const MSG_TOKEN_NOT_FOUND = { message: 'Token não encontrado' };
const MSG_TOKEN_NOT_VALID = { message: 'Token inválido' };
const MSG_NAME_NOT_FOUND = { message: 'O campo "name" é obrigatório' };
const MSG_NAME_NOT_VALID = { message: 'O "name" deve ter pelo menos 3 caracteres' };
const MSG_AGE_NOT_FOUND = { message: 'O campo "age" é obrigatório' };
const MSG_AGE_NOT_VALID = { message: 'A pessoa palestrante deve ser maior de idade' };
const MSG_TALK_NOT_VALID = {
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
};
const MSG_DATE_NOT_VALID = {
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};
const MSG_RATE_NOT_VALID = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };

module.exports = {
  PORT,
  HTTP_OK_STATUS,
  HTTP_CREATED_STATUS,
  HTTP_NO_CONTENT_STATUS,
  HTTP_BAD_REQUEST_STATUS,
  HTTP_UNAUTHORIZED,
  HTTP_NOT_FOUND_STATUS,
  MSG_TALKER_NOT_FOUND,
  MSG_EMAIL_NOT_FOUND,
  MSG_EMAIL_NOT_VALID,
  MSG_PASSWORD_NOT_FOUND,
  MSG_PASSWORD_NOT_VALID,
  MSG_TOKEN_NOT_FOUND,
  MSG_TOKEN_NOT_VALID,
  MSG_NAME_NOT_FOUND,
  MSG_NAME_NOT_VALID,
  MSG_AGE_NOT_FOUND,
  MSG_AGE_NOT_VALID,
  MSG_TALK_NOT_VALID,
  MSG_DATE_NOT_VALID,
  MSG_RATE_NOT_VALID,
};
