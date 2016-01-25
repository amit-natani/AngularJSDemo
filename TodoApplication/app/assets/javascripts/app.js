// var myApp = angular.module('assignmentApp', ['ngRoute', 'ngResource']);
//
// myApp.config([
//   '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//     $routeProvider.when('/',{
//       template: '<div>Loading...</div>'
//     }).when('/todos',{
//       templateUrl: '/todos/index.html.erb',
//       controller: 'todoController'
//     }).when('todos/:id',{
//       templateUrl: '/todos/show.html',
//       controller: 'todoShowController'
//     }).otherwise({
//    redirectTo: '/todos'
//  });
//   }]);
//
// myApp.factory('Todos', ['$resource',function($resource){
//   return $resource('/todos.json', {},{
//     query: { method: 'GET', isArray: true },
//     create: { method: 'POST'}
//   })
// }]);
//
// myApp.factory('Todo', ['$resource', function($resource){
//  return $resource('/todos/:id.json',{id: '@id'}, {
//  update: { method: 'PUT', params: {id: '@id'} },
//  delete: { method: 'DELETE', params:{id: '@id'} },
//  show: { method: 'GET', params: {id: '@id'} }
//  });
// }]);
//
//
// myApp.controller('todoController',['$scope','$routeParams', '$window', '$filter', '$http', '$resource', 'Todos','Todo', '$location','$rootScope', function($scope,$routeParams,$window, $filter,$http,$resource,Todos,Todo,$location,$rootScope) {
//     $rootScope.selectedTodo = null;
//     $scope.todoList = Todos.querrespond_with @comment
//     $scope.status = '';
//
//
//    $scope.showAll =function(){
//
//      $scope.status='';
//
//    };
//
// $scope.showActive =function(){
//
//   $scope.status=false;
//
// };
//
// $scope.showCompleted =function(){
//
//   $scope.status=true;
//
// };
//
//     $scope.addTodo = function() {
//          Todos.create({title: $scope.newTodo, done:false});
//          $scope.todoList = Todos.query();
//         $scope.newTodo = "";
//     };
//
//
//
//       $scope.editTodo = function (todo) {
//       			$scope.editedTodo = todo;
//       			$scope.originalTodo = angular.extend({}, todo);
//       		};
//
//       $scope.showDescription = function (todo) {
//             $rootScope.selectedTodo =todo
//               $location.path("/todos/"+todo.id);
//               // $scope.$apply()
//       		};
//
//
//
//       	$scope.saveEdits = function (todo ) {
//
//       			todo.title = todo.title.trim();
//
//       			if (todo.title === $scope.originalTodo.title) {
//       				$scope.et = Todos.query();
//  		//	angular.forEactodoShowController
// //});ditedTodo = null;
//       				return;
//       			}
//
//             Todo.update({id: todo.id, title: todo.title, done:todo.done}, function(){
//            $scope.todoList = Todos.query();
//
//             })
//             $scope.editedTodo = null;
//       			$scope.originalTodo =null
//             	$scope.reverted = true;
//       		};
//
//               $scope.toggleCompleted = function (todo) {
//                 Todo.update({id: todo.id, title: todo.title, done:todo.done});
//                 $scope.todoList = Todos.query();
//                 Flag  = false;
//                };
//
//                Flag  = false;
//
//                  $scope.markAll = function () {
//                      if(Flag == false){
//                        angular.forEach($scope.todoList , function(todo) {
//                          if(todo.done == false) {
//                                    todo.done =true;
//                                    Todo.update({id: todo.id, title: todo.title, done:todo.done});
//                                  }
//                                  $scope.todoList = Todos.query();
//
//                  });
//                  Flag = true;
//                }else{
//                  angular.forEach($scope.todoList , function(todo) {
//                    if(todo.done == true) {
//                              todo.done =false;
//                              Todo.update({id: todo.id, title: todo.title, done:todo.done});
//                            }
//                            $scope.todoList = Todos.query();
//
//                });
//                Flag = false;
//                }
//                };
//
//
//
// //    $scope.markAll = function () {
//   //    $scope.todoList = Todos.query();
//  		//	angular.forEactodoShowController
// //});
//   //           $scope.todoList = Todos.query();
// // };
//
//
// $scope.remaining = function() {
//     var count = 0;
//     angular.forEach($scope.todoList, function(todo) {
//       count += todo.done ? 0 : 1;
//     });
//
//     return count;
//   };
//
//   $scope.clearCompletedTodos = function() {
//     if (confirm("Are you sure you want to clear all completed tasks?"))
//       var oldTodos = $scope.todoList
//       angular.forEach(oldTodos, function(todo) {
//         if (todo.done) Todo.delete({id: todo.id });
//       });
//       $scope.todoList = Todos.query();
//     };
//
//     $scope.removeTodo = function(todo) {
//         if (confirm("Are you sure you want to delete this task?"))
//         Todo.delete({id: todo.id }, function(){
//        $scope.todoList = Todos.query();
//         });
//     };
// }]);
//
// myApp.controller('todoShowController',['$scope','$routeParams', '$window', '$filter', '$http', '$resource', 'Todos','Todo', '$location','$rootScope', function($scope,$routeParams,$window, $filter,$http,$resource,Todos,Todo,$location,$rootScope) {
//     console.log('-------------------', $rootScope.selectedTodo)
//     alert("Hello "+$rootScope.selectedTodo);
//   }]);

var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

/**
//Factory
myApp.factory('Todos', ['$resource',function($resource){
  return $resource('/todos.json', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
}]);
*/

myApp.factory('Todo', ['$resource', function($resource){
  return $resource('/todos/:id.json', {}
  /**, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  }
*/
);
}]);

myApp.factory('Comment', ['$resource', function($resource){
  return $resource('/todos/:id/comments.json', {}
  /**, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  }
*/
);
}]);


//Controller

angular.module('myApp').controller('TodoShowController',['$rootScope','$scope','$routeParams', '$filter', '$http', '$resource' ,'Todo', '$location','Comment','$route',function($rootScope,$scope,$routeParams, $filter,$http,$resource,Todo,$location, Comment,$route) {

var selectedId=$routeParams.id;

$scope.selectedTodo = Todo.get({id: selectedId });

$scope.commentList = Comment.query({id: selectedId});

$scope.saveComment = function(todoId) {
  // Comment.save({text: $scope.newComment, todo_id: selectedId});
  // alert("hello");
  // $scope.newComment = "";
  $http.post('/todos/'+todoId+'/comments', {todo_id: 20, text: $scope.newComment}).success(function() {
       $scope.newComment = '';
       $route.reload();
       //$location.path("list");
     });
}
}]);


myApp.controller("TodoController", ['$rootScope','$scope', '$http', '$resource',  'Todo', '$location','$route', function($rootScope,$scope, $http, $resource,  Todo, $location, $route) {

  $scope.todoList = Todo.query();
  $scope.status = '';
  $scope.editedTodo = null;


     $scope.showAll =function(){

       $scope.status='';

     };

  $scope.showActive =function(){

    $scope.status=false;

  };

  $scope.showCompleted =function(){

    $scope.status=true;
  }


  $scope.save = function() {
       Todo.save({title: $scope.newTodo, done:false});
       $scope.todoList = Todo.query();
      $scope.newTodo = "";
      $route.reload();
  };


  $scope.editTodo = function (todo) {
        $scope.editedTodo = todo;
        $scope.originalTodo = angular.extend({}, todo);
      };



  $scope.toggleCompleted = function (todo) {
    Todo.update({id: todo.id, title: todo.title, done:todo.done});
    $scope.todoList = Todo.query();
    Flag  = false;
   };




  Flag  = false;

    $scope.markAll = function () {
        if(Flag == false){
          angular.forEach($scope.todoList , function(todo) {
            if(todo.done == false) {
                      todo.done =true;
                      Todo.update({id: todo.id, title: todo.title, done:todo.done});
                    }
                    $scope.todoList = Todo.query();

    });
    Flag = true;
  }else{
    angular.forEach($scope.todoList , function(todo) {
      if(todo.done == true) {
                todo.done =false;
                Todo.update({id: todo.id, tilte: todo.title, done:todo.done});
              }
              $scope.todoList = Todo.query();

  });
  Flag = false;
  }
  };

  $scope.todoShow = function(todoId){

       var url = "/todos/" + todoId;
       $location.path(url);
      console.log($location.path(url));
     //$route.reload();
    //  $rootScope.selectedTodo = todo;
    //  alert($rootScope.selectedTodo);
    //  var url = "/todos/" + todo.id;
    //  $location.path(url);



    //$scope.$apply() ;
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todoList, function(todo) {
          count += todo.done ? 0 : 1;
        });

        return count;
      };


    $scope.removeTodo = function(todo) {
        if (confirm("Are you sure you want to delete this task?"))
        Todo.delete({id: todo.id }, function(){
       $scope.todoList = Todo.query();
        });
    };


    $scope.saveEdits = function (todo ) {

        todo.title = todo.title.trim();

        if (todo.title === $scope.originalTodo.title) {
          $scope.editedTodo = null;
          return;
        }

        Todo.update({id: todo.id, title: todo.title, done:todo.done}, function(){
       $scope.todoList = Todo.query();

        })
        $scope.editedTodo = null;
        $scope.originalTodo =null
          $scope.reverted = true;
      };

      $scope.clearCompletedTodos = function() {
           if (confirm("Are you sure you want to clear all completed tasks?"))
             var oldTodos = $scope.todoList
             angular.forEach(oldTodos, function(todo) {
               if (todo.done) Todo.delete({id: todo.id });
             });
             $scope.todoList = Todo.query();
           };


}]);


//Routes
myApp.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/todos',{
      templateUrl: '/templates/todos/index.html',
      controller: 'TodoController'
    });

    $routeProvider.when('/todos/:id',{
      templateUrl: '/templates/todos/show.html',
      controller: 'TodoShowController'
    });

    $routeProvider.when('/active',{
      templateUrl: '/templates/todos/index.html',
      controller: 'TodoShowController'
    });

    $routeProvider.when('/completed',{
      templateUrl: '/templates/todos/index.html',
      controller: 'TodoShowController'
    });

    $routeProvider.otherwise({
      redirectTo: '/todos'
    });
  }
]);
