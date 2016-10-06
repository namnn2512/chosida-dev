'use strict';

angular.module('chosidaApp')
    .factory('UploadFile', ['Upload', function (Upload) {
        return {
            // submit: function (vm) { //function to call on form submit
            //     if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            //         return vm.upload(vm.file); //call upload function
            //     }
            // },

            upload: function (file) {
                return Upload.upload({
                    url: '/uploadFile', //webAPI exposed to upload the file
                    data: { file: file } //pass file as data, should be user ng-model
                })

                // .then(function (resp) { //upload function returns a promise
                //     if (resp.data.error_code === 0) { //validate success
                //         $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                //     } else {
                //         $window.alert('an error occured');
                //     }
                // }, function (resp) { //catch error
                //     console.log('Error status: ' + resp.status);
                //     $window.alert('Error status: ' + resp.status);
                // }, function (evt) {
                //     console.log(evt);
                //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                //     vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
                // });
            }
        };
    }]);
