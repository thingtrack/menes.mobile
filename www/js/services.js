'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory("reminderService", [function(){

	function Treatment(type, vaccines, notes){
		
		this.type = type;
		this.vaccines = vaccines;
		this.notes = notes;		 
	}

	function Reminder(id, text, pet, date, treatment){
		
		this.id = id;
		this.text = text;
		this.pet = pet;
		this.date = date;
		this.done = false;
		this.treatment = new Treatment(treatment.type, treatment.vaccines, treatment.notes);

		this.setId = function(id){ this.id = id };
	}

	function addLocalNotification(reminder){

		if(window.plugin){

			var messageStr = "Le recordarmos que a " + reminder.text + " le corresponde";
		
			// treatment types
			if(reminder.treatment.type == 0){
				messageStr += " la vacuna. No olvide llamarnos para pedir cita previa";	
			}
			if(reminder.treatment.type == 1){
				messageStr += " la desparasitación interna.";
			}
			if(reminder.treatment.type == 2){
				messageStr += " la desparasitación externa.";
			}
			window.plugin.notification.local.add({
				id: reminder.id,
			    title:   'Hospital veterinario Nacho Menes',
			    message: messageStr,
			    date: reminder.date
			});
		}
	}

	function removeLocalNotification(reminder){
		if(window.plugin){
			/* window.plugin.notification.local.cancel(reminder.id, function (){
				alert("Removed notification!");
			}, scope);*/
		}
	}

	var reminders = [];

	return {
		all: function(){
			return reminders;
		},
		add: function(reminder){
			reminders.push(new Reminder(reminders.length.toString(), reminder.text, reminder.pet, reminder.begin, reminder.treatment));
		},
		addWithFrequency: function(reminder){
			var reminderDate = new Date(reminder.begin);

			reminders.push(new Reminder(reminders.length.toString(), reminder.text, reminder.pet, reminderDate, reminder.treatment));
			reminder.quantity --;

			// add local notification
			addLocalNotification(reminders[reminders.length-1]);
			
			// add the the rest by frequency
			while(reminder.quantity > 0){

				reminderDate = new Date(reminderDate.getTime());

				// month frequency
				if(reminder.frequency == 1){
					reminderDate.setMonth(reminderDate.getMonth() + 1);	
				}
				// year frequency
				if(reminder.frequency == 2){
					reminderDate.setFullYear(reminderDate.getFullYear() + 1);
				}

				reminders.push(new Reminder(reminders.length.toString(), reminder.text, reminder.pet, reminderDate, reminder.treatment));
				reminder.quantity --;

				// add local notification
				addLocalNotification(reminders[reminders.length-1]);				
			}
		},
		remove: function(reminderIndex){

			if(reminderIndex > -1){
				// before the local notification
				removeLocalNotification(reminders[reminderIndex]);

				reminders.splice(reminderIndex, 1);
			}
		},
		check : function(reminderIndex, done){
			
			if(reminderIndex > -1){
				// before the local notification
				removeLocalNotification(reminders[reminderIndex]);

				reminders[reminderIndex].done = done;
			}
		}
	}
}])
.value('version', '0.1');
