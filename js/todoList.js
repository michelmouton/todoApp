// js/todoList.js
'use strict';


/**
 * Déclaration de l'application demoApp
 */
var demoApp = angular.module('demoApp', [
    // Dépendances du "module"
    'todoList'
]);

/**
 * Déclaration du module todoList
 */
var todoList = angular.module('todoList',[]);


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
todoList.controller('todoCtrl', ['$scope',
    function ($scope) {

        // Pour manipuler plus simplement les todos au sein du contrôleur
        // On initialise les todos avec un tableau vide : []
        var todos = $scope.todos = [
        {title:'exemple 1', completed:true},
        {title:'exemple 2', completed:false},
        {title:'exemple 3', completed:true}
        ];
        var nbTachesRestantes = $scope.nbTachesRestantes = 0;

        // Ajouter un todo
        $scope.addTodo = function () {
            // .trim() permet de supprimer les espaces inutiles
            // en début et fin d'une chaîne de caractères
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                // éviter les todos vides
                return;
            }
            todos.push({
                // on ajoute le todo au tableau des todos
                title: newTodo,
                completed: false
            });
            $scope.nbTachesRestantes++;
            // Réinitialisation de la variable newTodo
            $scope.newTodo = '';
        };

        // Enlever un todo
        $scope.removeTodo = function (todo) {
            if(!todos.indexOf(todo).completed)
            {
                $scope.nbTachesRestantes--;
            }
            todos.splice(todos.indexOf(todo), 1);
        };

        $scope.checkOrUncheckTodo = function (todo) {
            if(todo.completed)
            {
                $scope.nbTachesRestantes++;
            }
            else
            {
                $scope.nbTachesRestantes--;
            }
            todo.completed = !todo.completed;
        };

        // Cocher / Décocher tous les todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };

        // Enlever tous les todos cochés
        $scope.clearCompletedTodos = function () {
            $scope.todos = todos = todos.filter(function (todo) {
                return !todo.completed;
            });
        };

        $scope.resetTodos = function () {
            $scope.nbTachesRestantes = 0;
            $scope.todos.length = 0;
        };

    }
]);