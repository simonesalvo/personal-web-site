/**
    * Created by Simone Salvo on 15/12/2016.
    * www.simonesalvo.it
    */

angular.module('directiveSSIT', [])

    .directive('resumemodule', function() {
        return {
            templateUrl: '../templates/resumemodule.html',
            controller: 'resumemoduleCtrl'
        }
    })

    .directive('qrcodemodule', function() {
        return {
            templateUrl: '../templates/qrmodule.html',
            controller: 'qrmoduleCtrl'
        }
    })

    .directive('chartmodule', function() {
        return {
            templateUrl: '../templates/chartmodule.html',
            controller: 'chartmoduleCtrl'
        }
    })

    .directive('contactmodule', function() {
        return {
            templateUrl: '../templates/contactmodule.html',
            controller: 'contactmoduleCtrl'
        }
    })



    .directive('socialmodule', function() {
        return {
            templateUrl: '../templates/socialmodule.html',
            controller: 'socialmoduleCtrl'
        }
    })


    .directive('signaturemodule', function() {
        return {
            templateUrl: '../templates/signaturemodule.html',
            controller: 'signaturemoduleCtrl'
        }
    });

