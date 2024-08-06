-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tp-gula
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cartId` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryId` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL DEFAULT 'https://iili.io/d5tLpMx.png',
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Milanesas','https://iili.io/d5tLrG4.png'),(2,'Pizzas','https://iili.io/d5tLs87.png'),(3,'Pastas','https://iili.io/d5tLy6Q.pngusp=sharing'),(4,'Verduras','https://iili.io/d5tQ391.png'),(5,'Hamburguesas','https://iili.io/d5tLtwu.png'),(6,'Asado','https://iili.io/d5tLiaS.png'),(7,'Empanadas','https://iili.io/d5tL46l.png'),(8,'Pescados','https://iili.io/d5tQJcB.png'),(9,'Pollo','https://iili.io/d5tQd8P.png'),(10,'Papas Fritas','https://iili.io/d5tLpMx.png');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `foodId` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',
  `review` varchar(255) NOT NULL,
  `shop` int DEFAULT NULL,
  `category` int DEFAULT NULL,
  PRIMARY KEY (`foodId`),
  KEY `FK_3ff38fd6f58f23ea924f3c991cc` (`shop`),
  KEY `FK_27ce7f11734066b9ec5d4d95497` (`category`),
  CONSTRAINT `FK_27ce7f11734066b9ec5d4d95497` FOREIGN KEY (`category`) REFERENCES `category` (`categoryId`) ON DELETE CASCADE,
  CONSTRAINT `FK_3ff38fd6f58f23ea924f3c991cc` FOREIGN KEY (`shop`) REFERENCES `shop` (`shopId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Filete de Merluza con Pure',3500,10,'https://iili.io/d5t1yRs.webp','1',1,8),(3,'Pollo al Verdeo con Papas Españolas',5000,10,'https://iili.io/d5tEHbf.webp','1',1,9),(4,'Tarta de Verdura',5000,10,'https://iili.io/d5tE2Wl.webp','2',2,4),(5,'Tarta de Pollo',6000,10,'https://iili.io/d5tE9OG.webp','2',2,9),(6,'Ensalada Cesar',3000,10,'https://iili.io/d5tEKfS.webp','2',2,4),(7,'Pizza Napolitana',4500,10,'https://iili.io/d5tEf07.webp','3',3,2),(8,'Pizza 4 Quesos',5000,10,'https://iili.io/d5tEqg9.webp','3',3,2),(9,'Pizza de Roquefort',5500,10,'https://iili.io/d5tEoOb.webp','3',3,2),(10,'Hamburguesa Completa',4000,10,'https://iili.io/d5tEn5u.webp','4',4,5),(11,'Hamburguesa Simple',3500,10,'https://iili.io/d5tExbj.webp','4',4,5),(12,'Hamburguesa Vegetariana',4000,10,'https://iili.io/d5tEIzx.webp','4',4,5),(13,'Papas con Cheddar',2500,10,'https://iili.io/d5tERqB.webp','5',5,10),(14,'Papas con Verdeo',3000,10,'https://iili.io/d5tETWQ.webp','5',5,10),(15,'Papas con Panceta',3000,10,'https://iili.io/d5tEusV.webp','5',5,10),(16,'Ravioles de Verdura con Salsa',6000,10,'https://iili.io/d5tE50P.webp','6',6,3),(17,'Empanadas de Carne Cortada.',8000,10,'https://iili.io/d5tE7g1.webp','6',6,7),(18,'Porcion de Asado',12000,10,'https://iili.io/d5tEc5g.webp','6',6,6),(19,'Milanesas Simple con papas fritas',4500,10,'https://iili.io/d5tEadF.webp','1',1,1),(20,'Milanesa Napolitana con Pure',7000,10,'https://iili.io/d5tElea.webp','1',1,1);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_on_cart`
--

DROP TABLE IF EXISTS `food_on_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_on_cart` (
  `foodOnCartId` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL DEFAULT '1',
  `cart` int DEFAULT NULL,
  `food` int DEFAULT NULL,
  PRIMARY KEY (`foodOnCartId`),
  KEY `FK_1a043d92005388729171ed57dbb` (`cart`),
  KEY `FK_9c3cbaf197f314f7e61550a90b8` (`food`),
  CONSTRAINT `FK_1a043d92005388729171ed57dbb` FOREIGN KEY (`cart`) REFERENCES `cart` (`cartId`) ON DELETE CASCADE,
  CONSTRAINT `FK_9c3cbaf197f314f7e61550a90b8` FOREIGN KEY (`food`) REFERENCES `food` (`foodId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_on_cart`
--

LOCK TABLES `food_on_cart` WRITE;
/*!40000 ALTER TABLE `food_on_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `food_on_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `invoiceId` int NOT NULL AUTO_INCREMENT,
  `invoiceNumber` varchar(255) NOT NULL,
  `foodId` int NOT NULL,
  `foodDescription` varchar(255) NOT NULL,
  `foodAmount` int NOT NULL,
  `foodUnitaryPrice` int NOT NULL,
  `emittedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `shop` int DEFAULT NULL,
  `cart` int DEFAULT NULL,
  PRIMARY KEY (`invoiceId`),
  KEY `FK_74bb0223920b61980637d9ae08f` (`shop`),
  KEY `FK_fd3873f7f67c501e5c4ff49e27c` (`cart`),
  CONSTRAINT `FK_74bb0223920b61980637d9ae08f` FOREIGN KEY (`shop`) REFERENCES `shop` (`shopId`) ON DELETE CASCADE,
  CONSTRAINT `FK_fd3873f7f67c501e5c4ff49e27c` FOREIGN KEY (`cart`) REFERENCES `cart` (`cartId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `postId` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `stars` int NOT NULL DEFAULT '0',
  `image` varchar(255) DEFAULT NULL,
  `postedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `shop` int DEFAULT NULL,
  PRIMARY KEY (`postId`),
  KEY `FK_dadf10fc013ef0fd17a4635aa98` (`shop`),
  CONSTRAINT `FK_dadf10fc013ef0fd17a4635aa98` FOREIGN KEY (`shop`) REFERENCES `shop` (`shopId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` int NOT NULL AUTO_INCREMENT,
  `profilePicture` varchar(255) NOT NULL DEFAULT 'https://iili.io/d5DJhYJ.webp',
  `profileName` varchar(255) NOT NULL,
  `coverPhoto` varchar(255) NOT NULL DEFAULT '0',
  `location` varchar(255) NOT NULL,
  `birthDate` varchar(255) NOT NULL,
  PRIMARY KEY (`profileId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'https://iili.io/d5DJ5db.webp','perez@gula.com','0','Lomas del Toor','17/02/1980'),(2,'https://iili.io/d5DJ77j.webp','gonzales@gula.com','0','Loma del Toor','17/10/1999'),(3,'https://iili.io/d5DJAru.webp','garcia@gula.com','0','Tedin Uribiru','12/12/1980'),(4,'https://iili.io/d5DJu1e.webp','peralta@gula.com','0','Benito Juarez','2000/12/12'),(5,'https://iili.io/d5DJYkx.webp','pereyra@gula.com','0','Benito Juarez','12-03-2000'),(6,'https://iili.io/d5DJamQ.webp','cperez@gula.com','0','Tedin Uriburu','31/05/2000'),(7,'https://iili.io/d5DJlIV.webp','cardorna@gula.com','0','Estacion Lopez','12/02/1988'),(8,'https://iili.io/d5DJ0hB.webp','benedetto@gula.com','0','Estacion Lopez','12/12/1988'),(9,'https://iili.io/d5DJ1LP.webp','herrera@gula.com','0','Tedin Uriburu','09/12/1990'),(10,'https://iili.io/d5DJGB1.webp','marciello@gula.com','0','Barker','17/03/1980'),(11,'https://iili.io/d5DJMEF.webp','cadorna@gula.com','0','Estacion Lopez','25/07/1990'),(12,'https://iili.io/d5DJVrg.webp','lopez@gula.com','0','Benito Juarez','12/03/1980'),(13,'https://iili.io/d5DJX2a.webp','martinez@gula.com','0','Villa Cacique','03/05/1992');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `shopId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `profilename` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL DEFAULT 'https://iili.io/d7pH8Xt.webp',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` int DEFAULT NULL,
  PRIMARY KEY (`shopId`),
  UNIQUE KEY `IDX_f0640e30fef1d175426d80dbc1` (`name`),
  UNIQUE KEY `IDX_270141acb2960da882c1306da7` (`profilename`),
  KEY `FK_37c69b38ddaaeaa2f0769fe4785` (`user`),
  CONSTRAINT `FK_37c69b38ddaaeaa2f0769fe4785` FOREIGN KEY (`user`) REFERENCES `user` (`userId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,'Rotiseria Pablo','Benito Juarez','02281111111','Rotiseria Pablo','https://iili.io/d7pHX1a.webp','2024-06-09 16:27:23',1),(2,'Lo de Chairo','Benito Juarez','02281222222','Rotiseria Lo de Chairo','https://iili.io/d7pHEzP.webp','2024-06-09 16:28:38',2),(3,'Aka Pizzas','Benito Juarez','02281333333','Pizzeria Aka Pizzas','https://iili.io/d7pHGX1.webp','2024-06-09 16:29:22',3),(4,'Jooks','Benito Juarez','02281444444','Cerveceria Jooks','https://iili.io/d7pHMLF.webp','2024-06-09 16:30:12',4),(5,'La Paperia','Benito Juarez','02281555555','La Paperia','https://iili.io/d7pHN7R.webp','2024-06-09 16:30:41',5),(6,'Sabores Al Paso','Benito Juarez','02281666666','Sabores Al Paso','https://iili.io/d7pHvII.webp','2024-06-09 16:31:15',6);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cart` int DEFAULT NULL,
  `profile` int DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`),
  UNIQUE KEY `REL_5d040d256035ba8f6882515978` (`cart`),
  UNIQUE KEY `REL_3536716a8b146aece3c6155af0` (`profile`),
  CONSTRAINT `FK_3536716a8b146aece3c6155af04` FOREIGN KEY (`profile`) REFERENCES `profile` (`profileId`) ON DELETE CASCADE,
  CONSTRAINT `FK_5d040d256035ba8f6882515978f` FOREIGN KEY (`cart`) REFERENCES `cart` (`cartId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'perez@gula.com','Jose Perez','$2a$10$/Px8X0ynrnreckkgF30lLeDB4gcpyL28EWZjmu1eYaAEqTrwNBLiW','2024-05-28 18:20:50',1,1),(2,'gonzales@gula.com','Marcela Gonzales','$2a$10$X0livswj90vPxHJlDCCVJOppm0zxPmTVz4eC0a2UZgC.s933ojVcW','2024-06-02 15:26:47',2,2),(3,'garcia@gula.com','Carla Garcia','$2a$10$EndKX.kw1R6MutBmt8LOiux4ZyNMxHMxdylHWWGuTdMSakXojOCba','2024-06-02 15:40:34',3,3),(4,'peralta@gula.com','Pablo Peralta','$2a$10$ySZXOPbc2gFl0WxLjLXt9umFbIzzorteDFUq.6DZ1Hv0rQip2j1dm','2024-06-07 21:18:36',4,4),(5,'pereyra@gula.com','Manuel Pereyra','$2a$10$7vj4Uo6/QzDzyuKKuKOFOu46J/O/SyPSLulX7KE/OCir6gNeFQq3G','2024-06-09 15:11:37',5,5),(6,'cperez@gula.com','Carlos Perez','$2a$10$Z30wv7gvMJbqSt.3KwAPw.0emCLO6uriMuAekYU4nJl.PzLNFdIUe','2024-06-09 15:18:29',6,6),(7,'cardorna@gula.com','Analia Cadorna','$2a$10$qN1S5QscgoS1aNipB1OcM.r/F6RQryakMGWxwpJe1ZSd2e9xH4WO.','2024-06-09 15:58:22',7,7),(8,'benedetto@gula.com','Dario Benedetto','$2a$10$sajd/rJddrg.Y/NJDiiGB.cg4k4nKsZU/F7xEEI0snR5OVTkrN5fi','2024-06-15 15:12:07',8,8),(9,'herrera@gula.com','Jose Maria Perez','$2a$10$1OGwsYPxJ1z6DjFLG0ux7.QstGjFF8KGr7/EYMvl7M8sX3qW.dUtS','2024-06-15 15:48:26',9,9),(10,'marciello@gula.com','Claudia Marciello','$2a$10$GPEyZMXHLIPHOh6f2Ayzp.YcMEsba08ze3hN64IOfirsqWO123M52','2024-06-16 19:25:42',10,10),(11,'cadorna@gula.com','Alberto Cadorna','$2a$10$6kiq6lYbKVvqGI32H5Ml7u5T5OYOJTIX2EYDxRmqZXAEetU3FYJFK','2024-06-20 16:18:39',11,11),(12,'lopez@gula.com','Juana Lopez','$2a$10$bVLTQ72lDAjVx/W4aPwwsukZgB/5pFY8uDdaZLU.G9mlL8F9lrvji','2024-07-05 16:13:16',12,12),(13,'martinez@gula.com','Emiliano Martinez','$2a$10$wbMN1O.qtZWFs3xTphQV0O4OqqMED1IVUq2ZAJTQipARF06P5j4n2','2024-07-05 20:46:26',13,13);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-06 11:40:14
