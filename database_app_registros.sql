/*
 Navicat Premium Data Transfer

 Source Server         : 80mysql
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : database_app

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 25/06/2022 17:51:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for autos
-- ----------------------------
DROP TABLE IF EXISTS `autos`;
CREATE TABLE `autos`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `marca` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `modelo` int NOT NULL,
  `precio` float(10, 2) NOT NULL,
  `createdAt` date NULL DEFAULT NULL,
  `updatedAt` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of autos
-- ----------------------------
INSERT INTO `autos` VALUES (1, 'X6', 'BMW', 2018, 990000.00, NULL, '2022-06-25');
INSERT INTO `autos` VALUES (2, 'NP300', 'Nissan', 2018, 280000.00, NULL, NULL);
INSERT INTO `autos` VALUES (3, 'F150', 'Ford', 2022, 650000.00, NULL, NULL);
INSERT INTO `autos` VALUES (5, 'Sonic', 'Chevrolet', 2015, 150000.00, '2022-06-21', '2022-06-25');
INSERT INTO `autos` VALUES (7, 'NSX', 'Honda', 2022, 1000000.00, NULL, NULL);
INSERT INTO `autos` VALUES (8, 'Niro', 'Kia', 2023, 2000000.00, NULL, NULL);
INSERT INTO `autos` VALUES (9, 'Prius', 'Toyota', 2020, 900000.00, NULL, NULL);
INSERT INTO `autos` VALUES (10, 'HR-V', 'Honda', 2017, 700999.00, NULL, NULL);
INSERT INTO `autos` VALUES (14, 'Tsuru', 'Nissan', 2010, 40399.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (15, 'Camaro', 'GT', 2020, 1990000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (16, 'Lincon', 'GMT', 2011, 123000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (17, 'Sedan', 'Mazda', 2019, 400999.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (18, 'MG', 'GT', 2014, 299999.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (19, 'NX', 'Lexur', 2000, 90000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (20, 'RB', 'Ford', 2020, 123000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (21, 'LM9', 'Audi', 2009, 321000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (22, 'Mao', 'Mercedes-Benz', 2008, 209000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (23, 'Targa 4', 'Porsche', 1999, 999000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (24, 'Turbo  S PDK', 'Porsche', 2022, 1900999.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (25, 'Turbo PDK', 'Porsche', 2018, 765000.00, '2022-06-25', '2022-06-25');
INSERT INTO `autos` VALUES (26, 'PB8', 'Chrysler', 2007, 890000.00, '2022-06-25', '2022-06-25');

SET FOREIGN_KEY_CHECKS = 1;
