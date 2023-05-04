// testing one single route - integration test
var app = require('../../app');

const supertest = require('supertest');

describe('takes two num params and sends a string saying if one is evenly divisible by the other', () => {
  // reaches out to the server so it's async
  it("GET /math/2/4", async () => {

    // start the app, make a call to the url above, then see if we get the right response
    await supertest(app).get("/math/2/4")
      .expect(200)
      .then(response => {
        expect(response.text).toEqual("4 is evenly divisible by 2");
      });
  })

  // handles not evenly divisible
  it ('GET /math/5/2', async () => {
    await supertest(app).get("/math/5/2")
      .expect(200)
      .then(response => {
        expect(response.text).toEqual("2 is not evenly divisible by 5");
      });
  })

  // handles not a num for num1
  it ('GET /math/bob/2', async () => {
    await supertest(app).get("/math/bob/2")
      .expect(500)
      .then(response => {
        expect(response.text).toEqual("bob is not a number")
      });
  })

  // handles not a num for num2
  it ('GET /math/2/secondNum', async () => {
    await supertest(app).get("/math/2/secondNum")
      .expect(500)
      .then(response => {
        expect(response.text).toEqual("secondNum is not a number")
      });
  })

  // handles if num1 and num2 are not a number
  it ('GET /math/bob/jordan', async () => {
    await supertest(app).get("/math/bob/jordan")
      .expect(500)
      .then(response => {
        expect(response.text).toEqual("bob and jordan are both not a number")
      });
  })

})