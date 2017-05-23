-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-23 16:34:03
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

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

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

CREATE TABLE IF NOT EXISTS `dogs` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `photo` text NOT NULL,
  `description` longtext NOT NULL,
  `somatotype` varchar(20) NOT NULL COMMENT '体型',
  `hits` bigint(255) NOT NULL DEFAULT '0' COMMENT '点击量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `dogs`
--

INSERT INTO `dogs` (`id`, `name`, `photo`, `description`, `somatotype`, `hits`) VALUES
(7, '1', '149494984919389.jpg', '111111111', 'small', 0),
(8, '2', '149494533121625.jpg', '2222222222222222', 'middle', 0),
(9, '3', '149494533121625.jpg', '3333333333333333333333333333', 'big', 0),
(10, '4', '149494533121625.jpg', '4444444444444444444444444', 'small', 0),
(11, '5', '149494533121625.jpg', '55555555555555555555555555', 'middle', 0),
(12, '6', '149494533121625.jpg', '6666666666666666666', 'big', 0),
(13, '7', '149494533121625.jpg', '77777777777777777777777', 'small', 0),
(14, '8', '149494533121625.jpg', '888888888888888888888', 'middle', 0),
(15, '9', '149494533121625.jpg', '9999999999999999999', 'big', 0),
(16, '10', '14949484111470.jpg', '10101001010101001100110100101010100101010010110010100111111111111111111111111111111111111000000000000000001111111111111010000000000000011111111111010101010101001010101001010010001010010100110010100100101', 'small', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
