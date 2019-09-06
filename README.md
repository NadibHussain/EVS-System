# EVS-System
* Frontedend: React.js
* Backend: Spring-Boot

## Backend-Setup

### Software rewuirement:

Mysql Workbench [download file https://dev.mysql.com/downloads/workbench/ ]
sts-4.1.1.RELEASE [download zip file from https://spring.io/tools3/sts/all ]

### Instruction:

open project folder in sts tools File>Open project from file system > select folder directory [D:\Tajul\Final Project\EMS\backend]

right click on project > maven > update project . [project name in left side tab ]

Go to --> src/main/java > com.election.management.utility > StorageProperties.java
change the image folder path. [copy directory from folder properties]

private String location = "D:\Tajul\Final Project\EMS\backend\voter_list_images";


### DB setup:

Open MySql Workbenchand and create new user from entering root and run this -->
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

Example: CREATE USER 'tajulislam'@'localhost' IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON . to 'tajulislam'@'localhost';

Now from workbench home create a new connection

Enter connection name as EMS and user [your user name that you create like tajulislam] 3. Test connection and ok. 4. From workbench home open your connection using your password 5. Create new schema from left bar schema by right click> crete schema enter schema name like ems_db > Apply

Note: if schema name not showed then close the connection and reopen the connection.


Right click > Run as > Java Application

## Fronted-Setup
### Installation

Please run the following commands in cmd

```
npm init
```

```
npm install
```
```
npm start
```
### Admin 
* username:admin@gmail.com
* password:@dmin
### Voter 
* username:Voter1@1234
* password:123456
## ScreenShots
![Screenshot (12)](https://user-images.githubusercontent.com/44313607/64461698-ba390080-d11f-11e9-9296-f605cdccb3ac.png)
![Screenshot (7)](https://user-images.githubusercontent.com/44313607/64461678-aab9b780-d11f-11e9-901e-4e5ef9b3a574.png)
![Screenshot (8)](https://user-images.githubusercontent.com/44313607/64461694-b9a06a00-d11f-11e9-9369-d9b3ee6da5a8.png)
![Screenshot (9)](https://user-images.githubusercontent.com/44313607/64461695-b9a06a00-d11f-11e9-8d33-441d01db2f85.png)
![Screenshot (10)](https://user-images.githubusercontent.com/44313607/64461697-ba390080-d11f-11e9-91ac-55fa07b947aa.png)
