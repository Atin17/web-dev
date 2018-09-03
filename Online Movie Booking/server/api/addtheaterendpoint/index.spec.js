'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var addtheaterendpointCtrlStub = {
  index: 'addtheaterendpointCtrl.index',
  show: 'addtheaterendpointCtrl.show',
  create: 'addtheaterendpointCtrl.create',
  update: 'addtheaterendpointCtrl.update',
  destroy: 'addtheaterendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var addtheaterendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './addtheaterendpoint.controller': addtheaterendpointCtrlStub
});

describe('Addtheaterendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(addtheaterendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/addtheaterendpoints', function() {

    it('should route to addtheaterendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'addtheaterendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/addtheaterendpoints/:id', function() {

    it('should route to addtheaterendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'addtheaterendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/addtheaterendpoints', function() {

    it('should route to addtheaterendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'addtheaterendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/addtheaterendpoints/:id', function() {

    it('should route to addtheaterendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'addtheaterendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/addtheaterendpoints/:id', function() {

    it('should route to addtheaterendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'addtheaterendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/addtheaterendpoints/:id', function() {

    it('should route to addtheaterendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'addtheaterendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
