-- MySQL dump 10.13  Distrib 8.0.16, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: election_management
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `executive_candidate`
--

DROP TABLE IF EXISTS `executive_candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `executive_candidate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `count` int(11) NOT NULL DEFAULT '0',
  `membership_id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_653fotos1f70x6q9f52v793gc` (`membership_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `executive_candidate`
--

LOCK TABLES `executive_candidate` WRITE;
/*!40000 ALTER TABLE `executive_candidate` DISABLE KEYS */;
INSERT INTO `executive_candidate` VALUES (1,0,'PMA-524','Noor Afroz (Banoo)','PRE_572D984989.jpg'),(3,0,'PMA-548','Nazim Uddin Ahmed','PRE_572D984989.jpg'),(4,0,'PMA-648','Engr. Ahmed Askari','PRE_572D984989.jpg'),(5,0,'PMB-128','W. Alamgir Bhuiyan','PRE_572D984989.jpg'),(6,0,'PMC-223','A.S.M. Ali Khabir Chand','PRE_572D984989.jpg'),(7,0,'PMC-204','Iqbal Bahar Chowdhury (Kochie)','PRE_572D984989.jpg'),(8,0,'PMD-053','Mohammad Ali Deen','PRE_572D984989.jpg'),(9,0,'PMI-165','Dr. Md Zahirul Islam','PRE_572D984989.jpg'),(10,0,'PMK-306','Nilufar Karim','PRE_572D984989.jpg'),(11,0,'PMK-332','Mahdmud Koli','PRE_572D984989.jpg'),(12,0,'PMM-249','Mozibur Rahman Mridha','PRE_572D984989.jpg'),(13,0,'PMM-171','H.M. Murshed','PRE_572D984989.jpg'),(14,0,'PMR-300','Iftekhar Rahman (Mithu)','PRE_572D984989.jpg'),(15,0,'PMR-327','S.M.Z. Razzaque (Masum)','PRE_572D984989.jpg'),(16,0,'PMS-233','Anhara M. Siddiky (Pritha)','PRE_572D984989.jpg');
/*!40000 ALTER TABLE `executive_candidate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `president_candidate`
--

DROP TABLE IF EXISTS `president_candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `president_candidate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `count` int(11) NOT NULL DEFAULT '0',
  `membership_id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_93v27oramsocf50xmu8l2321i` (`membership_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `president_candidate`
--

LOCK TABLES `president_candidate` WRITE;
/*!40000 ALTER TABLE `president_candidate` DISABLE KEYS */;
INSERT INTO `president_candidate` VALUES (1,0,'PMH-356','Enamul Hoque','PRE_572D984989.jpg'),(2,0,'PMM-221','Khairul Majid Mahmud','PRE_572D984989.jpg'),(3,0,'PMM-223','Md. Zillar Rahman','PRE_572D984989.jpg');
/*!40000 ALTER TABLE `president_candidate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voter_list`
--

DROP TABLE IF EXISTS `voter_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `voter_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `membership_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `vote_given` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voter_list`
--

LOCK TABLES `voter_list` WRITE;
/*!40000 ALTER TABLE `voter_list` DISABLE KEYS */;
INSERT INTO `voter_list` VALUES (7,'Md. Enam Ahmed',NULL,'VOTER_572D984988.jpg','PMM-221','933503',_binary '\0'),(8,'Mohammed Tamzid Alam',NULL,'Ziad.jpg','0201','712753',_binary '\0'),(9,'Samar Baidya',NULL,'Ringku.png','0202','675343',_binary '\0'),(10,'Md. Shajid Ibna Haque',NULL,'Shajid.png','0203','195525',_binary '\0'),(11,'Suraya Sultana',NULL,'notfound.png','0204','770825',_binary '\0'),(12,'Rubina Akter',NULL,'Rubina.png','0205',NULL,_binary '\0'),(13,'Pintu Barua',NULL,'notfound.png','0206',NULL,_binary '\0'),(14,'G.K. Ashak Mohammod',NULL,'notfound.png','0207',NULL,_binary '\0'),(15,'Md. Jakaria Khan',NULL,'notfound.png','0208','892976',_binary '\0'),(16,'Md. Mehedi Hasan',NULL,'Mehedi.png','0209',NULL,_binary '\0'),(17,'Md. Reajul Islam',NULL,'notfound.png','0210',NULL,_binary '\0'),(18,'Md. Arafat Rahman',NULL,'notfound.png','0211','234938',_binary '\0'),(19,'Anik Ahmed',NULL,'Anik.png','0212',NULL,_binary '\0'),(20,'Md. Ershad Alam',NULL,'Ershad.png','0213',NULL,_binary '\0'),(21,'Maksuda Khatun Mohua',NULL,'Maksuda.png','0214',NULL,_binary '\0'),(22,'Fatimatut Tabassum',NULL,'Tabassum.png','0215',NULL,_binary '\0'),(23,'Debashish Halder',NULL,'Debashish.png','0216',NULL,_binary '\0'),(24,'Ashim Roy Apu',NULL,'Ashim.png','0217',NULL,_binary '\0'),(25,'Md. Julfikar Emran Hossen',NULL,'Julfikar.png','0218',NULL,_binary '\0'),(26,'MD. Sayed Hossain Mondol',NULL,'notfound.png','0219',NULL,_binary '\0'),(27,'Arifur Rahman Sabuj',NULL,'notfound.png','0220',NULL,_binary '\0'),(28,'Nishat Halim Sharif',NULL,'Nishat.png','0221',NULL,_binary '\0'),(29,'Israt Zaman Keya',NULL,'Keya.png','0222',NULL,_binary '\0'),(30,'Tamanna Nayeema',NULL,'Tamanna.png','0223',NULL,_binary '\0'),(31,'Shadman Sakib',NULL,'Shadman.png','0224',NULL,_binary '\0'),(32,'Azizul Haque Abir',NULL,'Abir.png','0225',NULL,_binary '\0'),(33,'Rajib Hasan',NULL,'Rajib.png','0226',NULL,_binary '\0'),(34,'Md. Nayeeb Rahman',NULL,'Nayeeb.png','0227',NULL,_binary '\0'),(35,'Md. Rezwanul Haque Razib',NULL,'Rezwanul.png','0228',NULL,_binary '\0'),(36,'Shaidul Bashar Sharan',NULL,'Sharan.png','0229',NULL,_binary '\0'),(37,'Shekina Khatun',NULL,'Shekina.png','0230',NULL,_binary '\0'),(38,'Ratri Mukherjee',NULL,'Ratri.png','0231',NULL,_binary '\0'),(39,'Mahdi Uz Zaman',NULL,'Zaman.png','0232',NULL,_binary '\0'),(40,'MD. Azadul Islam',NULL,'Azad.png','0233',NULL,_binary '\0'),(41,'Ahasanul Alam Rifat',NULL,'Ahsanul.png','0234',NULL,_binary '\0'),(42,'Nasir Uddin',NULL,'Nasir.png','0235',NULL,_binary '\0'),(43,'Tajul Islam',NULL,'notfound.png','0236',NULL,_binary '\0'),(44,'Nazrul Islam',NULL,'notfound.png','0237',NULL,_binary '\0'),(45,'Abdul Kader Ovei',NULL,'notfound.png','0238',NULL,_binary '\0'),(46,'MD. Wahidul Islam',NULL,'notfound.png','0239',NULL,_binary '\0'),(47,'Md. Rackibur Rahman',NULL,'notfound.png','0240','885244',_binary '\0'),(48,'Alimul Razib',NULL,'Rajib.png','0241',NULL,_binary '\0'),(49,'Sheikh Nurul Islam Milon',NULL,'notfound.png','0242',NULL,_binary '\0'),(50,'MD. Hossain',NULL,'notfound.png','0243',NULL,_binary '\0'),(51,'Shahadat Hossain',NULL,'notfound.png','0244',NULL,_binary '\0'),(52,'Md. MiRaj',NULL,'notfound.png','0245',NULL,_binary '\0'),(53,'Nice Miah',NULL,'notfound.png','0246',NULL,_binary '\0'),(54,'Selim',NULL,'notfound.png','0247',NULL,_binary '\0'),(55,'Sufia',NULL,'notfound.png','0248',NULL,_binary '\0');
/*!40000 ALTER TABLE `voter_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-11  4:15:22
