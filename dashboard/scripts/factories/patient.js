'use strict';

angular.module('app')
    .factory('PatientFactory', ['Parse', function (Parse) {
        var Patient = Parse.Object.extend("patient",{
            // Instance methods
        }, {
            // Class methods
            getAll : function() {
                var query = new Parse.Query(this);
                return query.find();
            }
        });

        // Properties
        Patient.prototype.__defineGetter__("firstName", function() {
            return this.get("firstName");
        });
        Patient.prototype.__defineSetter__("firstName", function(aValue) {
            return this.set("firstName", aValue);
        });
        Patient.prototype.__defineGetter__("lastName", function() {
            return this.get("lastName");
        });
        Patient.prototype.__defineSetter__("lastName", function(aValue) {
            return this.set("lastName", aValue);
        });
        Patient.prototype.__defineGetter__("email", function() {
            return this.get("email");
        });
        Patient.prototype.__defineSetter__("email", function(aValue) {
            return this.set("email", aValue);
        });
        Patient.prototype.__defineGetter__("pictureProfil", function() {
            return this.get("pictureProfil");
        });
        Patient.prototype.__defineSetter__("pictureProfil", function(aValue) {
            return this.set("pictureProfil", aValue);
        });
        Patient.prototype.__defineGetter__("gender", function() {
            return this.get("gender");
        });
        Patient.prototype.__defineSetter__("gender", function(aValue) {
            return this.set("gender", aValue);
        });
        Patient.prototype.__defineGetter__("phoneNumber", function() {
            return this.get("phoneNumber");
        });
        Patient.prototype.__defineSetter__("phoneNumber", function(aValue) {
            return this.set("phoneNumber", aValue);
        });
        Patient.prototype.__defineGetter__("birthDate", function() {
            return this.get("birthDate");
        });
        Patient.prototype.__defineSetter__("birthDate", function(aValue) {
            return this.set("birthDate", aValue);
        });
        Patient.prototype.__defineGetter__("socialSecurityNumber", function() {
            return this.get("socialSecurityNumber");
        });
        Patient.prototype.__defineSetter__("socialSecurityNumber", function(aValue) {
            return this.set("socialSecurityNumber", aValue);
        });
        Patient.prototype.__defineGetter__("familyPhoneNumber", function() {
            return this.get("familyPhoneNumber");
        });
        Patient.prototype.__defineSetter__("familyPhoneNumber", function(aValue) {
            return this.set("familyPhoneNumber", aValue);
        });
        Patient.prototype.__defineGetter__("medecin", function() {
            return this.get("medecin");
        });
        Patient.prototype.__defineSetter__("medecin", function(aValue) {
            return this.set("medecin", aValue);
        });


        return Patient;
    }]);
