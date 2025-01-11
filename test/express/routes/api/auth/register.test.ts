import { assert } from 'chai';
import request from 'supertest';
import { expressApp } from '../../../../../src/express';
import { AuthResponse } from '../../../../../src/types/response/auth';

const registerTest = (testBody: any) => {
    describe('POST', () => {
        it('Should register a user', (done) => {
            request(expressApp)
                .post('/api/auth/register')
                .set('Content-Type', 'application/json')
                .send(testBody)
                .end((err, res) => {
                    assert.equal(res.status, 200, 'Status code is not 200');

                    assert.exists(res.body, 'Response body is not defined');
                    assert.isObject(res.body, 'Response body is not an object');

                    const resbody = res.body as AuthResponse;

                    assert.equal(resbody.status, 200, 'Status code is not 200');

                    assert.equal(resbody.success, true, 'Success is not true');

                    assert.exists(resbody.message, 'Message is not defined');
                    assert.equal(
                        resbody.message,
                        'User registered',
                        'Message is not correct',
                    );

                    assert.exists(resbody.token, 'Token is not defined');
                    assert.isString(resbody.token, 'Token is not a string');
                    assert.isNotEmpty(resbody.token, 'Token is empty');

                    done();
                });
        });
    });
};

export default registerTest;
