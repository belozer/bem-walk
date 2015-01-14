var vow = require('vow'),
    Level = require('enb/lib/levels/level'),
    LevelPlain = require('enb/lib/levels/level-plain'),
    fixtures = require('./fixtures');

suite('enb@0.x', function () {
    set('mintime', 1000);

    bench('`flat` level', function (done) {
        run(fixtures.flat, LevelPlain, done);
    });

    bench('`nested` level', function (done) {
        run(fixtures.nested, null, done);
    });

    bench('`bem-bl`', function (done) {
        run(fixtures['bem-bl'], null, done);
    });

    bench('`bem-core` + `bem-components`', function (done) {
        run(fixtures.o2, null, done);
    });
});

function run(levels, plain, done) {
    vow.all(levels.map(function (level) {
        return (new Level(level, plain)).load();
    })).then(done, done);
}