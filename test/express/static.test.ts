import { assert } from 'chai';
import request from 'supertest';
import { expressApp } from '../../src/express';


const staticFileTests = () => {
    describe("/", indexTests);
}

const indexTests = () => {
    describe("GET", () => {
        it("Should recieve index.html", (done) => {
            request(expressApp)
                .get('/')
                .expect(200)
                .end((err, res) => {
                    assert.equal(res.status, 200, 'Status code is not 200');
                    assert.equal(res.type, 'text/html', 'Content type is not text/html');
                    assert.exists(res.text, 'Response body is not defined');
                    assert.isNotEmpty(res.text, 'Response body is empty');
                    done();
                });
        });
    });

    describe("GET index.html", () => {
        it("Should recieve index.html", (done) => {
            request(expressApp)
                .get('/index.html')
                .expect(200)
                .end((err, res) => {
                    assert.equal(res.status, 200, 'Status code is not 200');
                    assert.equal(res.type, 'text/html', 'Content type is not text/html');
                    assert.exists(res.text, 'Response body is not defined');
                    assert.isNotEmpty(res.text, 'Response body is empty');
                    done();
                });
        });
    });
}


export default staticFileTests;