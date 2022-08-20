CREATE DATABASE  IF NOT EXISTS `reserva_facil` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reserva_facil`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: reserva_facil
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `funcion_id` int NOT NULL,
  PRIMARY KEY (`id`,`funcion_id`),
  KEY `fk_funcion_id_idx` (`funcion_id`),
  CONSTRAINT `fk_funcion_id` FOREIGN KEY (`funcion_id`) REFERENCES `funcion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES (61,'Zhent@gmail.co','8541513',24),(62,'Zhent@gmail.co','8541513',24),(63,'Zhent@gmail.co','8541513',24),(64,'Zhent@gmail.co','8541513',24),(65,'Zhent@gmail.co','8541513',24),(66,'Zhent@gmail.co','8541513',24),(67,'zhent@gmail.com','1234548',26),(68,'zhent@gmail.com','1234548',26),(69,'zhent@gmail.com','1234548',26),(70,'zhent@gmail.com','1234548',26),(71,'zhent@gmail.com','1234548',26),(72,'zhent@gmail.com','1234548',26),(73,'creyes@gmail.com','48115112',27),(74,'creyes@gmail.com','48115112',27),(75,'creyes@gmail.com','48115112',27),(76,'creyes@gmail.com','48115112',27),(77,'pipe@yahoo.es','5418100',30),(78,'pipe@yahoo.es','5418100',30),(79,'pipe@yahoo.es','5418100',30),(80,'pipe@yahoo.es','5418100',30),(81,'pipe@yahoo.es','5418100',30),(82,'mperezp@ud.com','457444',24),(83,'mperezp@ud.com','457444',24),(84,'karinna@gmail.co','4411241',24),(85,'karinna@gmail.co','4411241',24),(86,'tania@yahoo.co','44512454',26),(87,'tania@yahoo.co','44512454',26),(88,'zhent@gmail.com','1234548',31),(89,'zhent@gmail.com','1234548',31),(90,'zhent@gmail.com','1234548',31);
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19  4:02:25
