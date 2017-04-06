describe("Github Services tests", function() {
    var baseUrl = 'https://api.github.com'
    var $httpBackend;
    var githubServices;

    beforeEach(module('githubApiDemo', function($provide) {

    }));

    beforeEach(inject(function (_$httpBackend_, _githubServices_) {
        $httpBackend = _$httpBackend_;
        githubServices = _githubServices_;
    }));

    it('findUser() - Find user metalipower', function () {
        $httpBackend.expectGET(baseUrl+'/users/metalipower').respond({'login': 'metalipower'});
        githubServices.findUser('metalipower', function(status, data){
            expect(data.login).toEqual('metalipower');
        });
        $httpBackend.flush();
    });

    it('findUser() - Find inexistent user acilabor', function () {
        $httpBackend.expectGET(baseUrl+'/users/acilabor').respond(404);
        githubServices.findUser('acilabor', function(status, data){
            expect(status).toEqual(404);
        });
        $httpBackend.flush();
    });

    it('findUserRepos() - Find metalipower repositories', function () {
        $httpBackend.expectGET(baseUrl+'/users/metalipower/repos?page=0&per_page=1').respond([{'name': 'github-api-demo'}]);
        githubServices.findUserRepos('metalipower', 0, 1, function(status, data){
            expect(data[0].name).toEqual('github-api-demo');
        });
        $httpBackend.flush();
    });
});