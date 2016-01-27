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
 return $resource('/todos/:id.json',{id: '@id'}, {
   update: { method: 'PUT', params: {id: '@id'} }
   });
}]);


myApp.factory('Comment', ['$resource',function($resource){
 return $resource('/todos/:todo_id/comments/:id.json', {todo_id: '@todo_id', id: '@id'}
 ,{
   update: {method: 'PUT', params: {todo_id: '@todo_id', id: '@id'}}
 });
}]);


//Controller

angular.module('myApp').controller('TodoShowController',['$rootScope','$scope','$routeParams', '$filter', '$http', '$resource' ,'Todo', '$location','Comment','$route',function($rootScope,$scope,$routeParams, $filter,$http,$resource,Todo,$location, Comment,$route) {
$scope.editTitle = "ng-hide";
$scope.editDescription = "ng-hide";
$scope.editedComment = null;
var selectedId=$routeParams.id;

alert($scope.editTitle);
$scope.selectedTodo = Todo.get({id: selectedId });

$scope.commentList = Comment.query({todo_id: selectedId});

  $scope.showFormForTitle = function(todo) {
    $scope.editTitle = "ng-show";
    $scope.editedTodoTitle = todo;
    $scope.originalTodoTitle = angular.extend({}, todo);
  }

  $scope.showFormForDescription = function(todo) {
    $scope.editDescription = "ng-show";
    $scope.editedTodoDescription = todo;
    $scope.originalTodoDescription = angular.extend({}, todo);
  }

$scope.saveComment = function() {
 //Create the comment object to be sent to the server
 var commentObj = new Comment({text: $scope.newComment, todo_id: $routeParams.id});
var commentObj1 = {text: $scope.newComment, todo_id: $routeParams.id};
 //Attempt a save to the back-end
 commentObj.$save(function(response) {
   $scope.commentList.push(commentObj1);
   $scope.newComment = "";
 });
   //If we're successful then add the response (the object as the server sees it)
   // to our collection of comments
 //  $scope.commentList.unshift(response);
 //Grab all the comments from the server
 //$scope.commentList.push(commentObj);
 //$scope.commentList = Comment.query({todo_id: $routeParams.id});

   //Empty the name & body
 //$scope.newComment = "";
 //$route.reload();


};
   $scope.editComment = function (comment) {
         $scope.editedComment = comment;
         $scope.originalComment = angular.extend({}, comment);
       };

       $scope.saveEditsComment = function (comment) {
           comment.text = comment.text.trim();
           if (comment.text === $scope.originalComment.text) {
             $scope.editedComment = null;
             return;
           }
          Comment.update({id: comment.id, text: comment.text, todo_id: $routeParams.id}, function(){
          $scope.commentList = Comment.query({id: $routeParams.id});

           })
           $scope.editedComment = null;
           $scope.originalComment =null;
             $scope.reverted = true;
             $route.reload();
         };

             $scope.saveEditsTitle = function (todo) {
                 todo.title = todo.title.trim();
                 alert($scope.originalTodoTitle);
                   if (todo.title === $scope.originalTodoTitle.title) {
                   $scope.editedTodoTitle = null;
                   return;
                 }
                Todo.update({id: todo.id, title: todo.title}, function(){
                 //$scope.commentList = Comment.query({id: $routeParams.id});
                 })
                 $scope.editedTodoTitle = null;
                 $scope.originalTodoTitle =null;
                   $scope.reverted = true;
                   $scope.editTitle = "ng-hide";
                   //$route.reload();
               };

               $scope.saveEditsDescription = function (todo) {
                   todo.description = todo.description.trim();
                   alert($scope.originalTodoDescription);
                     if (todo.description === $scope.originalTodoDescription.description) {
                     $scope.editedTodoDescription = null;
                     return;
                   }
                  Todo.update({id: todo.id, description: todo.description}, function(){
                   //$scope.commentList = Comment.query({id: $routeParams.id});
                   })
                   $scope.editedTodoDescription = null;
                   $scope.originalTodoDescription =null;
                     $scope.reverted = true;
                     $scope.editDescription = "ng-hide";
                     //$route.reload();
                 };

         $scope.removeComment = function(comment) {
             if (confirm("Are you sure you want to delete this Comment?"))
             Comment.delete({id: comment.id, todo_id: $routeParams.id }, function(){
               $scope.commentList = Comment.query({id: $routeParams.id});
             });

         };

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
