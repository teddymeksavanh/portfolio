//Création des routes

Router.route('/', function () {
    this.render('home');
});

Router.route('/projects', function () {
    this.render('projects');
});

Router.route('/projects/dev', function () {
    this.render('projectsDev');
});

Router.route('/projects/design', function () {
    this.render('projectsDesign');
});

Router.route('/projects/others', function () {
    this.render('projectsOthers');
});

Router.route('/about', function () {
    this.render('about');
});

Router.route('/contact', function () {
    this.render('contact');
});






