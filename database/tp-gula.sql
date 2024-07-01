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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11);
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
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Milanesas'),(2,'Pizzas'),(3,'Pastas'),(4,'Verduras'),(5,'Hamburguesas'),(6,'Asado'),(7,'Empanadas'),(8,'Pescados'),(9,'Pollo'),(10,'Papas Fritas');
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
INSERT INTO `food` VALUES (1,'Filete de Merluza con Pure',3500,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaMmYa-zrIzm8VUiICrotSgQ5I_Dsl6n2X6fdVfZOv1miApqdu3TcOILzYKKoJ6U1J7Y','1',1,8),(3,'Pollo al Verdeo con Papas Españolas',5000,10,'https://img-global.cpcdn.com/recipes/a13772f9eb6d35ef/680x482cq70/pollo-con-crema-de-verdeo-y-papas-espanolas-de-bigote-cocina-foto-principal.jpg','1',1,9),(4,'Tarta de Verdura',5000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrisDOwPPOyoBYb4ZhWd8iSfa-0FrxrOYAx00Bpw20SvCioXV1c8gAfL0vf1wQEz0j3I','2',2,4),(5,'Tarta de Pollo',6000,10,'https://media.ambito.com/p/8a496ca35a52045bd384e88e9bad8af3/adjuntos/239/imagenes/040/540/0040540568/tarta-pollojpg.jpg','2',2,9),(6,'Ensalada Cesar',3000,10,'https://cdn.recetasderechupete.com/wp-content/uploads/2020/10/Ensalada-Cesar-final_.jpg','2',2,4),(7,'Pizza Napolitana',4500,10,'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/680x482cq70/pizza-napolitana-foto-principal.jpg','3',3,2),(8,'Pizza 4 Quesos',5000,10,'https://www.comedera.com/wp-content/uploads/2022/04/Pizza-cuatro-quesos-shutterstock_1514858234.jpg','3',3,2),(9,'Pizza de Roquefort',5500,10,'https://img-global.cpcdn.com/recipes/d53d5968c0b16951/1200x630cq70/photo.jpg','3',3,2),(10,'Hamburguesa Completa',4000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63mmdDwPxhfALYzzOQpBWrxtrWmyZYVqQuVu289TgNK25itfE1c7T0oOELMLIj_W1Gs8','4',4,5),(11,'Hamburguesa Simple',3500,10,'https://thumbs.dreamstime.com/b/cheeseburger-simple-727548.jpg','4',4,5),(12,'Hamburguesa Vegetariana',4000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDox77oqAC_Ry_D72ho4V70wXY4V4oaiye7aslaWUA8qrtskoEZoYCzsbKNxIzmlZG4pM','4',4,5),(13,'Papas con Cheddar',2500,10,'https://assets.unileversolutions.com/recipes-v2/217281.jpg','5',5,10),(14,'Papas con Verdeo',3000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIaM_Qt1Md2XsKyjhvrvZnnactCkFI_EvzrDsAr4eDZu0gZSdv-GhRhFMeGQcGSBbqPc','5',5,10),(15,'Papas con Panceta',3000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgexh1XUwaODgiraYZ6XwRhoookg5Tdo8MS_HrxmkG564iGRL7WCvn0JuRCEnFBny-zA','5',5,10),(16,'Ravioles de Verdura con Salsa',6000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Eocl5nUPQmUYO-V8qkv_E5pV5ROIwn3azqJmyaGjariBGBdEy7fyaaEVp-kGhrtQt4E','6',6,3),(17,'Empanadas de Carne Cortada.',8000,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSln8MZYHxrCcZ9M5ut7TYHC9krAVG-0urZTSe6h9yt3Q5Gec8GWnlZ6spC18Jgy4YjXFk','6',6,7),(18,'Porcion de Asado',12000,10,'https://canalc.com.ar/wp-content/uploads/2022/11/asadito.jpg','6',6,6),(19,'Milanesas Simple con papas fritas',4500,10,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdPjsnM5W8Je6iF2AltmX-W0pX27-HLZQCMK-UpLT0yA1VgT3VBK0p9lkG-hnYka8USo','1',1,1),(20,'Milanesa Napolitana con Pure',7000,10,'https://www.recetasnestle.com.ar/sites/default/files/srh_recipes/92ac87f27b9888bd44bea61a76e981af.jpg','1',1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_on_cart`
--

LOCK TABLES `food_on_cart` WRITE;
/*!40000 ALTER TABLE `food_on_cart` DISABLE KEYS */;
INSERT INTO `food_on_cart` VALUES (1,1,9,19);
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
  `profilePicture` varchar(255) NOT NULL DEFAULT 'default-profile_gula.jpg',
  `profileName` varchar(255) NOT NULL,
  `coverPhoto` varchar(255) NOT NULL DEFAULT '0',
  `location` varchar(255) NOT NULL,
  `birthDate` varchar(255) NOT NULL,
  PRIMARY KEY (`profileId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'default-profile_gula.jpg','perez@gula.com','0','Lomas del Toor','17/02/1980'),(2,'default-profile_gula.jpg','gonzales@gula.com','0','Loma del Toor','17/10/1999'),(3,'default-profile_gula.jpg','garcia@gula.com','0','Tedin Uribiru','12/12/1980'),(4,'default-profile_gula.jpg','peralta@gula.com','0','Benito Juarez','2000/12/12'),(5,'default-profile_gula.jpg','pereyra@gula.com','0','Benito Juarez','12-03-2000'),(6,'default-profile_gula.jpg','cperez@gula.com','0','Tedin Uriburu','31/05/2000'),(7,'default-profile_gula.jpg','cardorna@gula.com','0','Estacion Lopez','12/02/1988'),(8,'default-profile_gula.jpg','benedetto@gula.com','0','Estacion Lopez','12/12/1988'),(9,'default-profile_gula.jpg','herrera@gula.com','0','Tedin Uriburu','09/12/1990'),(10,'default-profile_gula.jpg','marciello@gula.com','0','Barker','17/03/1980'),(11,'default-profile_gula.jpg','cadorna@gula.com','0','Estacion Lopez','25/07/1990');
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
  `picture` varchar(255) NOT NULL DEFAULT 'https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp',
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
INSERT INTO `shop` VALUES (1,'Rotiseria Pablo','Benito Juarez','02281111111','Rotiseria Pablo','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:27:23',1),(2,'Lo de Chairo','Benito Juarez','02281222222','Rotiseria Lo de Chairo','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:28:38',2),(3,'Aka Pizzas','Benito Juarez','02281333333','Pizzeria Aka Pizzas','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:29:22',3),(4,'Jooks','Benito Juarez','02281444444','Cerveceria Jooks','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:30:12',4),(5,'La Paperia','Benito Juarez','02281555555','La Paperia','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:30:41',5),(6,'Sabores Al Paso','Benito Juarez','02281666666','Sabores Al Paso','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:31:15',6);
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'perez@gula.com','Jose Perez','$2a$10$/Px8X0ynrnreckkgF30lLeDB4gcpyL28EWZjmu1eYaAEqTrwNBLiW','2024-05-28 18:20:50',1,1),(2,'gonzales@gula.com','Marcela Gonzales','$2a$10$X0livswj90vPxHJlDCCVJOppm0zxPmTVz4eC0a2UZgC.s933ojVcW','2024-06-02 15:26:47',2,2),(3,'garcia@gula.com','Carla Garcia','$2a$10$EndKX.kw1R6MutBmt8LOiux4ZyNMxHMxdylHWWGuTdMSakXojOCba','2024-06-02 15:40:34',3,3),(4,'peralta@gula.com','Pablo Peralta','$2a$10$ySZXOPbc2gFl0WxLjLXt9umFbIzzorteDFUq.6DZ1Hv0rQip2j1dm','2024-06-07 21:18:36',4,4),(5,'pereyra@gula.com','Manuel Pereyra','$2a$10$7vj4Uo6/QzDzyuKKuKOFOu46J/O/SyPSLulX7KE/OCir6gNeFQq3G','2024-06-09 15:11:37',5,5),(6,'cperez@gula.com','Carlos Perez','$2a$10$Z30wv7gvMJbqSt.3KwAPw.0emCLO6uriMuAekYU4nJl.PzLNFdIUe','2024-06-09 15:18:29',6,6),(7,'cardorna@gula.com','Analia Cadorna','$2a$10$qN1S5QscgoS1aNipB1OcM.r/F6RQryakMGWxwpJe1ZSd2e9xH4WO.','2024-06-09 15:58:22',7,7),(8,'benedetto@gula.com','Dario Benedetto','$2a$10$sajd/rJddrg.Y/NJDiiGB.cg4k4nKsZU/F7xEEI0snR5OVTkrN5fi','2024-06-15 15:12:07',8,8),(9,'herrera@gula.com','Jose Maria Perez','$2a$10$1OGwsYPxJ1z6DjFLG0ux7.QstGjFF8KGr7/EYMvl7M8sX3qW.dUtS','2024-06-15 15:48:26',9,9),(10,'marciello@gula.com','Claudia Marciello','$2a$10$GPEyZMXHLIPHOh6f2Ayzp.YcMEsba08ze3hN64IOfirsqWO123M52','2024-06-16 19:25:42',10,10),(11,'cadorna@gula.com','Alberto Cadorna','$2a$10$6kiq6lYbKVvqGI32H5Ml7u5T5OYOJTIX2EYDxRmqZXAEetU3FYJFK','2024-06-20 16:18:39',11,11);
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

-- Dump completed on 2024-07-01 12:33:04
