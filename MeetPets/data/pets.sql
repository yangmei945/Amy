-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-06 03:41:15
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `pets`
--
CREATE DATABASE IF NOT EXISTS `pets` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pets`;

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--
-- 创建时间： 2017-05-06 01:38:53
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `username` varchar(20) NOT NULL COMMENT '管理员用户名',
  `password` varchar(20) NOT NULL COMMENT '管理员密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='管理员表' AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, '000', '000'),
(2, '111', '111');

-- --------------------------------------------------------

--
-- 表的结构 `dogs`
--
-- 创建时间： 2017-05-06 01:38:55
--

DROP TABLE IF EXISTS `dogs`;
CREATE TABLE IF NOT EXISTS `dogs` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `photo` text NOT NULL,
  `description` longtext NOT NULL,
  `somatotype` varchar(20) NOT NULL COMMENT '体型',
  `hits` bigint(255) NOT NULL DEFAULT '0' COMMENT '点击量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `dogs`
--

INSERT INTO `dogs` (`id`, `name`, `photo`, `description`, `somatotype`, `hits`) VALUES
(3, '哈士奇', '20131221194416.gif', '哈士奇哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', 'big', 0),
(4, '牧羊犬', '2f5c12f4859eca3d139a52ecffa79bd2.jpg', '牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬牧羊犬', 'big', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
