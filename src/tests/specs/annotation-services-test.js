describe("Annotation Services tests", function() {

    var annotationServices;

    beforeEach(module('githubApiDemo', function($provide) {

    }));

    beforeEach(inject(function (_annotationServices_) {
        annotationServices = _annotationServices_;
    }));

    it('Set and get annotation', function () {
        annotationServices.setAnnotation(1, 'my annotation');
        var annotation = annotationServices.getAnnotation(1);
        expect(annotation).toEqual('my annotation');
    });

});