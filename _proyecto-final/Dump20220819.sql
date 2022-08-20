CREATE DATABASE  IF NOT EXISTS `reserva_facil_dump` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reserva_facil_dump`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: reserva_facil_dump
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
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'admin','admin123'),(2,'admin2','admin2123');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES (31,'El viaje de el viaje de Chihiro','/images/el-viaje-de-chihiro.png'),(32,'Hamlet','/images/hamlet.png'),(33,'La unión hace la fuerza','/images/la-union.png');
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `evento_AFTER_INSERT` AFTER INSERT ON `evento` FOR EACH ROW BEGIN
	INSERT INTO eventolugar (lugar_id, evento_id) VALUES (1, NEW.id);
    INSERT INTO eventolugar (lugar_id, evento_id) VALUES (2, NEW.id);
    INSERT INTO eventolugar (lugar_id, evento_id) VALUES (3, NEW.id);
    INSERT INTO eventolugar (lugar_id, evento_id) VALUES (4, NEW.id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `evento_BEFORE_DELETE` BEFORE DELETE ON `evento` FOR EACH ROW BEGIN
	DELETE FROM funcion WHERE id = OLD.id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `eventolugar`
--

DROP TABLE IF EXISTS `eventolugar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventolugar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lugar_id` int NOT NULL,
  `evento_id` int NOT NULL,
  PRIMARY KEY (`id`,`lugar_id`,`evento_id`),
  KEY `fk_evento_id_idx` (`evento_id`),
  KEY `fk_lugar_id_idx` (`lugar_id`),
  CONSTRAINT `fk_evento_id` FOREIGN KEY (`evento_id`) REFERENCES `evento` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_lugar_id` FOREIGN KEY (`lugar_id`) REFERENCES `lugar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventolugar`
--

LOCK TABLES `eventolugar` WRITE;
/*!40000 ALTER TABLE `eventolugar` DISABLE KEYS */;
INSERT INTO `eventolugar` VALUES (1,1,31),(2,2,31),(3,3,31),(4,4,31),(5,1,32),(6,2,32),(7,3,32),(8,4,32),(9,1,33),(10,2,33),(11,3,33),(12,4,33);
/*!40000 ALTER TABLE `eventolugar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcion`
--

DROP TABLE IF EXISTS `funcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hora` varchar(100) NOT NULL,
  `lugar_id` int NOT NULL,
  `evento_id` int NOT NULL,
  PRIMARY KEY (`id`,`lugar_id`,`evento_id`),
  KEY `fk_funcion_lugar_id_idx` (`lugar_id`),
  CONSTRAINT `fk_funcion_lugar_id` FOREIGN KEY (`lugar_id`) REFERENCES `lugar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcion`
--

LOCK TABLES `funcion` WRITE;
/*!40000 ALTER TABLE `funcion` DISABLE KEYS */;
INSERT INTO `funcion` VALUES (23,'6:00 pm',2,30),(24,'7:00 pm',1,31),(25,'11:00 pm',3,31),(26,'1:00 pm',4,31),(27,'6:00 pm',1,32),(28,'5:00 pm',4,32),(29,'3:00 pm',2,32),(30,'11:00 pm',2,31),(31,'5:00 pm',4,33);
/*!40000 ALTER TABLE `funcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugar`
--

DROP TABLE IF EXISTS `lugar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lugar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lugar` varchar(255) NOT NULL,
  `capacidad` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugar`
--

LOCK TABLES `lugar` WRITE;
/*!40000 ALTER TABLE `lugar` DISABLE KEYS */;
INSERT INTO `lugar` VALUES (1,'centro - sala 1',10),(2,'centro - sala 2',8),(3,'este - sala 1',6),(4,'oeste - sala 1',8);
/*!40000 ALTER TABLE `lugar` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping events for database 'reserva_facil_dump'
--

--
-- Dumping routines for database 'reserva_facil_dump'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-19  4:11:59
