/* Replace with your SQL commands */
/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MariaDB
 Source Server Version : 100136
 Source Host           : localhost:3306
 Source Schema         : infordas_pos

 Target Server Type    : MariaDB
 Target Server Version : 100136
 File Encoding         : 65001

 Date: 04/01/2020 19:03:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for access
-- ----------------------------
DROP TABLE IF EXISTS `access`;
CREATE TABLE `access`  (
  `Emp_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Token` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  `Start_Time` int(11) NOT NULL,
  `End_Time` int(11) NOT NULL,
  PRIMARY KEY (`Emp_ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Emp_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Name` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Contact` varchar(44) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Username` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Rank_ID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for branch
-- ----------------------------
DROP TABLE IF EXISTS `branch`;
CREATE TABLE `branch`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Branch_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Emp_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Comp_ID` varchar(11) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Location` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Address` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Contact` varchar(14) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Email` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Website` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Emp_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  `Location` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Address` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Contact` varchar(14) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Email` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Website` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Cus_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Contact` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `PrevDue` double(10, 2) NULL DEFAULT NULL,
  `Created_At` datetime(0) NULL DEFAULT NULL,
  `Modified_At` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Emp_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `SSN_ID` varchar(20) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Name` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Address` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Residence` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Contact` varchar(15) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Email` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Hours` decimal(11, 1) NULL DEFAULT NULL,
  `Gender` enum('Male','Female') CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Maritalstatus` enum('Single','Married','Other') CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL DEFAULT 'Single',
  `DOB` date NULL DEFAULT NULL,
  `Religion` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Image` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL,
  `Department` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Division` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Position` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Category` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `SalaryLevel` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `UserGroup` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Currency` varchar(20) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Bank` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `AccountNo` varchar(25) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `SalaryStep` varchar(40) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Rate` float NOT NULL,
  `RateType` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `LastRate` float NOT NULL,
  `MonthlyRate` float NOT NULL,
  `BeginDate` date NULL DEFAULT NULL,
  `EndDate` date NULL DEFAULT NULL,
  `LastEmpDate` date NULL DEFAULT NULL,
  `ApplySSN` int(3) NOT NULL,
  `ApplyTax` int(3) NOT NULL,
  `ApplyPF` int(3) NOT NULL,
  `Status` enum('Active','InActive') CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL DEFAULT 'InActive',
  `SpouseName` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Children` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `ChildrenDOB` date NULL DEFAULT NULL,
  `NextOfKin` varchar(70) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `HomeTown` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Guarantor` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `ReferedBy` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Relation` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Region` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `DivisionEmp` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `PersonalTrade` varchar(50) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Prod_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Buy_Price` decimal(10, 2) UNSIGNED NULL DEFAULT NULL,
  `Retail_Price` decimal(10, 2) UNSIGNED NULL DEFAULT NULL,
  `Stock` int(11) UNSIGNED NULL DEFAULT NULL,
  `Unit` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Barcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Category_ID` int(11) NULL DEFAULT NULL,
  `Brand_ID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for purchase
-- ----------------------------
DROP TABLE IF EXISTS `purchase`;
CREATE TABLE `purchase`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Prod_ID` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Invoice_No` int(11) NULL DEFAULT NULL,
  `Supplier_Name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Emp_ID` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '',
  `Buy_Price` decimal(10, 2) NULL DEFAULT NULL,
  `Retail_Price` decimal(10, 2) NULL DEFAULT NULL,
  `Barcode` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Stock` int(11) NULL DEFAULT NULL,
  `purchaseDate` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for rank
-- ----------------------------
DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Position` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Sup_ID` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Contact` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `PrevDue` double(10, 2) NULL DEFAULT NULL,
  `Address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Created_At` datetime(0) NULL DEFAULT NULL,
  `Modified_At` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Emp_ID` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Name` varchar(100) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Contact` varchar(44) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Username` varchar(30) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `Rank_ID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
