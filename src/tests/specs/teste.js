describe("Services tests", function() {
    var services;

    beforeEach(module('github-api-demo', function($provide) {

    }));

    beforeEach(inject(function (_services_) {
        services = _services_;
    }));

    it('should have services be defined', function () {
        expect(services).toBeDefined();
    });

    it('set and get name', function () {
        services.setName("Wellington");
        expect(services.getName()).toBe("Wellington");
    });

});