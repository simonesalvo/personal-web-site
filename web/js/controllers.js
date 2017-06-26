/**
    * Created by Simone Salvo on 15/12/2016.
    * www.simonesalvo.it
    */

angular.module('controllerSSIT', ['ngPintura'])


    .controller('qrcodemoduleCtrl',['$scope',function($scope) {

    }])
        .controller('contactmoduleCtrl',['$scope',function($scope) {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        $scope.user = {
            user : "",
            mailBody : ""
        };

        $scope.sendMail = function(){
            var mailFromName = "www.simonesalvo.it";
            var mailFrom = $scope.user.email;
            var mailBody = $scope.user.mailBody;
            var mailSubject = "Idea from SimoneSalvo.it";

            var request = $.ajax({
                url:"http://simonesalvoservices.appspot.com/SendMail",
                method: "POST",
                data: {    'mailBody' : mailBody,
                    'mailFrom' : mailFrom,
                    'mailSubject' : mailSubject,
                    'mailFromName' : mailFromName
                },
                dataType: "html"
            })
                .always(function() {
                toastr["success"]("Message sended");
            });

        }
    }])


    .controller('signaturemoduleCtrl',['$scope',function($scope){

    }])

    .controller('socialmoduleCtrl',['$scope',function($scope){

    }])

    .controller('resumemoduleCtrl', ['$scope', function($scope) {

        $scope.image = {
            src: 'https://drive.google.com/uc?export=download&id=0B8xAlvLgHU69eXhtSExoMWotMVU',
            scaling: 0.88,
            position: {
                x: 0,
                y: 0
            },
            maxScaling: 5,
            scaleStep: 0.22,
            mwScaleStep: 0.22,
            moveStep: 150,
            fitOnload:false,
            showIndicator: true,
            progress: 0
        };
    }]);