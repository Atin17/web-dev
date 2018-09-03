'use strict';

var app = require('../..');
import request from 'supertest';

var newAddtheaterendpoint;

describe('Addtheaterendpoint API:', function() {

  describe('GET /api/addtheaterendpoints', function() {
    var addtheaterendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/addtheaterendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          addtheaterendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(addtheaterendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/addtheaterendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/addtheaterendpoints')
        .send({
          name: 'New Addtheaterendpoint',
          info: 'This is the brand new addtheaterendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAddtheaterendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created addtheaterendpoint', function() {
      expect(newAddtheaterendpoint.name).to.equal('New Addtheaterendpoint');
      expect(newAddtheaterendpoint.info).to.equal('This is the brand new addtheaterendpoint!!!');
    });

  });

  describe('GET /api/addtheaterendpoints/:id', function() {
    var addtheaterendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/addtheaterendpoints/' + newAddtheaterendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          addtheaterendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      addtheaterendpoint = {};
    });

    it('should respond with the requested addtheaterendpoint', function() {
      expect(addtheaterendpoint.name).to.equal('New Addtheaterendpoint');
      expect(addtheaterendpoint.info).to.equal('This is the brand new addtheaterendpoint!!!');
    });

  });

  describe('PUT /api/addtheaterendpoints/:id', function() {
    var updatedAddtheaterendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/addtheaterendpoints/' + newAddtheaterendpoint._id)
        .send({
          name: 'Updated Addtheaterendpoint',
          info: 'This is the updated addtheaterendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAddtheaterendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAddtheaterendpoint = {};
    });

    it('should respond with the updated addtheaterendpoint', function() {
      expect(updatedAddtheaterendpoint.name).to.equal('Updated Addtheaterendpoint');
      expect(updatedAddtheaterendpoint.info).to.equal('This is the updated addtheaterendpoint!!!');
    });

  });

  describe('DELETE /api/addtheaterendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/addtheaterendpoints/' + newAddtheaterendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when addtheaterendpoint does not exist', function(done) {
      request(app)
        .delete('/api/addtheaterendpoints/' + newAddtheaterendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
