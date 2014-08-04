'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory("reminderService", [ "$cordovaPush", "localStorageService", 
	function($cordovaPush, localStorageService){

	var REMINDERS_KEY = "reminders-key";
	var notificacionIndex = -1;

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
			var messageStr = "";
			// Vaccines & deworming
			if(reminder.treatment.type < 3){
				messageStr = "Le recordarmos que a " + reminder.text + " le corresponde";
			
				// treatment types
				if(reminder.treatment.type == 0){
					messageStr += " la vacunación. No olvide llamarnos para pedir cita previa.";	
				}
				if(reminder.treatment.type == 1){
					messageStr += " la desparasitación interna.";
				}
				if(reminder.treatment.type == 2){
					messageStr += " la desparasitación externa.";
				}
			}
			else{
				// Review
				if(reminder.treatment.type == 3){
					messageStr += "Le recordamos que " + reminder.text + " debe acudir a su revisión periódica, no olvide llamarnos para pedir cita previa.";
				}
				// General treatment
				if(reminder.treatment.type == 4){
					messageStr += "Le recordamos que a " + reminder.text + " le corresponde su tratamiento.";
				}
			}
			window.plugin.notification.local.add({
				id: reminder.id,
			    title:   'Hospital veterinario Nacho Menes',
			    message: messageStr,
			    date: reminder.date
			});

			// retrive the Scheduled Local Notifications
			window.plugin.notification.local.getScheduledIds(function (scheduledIds) {
    			// console.log('Scheduled IDs: ' + scheduledIds.join(' ,'));
    		});
		}
	}

	function removeLocalNotification(reminder){
		if(window.plugin){
			window.plugin.notification.local.cancel(reminder.id, function (){
				// retrive the Scheduled Local Notifications
				window.plugin.notification.local.getScheduledIds(function (scheduledIds) {
	    			// console.log('Scheduled IDs: ' + scheduledIds.join(' ,'));
	    		});
			});
		}		
	}

	var reminders = [];

	return {
		all: function(){

			reminders.length=0;;
			var tempReminders = localStorageService.get(REMINDERS_KEY); 
			
			for (var i = 0; i < tempReminders.length; i++) {
            	var reminderTemp = tempReminders[i];
            	reminders.push(new Reminder(reminderTemp.id, reminderTemp.text, reminderTemp.pet, new Date(reminderTemp.date), reminderTemp.treatment));				
        	}
			
			return reminders;
		},
		add: function(reminder){
			
			var repetition = 0;
			var duration = parseInt(reminder.duration);
			
			switch(reminder.frequency){
  			  // only once
  			  case 0:
  			  	repetition = 1;
      			break;
       		  // monthly
    		  case 1:
    		  	repetition = 12 * duration; 
		        break;
		       //bimonthly
	          case 2:
	          	repetition = 6 * duration;
		        break;
		      // trimestral
		      case 3:
		      	repetition = 4 * duration;
		      	break;
		      // quarterly
 	          case 4:
 	            repetition = 3 * duration;  	            
 	            break;
		      // semiannual
		      case 5:
		        repetition = 2 * duration;
		        break;
		      // annual
	          case 6:
	          	repetition = 1 * duration;
		        break;
		      // only once
			  default:
	     		repetition = 1;
			  	break;		     	 
			}

			// create a new date object
			var reminderDate = new Date(reminder.begin);

			while(repetition > 0){

				notificacionIndex ++;

				reminders.push(new Reminder(notificacionIndex.toString(), reminder.text, reminder.pet, reminderDate, reminder.treatment));
				localStorageService.clearAll();

				if(localStorageService.add(REMINDERS_KEY, reminders)){
					// add local notification
					addLocalNotification(reminders[reminders.length-1]);	
				}
				else{
					console.error("Error inserting the reminder");
				}
				
				// create a new date object
				reminderDate = new Date(reminderDate.getTime());
			
				switch(reminder.frequency){
	       		  // monthly
	    		  case 1:
	    		    reminderDate.setMonth(reminderDate.getMonth() + 1);
			        break;
			       //bimonthly
		          case 2:
			        reminderDate.setMonth(reminderDate.getMonth() + 2);
			        break;
			      // trimestral
	 	          case 3:
	  	            reminderDate.setMonth(reminderDate.getMonth() + 3);
	 	            break;
	 	          // quarterly
	 	          case 4:
	  	            reminderDate.setMonth(reminderDate.getMonth() + 4);
	 	            break;
			      // semiannual
			      case 5:
			        reminderDate.setMonth(reminderDate.getMonth() + 6);
			        break;
			      // annual
		          case 6:
			        reminderDate.setFullYear(reminderDate.getFullYear() + 1);
			        break;		     	 
				}

				repetition --;
			}			
		},
		remove: function(reminder){

			var reminderIndex = reminders.indexOf(reminder);

			if(reminderIndex > -1){
				// before the local notification
				removeLocalNotification(reminders[reminderIndex]);

				reminders.splice(reminderIndex, 1);

				localStorageService.clearAll();

				if(!localStorageService.add(REMINDERS_KEY, reminders)){
					console.error("Error inserting the reminder");
				}
			}
		},
		check: function(reminder, done){
			
			var reminderIndex = reminders.indexOf(reminder);

			if(reminderIndex > -1){

				if(done){
					// remove the local notification
					removeLocalNotification(reminders[reminderIndex]);
				}
				else{
					// add local notification
					addLocalNotification(reminders[reminderIndex]);
				}

				reminders[reminderIndex].done = done;
			}
		}
	}
}])
.value('version', '1.0');
