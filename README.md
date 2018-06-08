# Beep Boop

##### A web application that replace certain numbers with beep, boop, and custom message.

#### By Lan Dam, June 08, 2018

## Description

This application pretend to simulate a robot by taking a number from a user and returns a range of numbers from 0 to the chosen number while replacing certain numbers with beep, boop, and "I'm sorry, Dave. I'm afraid I can't do that".

## Setup

Install Beep Boop by cloning this repository and open index.html on any browser.

## Technologies Used

Application: Bootstrap and jQuery-3.3.1

## Spec

* Takes a number from a user and returns a range of numbers from 0 to the chosen number with some specified exception.
* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* Exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.


| Input           | Expected Output                             |
| --------------- |-----------------------------------          |
| 0               | Beep!                                       |
| 1               | Boop!                                       |
| 2               | 0,1,2                                       |
| 3               | I'm sorry, Dave. I'm afraid I can't do that.|
| 10              | Boop!                                       |
| 30              | I'm sorry, Dave. I'm afraid I can't do that.|
| 12              | I'm sorry, Dave. I'm afraid I can't do that.|

## Contact and Technical Support

For any questions or support details, please email ldam77@yahoo.com

### Legal

Copyright (c) 2018 **Lan Dam**

This software is licensed under the MIT license.
