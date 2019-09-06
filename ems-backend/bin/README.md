#Backend setup-

#Software rewuirement:

1. Mysql Workbench [download file  https://dev.mysql.com/downloads/workbench/ ]
2. sts-4.1.1.RELEASE [download zip file from https://spring.io/tools3/sts/all ]

#Instruction:

1. open project folder in sts tools 
    File>Open project from file system > select folder directory [D:\Tajul\Final Project\EMS\backend]

2. right click on project > maven > update project . [project name in left side tab ]
3. Go to --> src/main/java > com.election.management.utility > StorageProperties.java
4. change the image folder path. [copy directory from folder properties]

	private String location = "D:\\Tajul\\Final Project\\EMS\\backend\\voter_list_images"; 

Help: [code line 18 may be]

5. To change the server port go to src/main/resources/application.properties

	server.port=8080 [change here if you want]

#DB setup-

1. Open MySql Workbenchand and create new user from entering root and run this -->

CREATE USER 'username'@'localhost'
IDENTIFIED BY 'password'; 

Example:  CREATE USER 'tajulislam'@'localhost'
IDENTIFIED BY 'admin';
	 
GRANT ALL PRIVILEGES ON *.* to 'tajulislam'@'localhost';
 

2. Now from workbench home create a new connection 

	Enter connection name as EMS and user [your user name that you create like tajulislam] 
3. Test connection and ok. 
4. From workbench home open your connection using your password 
5. Create new schema from left bar schema by right click> crete schema
	enter schema name like ems_db > Apply

Note: if schema name not showed then close the connection and reopen the connection.

6. Server Tab> Data import > import from self-contain file > 
	select db file > default target schema>schema name[ems_db] 
7. Progress tab > import > done. 
8. Now Go to sts tools project directory

	src/main/resources/application.properties
9. Now change the db name , user name, password. like 

	spring.datasource.url=jdbc:mysql://localhost:3306/dbschema_name?serverTimezone=EST
	spring.datasource.username=username
	spring.datasource.password=user password
Example: 
	spring.datasource.url=jdbc:mysql://localhost:3306/ems_db?serverTimezone=EST
	spring.datasource.username=tajulislam
	spring.datasource.password=admin
	
Help: [code line 22-24 may be]

10. Go to src/main/java > com.election.management/ElectionManagementSystemApplication.java

11. Right click > Run as > Java Application 

Backend is ready to use....
