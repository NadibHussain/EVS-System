#UPDATE `ems_db`.`executive_candidate` SET count = 0;
#UPDATE `ems_db`.`president_candidate` SET count = 0;
#UPDATE `ems_db`.`voter_list` SET `vote_given` = false WHERE (`id` = '7'); 
#UPDATE `ems_db`.`voter_list` SET `vote_given` = false WHERE (`id` = '43');
#UPDATE `ems_db`.`voter_list` SET `password` = '';
#UPDATE `ems_db`.`voter_list` SET `vote_given` = false

#INSERT INTO executive_candidate(membership_id, name, image_name) VALUES ('PMA-524', 'Noor Afroz (Banoo)','PRE_572D984989.jpg' );
#INSERT INTO executive_candidate(membership_id, name, image_name) VALUES ('PM-001', 'Hasina','PM-001.jpg' );
#TRUNCATE TABLE executive_candidate;
#DROP TABLE executive_candidate;
#DROP TABLE president_candidate;
#DROP TABLE voter_list;
#TRUNCATE TABLE voter_list;
