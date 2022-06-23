/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : database_app

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 22/06/2022 19:34:29
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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of autos
-- ----------------------------
INSERT INTO `autos` VALUES (1, 'X6', 'BMW', 2010, 350000.00, NULL, NULL);
INSERT INTO `autos` VALUES (2, 'NP300', 'Nissan', 2018, 280000.00, NULL, NULL);
INSERT INTO `autos` VALUES (3, 'F150', 'Ford', 2022, 650000.00, NULL, NULL);
INSERT INTO `autos` VALUES (5, 'Sonic', 'Chevrolet', 2015, 150000.00, '2022-06-21', '2022-06-21');

SET FOREIGN_KEY_CHECKS = 1;
