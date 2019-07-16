
### Train Scheduler

TrainScheduler is an application that allows the user to enter information about a train and stores the information from the user in a realtime databse. The information is then sent to the webpage and can be viewed. 

## How it works
This program takes in the following user inputs.
- Train Name
- Destination
- First Train Time
- Frequency

This values are stored as variables and then sent to our database to be referenced once the form has been submitted. The program will then display a table that will show

- Train Name
- Destination
- Frequency
- Next Arrival
- Minutes Away

We format the data using moment js to display the the arrival time. The next arrival time is computed by utilizing moment js and is formatted with the correct AM or PM time. 

## Built With
* Jquery
* JavaScript
* CSS
* HTML
* moment js
* bootstrap
* firebase

## To Do 

* Add sound
* Add more images
* Convert this to an API that provides realtime train information

## Author 
Nenye Diei

Check out my other [projects](https://wctcprog98.github.io/responsive-portfolio/)