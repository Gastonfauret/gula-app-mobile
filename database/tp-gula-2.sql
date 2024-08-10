-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tp-gula-2
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1),(2),(3),(4),(5),(6),(7),(8);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Carnes','carne.png'),(2,'Hamburguesas','hamburguesa.png'),(3,'Panchos','pancho.png'),(4,'Bebidas','bebida.png'),(5,'Postres','postre.png'),(6,'Cervezas','cerveza.png'),(7,'Papas fritas','papas.png'),(8,'Pastas','pastas.png'),(9,'Pizzas','pizza.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Milanesa a la napolitana c/ papas',5600,100,'milanesa.jpg','Las milanesas mas grandes y sabrosas!',1,9),(2,'Hamburguesa doble cheddar',4400,55,'doble-cheddar.jpg','Lunes a la mañana? No importa, siempre es buen momento para una buena doble cheddar',1,2),(3,'Empanadas de jyq x 12U',7500,66,'empanadas.jpg','Las empanadas mas pipi cucu de la cuadra',2,1),(4,'Agua saborizada levite x 500cc',1100,122,'levite.jpg','Agua saborizada levite x 500cc',2,4),(5,'Pizza a la calabresa x 8 porciones',5900,98,'calabresa.jpg','No te mueras sin probar nuestra exquisita pizza a la calabresa',3,9),(6,'Pizza muzzarella x 8 porciones',5200,66,'muzzarella.jpg','Pizza muzzarella con abundante quesito, como dios manda',3,9),(7,'Choripan a la pomarola',4500,44,'Choripan-Argentinian-Chorizo-Sandwiches-1-of-3-500x500.jpg-1718902210738-981489217.jpg-1720218713261-910339910.jpg','Los mejores choripanes de BJ',1,1),(8,'Papas con cheddar',3000,20,'cheddar.jpg','Las mejores papas del condado.',4,7),(9,'Pancho con Papas',2000,12,'pancho.jpeg','Hermoso pancho',4,3),(10,'Selva Negra',3000,15,'selva.jpeg','Re rico',3,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_on_cart`
--

LOCK TABLES `food_on_cart` WRITE;
/*!40000 ALTER TABLE `food_on_cart` DISABLE KEYS */;
INSERT INTO `food_on_cart` VALUES (39,6,1,4),(40,4,1,7),(41,1,2,1),(42,2,1,3),(43,1,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (8,'C001 00000001',4,'Agua saborizada levite x 500cc',2,1100,'2024-07-25 17:28:04',2,1),(9,'C001 00000001',2,'Hamburguesa doble cheddar',1,4400,'2024-07-25 17:28:04',1,1),(10,'C001 00000002',7,'Choripan a la pomarola',1,4500,'2024-07-25 17:47:47',1,1),(11,'C001 00000003',4,'Agua saborizada levite x 500cc',1,1100,'2024-07-25 17:52:22',2,1),(12,'C001 00000004',4,'Agua saborizada levite x 500cc',1,1100,'2024-07-25 17:53:06',2,1),(13,'C001 00000005',4,'Agua saborizada levite x 500cc',1,1100,'2024-07-25 17:54:22',2,1),(14,'C001 00000006',4,'Agua saborizada levite x 500cc',1,1100,'2024-07-25 17:56:38',2,1),(15,'C001 00000007',4,'Agua saborizada levite x 500cc',1,1100,'2024-07-25 17:59:01',2,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'¡Prueba nuestra deliciosa pizza Margarita con mozzarella fresca y albahaca recién cortada! Perfecta para cualquier ocasión.',0,NULL,'2024-07-02 18:36:52',1),(2,'Disfruta de nuestro sushi de atún rojo con aguacate y salsa de soya. ¡Una explosión de sabor en cada bocado!',0,'sushi.jpg','2024-07-02 18:36:52',3),(3,'Ven y prueba nuestro auténtico asado 100% argentino con chimi y fideos caseros. ¡Una experiencia culinaria inolvidable!',0,'asado.jpg','2024-07-02 18:36:52',2),(4,'No te pierdas nuestra hamburguesa de ternera con queso cheddar y tocino crujiente. ¡El placer en cada mordisco!',0,NULL,'2024-07-02 18:36:52',3),(5,'Descubre el sabor de nuestras enchiladas de pollo con salsa roja y queso gratinado. ¡Un platillo tradicional mexicano!',0,'enchiladas.jpg','2024-07-02 18:36:52',1),(6,'Prueba nuestra paella de mariscos con arroz dorado y una variedad de mariscos frescos. ¡Un manjar mediterráneo!',0,'mariscos.jpg','2024-07-02 18:36:52',3),(7,'Disfruta de nuestro curry tailandés de pollo con leche de coco y vegetales frescos. ¡Una explosión de sabores exóticos!',0,NULL,'2024-07-02 18:36:52',1),(8,'Ven y prueba nuestro falafel de garbanzos con salsa tahini y ensalada fresca. ¡Una opción saludable y deliciosa!',0,NULL,'2024-07-02 18:36:52',2),(9,'No te pierdas nuestras crêpes de Nutella con fresas frescas y crema batida. ¡El postre perfecto para cualquier momento!',0,'crepes.jpg','2024-07-02 18:36:52',2),(10,'Mañana sabado 06-07 no te pierdas el show exclusivo de los Red hot chili peppers en vivo!! Entrada libre y gratuita',0,NULL,'2024-07-05 19:38:10',1),(11,'Holaaaa',0,NULL,'2024-07-29 02:57:49',2),(12,'Holaaaaaassss',0,NULL,'2024-07-29 02:58:01',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'default-profile_gula.jpg','tomicardenas','0','Benito Juarez','1996-01-24'),(2,'default-profile_gula.jpg','gastonfauret@gmail.com','0','Benito Juarez','1980-05-02'),(3,'default-profile_gula.jpg','adriancalo@gmail.com','0','Benito Juarez','1992-08-11'),(4,'79318767-gente-adulta-cara-retrato-de-estudio-de-expresiÃ³n-de-sonrisa.jpg-1720224802538-506487602.jpg','marcelo@gmail.com','0','Tandil','1999-11-02'),(5,'default-profile_gula.jpg','juanbenitez@gmail.com','0','Benito Juarez','1990-01-01'),(6,'default-profile_gula.jpg','paulwalker@gmail.com','0','Benito Juarez','1990-01-01'),(7,'https://iili.io/d5DJhYJ.webp','argento@gula.com','0','Benito Juarez','1990-12-12'),(8,'default-profile_gula.jpg','perez@gula.com','0','Lomas del Toor','1989-03-13');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,'Jooks cerveceria','Benito Juarez','2281303030','jookscerveceria','jooks.jpg','2024-07-02 18:36:52',1),(2,'Lo de chairo','Benito Juarez','2281404040','lodechairo','chairo.jpg','2024-07-02 18:36:52',2),(3,'Palelo buffet','Benito Juarez','2281505050','palelobuffet','palelo.jpg','2024-07-02 18:36:52',3),(4,'La paperia','Benito Juarez','2281505050','lapaperiabj','paperia.jpg','2024-07-02 18:36:52',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'tomascardenas@gmail.com','Tomas Cardenas','$2a$10$Bw8A9aoAx3HBDkNSNVfsDuwuPaNaFA8z0l7GlfbxAjbA0kwLp04u6','2024-07-02 18:35:33',1,1),(2,'gastonfauret@gmail.com','Gaston Fauret','$2a$10$kYG7xxK7bx09FSZ3D9q92um1gKEITyIOEvD7R9.yxTHduvOi9X5oW','2024-07-02 18:35:59',2,2),(3,'adriancalo@gmail.com','Adrian Calo','$2a$10$WKCZEhlc83f4aHwqmQ91qOaX9pgWM6pKiRuKypdYfXjSu3nM5IKxa','2024-07-02 18:36:25',3,3),(4,'marcelo@gmail.com','Marcelo Bettini','$2a$10$ANUJKRJZSIB0hkFNCoxboeOtC88jwCc.cFYI/WvJ9W7ZghFNfJV1S','2024-07-05 21:12:07',4,4),(5,'juanbenitez@gmail.com','Juan Benitez','$2a$10$cA2meCVR8rp36ZrNwjAS0.rCP4I9xwkGeA5CnR0mqPTFlxQSlWkWG','2024-07-23 14:28:53',5,5),(6,'paulwalker@gmail.com','Paul Walker','$2a$10$5i24zwtFp.jlJ03rtwGac.03iQFFOoJ.6kMnpvEkZUqIzuoomZ82u','2024-07-23 14:30:58',6,6),(7,'argento@gula.com','Pepe Argento','$2a$10$sjTIiOVfMdeDS6Z85kjtoOen2iXQxlvgv7ZLLQEc2NXBAn63kFmja','2024-08-09 14:59:53',7,7),(8,'perez@gula.com','Juan Perez','$2a$10$fLI2Q4PRvpdyZXw12l6RVuwqu/OjXmTAFBnKzAA4ro8ii2tcu9p/.','2024-08-09 15:02:06',8,8);
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

-- Dump completed on 2024-08-09 21:14:15
