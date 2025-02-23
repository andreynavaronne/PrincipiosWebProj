const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/main.ts'];

const config = {
  info: {
    title: 'API Title',
    description: 'API Description',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles, config);