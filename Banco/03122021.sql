-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: servicolitoral
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `anunciantes`
--

DROP TABLE IF EXISTS `anunciantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anunciantes` (
  `id_anunciantes` int NOT NULL AUTO_INCREMENT,
  `an_nome` varchar(45) NOT NULL,
  `an_senha` varchar(16) NOT NULL,
  `an_usuario` varchar(16) NOT NULL,
  `an_cnpj` varchar(14) NOT NULL,
  `an_pagto` int NOT NULL,
  `an_vencimento` date NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'A' COMMENT 'A = Ativo I=Inativo',
  PRIMARY KEY (`id_anunciantes`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anunciantes`
--

LOCK TABLES `anunciantes` WRITE;
/*!40000 ALTER TABLE `anunciantes` DISABLE KEYS */;
INSERT INTO `anunciantes` VALUES (1,'TESTE','123456','TESTE','39282179000152',15,'2022-05-15','A'),(2,'ale','123456','ale','13607822816',15,'2022-05-15','A');
/*!40000 ALTER TABLE `anunciantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bairros`
--

DROP TABLE IF EXISTS `bairros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bairros` (
  `id_bairro` int NOT NULL AUTO_INCREMENT,
  `ba_descricao` varchar(45) NOT NULL,
  `ba_cidade` int NOT NULL,
  PRIMARY KEY (`id_bairro`)
) ENGINE=InnoDB AUTO_INCREMENT=403 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bairros`
--

LOCK TABLES `bairros` WRITE;
/*!40000 ALTER TABLE `bairros` DISABLE KEYS */;
INSERT INTO `bairros` VALUES (69,'Boraceia',2),(70,'Jureia',2),(71,'Engenho',2),(72,'Barra do Una',2),(73,'Juquehy',2),(74,'Barra do Sahy',2),(75,'Baleia',2),(76,'Cambury',2),(77,'Boiçucanga',2),(78,'Maresias',2),(79,'Paúba',2),(80,'Santiago',2),(81,'Toque Toque Pequeno',2),(82,'Guaecá',2),(83,'Barequeçaba',2),(84,'Pitangueiras',2),(85,'Varadouro',2),(86,'Olaria',2),(87,'Itatinga',2),(88,'Topolândia',2),(89,'Centro',2),(90,'Vila Amélia',2),(91,'Porto Grande',2),(92,'Praia Deserta',2),(93,'Reserva du Moulin',2),(94,'Arrastão',2),(95,'Portal da Olaria',2),(96,'São Francisco',2),(97,'Morro do Abrigo',2),(98,'Cigarras',2),(99,'Enseada',2),(100,'Jaraguá',2),(101,'Canto do Mar',2),(102,'Toque Toque Grande',2),(103,'Pontal da Cruz',2),(104,'Copacabana',3),(105,'Golfinhos',3),(106,'Garden Mar',3),(107,'Recanto do Sol',3),(108,'Barranco Alto',3),(109,'Benfica',3),(110,'Capricórnio II',3),(111,'Capricórnio III',3),(112,'Caputera',3),(113,'Casa Branca',3),(114,'Centro',3),(115,'Chácara Colônias',3),(116,'Cidade Jardim',3),(117,'Costa Tabatinga',3),(118,'Costa Verde Mococa',3),(119,'Costa Verde Tabatinga',3),(120,'Estância Balneária Havai',3),(121,'Fazenda Getuba',3),(122,'Fazenda Jaraguá',3),(123,'Fazenda Recanto Ana',3),(124,'Fazenda Rio Claro',3),(125,'Getuba',3),(126,'Indaiá',3),(127,'Ipiranga',3),(128,'Jaraguá',3),(129,'Jaraguá Pereque',3),(130,'Jaraguazinho',3),(131,'Jardim Aruan',3),(132,'Jardim Bandeirantes',3),(133,'Jardim Britânia',3),(134,'Jardim C Sindicatos',3),(135,'Jardim California',3),(136,'Capricôrnio',3),(137,'Gaivotas',3),(138,'Gaivotas II',3),(139,'Gaivotas III',3),(140,'Jardim do Sol',3),(141,'Flexeiras',3),(142,'Forest',3),(143,'Horto',3),(144,'Itamar',3),(145,'Itaúna',3),(146,'Jaqueira',3),(147,'Jorge Mar',3),(148,'Mariela',3),(149,'Miramar',3),(150,'Olaria',3),(151,'Jardim Palmeiras',3),(152,'Pamazo',3),(153,'Ponte Seca',3),(154,'Porto Novo',3),(155,'Primavera',3),(156,'Progresso',3),(157,'Recanto',3),(158,'Rio Santos',3),(159,'Samambaia',3),(160,'Santa Rosa',3),(161,'São Francisco',3),(162,'Saveiro',3),(163,'Taruma',3),(164,'Bosque dos Guanandis',3),(165,'Estância Mirante',3),(166,'Ibisco',3),(167,'Luiz Marques',3),(168,'Morada do Mar',3),(169,'Recreio Juqueriquere',3),(170,'Nova Caragua I',3),(171,'Nova Caragua II',3),(172,'Rio Marinas',3),(173,'Sato',3),(174,'Villagio Verde Mare',3),(175,'Mar Verde',3),(176,'Mar Verde II',3),(177,'Martim de Sá',3),(178,'Massaguaçu',3),(179,'Morro do Algodão',3),(180,'Morro Querozene',3),(181,'Olaria',3),(182,'BAlneário Maria Helena',3),(183,'Pq Imperial',3),(184,'Pegorelli',3),(185,'Pereque Mirim',3),(186,'Poiares',3),(187,'Pontal de Santa Marina',3),(188,'Pontal Santamar',3),(189,'Pontal do Patrimonium',3),(190,'Portal do Tabatinga',3),(191,'Portal Fazendinha',3),(192,'Rio do Ouro',3),(193,'Praia das Palmeiras',3),(194,'Santo Antonio',3),(195,'Sumaré',3),(196,'Tinga',3),(197,'Travessão',3),(198,'Vila Marcondes',3),(199,'Vila NS Aparecida',3),(200,'Portal das Flores',3),(201,'Acaraú',4),(202,'Aldeia do Prumirim',4),(203,'Alfredo Petercem',4),(204,'Almada',4),(205,'Arariba',4),(206,'Ipiranguinha',4),(207,'Maranduba',4),(208,'Santa Cruz',4),(209,'Barra da Lagoa',4),(210,'Boa Esperança',4),(211,'Canto Toninhas',4),(212,'Casanga',4),(213,'Centro',4),(214,'Chácara Anagros',4),(215,'Cidade Regina',4),(216,'Cond Res Pq Hipódromo',4),(217,'Corcovado',4),(218,'Cracóvia',4),(219,'Domingas Dias',4),(220,'Enseada',4),(221,'Estufa',4),(222,'Estufa II',4),(223,'Figueira',4),(224,'Gurilândia Caiçara',4),(225,'Horto',4),(226,'Ilha Anchieta',4),(227,'Indaiá',4),(228,'Ipiranguinha',4),(229,'Itagua',4),(230,'Itamambuca',4),(231,'Jardim Alice',4),(232,'Jardim Anchieta',4),(233,'Jardim Athanazio',4),(234,'Jardim Beira Rio',4),(235,'Jardim Beira Mar',4),(236,'Jardim Bela Veneza',4),(237,'Jardim Boa Esperança',4),(238,'Jardim Caiçara',4),(239,'Jardim Carolina',4),(240,'Jardim Costa Azul',4),(241,'Jardim da Ribeira',4),(242,'Jardim Enseada',4),(243,'Jardim Espacial',4),(244,'Jardim Iperoig',4),(245,'Jardim Itaipava',4),(246,'Jardim Itaporã',4),(247,'Jardim Itapoã',4),(248,'Jardim Lidia',4),(249,'Jardim Luamar',4),(250,'Jardim Marialva',4),(251,'Marina Porto Fino',4),(252,'Jardim Marisol',4),(253,'Jardim Nova Ubatuba',4),(254,'Jardim Orestalina',4),(255,'Jardim Paraiso',4),(256,'Jardim Paula Nobreu',4),(257,'Jardim Pedra Verde',4),(258,'Jardim Pedreira',4),(259,'Jardim Petrópolis',4),(260,'Jardim Poço Toninhas',4),(261,'Jardim Ponta Toninha',4),(262,'Praia do Sol',4),(263,'Jardim Ressaca',4),(264,'Jardim Ribeira',4),(265,'Jardim Samambaia',4),(266,'Jardim Santa Cruz',4),(267,'Jardim Santa Luiza',4),(268,'Jardim Santa Luzia',4),(269,'Jardim Tropical',4),(270,'Jardim Ubatuba',4),(271,'Jardim Umuarama',4),(272,'Jardim Vera Mar',4),(273,'Lagoinha',4),(274,'Lagoinha II',4),(275,'Lambert',4),(276,'Lázaro',4),(277,'Marafunda',4),(278,'Maranduba',4),(279,'Maranduba Sape',4),(280,'Mato Dentro',4),(281,'Monte Valério',4),(282,'Morada Lagoinha',4),(283,'Morro Moças',4),(284,'Marina Porto Fino',4),(285,'Parque Paris',4),(286,'Coqueiro',4),(287,'Parque Tabatinga',4),(288,'Parque Toninhas',4),(289,'Pedra Verde',4),(290,'Pedra Verde Lázaro',4),(291,'Pedreira',4),(292,'Santa Rita',4),(293,'Perequê Açu',4),(294,'Perequê Mirim',4),(295,'Picinguaba',4),(296,'Poço Fundo',4),(297,'Poço Lazaro',4),(298,'Poço Mirim',4),(299,'Ponta das Toninhas',4),(300,'Pontão Grossa',4),(301,'Portal Praia Dura',4),(302,'Poruba',4),(303,'Praia Almada',4),(304,'Praia Barra Seca',4),(305,'Praia Brava',4),(306,'Praia da Caçandoca',4),(307,'Praia da Fortaleza',4),(308,'Praia da Lagoinha',4),(309,'Praia do Félix',4),(310,'Praia do Sape',4),(311,'Praia do Tenório',4),(312,'Praia do Ubatumirim',4),(313,'Praia Grande',4),(314,'Praia Lagoinha',4),(315,'Praia saco Ribeira',4),(316,'Praia soninha',4),(317,'Praia Vermelha',4),(318,'Praia Vermelha Sul',4),(319,'Prainha',4),(320,'Promirim',4),(321,'Recanto Lagoinha',4),(322,'Recreio Alvorada',4),(323,'Parque Vivamar',4),(324,'Ribeira',4),(325,'Rio Escuro',4),(326,'Saco do Ribeira',4),(327,'Sertão da Quina',4),(328,'Sertão Sesmaria',4),(329,'Sertão Souzas',4),(330,'Silop',4),(331,'Sitio Santa Etelvina',4),(332,'Sumidouro',4),(333,'Taquaral',4),(334,'Umuarama',4),(335,'Vale do Sol',4),(336,'Vera Mar',4),(337,'Vila Esmeralda',4),(338,'Vila Formosa',4),(339,'Vila Mariana',4),(340,'Vila Mariana Teixeira',4),(341,'Vila Picinguaba',4),(342,'Vila União',4),(343,'Água Branca',1),(344,'Armação',1),(345,'Ponta Azeda',1),(346,'Reino',1),(347,'Barra Velha',1),(348,'Bexiga',1),(349,'Bonete',1),(350,'Centro',1),(351,'Cocaia',1),(352,'Ilha Sul',1),(353,'Costa Bela',1),(354,'Costa Bela II',1),(355,'Curral',1),(356,'Ilhote',1),(357,'Engenho D`água',1),(358,'Feiticeira',1),(359,'Green Park',1),(360,'Ilha das Cabras',1),(361,'Itaguaçu',1),(362,'Itaquanduba',1),(363,'Jabaquara',1),(364,'Jardim Arco Ìris',1),(365,'Jardim Coqueiros',1),(366,'Jardim Éden',1),(367,'Jardim Siriuba',1),(368,'Fazenda do Matias',1),(369,'Fazenda Engenho',1),(370,'Mirante Ilha',1),(371,'Morro Cantagalo',1),(372,'Morro Castelo',1),(373,'Morro Fazenda',1),(374,'Morro Resfriado',1),(375,'Pequea',1),(376,'Perequê',1),(377,'Piuva',1),(378,'Ponta Azeda',1),(379,'Ponta das Canas',1),(380,'Portinho',1),(381,'Itacuanduba',1),(382,'Praia Feia',1),(383,'Praia Figueira',1),(384,'Praia Grande',1),(385,'Praia Julião',1),(386,'Praia Portinho',1),(387,'Praia Saco Capela',1),(388,'Praia Saco Indaiá',1),(389,'Praia Veloso',1),(390,'Reino',1),(391,'São Pedro',1),(392,'Servidão Anil',1),(393,'Simão',1),(394,'Siriuba',1),(395,'Siriuba II',1),(396,'Taubaté',1),(397,'Viana',1),(398,'Vila Cabarau',1),(399,'Sertãozinho',2),(400,'Boraceia II',2),(401,'Figueira',2),(402,'Praia Preta',2);
/*!40000 ALTER TABLE `bairros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `cat_descricao` varchar(45) NOT NULL,
  `cat_image` varchar(45) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Pedreiro','1'),(2,'Beleza e Saúde','2'),(3,'Mecânica','3'),(4,'Mergulho','4'),(5,'Lava Rapido','5'),(6,'Eletricista','6'),(10,'Pedreiro2','7'),(11,'Beleza 2','8'),(12,'Mecânica 2','9'),(13,'Mergulho 2','10'),(14,'Lava 2','11'),(15,'Eletricista 2','12');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidades`
--

DROP TABLE IF EXISTS `cidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidades` (
  `id_cidade` int NOT NULL AUTO_INCREMENT,
  `cid_descricao` varchar(45) NOT NULL,
  PRIMARY KEY (`id_cidade`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidades`
--

LOCK TABLES `cidades` WRITE;
/*!40000 ALTER TABLE `cidades` DISABLE KEYS */;
INSERT INTO `cidades` VALUES (1,'IlhaBela'),(2,'São Sebastião'),(3,'Caraguatatuba'),(4,'Ubatuba');
/*!40000 ALTER TABLE `cidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestadores`
--

DROP TABLE IF EXISTS `prestadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestadores` (
  `id_prestador` int NOT NULL AUTO_INCREMENT,
  `pr_usuario` varchar(8) NOT NULL,
  `pr_senha` varchar(100) NOT NULL,
  `pr_bairro` int NOT NULL COMMENT 'id do bairro na tabela bairros',
  `pr_cidade` int NOT NULL COMMENT 'id da cidade na tabela cidades',
  `pr_telefone` varchar(11) NOT NULL,
  `pr_nome` varchar(50) NOT NULL,
  `pr_cpf` varchar(14) NOT NULL,
  `pr_categoria` int NOT NULL,
  `pr_descricao` varchar(400) NOT NULL,
  `pr_email` varchar(45) NOT NULL,
  PRIMARY KEY (`id_prestador`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestadores`
--

LOCK TABLES `prestadores` WRITE;
/*!40000 ALTER TABLE `prestadores` DISABLE KEYS */;
INSERT INTO `prestadores` VALUES (1,'Aleprans','21232f297a57a5a743894a0e4a801fc3',87,2,'12991879562','ADMINISTRADOR','16876434826',1,'alexscvzsxvzsxvzxcvsdfgsdfgsdfgsdfg','ale@ale.com'),(2,'Aleprans','21232f297a57a5a743894a0e4a801fc3',87,2,'12991879562','ADMINISTRADOR','16876434826',1,'alexscvzsxvzsxvzxcvsdfgsdfgsdfgsdfg','ale@ale.com'),(3,'Aleprans','e10adc3949ba59abbe56e057f20f883e',87,2,'12991879562','ADMINISTRADOR','16876434826',1,'alexscvzsxvzsxvzxcvsdfgsdfgsdfgsdfg','ale@ale.com'),(4,'Aleprans','e10adc3949ba59abbe56e057f20f883e',87,2,'12991879562','ADMINISTRADOR','16876434826',1,'alexscvzsxvzsxvzxcvsdfgsdfgsdfgsdfg','ale@ale.com'),(12,'Aleprans','e10adc3949ba59abbe56e057f20f883e',87,2,'12991879562','ADMINISTRADOR','16876434826',1,'alexscvzsxvzsxvzxcvsdfgsdfgsdfgsdfg','ale@ale.com'),(13,'Aleprans','d41d8cd98f00b204e9800998ecf8427e',87,2,'12991879562','ADMINISTRADOR','16876434826',1,'alexscvzsxvzsxvzxcvsdfgsdfgsdfgsdfg','ale@ale.com');
/*!40000 ALTER TABLE `prestadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'servicolitoral'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-03 19:47:14
