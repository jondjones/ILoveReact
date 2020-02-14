import serverStatus from "./serverStatus";
import { variant, columns } from "./db";

const MAX_DELAY = 3000;

const isInRange = (range, value) => {
  return value >= range.min && value < range.max;
};

const getResponse = responseBody => {
  const failFactorRange = { min: 0.85, max: 1 };
  const notAuthorisedRange = { min: 0.75, max: 0.85 };
  const status = Math.random();
  
  if (isInRange(failFactorRange, status)) {
    throw new Error(serverStatus.INTERNAL_SERVER_ERROR);
  } else if (isInRange(notAuthorisedRange, status)) {
    throw new Error(serverStatus.UNAUTHORIZED);
  }
  return { body: responseBody };
};


/**
 * @typedef {Object} ServerResponse
 * @property {any} body
 * @property {number} error
 */


/**
 * @function mockFetch
 * @params {string} endpoint
 * @returns {Promise<ServerResponse>}
*/
export const mockFetch = endpoint => {
  const serverDelay = MAX_DELAY * Math.random();

  return new Promise(resolve => {
    let response = null;
    setTimeout(() => {
      switch (endpoint) {
        case "/variant":
          response = getResponse(variant);
          resolve(response);
          break;
        case "/columns":
          response = getResponse(columns);
          resolve(response);
          break;
        default:
          resolve(response);
      }
    }, serverDelay);
  });
};
