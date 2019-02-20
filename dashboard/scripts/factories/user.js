'use strict';

angular.module('app')
    .factory('UserFactory', ['Parse', function (Parse) {
        var User = Parse.User.extend({
            // Instance methods
        }, {
            // Class methods
        });

        // Properties
        User.prototype.__defineGetter__("username", function() {
            return this.get("username");
        });
        User.prototype.__defineSetter__("username", function(aValue) {
            return this.set("username", aValue);
        });
        User.prototype.__defineGetter__("email", function() {
            return this.get("email");
        });
        User.prototype.__defineSetter__("email", function(aValue) {
            return this.set("email", aValue);
        });
        User.prototype.__defineSetter__("password", function(aValue) {
            return this.set("password", aValue);
        });
        User.prototype.__defineGetter__("firstName", function() {
            return this.get("firstName");
        });
        User.prototype.__defineSetter__("firstName", function(aValue) {
            return this.set("firstName", aValue);
        });
        User.prototype.__defineGetter__("lastName", function() {
            return this.get("lastName");
        });
        User.prototype.__defineSetter__("lastName", function(aValue) {
            return this.set("lastName", aValue);
        });
        User.prototype.__defineGetter__("patient", function() {
            return this.get("patient");
        });
        User.prototype.__defineSetter__("patient", function(aValue) {
            return this.set("patient", aValue);
        });


        return User;
    }]);
