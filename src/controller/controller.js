var mainApp = angular.module("TableApp", []);

mainApp.controller('TableController', function ($scope) {
   $scope.Students = [
      { name: 'nikhita', email: 'nikhita@stucred.com', number: '8639378314' }


   ]

   $scope.countnum = 0;
$scope.add = function (name, email, number) {
console.log('coming here... ', name, email,number)
      var flag;
for (var i = 0; i < $scope.Students.length; i++) {

if ($scope.Students[i].name === name && $scope.Students[i].email === email && $scope.Students[i].number === number) {
            flag = 0;
            continue;
            
         }
         else {
            flag = 1;

         }
      }
  
      if (flag == 1) {
         $scope.Students.push({ name: name, email: email, number: number })
         $scope.countnum++;
         console.log($scope.Students);
      }
      else {
      
         alert("user already exits")
      }
   },

      $scope.removeEntry = function (index) {

         console.log(index)
         $scope.Students.splice(index, 1);
         $scope.countnum-- ;

      }

});




//   var dataArray = [];
//  $scope.name = "ABC"

//   dataArray.push({name:'Nikhita', email:'nikhita@stucred.com'});

//   console.log(dataArray)

    // $scope.add = function (name, phone, email) {

            // $http({
            //     method: 'POST',
            //     url: '/addData',
            //     headers: {
            //         'Content-Type': 'application/json'
            //       },
            //     data: {
            //         "name":name,
            //         "email":email
            //     }
            //   }).then(function successCallback(response) {
            //     console.log(response)
            //     }, function errorCallback(error) {
            //       console.log(error)
            //       $scope.message = error.data.message;

            //     })



            // }



// }])
