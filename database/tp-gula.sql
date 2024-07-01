-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tp-gula
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Milanesas'),(2,'Pizzas'),(3,'Pastas'),(4,'Verduras'),(5,'Hamburguesas'),(6,'Asado'),(7,'Empanadas'),(8,'Pescados'),(9,'Pollo'),(10,'Papas Fritas');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'Filete de Merluza con Pure',3500,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',1,8,'Filete de Merluza con Pure de Papas'),(3,'Pollo al Verdeo con Papas Españolas',5000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',1,9,'Pollo al Verdeo con Papas Españolas'),(4,'Tarta de Verdura',5000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',2,4,'Tarta de Espinaca.'),(5,'Tarta de Pollo',6000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',2,9,'Tarta de Pollo y Queso.'),(6,'Ensalada Cesar',3000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',2,9,'Ensalada Cesar con Pollo y Queso Parmesano.'),(7,'Pizza Napolitana',4500,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',3,2,'Pizza Napolitana.'),(8,'Pizza 4 Quesos',5000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',3,2,'Pizza de mozzarella, gorgonzola, parmesano y fontina.'),(9,'Pizza de Roquefort',5500,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',3,2,'Pizza con Queso Roquefort.'),(10,'Hamburguesa Completa',4000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',4,5,'Hamburguesa de Carne, Tomate, Lechuga, Jamon y Queso.'),(11,'Hamburguesa Simple',3500,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',4,5,'Hamburguesa de Carne, Jamon y Queso.'),(12,'Hamburguesa Vegetariana',4000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',4,5,'Medallon de Lenteja con Rucula y Queso.'),(13,'Papas con Cheddar',2500,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',5,10,'Papas Fritas con Cheddar.'),(14,'Papas con Verdeo',3000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',5,10,'Papas con Verdeo.'),(15,'Papas con Panceta',3000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',5,10,'Papas con Panceta.'),(16,'Ravioles de Verdura con Salsa',6000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',6,3,'Ravioles de Verdura con Salsa a Eleccion.'),(17,'Empanadas de Carner Cortada.',8000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',6,7,'Empanadas de Carne Cortada.'),(18,'Porcion de Asado',12000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',6,6,'Porcion de Asado para Dos.'),(19,'Milanesas Simple con papas fritas',4500,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',1,1,'Milanesas Simple con papas fritas'),(20,'Milanesa Napolitana con Pure',7000,10,'https://img.freepik.com/vector-gratis/deliciosa-comida-rapida-estilo-pop-art_24908-61615.jpg?size=338&ext=jpg&ga=GA1.1.117944100.1709856000&semt=ais',1,1,'Milanesa Napolitana con Pure');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `food_on_cart`
--

LOCK TABLES `food_on_cart` WRITE;
/*!40000 ALTER TABLE `food_on_cart` DISABLE KEYS */;
INSERT INTO `food_on_cart` VALUES (1,1,9,20),(2,1,9,6);
/*!40000 ALTER TABLE `food_on_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'default-profile_gula.jpg','perez@gula.com','0','Lomas del Toor','17/02/1980'),(2,'default-profile_gula.jpg','gonzales@gula.com','0','Loma del Toor','17/10/1999'),(3,'default-profile_gula.jpg','garcia@gula.com','0','Tedin Uribiru','12/12/1980'),(4,'default-profile_gula.jpg','peralta@gula.com','0','Benito Juarez','2000/12/12'),(5,'default-profile_gula.jpg','pereyra@gula.com','0','Benito Juarez','12-03-2000'),(6,'default-profile_gula.jpg','cperez@gula.com','0','Tedin Uriburu','31/05/2000'),(7,'default-profile_gula.jpg','cardorna@gula.com','0','Estacion Lopez','12/02/1988'),(8,'default-profile_gula.jpg','benedetto@gula.com','0','Estacion Lopez','12/12/1988'),(9,'default-profile_gula.jpg','herrera@gula.com','0','Tedin Uriburu','09/12/1990'),(10,'default-profile_gula.jpg','marciello@gula.com','0','Barker','17/03/1980'),(11,'default-profile_gula.jpg','cadorna@gula.com','0','Estacion Lopez','25/07/1990');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,'Rotiseria Pablo','Benito Juarez','02281111111','Rotiseria Pablo','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:27:23',1),(2,'Lo de Chairo','Benito Juarez','02281222222','Rotiseria Lo de Chairo','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:28:38',2),(3,'Aka Pizzas','Benito Juarez','02281333333','Pizzeria Aka Pizzas','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:29:22',3),(4,'Jooks','Benito Juarez','02281444444','Cerveceria Jooks','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:30:12',4),(5,'La Paperia','Benito Juarez','02281555555','La Paperia','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:30:41',5),(6,'Sabores Al Paso','Benito Juarez','02281666666','Sabores Al Paso','https://pubimg.band.uol.com.br/files/cb1fe227a30b77daa9cb.webp','2024-06-09 16:31:15',6);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2024-07-01  0:37:07
