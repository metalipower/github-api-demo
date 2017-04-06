app.component('pager', {
    templateUrl: 'components-html/pager.html',
    bindings: {
        pageBack: '=',
        pageNext: '=',
        page: '=',
        totalPages: '='
    }
});