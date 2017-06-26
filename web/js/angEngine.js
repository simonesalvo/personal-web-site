/*!
 * Simone Salvo
 * www.simonesalvo.it
 * 
 */


angular.module('SSIT', ['ngRoute', 'controllerSSIT', 'directiveSSIT'])

    .config(function() { // provider-injector
                                   // This is an example of config block.
                                   // You can have as many of these as you want.
                                   // You can only inject Providers (not instances)
                                   // into config blocks.
})
    .run(function() {
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
});

